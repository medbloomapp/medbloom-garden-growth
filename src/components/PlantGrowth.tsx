import { PlantAvatar } from "./PlantAvatar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const PlantGrowth = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stages = [
    { stage: 0, label: "Seed", description: "Your seed of health has been planted 🌱" },
    { stage: 1, label: "Sprout", description: "First signs of growth appear" },
    { stage: 2, label: "Young Plant", description: "Developing healthy habits" },
    { stage: 3, label: "Growing", description: "Building consistency" },
    { stage: 4, label: "Budding", description: "Nearly there! Buds are forming" },
    { stage: 5, label: "Blooming", description: "First flowers appear" },
    { stage: 6, label: "Full Bloom", description: "Thriving health garden 🌸" }
  ];

  return (
    <section 
      id="plant-growth"
      ref={ref}
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-md px-4">
            Your Health Garden
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Watch your plant grow as you build consistent medication habits. 
            Each dose you take nurtures your health garden. This visual motivation is 
            encouraging, never shaming.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-border" />
            
            <div className="grid grid-cols-7 gap-2">
              {stages.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  
                  <div className="flex flex-col items-center">
                    <div className="bg-card rounded-xl p-md border border-border shadow-sm mb-md h-48 flex items-center justify-center">
                      <PlantAvatar stage={item.stage} className="w-full h-full" />
                    </div>
                    
                    <div className="text-center space-y-1 mt-lg">
                      <div className="text-xs font-semibold text-primary">
                        Stage {item.stage}
                      </div>
                      <div className="text-sm font-bold text-foreground">
                        {item.label}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden space-y-6 sm:space-y-8 lg:space-y-xl">
          {stages.map((item, index) => (
            <div key={index} className="flex gap-3 sm:gap-4 lg:gap-lg items-start">
              <div className="flex-shrink-0 relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold border-2 sm:border-4 border-background shadow-md text-sm sm:text-base">
                  {item.stage}
                </div>
                {index < stages.length - 1 && (
                  <div className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-16 sm:h-20 lg:h-24 bg-border" />
                )}
              </div>
              
              <div className="flex-1 bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-lg border border-border shadow-sm">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-md items-center">
                  <div className="flex-shrink-0">
                    <PlantAvatar stage={item.stage} className="w-24 h-20 sm:w-32 sm:h-24" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-xxl text-center bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-xl border border-border shadow-sm max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-foreground font-medium mb-2 sm:mb-sm">
            Every dose is a small win.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            You're growing stronger habits, one day at a time. Missing a dose slows growth, 
            but it never makes your plant wilt. Just keep going! 🌱
          </p>
        </div>
      </div>
    </section>
  );
};
