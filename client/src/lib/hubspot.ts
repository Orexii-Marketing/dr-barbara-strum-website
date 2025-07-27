// HubSpot tracking utilities for CRM integration
declare global {
  interface Window {
    hsConversationsAPI?: any;
    hbspt?: any;
    _hsq?: any[];
  }
}

export function trackHubSpotEvent(eventName: string, properties: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && window._hsq) {
    window._hsq.push(['trackEvent', {
      id: eventName,
      value: properties
    }]);
  }
}

export function trackProductView(productName: string, productPrice: number, category: string) {
  trackHubSpotEvent('product_view', {
    product_name: productName,
    product_price: productPrice,
    product_category: category,
    page_url: window.location.href
  });
}

export function trackAffiliateClick(productName: string, amazonUrl: string, productPrice?: number) {
  trackHubSpotEvent('affiliate_click', {
    product_name: productName,
    amazon_url: amazonUrl,
    product_price: productPrice,
    click_timestamp: new Date().toISOString()
  });
}

export function trackNewsletterSignup(email: string) {
  trackHubSpotEvent('newsletter_signup', {
    email: email,
    signup_source: 'website',
    page_url: window.location.href
  });
}

export function trackContactFormSubmission(name: string, email: string, message: string) {
  trackHubSpotEvent('contact_form_submission', {
    contact_name: name,
    contact_email: email,
    message_length: message.length,
    submission_source: 'website'
  });
}

export function setHubSpotContentType(contentType: 'landing-page' | 'product-page' | 'blog-post' | 'standard-page') {
  if (typeof window !== 'undefined' && window._hsq) {
    window._hsq.push(['setContentType', contentType]);
  }
}

// Initialize HubSpot tracking queue if not exists
if (typeof window !== 'undefined') {
  window._hsq = window._hsq || [];
}