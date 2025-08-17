// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Ads conversion tracking
export const initGoogleAds = () => {
  const conversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID;

  if (!conversionId) {
    console.warn('Google Ads Conversion ID not provided');
    return;
  }

  // Add Google Ads script to the head
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
  document.head.appendChild(script);

  // Initialize gtag for Google Ads
  const configScript = document.createElement('script');
  configScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${conversionId}');
  `;
  document.head.appendChild(configScript);
};

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track affiliate link clicks for Google Ads conversion tracking
export const trackAffiliateConversion = (productName: string, productPrice?: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const conversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;
  
  if (!conversionId || !conversionLabel) {
    console.warn('Google Ads conversion tracking not configured');
    return;
  }

  // Track the conversion event
  window.gtag('event', 'conversion', {
    'send_to': `${conversionId}/${conversionLabel}`,
    'value': productPrice ? productPrice / 100 : 1.0, // Convert from cents to dollars
    'currency': 'USD',
    'event_category': 'affiliate_click',
    'event_label': productName,
    'custom_parameters': {
      'product_name': productName
    }
  });

  // Also track as a regular event for Google Analytics
  trackEvent('affiliate_click', 'ecommerce', productName, productPrice);
};