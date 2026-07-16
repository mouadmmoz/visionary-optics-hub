import { Eye, Glasses, Sun, Shield, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Eye,
    title: "Examen de Vue",
    description: "Tests de vue complets et précis avec équipement moderne pour détecter tout problème visuel.",
  },
  {
    icon: Glasses,
    title: "Lunettes de Vue",
    description: "Large choix de montures tendance et classiques avec verres correcteurs haute qualité.",
  },
  {
    icon: Sun,
    title: "Lunettes de Soleil",
    description: "Collection de lunettes solaires avec protection UV 100% et styles variés.",
  },
  {
    icon: Shield,
    title: "Lentilles de Contact",
    description: "Lentilles journalières, mensuelles et de couleur adaptées à vos besoins.",
  },
  {
    icon: Zap,
    title: "Réparation Express",
    description: "Service de réparation rapide pour vos montures et ajustements personnalisés.",
  },
  {
    icon: Heart,
    title: "Conseil Personnalisé",
    description: "Accompagnement expert pour choisir les lunettes parfaites selon votre visage.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Nos Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Une expertise complète
            <br />
            <span className="text-gradient">pour votre vision</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            NOURANE OPTIC vous propose une gamme complète de services optiques 
            pour prendre soin de vos yeux au quotidien.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} variant="up" delay={index * 80}>
              <Card
                className="group bg-card border-border hover:border-primary/50 hover-lift transition-all duration-500 overflow-hidden relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-skyblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardContent className="p-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-skyblue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-primary/30">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
