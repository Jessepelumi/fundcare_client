import CampaignCard from "@/components/custom/campaignCard";
import LeaderboardTile from "@/components/custom/leaderboardTile";
import { Button } from "@/components/ui/button";
import {
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";
import { VerifiedIcon } from "lucide-react";

export default function CampaignView() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <div className="flex justify-between items-end pb-5">
        <div>
          <div className="flex gap-3 items-center">
            <span className="!text-mm">Fund Care</span>
            <CaretRight size={14} weight="bold" className="text-white" />
          </div>
          <h2 className="text-lg">Clean Water for Abeokuta Community</h2>
          <div className="flex gap-1 items-center">
            <h2 className="!text-mm text-green-500">Jamani NGO</h2>
            <VerifiedIcon size={14} className="text-green-500" />
          </div>
        </div>
        <Button className="bg-green-500 hover:bg-green-400 !text-mm">
          Donate
        </Button>
      </div>

      <div className="w-full h-40 bg-gray-500 rounded-xl"></div>
      <div className="pb-3"></div>

      <div className="flex gap-4 h-full overflow-hidden justify-between">
        <section className="flex flex-col overflow-y-auto pb-3">
          <h3 className="!text-mm text-gray-500 pb-2">Description</h3>

          <div className="!text-mm">
            Thousands of families in Abeokuta are facing water scarcity,
            impacting their health, well-being, and quality of life. This
            campaign aims to provide access to clean, safe drinking water by
            installing sustainable water filtration systems and building
            community wells. Your support will not only bring immediate relief
            but also promote long-term health and reduce waterborne diseases.
            Join us in making a lasting impact on the lives of Abeokuta
            community. Every drop counts!
            <p>
              - Goal: Raise $15,000 to istall 10 water filteration systems and 5
              community wells.
            </p>
            <p>
              - Beneficiaries: Over 5,000 residents, including children,
              elderly, and vulnerable groups.
            </p>
            <p>
              - Impact: Reduce waterborne diseases by 70% and improve overall
              community health.
            </p>
          </div>

          <div className="pb-3"></div>

          <div className="flex gap-2 pb-2">
            <div className="border px-3 py-1 w-fit rounded-xl">
              <h3 className="!text-mm text-gray-500">Funding Goal</h3>
              <span className="!text-mm">
                ₦1,250,000 raised (75%) of ₦1,500,000
              </span>
            </div>

            <div className="border px-3 py-1 w-fit rounded-xl">
              <h3 className="!text-mm text-gray-500">Days Left</h3>
              <span className="!text-mm">10 Days</span>
            </div>
          </div>

          <div className="border px-3 py-1 w-fit rounded-xl">
            <h3 className="!text-mm text-gray-500">Impact Statement</h3>
            <span className="text-md font-semibold">
            &quot;Every ₦5,000 donated provides clean water to one household.&quot;
            </span>
          </div>
          <div className="pb-3"></div>

          <div className="flex justify-between items-center pb-3">
            <h3 className="!text-mm text-gray-500">Explore other Campaigns</h3>
            <Button variant={"outline"} className="!text-mm">
              See all
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
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

        <aside className="flex flex-col flex-none overflow-y-auto pb-3">
          <div className="flex justify-between items-center">
            <h3 className="!text-mm text-gray-500">Weekly Leaderboard</h3>
            <Button variant={"outline"} className="!text-mm">
              See all
            </Button>
          </div>
          <div className="p-2"></div>

          <div className="flex flex-col gap-3 overflow-scroll border p-3 rounded-xl max-h-full">
            <LeaderboardTile
              name="Phoenix Baker"
              rank="1"
              projects="327"
              donation="1.9M"
            />
            <LeaderboardTile
              name="Layi Wasabi"
              rank="2"
              projects="310"
              donation="1.6M"
            />
            <LeaderboardTile
              name="Jemima James"
              rank="3"
              projects="301"
              donation="1.4M"
            />
            <LeaderboardTile
              name="Marvellous Shoyoye"
              rank="15"
              projects="211"
              donation="951K"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
