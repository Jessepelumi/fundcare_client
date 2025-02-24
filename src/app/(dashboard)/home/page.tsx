import CampaignCard from "@/components/custom/campaignCard";
import HeaderBanner from "@/components/custom/headerBanner";
import LeaderboardTile from "@/components/custom/leaderboardTile";
import OverviewCard from "@/components/custom/overviewCard";
import { Button } from "@/components/ui/button";
import { CaretRight, Plus} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <HeaderBanner
        backgroundImage="/images/campaigns.png"
        title="Discover Life-Changing Campaigns"
        link="Explore Campaigns"
        href="/"
      />
      <div className="pb-4"></div>

      <div className="lg:flex justify-between items-end pb-5">
        <div>
          <div className="flex gap-3 items-center">
            <span className="!text-mm">Fund Care</span>
            <CaretRight size={14} weight="bold" className="text-white" />
          </div>
          <h2 className="text-lg">Dashboard Overview</h2>
        </div>
        <div className="p-1 lg:hidden"></div>
        <div className="flex gap-2">
          <Button variant="outline" className="!text-mm">
            Create Campaign
            <Plus />
          </Button>
          <Button className="bg-green-500 hover:bg-green-400 !text-mm">
            Explore Campaigns
          </Button>
        </div>
      </div>

      <div className="lg:flex gap-4 h-full lg:overflow-hidden justify-between">
        <section className="flex flex-col overflow-y-auto pb-3">
          <h3 className="!text-mm text-gray-500 pb-2">Overview</h3>
          <div className="flex flex-col lg:flex-row gap-3">
            <OverviewCard
              title="Total Donations Made"
              value="600,150.00"
              isMonetaryValue={true}
              amount="36,000"
              isIncreased={true}
              isMaintained={false}
              duration="24h"
            />
            <OverviewCard
              title="Total Campaigns Supported"
              value="24"
              isMonetaryValue={false}
              amount="24"
              isIncreased={false}
              isMaintained={true}
              duration="24h"
            />
          </div>

          <div className="pb-3"></div>

          <div className="flex justify-between items-center pb-3">
            <h3 className="!text-mm text-gray-500">Featured Campaigns</h3>
            <Button variant={"outline"} className="!text-mm">
              See all
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-2">
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
