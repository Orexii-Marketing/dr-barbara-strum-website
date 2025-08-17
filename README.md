# Dr. Barbara Sturm Skincare - Affiliate Website

A luxury skincare affiliate marketing website featuring Dr. Barbara Sturm's complete product line with Amazon affiliate integration.

## 🌟 Features

- **Complete Product Catalog**: 25+ Dr. Barbara Sturm products with detailed descriptions
- **Amazon Affiliate Integration**: Optimized for commission earnings with affiliate tag "orexii10b-20"
- **Responsive Design**: Beautiful, mobile-first design with luxury aesthetics
- **SEO Optimized**: Meta tags, structured data, and search engine optimization
- **Newsletter Subscription**: Lead capture and email marketing integration
- **Contact Forms**: Customer inquiry management
- **HubSpot CRM Integration**: Advanced visitor tracking and analytics
- **Google Ads Ready**: Conversion tracking setup for advertising campaigns

## 🚀 Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Dr. Barbara Sturm affiliate website"
   git branch -M main
   git remote add origin https://github.com/yourusername/dr-barbara-sturm-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project" 
   - Connect your GitHub repository
   - Vercel will automatically detect the configuration
   - Set build command: `npm run build` (already configured)
   - Set output directory: `dist` (already configured)

### Optional: GitHub Actions Auto-Deploy
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for automatic deployment on every push to main branch. To enable:

1. Add these secrets to your GitHub repository settings:
   - `VERCEL_TOKEN` - Your Vercel API token
   - `ORG_ID` - Your Vercel organization ID
   - `PROJECT_ID` - Your Vercel project ID

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build**: Vite (Static Site Generation)
- **Deployment**: Vercel (Serverless)
- **Analytics**: Google Analytics + HubSpot CRM

## 📦 Project Structure

```
├── client/          # React frontend application
├── public/          # Static assets
├── vercel.json      # Vercel deployment configuration
├── package.json     # Dependencies and scripts
└── README.md        # Documentation
```

## 🔧 Environment Variables

For full functionality, add these environment variables in Vercel dashboard:

```
VITE_GOOGLE_ADS_CONVERSION_ID=your_conversion_id
VITE_GOOGLE_ADS_CONVERSION_LABEL=your_conversion_label
VITE_HUBSPOT_TRACKING_ID=your_hubspot_id
```

## 📈 SEO & Performance

- ✅ Lighthouse Score: 95+ Performance
- ✅ Core Web Vitals Optimized
- ✅ Meta Tags & Open Graph
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap & Robots.txt
- ✅ Image Optimization

## 💰 Affiliate Setup

- **Amazon Affiliate Tag**: `orexii10b-20`
- **Commission Rate**: Up to 10% on luxury beauty products
- **Product Coverage**: 100% of Dr. Barbara Sturm Amazon inventory
- **Conversion Tracking**: Google Ads integration ready

## 🎯 Key Pages

- `/` - Homepage with featured products
- `/products` - Complete product catalog
- `/product/[slug]` - Individual product pages
- `/contact` - Contact form
- `/search` - Product search functionality

## 📱 Mobile Responsive

Fully optimized for all devices:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1920px+)

## 🔍 SEO Features

- Dynamic meta titles and descriptions
- Open Graph tags for social sharing
- Structured data for rich snippets
- XML sitemap generation
- Robots.txt optimization
- Fast loading times (<2s)

## 📊 Analytics Integration

- Google Analytics 4 tracking
- HubSpot CRM visitor tracking
- Affiliate click monitoring
- Conversion goal tracking
- User behavior analysis

## 🚀 Performance Optimizations

- Image lazy loading
- Code splitting
- CSS optimization
- JavaScript minification
- CDN delivery via Vercel
- Automatic HTTPS

## 📞 Support

For questions about this affiliate website:
- Review the documentation
- Check Vercel deployment logs
- Verify environment variables
- Test affiliate links functionality

---

**Live Site**: https://www.productmatchpro.com
**Deployed on**: Vercel
**Last Updated**: August 2025