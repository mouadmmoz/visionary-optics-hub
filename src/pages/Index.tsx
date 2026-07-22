import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BrandsMarquee from "@/components/BrandsMarquee";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-inner">
            <div className="intro-ring" />
            <h1 className="intro-title shimmer-text">NOURANE OPTIC</h1>
            <p className="intro-sub">Votre vision, notre passion</p>
          </div>
        </div>
      )}
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
