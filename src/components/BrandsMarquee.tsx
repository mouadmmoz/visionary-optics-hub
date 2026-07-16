const brands = [
  "RAY-BAN",
  "OAKLEY",
  "GUCCI",
  "PRADA",
  "DIOR",
  "VERSACE",
  "PERSOL",
  "TOM FORD",
  "CARTIER",
  "CHANEL",
];

const BrandsMarquee = () => {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-12 bg-navy text-navy-foreground overflow-hidden border-y border-primary/20">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-xs tracking-[0.3em] text-skyblue uppercase">Nos marques partenaires</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap gap-16">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="font-serif text-3xl md:text-4xl font-bold tracking-widest text-navy-foreground/40 hover:text-skyblue transition-colors duration-300"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;