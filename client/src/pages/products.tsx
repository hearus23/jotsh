import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Star, Package, Gift } from "lucide-react";
import jotahProduct1 from "@assets/jotah-product-1.jpeg";
import jotahProduct2 from "@assets/jotah-product-2.jpeg";
import jotahProduct3 from "@assets/jotah-product-3.jpeg";

export default function Products() {
  const products = [
    {
      image: jotahProduct1,
      name: "Jotah Classic",
      tagline: "The Original",
      description: "Our signature rolling papers that started it all. Perfect for everyday smoking with consistent quality.",
      features: ["Ultra-thin 13.8GSM France paper", "Natural Arabic gum", "32 leaves per pack", "Classic 78mm size"],
      price: "₹25",
      badge: "Best Seller",
      category: "individual"
    },
    {
      image: jotahProduct2,
      name: "Jotah Premium",
      tagline: "Enhanced Experience",
      description: "Premium quality papers for the connoisseur. Unbleached and organic for pure taste.",
      features: ["Unbleached 13.8GSM France paper", "Slow & even burn", "King size 110mm", "Premium packaging"],
      price: "₹40",
      badge: "Premium",
      category: "individual"
    },
    
  ];

  const comboPacks = [
    {
      name: "Pack of 5 funroll",
      description: "Perfect for beginners exploring our range",
      contents: ["5x Jotah Classic"],
      originalPrice: "₹",
      salePrice: "₹75",
      savings: "₹15",
      badge: "Most Popular",
      icon: Package
    },
    {
      name: "Premium Collection",
      description: "Our complete range for the discerning smoker",
      contents: ["2x Jotah Classic", "2x Jotah Premium", "1x Jotah Heritage"],
      originalPrice: "₹170",
      salePrice: "₹140",
      savings: "₹30",
      badge: "Best Value",
      icon: Star
    },
    {
      name: "Gift Set",
      description: "Beautifully packaged for gifting",
      contents: ["1x Jotah Premium", "1x Jotah Heritage", "Special gift box"],
      originalPrice: "₹100",
      salePrice: "₹85",
      savings: "₹15",
      badge: "Gift Ready",
      icon: Gift
    }
  ];

  return (
    <div className="bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-goldenrod rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Our Collection
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            Premium Rolling Papers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our complete range of premium rolling papers made from France paper using 13.8GSM specification, crafted with precision for the perfect smoking experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Individual Products */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Individual Products
            </h2>
            <p className="text-gray-300 text-lg">
              Choose from our premium range of rolling papers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-goldenrod/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-goldenrod/20">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    product.badge === "Best Seller" ? "bg-green-500 text-black" :
                    product.badge === "Premium" ? "bg-goldenrod text-black" :
                    "bg-purple-500 text-white"
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-goldenrod font-medium text-sm tracking-wide">
                      {product.tagline}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="h-4 w-4 text-goldenrod mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-goldenrod">
                      {product.price}
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
                      data-testid={`button-buy-${index}`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Packs */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
                Special Offers
              </span>
            </div>
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Combo Packs
            </h2>
            <p className="text-gray-300 text-lg">
              Save more with our specially curated combo packages
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {comboPacks.map((combo, index) => (
              <div key={index} className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700 hover:border-goldenrod/50 transition-all duration-300 group">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-goldenrod to-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold">
                    {combo.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-goldenrod to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <combo.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-gray-300">
                    {combo.description}
                  </p>
                </div>

                {/* Contents */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {combo.contents.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="h-4 w-4 text-goldenrod mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-gray-400 line-through text-lg">{combo.originalPrice}</span>
                    <span className="text-3xl font-bold text-goldenrod">{combo.salePrice}</span>
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    Save {combo.savings}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black py-3 rounded-full font-bold transition-all transform hover:scale-105"
                  data-testid={`button-combo-${index}`}
                >
                  Order Combo Pack
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}