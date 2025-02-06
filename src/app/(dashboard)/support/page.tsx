import * as React from "react";

import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faqData";

export default function Support() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <div className="pb-3">
        <div className="flex gap-3 items-center">
          <span className="!text-mm">Fund Care</span>
          <CaretRight size={14} weight="bold" className="text-white" />
        </div>
        <h2 className="text-lg">How can we help you?</h2>
      </div>

      <div className="flex h-full overflow-hidden w-full">
        <section className="flex flex-col overflow-y-auto pb-3 w-full">
          <div className="flex items-center border rounded-lg pl-2 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <MagnifyingGlass size={22} className="text-gray-500" />
            <Input
              type="text"
              placeholder="Search FAQs, guides, or topics"
              className="!text-mm border-none outline-none focus-visible:ring-0"
            />
          </div>

          <div className="pb-3"></div>

          <h3 className="!text-mm text-gray-500 pb-2">
            Popular Frequently Asked Questions (FAQs)
          </h3>

          <Accordion
            type="single"
            collapsible
            className="border px-3 rounded-xl"
          >
            {faqData.map((section, index) => (
              <React.Fragment key={index}>
                {section.questions.map((faq, idx) => {
                  const isLastItem =
                    index === faqData.length - 1 &&
                    idx === section.questions.length - 1;

                  return (
                    <AccordionItem
                      value={`item-${index}-${idx}`}
                      key={idx}
                      className={isLastItem ? "border-none" : ""}
                    >
                      <AccordionTrigger className="!text-mm hover:no-underline hover:text-gray-500">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="!text-mm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </React.Fragment>
            ))}
          </Accordion>

          <div className="pb-3"></div>

          <h3 className="!text-mm text-gray-500 pb-2">Contact Support</h3>
          <button className="flex items-center justify-between w-full border p-3 rounded-xl">
            <p className="text-mm">Send us an email: support@fundcare.com</p>
            <CaretRight size={14} weight="bold" />
          </button>
        </section>
      </div>
    </section>
  );
}
