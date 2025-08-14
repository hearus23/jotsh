import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import RollingPaperShowcase from "@/components/rolling-paper-showcase";
import BrandStory from "@/components/brand-story";
import FindProducts from "@/components/find-products";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <RollingPaperShowcase />
      <BrandStory />
      <FindProducts />
      <ContactSection />
      <Footer />
    </div>
  );
}
