
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-display text-4xl mb-6">Rhythm <br/>& Rails</h2>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-foreground rounded-full"><Instagram className="w-5 h-5" /></Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-foreground rounded-full"><Facebook className="w-5 h-5" /></Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-foreground rounded-full"><Twitter className="w-5 h-5" /></Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-accent mb-6">Contact</h4>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <span>1200 Commerce St,<br/>Deep Ellum, Dallas, TX 75226</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(214) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>booking@rhythmrails.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-accent mb-6">Hours</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex justify-between"><span>Mon - Wed</span> <span>Closed</span></li>
              <li className="flex justify-between"><span>Thursday</span> <span>5PM - 12AM</span></li>
              <li className="flex justify-between"><span>Friday</span> <span>5PM - 2AM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>4PM - 2AM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>4PM - 10PM</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-accent mb-6">Join the Club</h4>
            <p className="text-sm text-foreground/60 mb-4">Get first dibs on concert tickets and VIP tables.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-background/10 border border-border/20 rounded-none px-4 py-2 text-sm w-full focus:outline-none focus:border-accent text-foreground"
              />
              <Button className="bg-accent hover:bg-accent/90 rounded-none">OK</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40 uppercase tracking-widest">
          <p>© 2024 Rhythm & Rails. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
