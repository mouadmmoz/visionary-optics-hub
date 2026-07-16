import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BrandsMarquee from "@/components/BrandsMarquee";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Intro overlay */}
      <div className="intro-overlay fixed inset-0 z-[100] bg-navy flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-4 animate-scale-in">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-skyblue flex items-center justify-center shadow-2xl shadow-primary/50 glow-ring">
            <Eye className="w-10 h-10 text-white" />
          </div>
          <p className="text-white font-serif text-3xl tracking-widest shimmer-text">NOURANE OPTIC</p>
        </div>
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <BrandsMarquee />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
