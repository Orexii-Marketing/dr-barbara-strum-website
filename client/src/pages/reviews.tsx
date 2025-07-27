import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reviews } from "@/components/reviews";
import { SEOHead } from "@/components/seo-head";
import { Star, Award, Users, Truck, Shield, Heart } from "lucide-react";

export default function ReviewsPage() {
  const additionalReviews = [
    {
      id: 4,
      rating: 5,
      content: "I've been using Dr. Sturm products for 2 years now. The difference in my skin texture and radiance is incredible. Friends constantly ask what I'm using!",
      author: "Jessica T.",
      verified: true,
      product: "Hyaluronic Serum",
      date: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 5,
      rating: 5,
      content: "The Anti-Aging Face Cream is pure luxury. My skin feels firmer and looks younger. I get compliments all the time now.",
      author: "Amanda K.",
      verified: true,
      product: "Super Anti-Aging Face Cream",
      date: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 6,
      rating: 5,
      content: "Finally found a cleanser that works for my sensitive skin. The Gentle Cleansing Foam leaves my skin feeling clean but never tight or dry.",
      author: "Robert D.",
      verified: true,
      product: "Gentle Cleansing Foam",
      date: "3 weeks ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 7,
      rating: 5,
      content: "The Night Serum has transformed my evening routine. I wake up with noticeably brighter and more hydrated skin every morning.",
      author: "Linda M.",
      verified: true,
      product: "Night Serum",
      date: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 8,
      rating: 5,
      content: "As a dermatologist, I'm particular about skincare. Dr. Sturm's science-backed formulations deliver real results. I recommend them to my patients.",
      author: "Dr. Patricia S.",
      verified: true,
      product: "Face Cream",
      date: "2 months ago",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
    },
    {
      id: 9,
      rating: 5,
      content: "The Enzyme Cleanser is gentle yet effective. It removes all my makeup without stripping my skin. Perfect for daily use.",
      author: "Maria G.",
      verified: true,
      product: "Enzyme Cleanser",
      date: "5 days ago",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Verified Reviews", icon: Star },
    { number: "98%", label: "Customer Satisfaction", icon: Heart },
    { number: "4.9/5", label: "Average Rating", icon: Award },
    { number: "50+", label: "Beauty Awards", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Customer Reviews - Dr. Barbara Sturm Skincare"
        description="Read authentic customer reviews and testimonials for Dr. Barbara Sturm luxury skincare products. See why thousands trust her science-backed formulations."
        keywords="Dr Barbara Sturm reviews, customer testimonials, skincare reviews, luxury skincare feedback"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 luxury-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-luxury-charcoal mb-6">
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover why thousands of customers worldwide trust Dr. Barbara Sturm's science-backed skincare solutions.
            </p>
            
            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <Icon className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                    <div className="text-3xl font-bold text-luxury-charcoal mb-1">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Reviews Section */}
        <Reviews />

        {/* Additional Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-4">
                More Customer Stories
              </h2>
              <p className="text-lg text-gray-600">
                Real experiences from our valued customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 italic">
                    "{review.content}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={review.avatar}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-luxury-charcoal text-sm">{review.author}</div>
                        <div className="text-xs text-gray-500">Verified Buyer</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-luxury-gold">{review.product}</div>
                      <div className="text-xs text-gray-500">Product Used</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-4">
                Why Customers Trust Us
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <Award className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-2">Award-Winning Formulas</h3>
                <p className="text-gray-600 text-sm">Recognized by leading beauty publications worldwide</p>
              </div>
              
              <div className="p-6">
                <Shield className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-2">Science-Backed</h3>
                <p className="text-gray-600 text-sm">Formulated with proven, research-based ingredients</p>
              </div>
              
              <div className="p-6">
                <Users className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-2">Trusted by Experts</h3>
                <p className="text-gray-600 text-sm">Recommended by dermatologists and beauty professionals</p>
              </div>
              
              <div className="p-6">
                <Truck className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-2">Premium Experience</h3>
                <p className="text-gray-600 text-sm">From packaging to delivery, luxury at every step</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}