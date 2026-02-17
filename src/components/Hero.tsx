
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/40 z-10" /> {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-4 rounded-full border border-border/30 bg-background/30 backdrop-blur-md text-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase">Dallas, TX</span>
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-[0.9] tracking-tight">
            RHYTHM <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-red-600">&</span> RAILS
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            The heartbeat of the south. Cold beer, live music, and the biggest dance floor in the district.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-foreground font-bold uppercase tracking-wider rounded-none">
              Book a Booth
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-2 border-border text-foreground hover:bg-background hover:text-primary font-bold uppercase tracking-wider rounded-none">
              View Calendar
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-foreground flex flex-col items-center gap-2 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-bold uppercase tracking-widest">Scroll Down</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
