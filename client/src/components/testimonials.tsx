import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      review: "The quality of these rolling papers is unmatched. You can truly feel the difference in every aspect - from the texture to the burn rate. Exceptional craftsmanship!"
    },
    {
      name: "Sarah Johnson",
      image: "https://pixabay.com/get/g90095577de3445a4f1361f11440713c38f3f6507e94482758ab5318f352a9d48e7ef9805b9651947d78707cfcb028ba604bc83e068ad857e0874718df6a8b523_1280.jpg",
      review: "I've been using Jotah products for over two years now. The consistency in quality and the attention to detail in their accessories is remarkable. Highly recommended!"
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      review: "As a retailer, I can confidently say that Jotah products are among the best in the market. My customers always return for more. Excellent business partnership!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-brown mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by thousands of satisfied customers worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-warm-cream rounded-xl p-8 shadow-lg" data-testid={`testimonial-${index}`}>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-dark-brown">{testimonial.name}</h4>
                  <div className="flex text-goldenrod">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
