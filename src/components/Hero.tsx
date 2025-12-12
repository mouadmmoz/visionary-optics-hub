import { Button } from "@/components/ui/button";
import { Eye, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-light via-background to-background" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-skyblue/10 rounded-full blur-3xl" />

      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 border-2 border-skyblue/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Votre vision, notre priorité
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              <span className="text-foreground">Voyez la vie</span>
              <br />
              <span className="text-gradient">avec clarté</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Chez NOURANE OPTIC, nous vous offrons des lunettes de qualité supérieure, 
              des examens de vue professionnels et un service personnalisé pour sublimer votre regard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 group">
                  Découvrir nos services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Note Google</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=700&fit=crop"
                alt="Collection de lunettes NOURANE OPTIC"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border animate-scale-in z-20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Examen gratuit</p>
                  <p className="text-sm text-muted-foreground">Test de vue complet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
