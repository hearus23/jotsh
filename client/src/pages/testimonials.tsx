import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Star, Quote, MapPin, ThumbsUp } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arjun Mehta",
      location: "Mumbai, Maharashtra",
      rating: 5,
      review: "Finally, an Indian brand that understands quality! Jotah papers burn evenly and taste clean. No more importing expensive foreign brands. Proud to support an Indian company.",
      product: "Jotah Premium",
      verified: true,
      date: "2 weeks ago"
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      rating: 5,
      review: "The Heritage edition is absolutely beautiful! The artwork is stunning and the quality is top-notch. Perfect for special occasions. Worth every rupee.",
      product: "Jotah Heritage",
      verified: true,
      date: "1 month ago"
    },
    {
      name: "Rohit Singh",
      location: "Bangalore, Karnataka",
      rating: 4,
      review: "Been using Jotah Classic for 6 months now. Consistent quality, great price point. The gum strip works perfectly every time. Definitely recommending to friends.",
      product: "Jotah Classic",
      verified: true,
      date: "3 weeks ago"
    },
    {
      name: "Anjali Gupta",
      location: "Pune, Maharashtra",
      rating: 5,
      review: "Love supporting Indian brands! Jotah's quality matches international standards. The unbleached Premium papers are my favorite - no weird aftertaste.",
      product: "Jotah Premium",
      verified: true,
      date: "2 months ago"
    },
    {
      name: "Vikram Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      review: "Ordered the combo pack and saved money. All three varieties are excellent. The packaging is premium and the papers are ultra-thin yet strong.",
      product: "Premium Collection Combo",
      verified: true,
      date: "1 week ago"
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      rating: 4,
      review: "Great quality papers at reasonable prices. Delivery through Blinkit was super fast. The Classic variety is perfect for everyday use.",
      product: "Jotah Classic",
      verified: true,
      date: "2 weeks ago"
    },
    {
      name: "Karan Joshi",
      location: "Jaipur, Rajasthan",
      rating: 5,
      review: "As someone who's tried many brands, Jotah is definitely in the top tier. Indian manufacturing at its finest. The slow burn is perfect.",
      product: "Jotah Premium",
      verified: true,
      date: "1 month ago"
    },
    {
      name: "Meera Iyer",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      review: "The Heritage edition with Indian artwork is a masterpiece! Quality is exceptional and it feels good to support an Indian brand making world-class products.",
      product: "Jotah Heritage",
      verified: true,
      date: "3 weeks ago"
    },
    {
      name: "Rahul Kapoor",
      location: "Kolkata, West Bengal",
      rating: 4,
      review: "Switched from imported brands to Jotah and haven't looked back. Same quality, better price, and supporting Indian business. Win-win!",
      product: "Jotah Classic",
      verified: true,
      date: "1 month ago"
    },
    {
      name: "Deepika Nair",
      location: "Kochi, Kerala",
      rating: 5,
      review: "Impressed by the consistency. Every pack is the same high quality. The 110mm king size is perfect. Highly recommend to fellow enthusiasts.",
      product: "Jotah Premium",
      verified: true,
      date: "2 weeks ago"
    },
    {
      name: "Aditya Gupta",
      location: "Lucknow, Uttar Pradesh",
      rating: 5,
      review: "The Starter Pack was perfect for trying different varieties. Now I'm a regular customer. Jotah has set a new standard for Indian rolling papers.",
      product: "Starter Pack Combo",
      verified: true,
      date: "1 week ago"
    },
    {
      name: "Kavya Malhotra",
      location: "Chandigarh, Punjab",
      rating: 4,
      review: "Great to see an Indian brand competing with international ones. The premium quality and affordable pricing make it a perfect choice.",
      product: "Jotah Premium",
      verified: true,
      date: "3 weeks ago"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers" },
    { number: "4.8/5", label: "Average Rating" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "28", label: "Cities Served" }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-goldenrod text-goldenrod" : "text-gray-400"
        }`}
      />
    ));
  };

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
              Customer Reviews
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            What India Says
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real reviews from real customers across India who trust Jotah's premium France paper using 13.8GSM specification for their rolling paper needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-6 border border-goldenrod/20">
                  <div className="text-3xl lg:text-4xl font-bold text-goldenrod mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Customer <span className="text-goldenrod">Stories</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Hear from our satisfied customers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700 hover:border-goldenrod/50 transition-all duration-300 group">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-goldenrod" />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-goldenrod text-sm font-semibold">
                    {testimonial.rating}/5
                  </span>
                </div>

                {/* Product */}
                <div className="mb-4">
                  <span className="bg-goldenrod/20 text-goldenrod px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="text-white font-semibold mr-2">
                          {testimonial.name}
                        </h4>
                        {testimonial.verified && (
                          <ThumbsUp className="h-4 w-4 text-green-400" />
                        )}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-3xl p-12 border border-goldenrod/30">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Experience the quality that has made Jotah India's trusted rolling paper brand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                Shop Now
              </button>
              <button className="border-2 border-goldenrod text-goldenrod hover:bg-goldenrod hover:text-black px-8 py-3 rounded-full font-bold transition-all">
                View Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}