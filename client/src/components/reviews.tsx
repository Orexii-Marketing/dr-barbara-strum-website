import { Star, Award, Users, Truck } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      content: "The Hyaluronic Serum completely transformed my skin. It's more hydrated and plump than ever before. Worth every penny!",
      author: "Sarah M.",
      verified: true
    },
    {
      id: 2,
      rating: 5,
      content: "As someone with sensitive skin, finding the right products is challenging. Dr. Sturm's Calming Serum is a game-changer.",
      author: "Michael R.",
      verified: true
    },
    {
      id: 3,
      rating: 5,
      content: "The Super Anti-Aging collection has visibly reduced my fine lines. The quality and results are unmatched.",
      author: "Emma L.",
      verified: true
    }
  ];

  const trustIndicators = [
    {
      icon: Award,
      title: "Award Winning",
      subtitle: "Multiple beauty awards"
    },
    {
      icon: Users,
      title: "10,000+",
      subtitle: "Happy customers"
    },
    {
      icon: Star,
      title: "4.8/5 Rating",
      subtitle: "Average rating"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      subtitle: "On all orders"
    }
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 luxury-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of satisfied customers have transformed their skin with Dr. Barbara Sturm products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{review.rating}.0</span>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{review.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center mr-4">
                  <span className="text-luxury-gold font-semibold text-lg">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-luxury-charcoal">{review.author}</div>
                  <div className="text-sm text-gray-500">Verified Buyer</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <Icon className="w-8 h-8 text-luxury-gold mx-auto mb-3" />
                <div className="font-semibold text-luxury-charcoal mb-1">{indicator.title}</div>
                <div className="text-sm text-gray-600">{indicator.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
