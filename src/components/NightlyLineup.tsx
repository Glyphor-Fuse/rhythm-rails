
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Music, Clock, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type EventType = "bands" | "lessons";

const SCHEDULE_DATA = {
  bands: [
    { id: 1, date: "TONIGHT", act: "The Neon Drifters", time: "9:00 PM", genre: "Outlaw Country", image: "/images/band-1.png" },
    { id: 2, date: "FRI, OCT 24", act: "Dusty Boots & The Spurs", time: "9:30 PM", genre: "Red Dirt", image: "/images/band-2.png" },
    { id: 3, date: "SAT, OCT 25", act: "Sarah Rose Trio", time: "8:00 PM", genre: "Modern Folk", image: "/images/band-3.png" },
    { id: 4, date: "SUN, OCT 26", act: "Sunday Swing Kings", time: "7:00 PM", genre: "Western Swing", image: "/images/band-1.png" },
  ],
  lessons: [
    { id: 1, date: "TONIGHT", act: "Two-Step Basics", time: "7:00 PM", level: "Beginner", image: "/images/lesson-1.png" },
    { id: 2, date: "FRI, OCT 24", act: "Line Dance: Tush Push", time: "8:00 PM", level: "All Levels", image: "/images/lesson-2.png" },
    { id: 3, date: "SAT, OCT 25", act: "Advanced Waltz", time: "6:00 PM", level: "Advanced", image: "/images/lesson-1.png" },
    { id: 4, date: "SUN, OCT 26", act: "Couples Pattern", time: "5:30 PM", level: "Intermediate", image: "/images/lesson-2.png" },
  ]
};

export default function NightlyLineup() {
  const [activeTab, setActiveTab] = useState<EventType>("bands");
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-primary uppercase tracking-tight mb-4">
            Nightly <span className="text-accent">Lineup</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-lg">
            From the best local acts to our legendary dance instructors, there's always something happening on the rails.
          </p>
        </div>
        
        {/* Toggle Switch */}
        <div className="bg-background p-4.5 rounded-full border border-border inline-flex shadow-sm">
          <button
            onClick={() => setActiveTab("bands")}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "bands" 
                ? "bg-primary text-primary-foreground shadow-md" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Live Bands
          </button>
          <button
            onClick={() => setActiveTab("lessons")}
            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "lessons" 
                ? "bg-accent text-accent-foreground shadow-md" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Dance Lessons
          </button>
        </div>
      </div>

      {/* Scroll Container */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide">
        <AnimatePresence mode="popLayout">
          {SCHEDULE_DATA[activeTab].map((item) => (
            <motion.div
              key={`${activeTab}-${item.id}`}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.4, type: "spring" }}
              className="min-w-[300px] md:min-w-[400px] snap-center"
            >
              <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-border/50 bg-background">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.act} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-auto inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-4 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>

                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-3xl text-foreground mb-2 leading-none">{item.act}</h3>
                    
                    <div className="flex items-center gap-4 text-foreground/80 mb-6 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-accent" />
                        {item.time}
                      </span>
                      <span className="w-1 h-1 bg-background/40 rounded-full" />
                      <span className="flex items-center gap-1.5">
                        {activeTab === 'bands' ? <Music className="w-4 h-4 text-accent" /> : <Star className="w-4 h-4 text-accent" />}
                        {activeTab === 'bands' ? (item as any).genre : (item as any).level}
                      </span>
                    </div>

                    <Button className="w-full bg-background text-primary hover:bg-background/90 font-bold tracking-wide">
                      {activeTab === 'bands' ? 'Get Tickets' : 'Reserve Spot'} <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Spacer for right padding */}
        <div className="min-w-[20px]" />
      </div>
    </section>
  );
}
