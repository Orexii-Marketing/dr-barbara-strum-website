import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { SEOHead } from "@/components/seo-head";
import { Award, Users, Globe, Heart, Microscope, Star } from "lucide-react";

export default function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: "50+ Beauty Awards",
      description: "Recognized globally for innovation and excellence in skincare"
    },
    {
      icon: Users,
      title: "Celebrity Following",
      description: "Trusted by A-list celebrities and beauty influencers worldwide"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Available in luxury spas and beauty retailers across 40+ countries"
    },
    {
      icon: Microscope,
      title: "Scientific Innovation",
      description: "Leading research in anti-aging and molecular cosmetics"
    }
  ];

  const timeline = [
    {
      year: "2002",
      title: "Medical Career Begins",
      description: "Dr. Sturm starts her medical practice specializing in orthopedic surgery and anti-aging medicine."
    },
    {
      year: "2008",
      title: "Aesthetic Medicine Pioneer",
      description: "Develops innovative non-surgical aesthetic treatments using patients' own blood cells."
    },
    {
      year: "2014",
      title: "Brand Launch",
      description: "Dr. Barbara Sturm Molecular Cosmetics is born, bringing medical-grade skincare to consumers."
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Products launch internationally, gaining recognition from beauty editors and celebrities."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Introduces personalized skincare consultations and expands direct-to-consumer presence."
    },
    {
      year: "2024",
      title: "Continued Excellence",
      description: "Remains at the forefront of luxury skincare with continued innovation and awards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About Dr. Barbara Sturm - Luxury Skincare Pioneer"
        description="Learn about Dr. Barbara Sturm, the renowned German aesthetics doctor and founder of luxury skincare brand. Discover her innovative approach to anti-aging and molecular cosmetics."
        keywords="Dr Barbara Sturm, luxury skincare, molecular cosmetics, anti-aging, German skincare, beauty innovation"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 luxury-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-luxury-charcoal mb-6">
              About Dr. Barbara Sturm
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the story behind luxury skincare innovation and the visionary doctor who revolutionized molecular cosmetics.
            </p>
            <div className="flex justify-center items-center space-x-4 text-luxury-gold">
              <Star className="w-6 h-6 fill-current" />
              <span className="text-lg font-medium">Trusted by celebrities and beauty experts worldwide</span>
              <Star className="w-6 h-6 fill-current" />
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <About />

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-4">
                Recognition & Achievements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dr. Sturm's dedication to innovation and excellence has earned worldwide recognition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <Icon className="w-10 h-10 text-luxury-gold mx-auto mb-4" />
                    <h3 className="font-semibold text-luxury-charcoal mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-4">
                Journey of Innovation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From medical pioneer to skincare visionary
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-luxury-gold"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-luxury-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-lg p-6 shadow-lg">
                        <div className="text-2xl font-bold text-luxury-gold mb-2">{item.year}</div>
                        <h3 className="font-semibold text-luxury-charcoal mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 luxury-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-6">
                Our Philosophy
              </h2>
              <blockquote className="text-xl italic text-gray-700 mb-8 leading-relaxed">
                "I believe that healthy, glowing skin is achievable at any age through science-backed ingredients and proven methodologies. My approach combines medical expertise with luxury experience to deliver transformative results."
              </blockquote>
              <div className="flex justify-center items-center">
                <Heart className="w-6 h-6 text-luxury-gold mr-3" />
                <cite className="font-semibold text-luxury-charcoal">Dr. Barbara Sturm</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-luxury-charcoal mb-4">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Microscope className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-3">Scientific Excellence</h3>
                <p className="text-gray-600">Every formula is backed by rigorous research and proven clinical results</p>
              </div>
              
              <div className="text-center p-6">
                <Star className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-3">Luxury Experience</h3>
                <p className="text-gray-600">Premium ingredients and elegant formulations for the ultimate skincare ritual</p>
              </div>
              
              <div className="text-center p-6">
                <Heart className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="font-semibold text-luxury-charcoal mb-3">Personalized Care</h3>
                <p className="text-gray-600">Tailored solutions that address individual skin concerns and goals</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}