import express, { type Request, Response, NextFunction } from "express";
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https://*"],
    }
  }
}));

// Rate limiting configuration
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiLimiter);

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, path } = req;
  let responseBody: unknown;

  const originalJson = res.json;
  res.json = function(body) {
    responseBody = body;
    return originalJson.call(this, body);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (path.startsWith('/api')) {
      const logMessage = `${method} ${path} ${res.statusCode} ${duration}ms`;
      const responsePreview = responseBody ? JSON.stringify(responseBody).slice(0, 120) : '';
      log(`${logMessage} - ${responsePreview}`);
    }
  });

  next();
});

// Server initialization
(async () => {
  try {
    const server = await registerRoutes(app);

    // Error handling middleware (should be last)
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
      const message = process.env.NODE_ENV === 'production' 
        ? 'Internal Server Error' 
        : err.message;

      res.status(statusCode).json({
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
      });

      console.error(`[${new Date().toISOString()}] ERROR:`, err);
    });

    // Vite setup
    if (process.env.NODE_ENV === 'development') {
      await setupVite(app, server);
    } else {
      // Pass the app instance to serveStatic function
      serveStatic(app);  // The function should apply middleware to the app itself
    }

    // Server configuration
    const port = parseInt(process.env.PORT || '3000', 10);
    const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';

    app.listen(port, host, () => {
      console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode`);
      console.log(`Listening on http://${host}:${port}`);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
})();