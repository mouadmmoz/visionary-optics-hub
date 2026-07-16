import { Button } from "@/components/ui/button";
import { Eye, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-light via-background to-background" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-skyblue/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-float" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-skyblue/30 rounded-full animate-float" style={{ animationDelay: '1s', transform: `translateY(${scrollY * -0.15}px)` }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Reveal variant="up" className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Votre vision, notre priorité
            </Reveal>

            <Reveal as="h1" variant="up" delay={100} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="text-foreground">Voyez la vie</span>
              <br />
              <span className="shimmer-text">avec clarté</span>
            </Reveal>

            <Reveal variant="up" delay={200} className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Chez NOURANE OPTIC, nous vous offrons des lunettes de qualité supérieure, 
              des examens de vue professionnels et un service personnalisé pour sublimer votre regard.
            </Reveal>

            <Reveal variant="up" delay={300} className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Reveal>

            {/* Stats */}
            <Reveal variant="up" delay={400} className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary transition-transform hover:scale-110">4.9★</p>
                <p className="text-sm text-muted-foreground">Note Google</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground transition-transform hover:scale-110">500+</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground transition-transform hover:scale-110">10+</p>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
            </Reveal>
          </div>

          {/* Hero image */}
          <Reveal variant="right" delay={200} className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=700&fit=crop"
                alt="Collection de lunettes NOURANE OPTIC"
                className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border animate-scale-in z-20 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center glow-ring">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Examen gratuit</p>
                  <p className="text-sm text-muted-foreground">Test de vue complet</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
