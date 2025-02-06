import * as React from "react";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import QuickFilter from "@/components/custom/quickFilter";

export default function Settings() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <div className="pb-3">
        <div className="flex gap-3 items-center">
          <span className="!text-mm">Fund Care</span>
          <CaretRight size={14} weight="bold" className="text-white" />
        </div>
        <h2 className="text-lg">Settings</h2>
      </div>

      <div className="flex h-full overflow-hidden">
        <section className="flex flex-col overflow-y-auto pb-3">
          <h3 className="!text-mm text-gray-500 pb-2">Quick filters:</h3>
          <div className="flex gap-2 flex-wrap">
            <QuickFilter title="All Posts" isSelected={true} />
            <QuickFilter title="Success Stories" isSelected={false} />
            <QuickFilter title="Project Updates" isSelected={false} />
            <QuickFilter title="Volunteer Opportunities" isSelected={false} />
          </div>

          <div className="pb-3"></div>

          <h3 className="!text-mm text-gray-500 pb-2">
            Top Donors and Supporters
          </h3>
          {/* <div className="flex gap-2 flex-wrap">
            <QuickFilter title="All Posts" isSelected={true} />
            <QuickFilter title="Success Stories" isSelected={false} />
            <QuickFilter title="Project Updates" isSelected={false} />
            <QuickFilter title="Volunteer Opportunities" isSelected={false} />
          </div> */}
        </section>
      </div>
    </section>
  );
}
