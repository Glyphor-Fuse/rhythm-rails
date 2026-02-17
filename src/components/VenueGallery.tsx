
import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Reusing existing images to stay within limits
const IMAGES = [
  { src: "/images/gallery-1.png", alt: "Crowd dancing", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/band-1.png", alt: "Guitarist close up", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/lesson-2.png", alt: "Couple dancing", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/menu-hero.png", alt: "Bar Food", span: "md:col-span-1 md:row-span-2" },
  { src: "/images/band-2.png", alt: "Full Band", span: "md:col-span-2 md:row-span-1" },
];

export default function VenueGallery() {
  return (
    <section className="py-24 bg-primary text-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-4">
          Capture the <span className="text-accent">Moment</span>
        </h2>
        <p className="text-foreground/70 max-w-xl mx-auto">
          Every night tells a story. See what goes down when the lights go down.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-lg group ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-accent text-foreground flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <Play className="w-6 h-6 fill-current" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
