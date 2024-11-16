import * as React from "react";

import CampaignCard from "@/components/custom/campaignCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function Campaigns() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <div className="flex justify-between items-end pb-5">
        <div>
          <div className="flex gap-3 items-center">
            <span className="!text-mm">Fund Care</span>
            <CaretRight size={14} weight="bold" className="text-white" />
          </div>
          <h2 className="text-lg">Explore all Campaigns</h2>
        </div>
        <div className="flex flex-col items-end">
          <span className="!text-mm text-gray-500 pb-1">Filter by:</span>
          <Select>
            <SelectTrigger className="w-fit gap-3 !text-mm focus:border-green-500 focus:ring-0 focus:ring-green-500">
              <SelectValue placeholder="Top Donations" />
            </SelectTrigger>
            <SelectContent className="border-green-500">
              <SelectGroup>
                <SelectItem value="top donations" className="!text-mm">Top Donations</SelectItem>
                <SelectItem value="least donations" className="!text-mm">Least Donations</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex h-full overflow-hidden">
        <section className="flex flex-col overflow-y-auto pb-3">
          <div className="flex justify-between items-center pb-3">
            <h3 className="!text-mm text-gray-500">Featured Campaigns</h3>
            <Button variant={"outline"} className="!text-mm">
              See all
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2">
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
          </div>

          <div className="pb-3"></div>

          <div className="flex justify-between items-center pb-3">
            <h3 className="!text-mm text-gray-500">New Launched Campaigns</h3>
            <Button variant={"outline"} className="!text-mm">
              See all
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2">
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
          </div>
        </section>
      </div>
    </section>
  );
}
