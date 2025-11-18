import { Heart, Bell, Shield } from "lucide-react";

export const LovedOnesSection = () => {
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
    <section className="py-xxl px-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-xxl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-md">
            For Loved Ones & Caregivers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MedBloom is also a platform for people to check in on their loved ones. 
            Give your family and caregivers peace of mind, without feeling watched.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-xl">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-secondary/10 rounded-xl p-md w-fit mb-lg">
                <feature.icon className="h-8 w-8 text-secondary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-sm">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-xl text-center">
          <p className="text-muted-foreground italic">
            "Stay informed without nagging. Peace of mind for families and caregivers."
          </p>
        </div>
      </div>
    </section>
  );
};
