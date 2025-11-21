import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { PlantAvatar } from "./PlantAvatar";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent to-primary py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-xxl items-center">
          {/* Left: Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-lg text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              <Sprout className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              <span>MedBloom</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight px-4 sm:px-0">
              Grow better medication habits, one dose at a time.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
              MedBloom helps you stay on top of your medications while loved ones can safely check in and get peace-of-mind updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-md justify-center lg:justify-start pt-2 sm:pt-md px-4 sm:px-0">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-xl py-3 sm:py-lg h-auto rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                onClick={() => scrollToSection('pricing')}
              >
                Get MedBloom Premium
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-xl py-3 sm:py-lg h-auto rounded-lg bg-card hover:bg-card/80 w-full sm:w-auto"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn How It Works
              </Button>
            </div>
          </div>

          {/* Right: Dashboard Preview Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-card rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-lg space-y-3 sm:space-y-md border border-border">
              <div className="flex items-center justify-between pb-2 sm:pb-sm border-b border-border">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Your Health Dashboard</h3>
                <Sprout className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-md">
                <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-lg sm:rounded-xl p-3 sm:p-md border border-success/20">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Day Streak</div>
                  <div className="text-2xl sm:text-3xl font-bold text-success">14</div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg sm:rounded-xl p-3 sm:p-md border border-primary/20">
                  <div className="text-xs sm:text-sm text-muted-foreground mb-1">Total Doses</div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">127</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card to-muted rounded-lg sm:rounded-xl p-3 sm:p-md space-y-2 sm:space-y-sm border border-border">
                <div className="text-xs sm:text-sm font-semibold text-foreground">Your Plant</div>
                <div className="flex items-center justify-center py-2 sm:py-md">
                  <PlantAvatar stage={5} className="w-32 h-24 sm:w-40 sm:h-32" />
                </div>
                <p className="text-xs text-center text-muted-foreground italic">
                  "You're doing a great job. Every small step matters."
                </p>
              </div>

              <div className="bg-muted rounded-lg sm:rounded-xl p-3 sm:p-md border border-border">
                <div className="text-xs sm:text-sm font-semibold text-foreground mb-2">Recent Entries</div>
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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
