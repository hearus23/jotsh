import { Button } from "@/components/ui/button";
import { Check, Star, ShoppingCart } from "lucide-react";
import jotahProduct1 from "@assets/jotah-product-1.jpeg";
import jotahProduct2 from "@assets/jotah-product-2.jpeg";
import jotahProduct3 from "@assets/jotah-product-3.jpeg";

export default function RollingPaperShowcase() {
  const products = [
    {
      image: jotahProduct1,
      name: "Jotah Classic",
      tagline: "The Original",
      description: "Our signature rolling papers with authentic taste and consistent quality.",
      features: ["Ultra-thin 13.8GSM France paper", "Natural Arabic gum", "32 leaves per pack"],
      price: "₹25",
      originalPrice: "₹30",
      badge: "Best Seller",
      rating: 4.8
    },
    {
      image: jotahProduct2,
      name: "Jotah Premium",
      tagline: "Enhanced Experience",
      description: "Premium quality papers for the connoisseur. Unbleached and organic.",
      features: ["Unbleached 13.8GSM France paper", "Slow & even burn", "King size 110mm"],
      price: "₹40",
      originalPrice: "₹50",
      badge: "Premium",
      rating: 4.9
    },
    {
      image: jotahProduct3,
      name: "Jotah Heritage",
      tagline: "Limited Edition",
      description: "Special edition with traditional Indian artwork. A collector's piece.",
      features: ["Premium 13.8GSM France paper", "Heritage design", "Collector's packaging"],
      price: "₹60",
      originalPrice: "₹75",
      badge: "Limited",
      rating: 5.0
    }
  ];

  const comboPacks = [
    {
      name: "Pack of 55 Funroll",
      description: "Perfect introduction to Jotah quality",
      contents: ["55x Jotah Classic"],
      originalPrice: "₹875",
      salePrice: "₹650",
      savings: "₹225"
    },
    {
      name: "Premium Collection", 
      description: "Complete range for enthusiasts",
      contents: ["2x Jotah Classic", "2x Jotah Premium", "1x Jotah Heritage"],
      originalPrice: "₹170",
      salePrice: "₹140", 
      savings: "₹30"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Premium Collection
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Our <span className="text-goldenrod">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our range of premium rolling papers, each crafted with meticulous attention to quality and excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-8"></div>
        </div>

        {/* Individual Products */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl overflow-hidden border border-gray-700 hover:border-goldenrod/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-goldenrod/20">
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
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-goldenrod text-goldenrod" : "text-gray-400"}`} />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">({product.rating})</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-goldenrod mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-goldenrod">{product.price}</span>
                    <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105"
                    data-testid={`button-add-to-cart-${index}`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Packs Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
                Special Offers
              </span>
            </div>
            <h3 className="text-4xl font-playfair font-bold text-white mb-4">
              Combo Packs
            </h3>
            <p className="text-gray-300 text-lg">
              Save more with our specially curated combo packages
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comboPacks.map((combo, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl p-8 border border-goldenrod/20 hover:border-goldenrod/50 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-playfair font-bold text-white mb-2">
                    {combo.name}
                  </h4>
                  <p className="text-gray-300">
                    {combo.description}
                  </p>
                </div>

                {/* Contents */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">What's included:</h5>
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
      </div>
    </section>
  );
}