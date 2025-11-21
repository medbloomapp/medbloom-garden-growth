import { Bell, BarChart3, Users, BookOpen, Volume2, Calendar, Pill, Sprout } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Customizable medication reminders that adapt to your schedule and preferences."
    },
    {
      icon: BarChart3,
      title: "Health Dashboard",
      description: "Track day streaks, total doses, and visualize your adherence patterns over time."
    },
    {
      icon: Users,
      title: "Loved One Monitoring",
      description: "Let family and caregivers check in on your medication adherence safely and securely."
    },
    {
      icon: BookOpen,
      title: "Health Journal",
      description: "Write reflections, track how you feel, and receive supportive daily affirmations."
    },
    {
      icon: Volume2,
      title: "Gentle Notifications",
      description: "Choose from calming notification tones that won't startle or stress you."
    },
    {
      icon: Calendar,
      title: "Weekly Calendar",
      description: "View your medication history and upcoming doses in an easy-to-read calendar format."
    },
    {
      icon: Pill,
      title: "Medication Library",
      description: "Store all your medications, dosages, and special instructions in one place."
    },
    {
      icon: Sprout,
      title: "Plant Avatar Growth",
      description: "Watch your health garden grow with each dose, providing visual motivation without judgment."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-md px-4">
            Everything You Need
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive features to support your medication adherence journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-lg">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-lg border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div className="bg-primary/10 rounded-lg p-2 sm:p-sm w-fit mb-3 sm:mb-md">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-xs">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
