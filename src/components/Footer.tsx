import { Eye, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-skyblue flex items-center justify-center">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold">NOURANE</h2>
                <p className="text-sm text-skyblue font-medium tracking-widest">OPTIC</p>
              </div>
            </a>
            <p className="text-navy-foreground/80 max-w-md leading-relaxed mb-6">
              Votre opticien de confiance à Témara. Nous vous accompagnons pour trouver les lunettes 
              parfaites et prendre soin de votre vision avec expertise et passion.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Lien Facebook Nourane Optic"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/alae_vision_?igsh=MWh0cjE2NW5vM2Y3cQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors pointer-events-auto z-50"
                aria-label="Ouvrir Instagram Nourane Optic"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-navy-foreground/80 hover:text-skyblue transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-navy-foreground/80 hover:text-skyblue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-navy-foreground/80 hover:text-skyblue transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#avis" className="text-navy-foreground/80 hover:text-skyblue transition-colors">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-foreground/80 hover:text-skyblue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-skyblue shrink-0 mt-0.5" />
                <span className="text-navy-foreground/80">
                  N 11, Av. Mohammed V<br />
                  Témara 12000, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-skyblue shrink-0" />
                <a href="tel:+212661504850" className="text-navy-foreground/80 hover:text-skyblue transition-colors">
                  +212 661-504850
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-skyblue shrink-0" />
                <span className="text-navy-foreground/80">
                  Lun - Sam: 9h - 21h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-foreground/60 text-sm">
            © 2024 NOURANE OPTIC. Tous droits réservés.
          </p>
          <a 
            href="https://maps.app.goo.gl/WSnixQVHTjUf7gLs7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-skyblue hover:text-skyblue/80 transition-colors text-sm"
          >
            <MapPin className="w-4 h-4" />
            Voir sur Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
