
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NightlyLineup from "./components/NightlyLineup";
import MenuHighlights from "./components/MenuHighlights";
import VenueGallery from "./components/VenueGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white">
          <Navbar />
          <Hero />
          <NightlyLineup />
          <MenuHighlights />
          <VenueGallery />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
