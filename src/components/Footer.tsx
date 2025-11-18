import { Sprout } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-xl px-lg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-lg">
          <div className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Sprout className="h-6 w-6 text-primary" />
            <span>MedBloom</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-lg">
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

        <div className="mt-xl pt-lg border-t border-border text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            MedBloom is not a replacement for professional medical advice. 
            Always consult your healthcare provider regarding your medications and treatment plans.
          </p>
          <p className="text-xs text-muted-foreground mt-md">
            © 2024 MedBloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
