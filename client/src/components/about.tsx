import { Microscope, Leaf } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">
              Meet Dr. Barbara Sturm
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              A leading aesthetic doctor and skincare expert, Dr. Barbara Sturm has revolutionized 
              the beauty industry with her science-backed approach to anti-aging and skin health. 
              Based in Düsseldorf, Germany, she combines medical expertise with luxury skincare innovation.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Her innovative formulations combine cutting-edge medical research with luxurious textures, 
              delivering visible results that have made her products a favorite among celebrities, 
              skincare enthusiasts, and beauty editors worldwide. Dr. Sturm's philosophy centers on 
              anti-inflammatory ingredients that work in harmony with your skin's natural processes.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From her signature Hyaluronic Serum to the revolutionary Super Anti-Aging collection, 
              each product is meticulously crafted using molecular cosmetics technology. Her approach 
              eliminates harsh acids and retinoids in favor of gentle yet effective botanical extracts, 
              ceramides, and her proprietary Purslane complex that soothes and protects sensitive skin.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-luxury-rose p-6 rounded-xl">
                <Microscope className="text-luxury-gold w-8 h-8 mb-3" />
                <h3 className="font-semibold text-luxury-charcoal mb-2">Science-Based</h3>
                <p className="text-sm text-gray-600">Formulated with proven ingredients and medical-grade precision</p>
              </div>
              <div className="bg-luxury-rose p-6 rounded-xl">
                <Leaf className="text-luxury-gold w-8 h-8 mb-3" />
                <h3 className="font-semibold text-luxury-charcoal mb-2">Clean Beauty</h3>
                <p className="text-sm text-gray-600">Free from harmful chemicals, parabens, and synthetic fragrances</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://cache.net-a-porter.com/content/images/story-body-content-7thJanuary2020-0-1608110440572.jpeg/w1900_q65.jpeg" 
              alt="Dr. Barbara Sturm luxury skincare collection" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5] about-image"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-luxury-gold text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
