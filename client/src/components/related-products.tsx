import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { Star, Heart } from "lucide-react";
import type { Product } from "@/data/products";

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

export function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
  // Get related products by category and exclude current product
  const relatedProducts = allProducts
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || 
       product.skinType?.some(type => currentProduct.skinType?.includes(type)))
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-luxury-charcoal mb-4">
            You May Also Like
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover other premium Dr. Barbara Sturm products perfect for your luxury skincare routine
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={`${product.name} - Premium Dr. Barbara Sturm ${product.category.toLowerCase()} for luxury skincare`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {product.isBestseller && (
                  <Badge className="absolute top-3 left-3 bg-luxury-gold text-white">
                    Bestseller
                  </Badge>
                )}
                {product.isOprahsFavorite && (
                  <Badge className="absolute top-3 right-3 bg-purple-600 text-white">
                    Oprah's Favorite
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-600 hover:text-luxury-gold"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount})
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-luxury-charcoal mb-2 group-hover:text-luxury-gold transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-luxury-charcoal">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/product/${product.slug}`}>
                    <Button 
                      size="sm"
                      className="bg-luxury-charcoal text-white hover:bg-gray-700"
                    >
                      View Product
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button 
              variant="outline" 
              size="lg"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
            >
              Shop All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}