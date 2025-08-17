import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Reviews } from "@/components/reviews";
import { Newsletter } from "@/components/newsletter";
import { ProductGrid } from "@/components/product-grid";
import { SEOHead } from "@/components/seo-head";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { drStumProducts } from "@/data/products";

export default function Home() {
  const products = drStumProducts;
  const isLoading = false;

  const featuredProducts = products.filter(product => product.isFeature).slice(0, 3);
  const categories = ["Serums", "Creams", "Cleansers", "Eye Care", "Gift Sets"];

  return (
    <>
      <SEOHead
        title="Dr. Barbara Sturm Skincare Collection | Premium Anti-Aging Solutions"
        description="Discover Dr. Barbara Sturm's revolutionary skincare collection. Premium anti-aging serums, cleansers, and moisturizers trusted by celebrities and skincare experts worldwide."
        keywords="Dr. Barbara Sturm, luxury skincare, anti-aging, serums, premium skincare, celebrity skincare"
        canonical="https://yourdomain.com/"
      />
      
      <Header />
      
      <main>
        <Hero />
        
        {/* Featured Products Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading featured products...</p>
              </div>
            ) : (
              <>
                <ProductGrid
                  products={featuredProducts}
                  title="Premium Collection"
                  description="Each product is meticulously formulated with the finest ingredients to deliver exceptional results."
                />
                
                {/* Product Categories Filter */}
                <div className="flex flex-wrap justify-center gap-4 my-12">
                  <Link href="/products">
                    <Button className="px-6 py-3 bg-luxury-charcoal text-white rounded-full font-medium">
                      All Products
                    </Button>
                  </Link>
                  {categories.map((category) => (
                    <Link key={category} href={`/products?category=${category.toLowerCase()}`}>
                      <Button 
                        variant="outline" 
                        className="px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-medium hover:bg-luxury-gold hover:text-white transition-colors"
                      >
                        {category}
                      </Button>
                    </Link>
                  ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center">
                  <Link href="/products">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold rounded-full hover:bg-luxury-gold hover:text-white transition-colors font-medium"
                    >
                      View All 25+ Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>

        <About />
        <Reviews />
        <Newsletter />
      </main>
      
      <Footer />
    </>
  );
}
