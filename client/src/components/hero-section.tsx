import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-goldenrod rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 backdrop-blur-sm rounded-full px-6 py-2 border border-goldenrod/30 text-goldenrod text-sm font-bold tracking-widest uppercase animate-fade-in">
            Premium Rolling Papers
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold text-white leading-none mb-4 animate-fade-in-up">
            <span className="block">JOTAH</span>
            <span className="bg-gradient-to-r from-goldenrod via-yellow-400 to-goldenrod bg-clip-text text-transparent">
              PAPERS
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mb-6"></div>
        </div>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-4xl font-semibold text-goldenrod mb-6 animate-fade-in-delay">
          Premium Indian Rolling Paper Brand
        </h2>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-2">
          Experience the perfect blend of tradition and innovation with premium rolling papers made from France paper using 13.8GSM specification. 
          Crafted for the connoisseur, designed for excellence.
        </p>
        
        {/* Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 backdrop-blur-sm rounded-full px-8 py-4 mb-12 border border-goldenrod/30 animate-fade-in-delay-3">
          <span className="text-goldenrod font-semibold text-lg">
            🇮🇳 Made in India • Premium Quality • Authentic Experience
          </span>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-goldenrod/25"
            data-testid="button-shop-now"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-goldenrod text-goldenrod hover:bg-goldenrod hover:text-black px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>

        {/* Rating */}
        <div className="mt-16 flex items-center justify-center space-x-2 animate-fade-in-delay-5">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-goldenrod text-goldenrod" />
            ))}
          </div>
          <span className="text-gray-300 text-sm">
            4.9/5 from 10,000+ happy customers
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-goldenrod rounded-full flex justify-center">
          <div className="w-1 h-3 bg-goldenrod rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}