import * as React from "react";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import OverviewCard from "@/components/custom/overviewCard";

export default function ImpactReport() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <div className="pb-5">
        <div className="flex gap-3 items-center">
          <span className="!text-mm">Fund Care</span>
          <CaretRight size={14} weight="bold" className="text-white" />
        </div>
        <h2 className="text-lg">Your Impact Report</h2>
      </div>

      <div className="flex h-full overflow-hidden">
        <section className="flex flex-col overflow-y-auto pb-3">
          <h3 className="!text-mm text-gray-500 pb-2">Donations Summary</h3>
          <div className="flex flex-col lg:flex-row gap-3">
            <OverviewCard
              title="Total Donations Made"
              value="1,600,150.00"
              isMonetaryValue={true}
              amount="515,000"
              isIncreased={true}
              isMaintained={false}
              duration="30d"
            />
            <OverviewCard
              title="Total Campaigns Supported"
              value="24"
              isMonetaryValue={false}
              amount="2"
              isIncreased={false}
              isMaintained={false}
              duration="30d"
            />
            <OverviewCard
              title="Lives Impacted"
              value="3,007"
              isMonetaryValue={false}
              amount="281"
              isIncreased={true}
              isMaintained={true}
              duration="30d"
            />
          </div>

          <h3 className="!text-mm text-gray-500 py-3">Impact Metrics</h3>

          {/* <div className="grid grid-cols-3 gap-2">
            <CampaignCard
              title="Clean Water for Abeokuta Community"
              summary="Providing essential clean water to underserved clinics in rural areas to improve patient care."
              amount="1,500,000.00"
              duration="10"
              amountRaised="1,250,000"
              percentage="75"
            />
            <CampaignCard
              title="Clean Water for Abeokuta Community"
              summary="Providing essential clean water to underserved clinics in rural areas to improve patient care."
              amount="1,500,000.00"
              duration="10"
              amountRaised="1,250,000"
              percentage="75"
            />
            <CampaignCard
              title="Clean Water for Abeokuta Community"
              summary="Providing essential clean water to underserved clinics in rural areas to improve patient care."
              amount="1,500,000.00"
              duration="10"
              amountRaised="1,250,000"
              percentage="75"
            />
          </div> */}

          <h3 className="!text-mm text-gray-500 py-3">
            Project Impact Stories
          </h3>

          {/* <div className="grid grid-cols-3 gap-2">
            <CampaignCard
              title="Clean Water for Abeokuta Community"
              summary="Providing essential clean water to underserved clinics in rural areas to improve patient care."
              amount="1,500,000.00"
              duration="10"
              amountRaised="1,250,000"
              percentage="75"
            />
            <CampaignCard
              title="Clean Water for Abeokuta Community"
              summary="Providing essential clean water to underserved clinics in rural areas to improve patient care."
              amount="1,500,000.00"
              duration="10"
              amountRaised="1,250,000"
              percentage="75"
            />
            <CampaignCard
              title="Clean Water for Abeokuta Community"
              summary="Providing essential clean water to underserved clinics in rural areas to improve patient care."
              amount="1,500,000.00"
              duration="10"
              amountRaised="1,250,000"
              percentage="75"
            />
          </div> */}
        </section>
      </div>
    </section>
  );
}
