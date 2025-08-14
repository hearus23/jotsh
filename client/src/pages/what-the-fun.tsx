import { Button } from "@/components/ui/button";
import { QrCode, ArrowLeft, Smartphone, Gift, Star } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import qrCodeImage from "@assets/Untitled_1755066225222.jpeg";

export default function WhatTheFun() {

  const funFeatures = [
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Scan and unlock special discounts and offers"
    },
    {
      icon: Star,
      title: "VIP Access",
      description: "Get early access to new product launches"
    },
    {
      icon: Smartphone,
      title: "Digital Experience",
      description: "Connect with our digital community and content"
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
              Exclusive Access
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            What the <span className="text-goldenrod">Fun!</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Scan the QR code below to unlock exclusive content, rewards, and join the premium Jotah experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* QR Code Section */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl shadow-2xl p-8 md:p-12 text-center mb-12 border border-goldenrod/20">
            <div className="mb-8">
              <QrCode className="h-16 w-16 text-goldenrod mx-auto mb-4" />
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Scan & Discover
              </h2>
              <p className="text-gray-300 mb-8">
                Point your camera at the QR code to unlock the fun
              </p>
            </div>

            {/* QR Code Display */}
            <div className="flex justify-center mb-8">
              <img 
                src={qrCodeImage} 
                alt="Jotah QR Code" 
                className="w-64 h-64 object-contain rounded-2xl border-2 border-goldenrod/30"
              />
            </div>

            <div className="bg-goldenrod/20 rounded-2xl p-6 mb-6 border border-goldenrod/30">
              <p className="text-goldenrod font-semibold">
                🎉 Limited Time: Scan now for a special surprise!
              </p>
            </div>

            <Button 
              className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-scan-qr"
            >
              Open Camera to Scan
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {funFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-xl p-6 border border-gray-700 hover:border-goldenrod/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-goldenrod to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-3xl p-8 border border-goldenrod/30">
              <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                Join the Premium Experience
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Be part of India's premier rolling paper community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                  data-testid="button-join-community"
                >
                  Join Community
                </Button>
                <Link href="/#contact">
                  <Button 
                    variant="outline"
                    className="border-2 border-goldenrod text-goldenrod hover:bg-goldenrod hover:text-black px-6 py-3 rounded-full font-semibold transition-all"
                    data-testid="button-contact-us"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}