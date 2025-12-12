import { Eye, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+212661504850" className="flex items-center gap-2 hover:text-skyblue transition-colors">
              <Phone className="w-4 h-4" />
              <span>+212 661-504850</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Lun - Sam: 9h - 21h</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>N 11, Av. Mohammed V, Témara</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-skyblue flex items-center justify-center">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-foreground">NOURANE</h1>
              <p className="text-sm text-primary font-medium tracking-widest">OPTIC</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors font-medium">Accueil</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
            <a href="#galerie" className="text-foreground hover:text-primary transition-colors font-medium">Galerie</a>
            <a href="#avis" className="text-foreground hover:text-primary transition-colors font-medium">Avis</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          <a href="tel:+212661504850">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
