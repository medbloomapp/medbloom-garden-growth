import { Sprout } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 sm:py-12 lg:py-xl px-4 sm:px-6 lg:px-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-lg">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-foreground">
            <Sprout className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span>MedBloom</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-lg text-sm sm:text-base">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-xl pt-6 sm:pt-8 lg:pt-lg border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            MedBloom is not a replacement for professional medical advice. 
            Always consult your healthcare provider regarding your medications and treatment plans.
          </p>
          <p className="text-xs text-muted-foreground mt-3 sm:mt-md">
            © {new Date().getFullYear()} MedBloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
