"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <Accordion.Root type="single" collapsible className="faq-list">
      {faqs.map((faq, index) => (
        <Accordion.Item key={faq.question} value={`item-${index}`} className="faq-item">
          <Accordion.Header>
            <Accordion.Trigger className="faq-trigger group">
              <span>{faq.question}</span>
              <Plus className="faq-plus" size={17} strokeWidth={1.8} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content faq-content">
            <div>{faq.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
