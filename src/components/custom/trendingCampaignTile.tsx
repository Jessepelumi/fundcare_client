interface LeaderboardTileProps {
  topic: string;
  rank: string;
}

const TrendingCampaignTile = ({
  topic,
  rank,
}: LeaderboardTileProps) => {
  return (
    <div className="flex gap-2">
      <div className="border p-1 rounded-md h-fit w-fit !text-mm text-gray-500">
        #{rank}
      </div>
      <p className="!text-mm w-64">
        {topic}
      </p>
    </div>
  );
};

export default TrendingCampaignTile;
