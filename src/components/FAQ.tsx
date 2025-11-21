import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does MedBloom help me remember my medications?",
      answer: "MedBloom sends you gentle, customizable reminders at the times you choose. You can set multiple reminders throughout the day, choose calming notification tones, and even snooze if needed. The app also uses visual cues like your growing plant avatar to motivate you to stay on track."
    },
    {
      question: "Can my family see my data?",
      answer: "Only what you choose to share! When you add loved ones to your care circle, they can see basic medication adherence status (whether doses were taken on time). They cannot see specific medications, dosages, or personal journal entries unless you explicitly share that information. You're always in control of your privacy."
    },
    {
      question: "Is my information secure?",
      answer: "Absolutely. MedBloom uses bank-level encryption to protect your data both in transit and at rest. We're HIPAA-compliant and follow strict privacy standards. Your medication information, health journals, and personal data are stored securely and never shared with third parties without your explicit consent."
    },
    {
      question: "How does billing for MedBloom Premium work?",
      answer: "MedBloom Premium is billed monthly at $9.99/month. We use Stripe for secure payment processing. You can cancel your subscription at any time from your account settings, and you'll continue to have Premium access until the end of your billing period. No hidden fees or long-term contracts."
    },
    {
      question: "Can I cancel at any time?",
      answer: "Yes! You can cancel your Premium subscription at any time with no penalties. Simply go to your account settings and click 'Cancel Subscription.' You'll keep your Premium features until the end of your current billing period, then automatically revert to the free plan. All your data and plant progress will be saved."
    },
    {
      question: "What happens to my plant if I miss a dose?",
      answer: "Missing a dose slows your plant's growth, but it never makes it wilt or die. MedBloom is designed to be motivational, not punishing. Your plant will simply pause its growth until you get back on track. We believe in positive reinforcement and understanding that life happens!"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-xxl px-4 sm:px-6 lg:px-lg bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-xxl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-md px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Everything you need to know about MedBloom
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-md">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg sm:rounded-xl border border-border px-4 sm:px-6 lg:px-lg shadow-sm"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary py-4 sm:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-4 sm:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
