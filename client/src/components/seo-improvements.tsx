import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Product' | 'Organization' | 'WebSite';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData = {};
    
    switch (type) {
      case 'Product':
        structuredData = {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "image": data.images,
          "brand": {
            "@type": "Brand",
            "name": "Dr. Barbara Sturm"
          },
          "offers": {
            "@type": "Offer",
            "price": (data.price / 100).toFixed(2),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "ProductMatchPro"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data.rating,
            "reviewCount": data.reviewCount
          },
          "category": data.category
        };
        break;
        
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ProductMatchPro",
          "description": "Premium affiliate marketing for Dr. Barbara Sturm luxury skincare products",
          "url": "https://www.productmatchpro.com",
          "logo": "https://www.productmatchpro.com/favicon.svg",
          "sameAs": [
            "https://www.amazon.com/stores/Dr.+Barbara+Sturm/page/1234"
          ]
        };
        break;
        
      case 'WebSite':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ProductMatchPro - Dr. Barbara Sturm Skincare",
          "description": "Discover premium Dr. Barbara Sturm luxury skincare products with expert reviews and authentic purchasing guides",
          "url": "https://www.productmatchpro.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.productmatchpro.com/products?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };
        break;
    }
    
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);
  
  return null;
}

// Enhanced image component with optimized alt text
interface OptimizedImageProps {
  src: string;
  productName: string;
  category: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function OptimizedProductImage({ 
  src, 
  productName, 
  category, 
  className = "",
  loading = "lazy" 
}: OptimizedImageProps) {
  const optimizedAlt = `${productName} - Premium Dr. Barbara Sturm ${category.toLowerCase()} for luxury anti-aging skincare routine`;
  
  return (
    <img 
      src={src}
      alt={optimizedAlt}
      className={className}
      loading={loading}
      // Add structured data attributes for better SEO
      itemProp="image"
    />
  );
}