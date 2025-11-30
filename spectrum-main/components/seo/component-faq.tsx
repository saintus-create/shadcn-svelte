import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ComponentFAQProps {
  componentName: string;
  faqs: FAQItem[];
}

export function ComponentFAQ({ componentName, faqs }: ComponentFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">
        Frequently Asked Questions about {componentName}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

