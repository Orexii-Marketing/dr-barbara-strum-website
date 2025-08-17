import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  ogType = "website",
  keywords,
  noindex = false
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Remove existing meta tags that we'll be replacing
    const existingTags = document.querySelectorAll(
      'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name="twitter:"], meta[name="robots"], link[rel="canonical"]'
    );
    existingTags.forEach(tag => tag.remove());

    // Create and append new meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'robots', content: noindex ? 'noindex,nofollow' : 'index,follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: window.location.href },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ];

    if (keywords) {
      metaTags.push({ name: 'keywords', content: keywords });
    }

    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    // Add canonical URL if provided
    if (canonical) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonical);
      document.head.appendChild(link);
    }

    // Add structured data for products
    if (ogType === 'product') {
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": title,
        "description": description,
        "image": ogImage,
        "brand": {
          "@type": "Brand",
          "name": "Dr. Barbara Sturm"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "500+"
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, ogType, keywords, noindex]);

  return null;
}
