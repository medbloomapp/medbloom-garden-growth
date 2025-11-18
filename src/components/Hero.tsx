import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { PlantAvatar } from "./PlantAvatar";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent to-primary py-xxl px-lg">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-xl lg:grid-cols-2 lg:gap-xxl items-center">
          {/* Left: Content */}
          <div className="space-y-lg text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-foreground">
              <Sprout className="h-8 w-8 text-primary-foreground" />
              <span>MedBloom</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Grow better medication habits, one dose at a time.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              MedBloom helps you stay on top of your medications while loved ones can safely check in and get peace-of-mind updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-md justify-center lg:justify-start pt-md">
              <Button 
                size="lg" 
                className="text-lg px-xl py-lg h-auto rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection('pricing')}
              >
                Get MedBloom Premium
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-xl py-lg h-auto rounded-lg bg-card hover:bg-card/80"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Right: Dashboard Preview Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl p-lg space-y-md border border-border">
              <div className="flex items-center justify-between pb-sm border-b border-border">
                <h3 className="text-lg font-semibold text-foreground">Your Health Dashboard</h3>
                <Sprout className="h-5 w-5 text-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-md border border-success/20">
                  <div className="text-sm text-muted-foreground mb-1">Day Streak</div>
                  <div className="text-3xl font-bold text-success">14</div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-md border border-primary/20">
                  <div className="text-sm text-muted-foreground mb-1">Total Doses</div>
                  <div className="text-3xl font-bold text-primary">127</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card to-muted rounded-xl p-md space-y-sm border border-border">
                <div className="text-sm font-semibold text-foreground">Your Plant</div>
                <div className="flex items-center justify-center py-md">
                  <PlantAvatar stage={5} className="w-40 h-32" />
                </div>
                <p className="text-xs text-center text-muted-foreground italic">
                  "You're doing a great job. Every small step matters."
                </p>
              </div>

              <div className="bg-muted rounded-xl p-md border border-border">
                <div className="text-sm font-semibold text-foreground mb-2">Recent Entries</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Morning meds</span>
                    <span className="text-success">✓ Taken</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Evening dose</span>
                    <span className="text-success">✓ Taken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
