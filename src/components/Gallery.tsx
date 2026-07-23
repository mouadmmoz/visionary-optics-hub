import { Reveal } from "@/hooks/use-scroll-reveal";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipN9jk923Edw-4ubKxoNpWw2-InI__rLZoJ0nZh9=w800-h450-k-no",
    alt: "Façade NOURANE OPTIC Témara",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOPxM6_YeyZiZIQQwc4J7WIJo9e44FmRQJUO4mz=w400-h400-k-no",
    alt: "Espace accueil et conseil",
    span: "",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMK6DViZKLqJCDfI1xbd4b9h5L5qABTREkLrk_R=w400-h500-k-no",
    alt: "Vitrine du magasin",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=300&fit=crop",
    alt: "Nos montures",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
    alt: "Lunettes de soleil",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    alt: "Collection tendance",
    span: "",
  },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-skyblue/5 rounded-full blur-3xl animate-blob" />
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Notre Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Découvrez notre
            <br />
            <span className="text-gradient">boutique</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Plongez dans l'ambiance chaleureuse de NOURANE OPTIC et explorez nos collections exclusives.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <Reveal
              key={index}
              variant="scale"
              delay={index * 100}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-\[1200ms\] ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-primary/50 rounded-2xl transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-navy-foreground transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif font-semibold text-lg">{image.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
