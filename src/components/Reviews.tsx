import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Fatima Z.",
    rating: 5,
    text: "Excellent service ! L'équipe est très professionnelle et à l'écoute. J'ai trouvé des lunettes parfaites pour moi.",
    date: "Il y a 2 semaines",
  },
  {
    name: "Mohammed A.",
    rating: 5,
    text: "Je recommande vivement NOURANE OPTIC. Très bon accueil, prix raisonnables et large choix de montures.",
    date: "Il y a 1 mois",
  },
  {
    name: "Sara M.",
    rating: 5,
    text: "Service impeccable ! L'examen de vue était très complet et les conseils vraiment personnalisés.",
    date: "Il y a 1 mois",
  },
  {
    name: "Karim B.",
    rating: 5,
    text: "Boutique moderne avec un personnel accueillant. Les lunettes sont de très bonne qualité.",
    date: "Il y a 2 mois",
  },
  {
    name: "Amina H.",
    rating: 5,
    text: "Très satisfaite de mon achat ! Les verres progressifs sont parfaits et le service après-vente est top.",
    date: "Il y a 3 mois",
  },
  {
    name: "Youssef L.",
    rating: 5,
    text: "NOURANE OPTIC est devenu mon opticien de confiance. Qualité et service au rendez-vous !",
    date: "Il y a 3 mois",
  },
];

const Reviews = () => {
  return (
    <section id="avis" className="py-24 bg-navy text-navy-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-skyblue/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-skyblue font-medium mb-4 tracking-wider uppercase text-sm">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ce que disent
            <br />
            nos clients
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-skyblue text-skyblue animate-scale-in" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-navy-foreground/70">sur Google</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Reveal key={index} variant="up" delay={index * 80}>
              <Card
                className="bg-background/10 border-background/20 backdrop-blur-sm hover:bg-background/20 hover-lift transition-all duration-500 h-full group"
              >
                <CardContent className="p-6">
                <Quote className="w-10 h-10 text-skyblue/50 mb-4" />
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-skyblue text-skyblue" />
                  ))}
                </div>
                <p className="text-navy-foreground/90 mb-4 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-background/20">
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-navy-foreground/60">{review.date}</p>
                  </div>
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    className="h-5 opacity-70"
                  />
                </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://maps.app.goo.gl/WSnixQVHTjUf7gLs7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-skyblue hover:text-skyblue/80 transition-colors font-medium"
          >
            Voir tous les avis sur Google Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
