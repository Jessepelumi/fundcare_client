import FeedCard from "@/components/custom/feedCard";
import QuickFilter from "@/components/custom/quickFilter";
import TrendingCampaignTile from "@/components/custom/trendingCampaignTile";
import { Button } from "@/components/ui/button";
import {
  CaretRight,
  Plus,
  X,
} from "@phosphor-icons/react/dist/ssr";

export default function Community() {
  return (
    <section className="flex flex-col h-full w-full overflow-scroll">
      <header className="flex justify-between rounded-xl p-3 bg-community-background bg-cover bg-bottom">
        <div>
          <h2 className="text-lg text-white">
            Join the Conversation and Make an Impact
          </h2>
          <p className="!text-mm text-white">
            Connect with fellow donors, organizations, and professionals
            dedicated to supporting health causes.
          </p>
        </div>
        <X color="white" />
      </header>
      <div className="pb-4"></div>

      <div className="flex justify-between items-end pb-5">
        <div>
          <div className="flex gap-3 items-center">
            <span className="!text-mm">Fund Care</span>
            <CaretRight size={14} weight="bold" className="text-white" />
          </div>
          <h2 className="text-lg">Community Feed</h2>
        </div>
        <Button className="bg-green-500 hover:bg-green-400 !text-mm">
          Create a Post
          <Plus weight="bold" />
        </Button>
      </div>

      <div className="flex gap-4 h-full overflow-hidden justify-between">
        <section className="flex flex-col overflow-y-auto pb-3">
          <h3 className="!text-mm text-gray-500 pb-2">Quick filters:</h3>
          <div className="flex gap-2 flex-wrap">
            <QuickFilter title="All Posts" isSelected={true} />
            <QuickFilter title="Success Stories" isSelected={false} />
            <QuickFilter title="Project Updates" isSelected={false} />
            <QuickFilter title="Volunteer Opportunities" isSelected={false} />
          </div>

          <div className="pb-3"></div>

          <div className="flex justify-between items-center pb-3">
            <h3 className="!text-mm text-gray-500">
              Today, 15th November 2024
            </h3>
            <Button variant={"outline"} className="!text-mm">
              See all
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <FeedCard
              title="Project Milestone Reached"
              summary="We did it! Thanks to your incredible support, the 'Clean Water for Abeokuta Community' project has surpassed its funding goal, providing clean drinking water to over "
              name="Jamani NGO"
              likes="821"
              comment="63"
              shares="6.5k"
            />
            <FeedCard
              title="New - Maternal Health Clinic in Ikorodu"
              summary="Every mother deserves a safe and healthy childbirth experience. In Ikorodu, many expectant mothers lack access to essential healthcare, putting both their lives and their babies at risk."
              name="Jamani NGO"
              likes="821"
              comment="63"
              shares="6.5k"
            />
            <FeedCard
              title="Project Milestone Reached"
              summary="We did it! Thanks to your incredible support, the 'Clean Water for Abeokuta Community' project has surpassed its funding goal, providing clean drinking water to over "
              name="Jamani NGO"
              likes="821"
              comment="63"
              shares="6.5k"
            />
            <FeedCard
              title="New - Maternal Health Clinic in Ikorodu"
              summary="Every mother deserves a safe and healthy childbirth experience. In Ikorodu, many expectant mothers lack access to essential healthcare, putting both their lives and their babies at risk."
              name="Jamani NGO"
              likes="821"
              comment="63"
              shares="6.5k"
            />
          </div>
        </section>

        <aside className="flex flex-col flex-none overflow-y-auto pb-3">
          <h3 className="!text-mm text-gray-500 pb-2">Trending Campaigns</h3>

          <div className="flex flex-col gap-3 overflow-scroll border p-3 rounded-xl max-h-full">
            <h3 className="!text-mm">Trending Today</h3>

            <TrendingCampaignTile
              rank="1"
              topic="Clean water initiative in Abeokuta exceeds goals."
            />
            <TrendingCampaignTile
              rank="2"
              topic="Maternal health clinic in Kano nears completion - final push needed!"
            />
            <TrendingCampaignTile
              rank="3"
              topic="Rural solar power project lights up 10 clinics in Jos!"
            />
            <TrendingCampaignTile
              rank="4"
              topic="Youth empowerment hub in Lagos engages over 500 participants."
            />
            <TrendingCampaignTile
              rank="5"
              topic="Urban waste management initiative in Abuja receives national recognition."
            />
            <TrendingCampaignTile
              rank="6"
              topic="Health education campaign in Ibadan targets preventive care strategies."
            />
            <TrendingCampaignTile
              rank="7"
              topic="Innovative recycling program in Warri transforms Wwaste into art."
            />
            <TrendingCampaignTile
              rank="8"
              topic="Digital skills training center opens in Enugu to bridge the digital divide."
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
