import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { type Product } from "@shared/schema";
import { formatPrice, addAffiliateTag, trackAffiliateClick } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const affiliateUrl = addAffiliateTag(product.amazonUrl);

  const handleAffiliateClick = () => {
    trackAffiliateClick(product.name, product.amazonUrl);
  };

  const isCompact = variant === "compact";

  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden product-image-bg">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.imageUrl}
            alt={`${product.name} - Premium Dr. Barbara Sturm ${product.category.toLowerCase()} for luxury anti-aging skincare routine`}
            className={`w-full product-image group-hover:scale-105 transition-transform duration-300 p-2 ${
              isCompact ? "h-40" : "h-64"
            }`}
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestSeller && (
            <Badge className="bg-luxury-gold text-white text-xs font-medium">
              Best Seller
            </Badge>
          )}
          {product.isOprahFavorite && (
            <Badge className="bg-purple-500 text-white text-xs font-medium">
              Oprah's Favorite
            </Badge>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <Badge className="bg-red-500 text-white text-xs font-medium">
              {formatPrice(product.originalPrice)} Value
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
      </div>

      <CardContent className={isCompact ? "p-4" : "p-6"}>
        <Link href={`/product/${product.slug}`}>
          <h3 className={`font-serif font-semibold text-luxury-charcoal mb-2 hover:text-luxury-gold transition-colors cursor-pointer ${
            isCompact ? "text-lg" : "text-xl"
          }`}>
            {product.name}
          </h3>
        </Link>
        
        {!isCompact && (
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className={`font-bold text-luxury-charcoal ${
            isCompact ? "text-lg" : "text-2xl"
          }`}>
            {formatPrice(product.price)}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
            {product.rating} ({product.reviewCount} reviews)
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleAffiliateClick}
          className="block w-full"
        >
          <Button className="w-full bg-luxury-charcoal text-white hover:bg-gray-700 transition-colors font-medium">
            Shop on Amazon
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
