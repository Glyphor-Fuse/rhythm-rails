
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Is there a cover charge?", a: "Cover charge varies by night and event. Typically $10 on weekends, but free for ladies before 10PM. Check the Nightly Lineup for specific event details." },
  { q: "Do you offer dance lessons for beginners?", a: "Absolutely. Every Friday and Saturday at 8PM, we host free line dancing and two-step lessons with paid entry. No partner required!" },
  { q: "Can I reserve a table?", a: "Yes! We have VIP booths available for reservation. They book up fast on weekends, so we recommend booking at least 3 days in advance." },
  { q: "What is the dress code?", a: "Smart casual with a western flare. No athletic wear, gym shorts, or flip-flops. Boots and hats are highly encouraged." },
  { q: "Is the venue 21+?", a: "We are 21+ after 9PM. Families are welcome for dinner and early music sets before then." },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl text-primary uppercase mb-4">Common Questions</h2>
          <p className="text-muted-foreground">Everything you need to know before you head to the rails.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50">
              <AccordionTrigger className="text-lg font-bold text-primary hover:text-accent text-left py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
