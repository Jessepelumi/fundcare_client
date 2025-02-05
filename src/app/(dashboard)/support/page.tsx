import * as React from "react";

import { CaretRight, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/input";

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
          <div className="flex items-center border rounded-lg pl-2 w-1/3">
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

          <div className="pb-3"></div>

          <h3 className="!text-mm text-gray-500 pb-2">Contact Support</h3>
          <div className="flex items-center justify-between w-full border p-3 rounded-xl">
            <p className="text-gray-500 text-mm">
              Send us an email: support@fundcare.com
            </p>
            <CaretRight size={14} weight="bold" />
          </div>
        </section>
      </div>
    </section>
  );
}
