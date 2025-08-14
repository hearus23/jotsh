import { Button } from "@/components/ui/button";
import { Award, Leaf, HandHeart, Tag } from "lucide-react";

export default function HeritageSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest materials sourced globally"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable production methods"
    },
    {
      icon: HandHeart,
      title: "Handcrafted",
      description: "Traditional artisan techniques"
    },
    {
      icon: Tag,
      title: "Certified",
      description: "International quality standards"
    }
  ];

  const certifications = ["ISO 9001", "HACCP", "Organic"];

  return (
    <section id="heritage" className="py-20 bg-gradient-to-br from-dark-brown to-saddle-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              India's <span className="text-goldenrod">First & Only</span> Rolling Paper Brand
            </h2>
            <p className="text-lg text-warm-cream mb-6 leading-relaxed">
              Rooted in ancient Indian traditions, Jotah represents the perfect harmony between time-honored craftsmanship and modern innovation. As India's pioneering rolling paper brand, we've broken new ground in bringing premium quality to the domestic market.
            </p>
            <div className="bg-goldenrod/10 rounded-xl p-4 mb-8 border border-goldenrod/20">
              <p className="text-goldenrod font-semibold">
                🏆 Breaking Barriers: India's first indigenous rolling paper company, setting new standards for quality and authenticity in the market.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-goldenrod rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="h-6 w-6 text-dark-brown" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-warm-cream text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-goldenrod hover:bg-peru-gold text-dark-brown px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
              data-testid="button-learn-more-heritage"
            >
              Learn More About Our Story
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=900"
              alt="Traditional Indian craftsmanship"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-dark-brown/50 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                <h4 className="text-dark-brown font-semibold mb-2">Quality Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className="bg-goldenrod text-dark-brown px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
