import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, className = '' }) => {
  return (
    <Accordion type="single" collapsible className={`w-full space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="bg-card rounded-2xl border-none shadow-card overflow-hidden"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-foreground px-8 py-6 hover:bg-accent/50 hover:no-underline [&[data-state=open]]:bg-accent/50 transition-all duration-200">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-8 pb-6 pt-0 text-base leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;