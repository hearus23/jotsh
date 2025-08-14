import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const productLinks = [
    "Classic Rolling Papers",
    "Premium Collection", 
    "Special Editions",
    "Bulk Orders"
  ];

  const companyLinks = [
    "About Us",
    "Our Story", 
    "Quality Standards",
    "Contact"
  ];

  const supportLinks = [
    "FAQ",
    "Retail Partners",
    "Track Order",
    "Support"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-goldenrod/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-playfair font-bold bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent mb-4">
              JOTAH
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium Indian rolling paper brand, crafted with quality materials and uncompromising standards for the discerning smoker.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 text-goldenrod mr-3" />
                <span className="text-sm">pandey.shourya786@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 text-goldenrod mr-3" />
                <span className="text-sm">+91 9205617375</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 text-goldenrod mr-3" />
                <span className="text-sm">Gurgaon, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-goldenrod transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-goldenrod transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-goldenrod transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-white font-semibold mb-3 text-sm">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-goldenrod hover:text-black transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Premium Banner */}
        <div className="bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-2xl p-6 border border-goldenrod/30 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 text-goldenrod font-semibold">
              <span className="flex items-center">
                <span className="text-2xl mr-2">🇮🇳</span>
                Made in India
              </span>
              <span className="hidden md:block w-1 h-6 bg-goldenrod/50"></span>
              <span className="flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Premium Quality
              </span>
              <span className="hidden md:block w-1 h-6 bg-goldenrod/50"></span>
              <span className="flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                Indian Brand
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Jotah. All rights reserved. Premium Indian rolling paper brand.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-goldenrod transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-goldenrod transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-goldenrod transition-colors">
                Quality Assurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}