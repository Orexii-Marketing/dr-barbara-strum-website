import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(priceInCents: number): string {
  return `$${(priceInCents / 100).toFixed(2)}`
}

export function formatPriceRange(minPrice: number, maxPrice: number): string {
  return `$${(minPrice / 100).toFixed(0)} - $${(maxPrice / 100).toFixed(0)}`
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function addAffiliateTag(amazonUrl: string): string {
  const affiliateTag = import.meta.env.VITE_AMAZON_AFFILIATE_TAG || "orexii10b-20";
  
  if (amazonUrl.includes('tag=')) {
    return amazonUrl;
  }
  
  const separator = amazonUrl.includes('?') ? '&' : '?';
  return `${amazonUrl}${separator}tag=${affiliateTag}`;
}

export function trackAffiliateClick(productName: string, amazonUrl: string, productPrice?: number) {
  // Import and use Google Ads conversion tracking
  import('./analytics').then(({ trackAffiliateConversion }) => {
    trackAffiliateConversion(productName, productPrice);
  });

  // Track in HubSpot CRM
  import('./hubspot').then(({ trackAffiliateClick: trackHubSpotClick }) => {
    trackHubSpotClick(productName, amazonUrl, productPrice);
  });

  // Track affiliate link clicks for analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'affiliate',
      event_label: productName,
      value: amazonUrl
    });
  }
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
