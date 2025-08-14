import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Truck, Star, MapPin, Shield, Zap } from "lucide-react";

export default function FindProducts() {
  const deliveryApps = [
    {
      name: "Zepto",
      description: "Ultra-fast 10-minute delivery",
      features: ["10-min delivery", "Premium selection", "24/7 available"],
      color: "from-purple-500 to-pink-500",
      href: "#",
      icon: Clock
    },
    {
      name: "Blinkit",
      description: "Quick grocery delivery",
      features: ["Quick delivery", "Wide coverage", "Quality assured"],
      color: "from-orange-500 to-red-500",
      href: "#",
      icon: Truck
    },
    {
      name: "Instamart",
      description: "Reliable instant delivery",
      features: ["Instant delivery", "Trusted platform", "Best prices"],
      color: "from-green-500 to-teal-500",
      href: "#",
      icon: Star
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Pan-India Coverage",
      description: "Available across major cities in India"
    },
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Guaranteed genuine Jotah products"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick delivery to your doorstep"
    }
  ];

  return (
    <section id="find-products" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Available Now
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Find Our Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get authentic Jotah rolling papers delivered to your doorstep through India's most trusted delivery platforms
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-8"></div>
        </div>

        {/* Delivery Apps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {deliveryApps.map((app, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-goldenrod/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-goldenrod/20">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${app.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {app.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-goldenrod rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black py-3 rounded-full font-bold transition-all transform hover:scale-105"
                data-testid={`button-order-${app.name.toLowerCase()}`}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Order on {app.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-goldenrod/20 via-yellow-400/20 to-goldenrod/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-goldenrod/30">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Why Order <span className="text-goldenrod">Online</span>?
              </h3>
              <p className="text-gray-300 text-lg">
                Experience the convenience of getting Jotah products delivered to your doorstep
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-goldenrod to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-full px-8 py-4 border border-goldenrod/30">
                <span className="text-goldenrod font-bold text-lg">
                  🚀 Fast Delivery • 💯 Authentic Products • 🇮🇳 Made in India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}