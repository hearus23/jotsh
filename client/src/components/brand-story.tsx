import { Sparkles, Trophy, Heart, Users } from "lucide-react";

export default function BrandStory() {

  return (
    <section id="brand-story" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-goldenrod rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Our Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            The <span className="text-goldenrod">Jotah</span> Story
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from a vision to create a premium Indian rolling paper brand, 
            Jotah represents quality, authenticity, and the spirit of Indian innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-8"></div>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Text */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                Premium Indian Rolling Papers
              </h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  In a market dominated by international brands, <span className="text-goldenrod font-semibold">Jotah emerged as a premium Indian rolling paper company</span>, 
                  bringing exceptional quality using ultra-thin 13.8GSM France paper with authentic craftsmanship to Indian smokers.
                </p>
                <p>
                  Our journey began with a simple belief: Indian consumers deserve rolling papers 
                  made with premium France paper using 13.8GSM specification, crafted with the same precision and care as the finest international brands, 
                  but designed specifically for the Indian market.
                </p>
                <p>
                  Today, <span className="text-goldenrod font-semibold">Jotah stands as a testament to Indian manufacturing excellence</span>, 
                  proving that quality and innovation know no boundaries.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 border border-goldenrod/20">
                <div className="text-3xl font-bold text-goldenrod mb-2">100K+</div>
                <div className="text-gray-300 text-sm">Happy Customers</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 border border-goldenrod/20">
                <div className="text-3xl font-bold text-goldenrod mb-2">⭐</div>
                <div className="text-gray-300 text-sm">Premium Quality</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-goldenrod/20 to-yellow-400/20 rounded-3xl p-12 border border-goldenrod/30 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl font-playfair font-bold text-goldenrod mb-4">🇮🇳</div>
                <h4 className="text-2xl font-bold text-white mb-4">Made in India</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Proudly crafted in India with premium materials and 
                  uncompromising quality standards for the discerning Indian smoker.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-3xl p-12 border border-goldenrod/30 backdrop-blur-sm">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Join the <span className="text-goldenrod">Jotah</span> Revolution
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference that comes with India's premium rolling paper brand. 
              Quality, authenticity, and innovation in every pack.
            </p>
            <div className="inline-flex items-center space-x-2 text-goldenrod font-semibold">
              <span>🇮🇳</span>
              <span>Made in India • Premium Quality • Authentic Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}