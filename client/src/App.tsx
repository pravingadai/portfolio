import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StoreProvider } from "@/lib/store";
import { useEffect } from "react";

// Custom cursor tracker
function CursorTracker() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    window.addEventListener('mousemove', updateCursor);
    
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
    };
  }, []);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <StoreProvider>
          <CursorTracker />
          <Router />
          <Toaster />
        </StoreProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
