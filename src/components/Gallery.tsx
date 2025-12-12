const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop",
    alt: "Collection de lunettes",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=400&fit=crop",
    alt: "Lunettes de soleil",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
    alt: "Examen de vue",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=300&fit=crop",
    alt: "Intérieur du magasin",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop",
    alt: "Montures design",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?w=400&h=400&fit=crop",
    alt: "Collection premium",
    span: "",
  },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Notre Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Découvrez notre
            <br />
            <span className="text-gradient">univers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Plongez dans l'ambiance chaleureuse de notre boutique et explorez nos collections exclusives.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${image.span}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-navy-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                <p className="font-serif font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
