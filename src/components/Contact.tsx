import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Contactez-nous
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Venez nous
            <br />
            <span className="text-gradient">rendre visite</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Notre équipe vous accueille du lundi au samedi pour vous conseiller et prendre soin de votre vision.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <Reveal variant="left" className="space-y-6">
            <Card className="bg-card border-border hover-lift transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-skyblue flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">N 11, mag. 2 Av. Mohammed V</p>
                  <p className="text-muted-foreground">Témara 12000, Maroc</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover-lift transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-skyblue flex items-center justify-center shrink-0 shadow-lg shadow-primary/30 glow-ring">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1">Téléphone</h3>
                  <a href="tel:+212661504850" className="text-primary hover:underline font-medium">
                    +212 661-504850
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">Appelez-nous pour un rendez-vous</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover-lift transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-skyblue flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-1">Horaires</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lundi - Samedi: <span className="text-foreground font-medium">9h - 21h</span></p>
                    <p>Dimanche: <span className="text-destructive font-medium">Fermé</span></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <a href="tel:+212661504850" className="w-full">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Phone className="w-5 h-5 mr-2" />
                Appeler maintenant
              </Button>
            </a>
          </Reveal>

          {/* Map */}
          <Reveal variant="right" className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-border hover-lift relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1!2d-6.923847!3d33.9136229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7130993e5b247%3A0xc15d739a65ddf7ce!2sNOURANE%20OPTIC!5e0!3m2!1sfr!2sma!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NOURANE OPTIC - Localisation Google Maps"
            />
            <a
              href="https://www.google.com/maps/place/NOURANE+OPTIC/@33.9136231,-6.9243852,19z"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 bg-white text-primary text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ouvrir dans Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
