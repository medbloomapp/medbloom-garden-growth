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
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-md px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Three simple steps to better medication habits
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-xl">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-primary rounded-full p-2 sm:p-md shadow-lg">
                <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              
              <div className="mt-8 sm:mt-10 lg:mt-lg text-center space-y-2 sm:space-y-md">
                <div className="text-xs sm:text-sm font-semibold text-primary">
                  Step {index + 1}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
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
