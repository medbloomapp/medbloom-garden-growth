import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
    <section id="pricing" className="py-xxl px-lg bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-xxl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-md">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade anytime to unlock the full MedBloom experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-xl max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-card rounded-2xl p-xl border border-border shadow-sm">
            <div className="text-center mb-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {freePlan.name}
              </h3>
              <div className="mb-md">
                <span className="text-4xl font-bold text-foreground">{freePlan.price}</span>
                <span className="text-muted-foreground ml-2">{freePlan.period}</span>
              </div>
            </div>

            <ul className="space-y-md mb-xl">
              {freePlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-sm">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
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
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-xl border-2 border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-lg py-xs rounded-full text-sm font-semibold shadow-md">
              Most Popular
            </div>

            <div className="text-center mb-lg">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {premiumPlan.name}
              </h3>
              <div className="mb-md">
                <span className="text-4xl font-bold text-foreground">{premiumPlan.price}</span>
                <span className="text-muted-foreground ml-2">{premiumPlan.period}</span>
              </div>
            </div>

            <ul className="space-y-md mb-xl">
              {premiumPlan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-sm">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
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
            
            <p className="text-xs text-center text-muted-foreground mt-md">
              Cancel anytime. No commitments.
            </p>
          </div>
        </div>

        <div className="mt-xl text-center">
          <p className="text-sm text-muted-foreground">
            All plans include secure data encryption and HIPAA-compliant storage
          </p>
        </div>
      </div>
    </section>
  );
};
