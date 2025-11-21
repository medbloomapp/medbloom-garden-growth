import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const handleSubscribe = async () => {
    setIsLoading(true);
    
    // TODO: Replace with actual Stripe integration via Lovable Cloud
    // This is a placeholder - you'll need to:
    // 1. Enable Lovable Cloud
    // 2. Add Stripe secret key to secrets
    // 3. Create an edge function to handle checkout session creation
    
    toast({
      title: "Coming soon!",
      description: "Stripe checkout will be integrated via Lovable Cloud. Contact support to enable premium features.",
    });
    
    setIsLoading(false);
  };

  const freePlan = {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Basic medication reminders",
      "Simple health dashboard",
      "Day streak tracking",
      "1 loved one check-in",
      "Plant avatar (stages 0-3)"
    ]
  };

  const premiumPlan = {
    name: "MedBloom Premium",
    price: "$9.99",
    period: "per month",
    features: [
      "Everything in Free",
      "Advanced analytics & insights",
      "Unlimited loved ones",
      "Full plant growth (all stages)",
      "Priority notifications",
      "Rich affirmations & journaling",
      "Weekly adherence reports",
      "Customizable themes & tones",
      "Export health data"
    ]
  };

  return (
    <section 
      id="pricing" 
      ref={ref}
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg bg-background transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-md px-4">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Start free and upgrade anytime to unlock the full MedBloom experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-xl max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-xl border border-border shadow-sm">
            <div className="text-center mb-6 sm:mb-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {freePlan.name}
              </h3>
              <div className="mb-3 sm:mb-md">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">{freePlan.price}</span>
                <span className="text-sm sm:text-base text-muted-foreground ml-2">{freePlan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-md mb-6 sm:mb-8 lg:mb-xl">
              {freePlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-sm">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
            >
              Get Started Free
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-xl border-2 border-primary shadow-lg relative">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 sm:px-lg py-1 sm:py-xs rounded-full text-xs sm:text-sm font-semibold shadow-md whitespace-nowrap">
              Most Popular
            </div>

            <div className="text-center mb-6 sm:mb-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                {premiumPlan.name}
              </h3>
              <div className="mb-3 sm:mb-md">
                <span className="text-3xl sm:text-4xl font-bold text-foreground">{premiumPlan.price}</span>
                <span className="text-sm sm:text-base text-muted-foreground ml-2">{premiumPlan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-md mb-6 sm:mb-8 lg:mb-xl">
              {premiumPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-sm">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="w-full shadow-lg" 
              size="lg"
              onClick={handleSubscribe}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Subscribe to Premium"}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-3 sm:mt-md">
              Cancel anytime. No commitments.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-xl text-center px-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            All plans include secure data encryption and HIPAA-compliant storage
          </p>
        </div>
      </div>
    </section>
  );
};
