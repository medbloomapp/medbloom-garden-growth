import { Heart, Bell, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const LovedOnesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: Heart,
      title: "Add Loved Ones",
      description: "Invite family members and caregivers to your care circle with a simple invite code."
    },
    {
      icon: Bell,
      title: "Gentle Check-Ins",
      description: "They can see medication status without being intrusive. Stay informed without nagging."
    },
    {
      icon: Shield,
      title: "Peace of Mind",
      description: "Receive gentle alerts if doses are missed, helping everyone stay on the same page."
    }
  ];

  return (
    <section 
      id="loved-ones"
      ref={ref}
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg bg-gradient-to-br from-secondary/5 to-secondary/10 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-md px-4">
            For Loved Ones & Caregivers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            MedBloom is also a platform for people to check in on their loved ones. 
            Give your family and caregivers peace of mind, without feeling watched.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-xl">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-secondary/10 rounded-lg sm:rounded-xl p-3 sm:p-md w-fit mb-4 sm:mb-lg">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-sm">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-xl text-center px-4">
          <p className="text-sm sm:text-base text-muted-foreground italic">
            "Stay informed without nagging. Peace of mind for families and caregivers."
          </p>
        </div>
      </div>
    </section>
  );
};
