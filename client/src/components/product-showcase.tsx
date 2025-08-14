import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ProductShowcase() {
  const productImages = [
    {
      src: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Premium rolling papers package"
    },
    {
      src: "https://pixabay.com/get/g5367f19ccfdaaa196ba3ee9fd17386c19d9b4b41faa37971b07d09fa0581393740c43badae19c327d68eb31884b99d8c0e7db4d1e392554216a97d352f7c9040_1280.jpg",
      alt: "Premium tobacco leaves"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Smoking accessories lifestyle shot"
    },
    {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      alt: "Indian cultural design elements"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
            Premium Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each product is carefully crafted using the finest materials and traditional techniques, ensuring an exceptional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Rolling Papers */}
          <div className="bg-warm-cream rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Premium rolling papers collection"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-4">
                Rolling Papers
              </h3>
              <p className="text-gray-600 mb-6">
                Ultra-thin, slow-burning papers made from the finest rice and hemp fibers
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-goldenrod mr-3" />
                  Natural gum arabic adhesive
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-goldenrod mr-3" />
                  Multiple size options
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-goldenrod mr-3" />
                  Eco-friendly packaging
                </li>
              </ul>
              <Button 
                className="bg-saddle-brown hover:bg-dark-brown text-white px-6 py-3 rounded-lg font-medium transition-colors"
                data-testid="button-view-rolling-papers"
              >
                View Details
              </Button>
            </div>
          </div>

          {/* Tobacco Accessories */}
          <div className="bg-warm-cream rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Premium tobacco accessories collection"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-playfair font-bold text-dark-brown mb-4">
                Accessories
              </h3>
              <p className="text-gray-600 mb-6">
                Handcrafted accessories combining traditional Indian craftsmanship with modern design
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-goldenrod mr-3" />
                  Premium materials
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-goldenrod mr-3" />
                  Artisan craftsmanship
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="h-4 w-4 text-goldenrod mr-3" />
                  Lifetime durability
                </li>
              </ul>
              <Button 
                className="bg-saddle-brown hover:bg-dark-brown text-white px-6 py-3 rounded-lg font-medium transition-colors"
                data-testid="button-view-accessories"
              >
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {productImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              data-testid={`product-gallery-${index}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
