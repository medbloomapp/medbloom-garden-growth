import { Pill, TrendingUp, BookHeart } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Pill,
      title: "Add Your Medications",
      description: "Add your medications and schedule with just a few taps. Set custom reminders that fit your routine."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Health Garden",
      description: "Take doses on time and watch your plant avatar grow from a tiny seed to a beautiful blooming flower."
    },
    {
      icon: BookHeart,
      title: "Track Your Progress",
      description: "Monitor your adherence with streaks, write in your health journal, and receive daily affirmations."
    }
  ];

  return (
    <section id="how-it-works" className="py-xxl px-lg bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-xxl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-md">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to better medication habits
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-xl">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary rounded-full p-md shadow-lg">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div className="mt-lg text-center space-y-md">
                <div className="text-sm font-semibold text-primary">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
