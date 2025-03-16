import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // In a real app, you would send an email or store the contact message
      // Here we just return success for the demo
      
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending contact message:', error);
      return res.status(500).json({ message: 'Failed to send message' });
    }
  });
  
  // Endpoint to serve resume PDF
  app.get('/pravingadaicv.pdf', (req, res) => {
    const resumePath = path.resolve('attached_assets/pravingadaicv.pdf');
    
    // Check if the file exists
    if (fs.existsSync(resumePath)) {
      res.contentType('application/pdf');
      fs.createReadStream(resumePath).pipe(res);
    } else {
      res.status(404).json({ message: 'Resume file not found' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
