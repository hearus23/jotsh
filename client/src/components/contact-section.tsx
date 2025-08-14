import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: ""
        });
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "pandey.shourya786@gmail.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9205617375",
      description: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Gurgaon, India",
      description: "Made in India with pride"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-goldenrod to-yellow-400 bg-clip-text text-transparent text-sm font-bold tracking-widest uppercase">
              Contact Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">
            Get in <span className="text-goldenrod">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our rolling papers? Want to become a retail partner? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-goldenrod to-transparent mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-3xl p-8 border border-goldenrod/20">
              <h3 className="text-3xl font-playfair font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We're always excited to connect with our customers and potential partners. 
                Reach out to us for any queries about our premium rolling papers.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-goldenrod to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-goldenrod font-medium mb-1">{info.content}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Note */}
            <div className="bg-gradient-to-r from-goldenrod/20 to-yellow-400/20 rounded-2xl p-6 border border-goldenrod/30">
              <div className="text-center">
                <div className="text-4xl mb-3">🇮🇳</div>
                <h4 className="text-white font-bold text-lg mb-2">Premium Indian Rolling Paper Brand</h4>
                <p className="text-gray-300 text-sm">
                  Proudly serving the Indian market with premium quality rolling papers
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-8 border border-gray-700">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-goldenrod mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-gray-300 mb-6">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black px-6 py-2 rounded-full font-bold"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-goldenrod"
                        placeholder="Your name"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-goldenrod"
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-goldenrod"
                        placeholder="+91 98765 43210"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Inquiry Type *
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white focus:border-goldenrod" data-testid="select-inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="general" className="text-white hover:bg-gray-700">General Inquiry</SelectItem>
                          <SelectItem value="product" className="text-white hover:bg-gray-700">Rolling Paper Information</SelectItem>
                          <SelectItem value="retail" className="text-white hover:bg-gray-700">Retail Partnership</SelectItem>
                          <SelectItem value="bulk" className="text-white hover:bg-gray-700">Bulk Orders</SelectItem>
                          <SelectItem value="quality" className="text-white hover:bg-gray-700">Quality Questions</SelectItem>
                          <SelectItem value="other" className="text-white hover:bg-gray-700">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-goldenrod min-h-[120px]"
                      placeholder="Tell us about your inquiry..."
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-goldenrod to-yellow-400 hover:from-yellow-400 hover:to-goldenrod text-black py-3 rounded-full font-bold transition-all transform hover:scale-105 disabled:opacity-50"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}