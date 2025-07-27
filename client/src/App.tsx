import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA, initGoogleAds } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

import Home from "@/pages/home";
import Product from "@/pages/product";
import Products from "@/pages/products";
import Reviews from "@/pages/reviews";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/about" component={About} />
      <Route path="/product/:slug" component={Product} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics and Google Ads when app loads
  useEffect(() => {
    // Initialize Google Analytics
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }

    // Initialize Google Ads conversion tracking
    if (!import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID || !import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL) {
      console.warn('Google Ads conversion tracking not configured. Add VITE_GOOGLE_ADS_CONVERSION_ID and VITE_GOOGLE_ADS_CONVERSION_LABEL to enable tracking.');
    } else {
      initGoogleAds();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
