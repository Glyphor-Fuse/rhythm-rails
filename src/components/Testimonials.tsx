
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const REVIEWS = [
  { name: "Jake D.", role: "Regular", text: "Best sound system in Dallas. The bands they book are top tier.", img: "https://i.pravatar.cc/150?u=1" },
  { name: "Sarah M.", role: "Dancer", text: "The dance floor is massive and smooth. Love the Friday lessons!", img: "https://i.pravatar.cc/150?u=2" },
  { name: "Mike T.", role: "Local", text: "Great drinks, better atmosphere. The brisket nachos are a must.", img: "https://i.pravatar.cc/150?u=3" },
  { name: "Emily R.", role: "Visitor", text: "Stumbled in on a Tuesday and had the night of my life.", img: "https://i.pravatar.cc/150?u=4" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="font-display text-4xl text-primary uppercase">Heard on the <span className="text-accent">Rails</span></h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-scroll whitespace-nowrap gap-6 py-4">
          {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="w-[350px] md:w-[450px] bg-background p-8 rounded-xl shadow-sm border border-border/50 flex-shrink-0 whitespace-normal">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-accent fill-current" />)}
              </div>
              <p className="text-lg text-foreground mb-6 font-medium leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={review.img} />
                  <AvatarFallback className="bg-primary text-foreground">{review.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 hidden md:block" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 hidden md:block" />
      </div>
    </section>
  );
}
