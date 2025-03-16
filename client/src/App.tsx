import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StoreProvider } from "@/lib/store";
import MobileMenu from "@/components/MobileMenu";
import { useEffect, useState } from "react";

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
    
    const handleMouseDown = () => {
      cursor.classList.add('cursor-clicked');
      setTimeout(() => cursor.classList.remove('cursor-clicked'), 300);
    };
    
    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    
    // Add hover effect for clickable elements
    const addHoverClass = () => {
      const clickableElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover');
        });
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover');
        });
      });
    };
    
    // Run initially and also whenever DOM changes
    addHoverClass();
    const observer = new MutationObserver(addHoverClass);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      observer.disconnect();
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
