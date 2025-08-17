import { useLocation, useRoute } from "wouter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Newsletter } from "@/components/newsletter";
import { SEOHead } from "@/components/seo-head";
import { ProductGrid } from "@/components/product-grid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  Heart, 
  Share2, 
  ShoppingBag, 
  Check, 
  Award,
  Truck,
  RotateCcw,
  Shield,
  Microscope,
  Leaf,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import { formatPrice, addAffiliateTag, trackAffiliateClick } from "@/lib/utils";
import { useState, useEffect } from "react";
import { drStumProducts } from "@/data/products";

export default function ProductPage() {
  const [, params] = useRoute("/product/:slug");
  const slug = params?.slug;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allProducts = drStumProducts;
  const product = allProducts.find(p => p.slug === slug);
  const isLoading = false;
  const error = !product;

  // Track product page view in HubSpot
  useEffect(() => {
    if (product) {
      import("@/lib/hubspot").then(({ trackProductView, setHubSpotContentType }) => {
        trackProductView(product.name, product.price, product.category);
        setHubSpotContentType('product-page');
      });
    }
  }, [product]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
            <p className="text-gray-600 mb-4">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const affiliateUrl = addAffiliateTag(product.amazonUrl);
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const allImages = [product.imageUrl, ...product.additionalImages];

  const handleAffiliateClick = () => {
    trackAffiliateClick(product.name, product.amazonUrl, product.price);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <SEOHead
        title={product.seoTitle}
        description={product.seoDescription}
        canonical={`https://yourdomain.com/product/${product.slug}`}
        ogImage={product.imageUrl}
        ogType="product"
        keywords={`Dr. Barbara Sturm, ${product.name}, luxury skincare, ${product.category}`}
      />
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-luxury-gray py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/">
                <a className="hover:text-luxury-gold transition-colors">Home</a>
              </Link>
              <span>/</span>
              <Link href="/products">
                <a className="hover:text-luxury-gold transition-colors">Products</a>
              </Link>
              <span>/</span>
              <span className="text-luxury-charcoal font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src={allImages[selectedImageIndex]}
                  alt={`${product.name} - Premium Dr. Barbara Sturm ${product.category.toLowerCase()} luxury skincare product with anti-aging benefits`}
                  className="w-full h-full object-contain p-4"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isBestSeller && (
                    <Badge className="bg-luxury-gold text-white">Best Seller</Badge>
                  )}
                  {product.isOprahFavorite && (
                    <Badge className="bg-purple-500 text-white">Oprah's Favorite</Badge>
                  )}
                  {product.originalPrice && product.originalPrice > product.price && (
                    <Badge className="bg-red-500 text-white">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-10 h-10 rounded-full p-0" onClick={handleShare}>
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Image Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImageIndex === index 
                          ? 'border-luxury-gold' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</span>
                  {product.size && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{product.size}</span>
                    </>
                  )}
                </div>
                <h1 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-luxury-charcoal font-semibold">{product.rating}</span>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-luxury-charcoal">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="text-green-600 font-medium">
                    You save {formatPrice(product.originalPrice - product.price)}
                  </p>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleAffiliateClick}
                  className="block w-full"
                >
                  <Button size="lg" className="w-full bg-luxury-charcoal text-white hover:bg-gray-700 transition-colors font-medium py-6 text-lg">
                    <ShoppingBag className="mr-2 w-5 h-5" />
                    Discover Your Perfect Skincare Solution
                  </Button>
                </a>
                
                <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
                  <div className="flex flex-col items-center">
                    <Truck className="w-5 h-5 mb-1" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RotateCcw className="w-5 h-5 mb-1" />
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Shield className="w-5 h-5 mb-1" />
                    <span>Authentic</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-luxury-rose p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Microscope className="w-6 h-6 text-luxury-gold mr-3" />
                    <div>
                      <div className="font-semibold text-luxury-charcoal text-sm">Science-Based</div>
                      <div className="text-xs text-gray-600">Medical-grade precision</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Leaf className="w-6 h-6 text-luxury-gold mr-3" />
                    <div>
                      <div className="font-semibold text-luxury-charcoal text-sm">Clean Beauty</div>
                      <div className="text-xs text-gray-600">No harmful chemicals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Description */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-bold text-luxury-charcoal mb-6">Product Description</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Key Features */}
                {product.features.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-luxury-charcoal mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Ingredients */}
                {product.ingredients.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-luxury-charcoal mb-4">Key Ingredients</h3>
                      <div className="space-y-2">
                        {product.ingredients.map((ingredient, index) => (
                          <div key={index} className="text-sm text-gray-600 py-1 border-b border-gray-100 last:border-0">
                            {ingredient}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <Separator className="mb-12" />
              <ProductGrid
                products={relatedProducts}
                title="You May Also Like"
                description="Discover more products from the same category"
                columns={3}
              />
            </div>
          )}
        </div>

        <Newsletter />
      </main>
      
      <Footer />
    </>
  );
}
