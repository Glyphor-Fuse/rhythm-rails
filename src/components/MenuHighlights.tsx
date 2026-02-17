
import { Star, Utensils } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MENU_ITEMS = [
  {
    category: "Signature Eats",
    items: [
      { name: "The Railhouse Burger", desc: "Double wagyu patty, smoked gouda, bacon jam, brioche.", price: "$18" },
      { name: "Brisket Nachos", desc: "House-smoked brisket, queso blanco, jalapeños, pico de gallo.", price: "$16" },
      { name: "Hot Honey Chicken", desc: "Crispy fried thigh, spicy honey glaze, dill pickles, slaw.", price: "$15" },
    ]
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Lone Star Lager", desc: "Ice cold draft, served in a frosted mug.", price: "$6" },
      { name: "Ranch Water", desc: "Top Chico, Espolòn Blanco, fresh lime juice.", price: "$12" },
      { name: "Smoked Old Fashioned", desc: "Bourbon, maple, angostura bitters, hickory smoke.", price: "$14" },
    ]
  }
];

export default function MenuHighlights() {
  return (
    <section className="py-24 bg-background border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
            <h2 className="font-display text-4xl md:text-5xl text-primary uppercase mb-6">
              Fuel for the <span className="text-accent">Dance Floor</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't do tiny portions. Our kitchen serves up hearty Texas classics with a modern twist, perfect for fueling a long night of two-stepping.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-foreground font-bold uppercase tracking-wider rounded-none h-12 px-8">
              See Full Menu
            </Button>
          </div>

          {/* Menu Grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-16">
            {MENU_ITEMS.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-3 mb-8">
                  {section.category.includes("Eats") ? <Utensils className="text-accent w-6 h-6" /> : <Star className="text-accent w-6 h-6" />}
                  <h3 className="font-display text-2xl text-primary">{section.category}</h3>
                </div>
                
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-1 border-b border-border border-dashed pb-2">
                        <span className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">{item.name}</span>
                        <span className="font-display text-xl text-primary">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
