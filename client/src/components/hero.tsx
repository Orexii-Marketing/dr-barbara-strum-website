import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ArrowRight, Truck, RotateCcw, Shield, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="luxury-gradient py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="inline-flex items-center bg-white text-gray-900 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Award className="w-4 h-4 text-luxury-gold mr-2" />
              <span className="text-sm font-medium">As Featured on Oprah's Favorite Things</span>
            </Badge>
            
            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-luxury-charcoal mb-6 leading-tight">
              Luxury Anti-Aging
              <span className="text-luxury-gold block">Skincare by</span>
              Dr. Barbara Sturm
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover Dr. Barbara Sturm's science-backed skincare collection. 
              Premium formulations trusted by celebrities and skincare experts worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/products">
                <Button size="lg" className="bg-luxury-charcoal text-white hover:bg-gray-700 transition-colors font-medium px-8 py-4 rounded-full">
                  Discover Your Perfect Skincare Solution
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/#about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white transition-colors font-medium px-8 py-4 rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Truck className="w-4 h-4 mr-2" />
                Free Shipping
              </div>
              <div className="flex items-center">
                <RotateCcw className="w-4 h-4 mr-2" />
                30-Day Returns
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Authentic Products
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Luxury skincare products elegantly displayed" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-luxury-charcoal">4.8/5 Rating</div>
                  <div className="text-sm text-gray-500">Over 10,000 Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
