
interface LeaderboardTileProps {
  name: string;
  rank: string;
  projects: string;
  donation: string;
}

const LeaderboardTile = ({ name, rank, projects, donation }: LeaderboardTileProps) => {
  return (
    <div className="flex justify-between w-80">
      <div className="flex gap-3">
        <div className="w-11 h-11 bg-gray-500 rounded-full"></div>
        <div>
          <div className="flex gap-2 items-center">
            <span className="!text-mm text-gray-500 max-w-40 truncate">{name}</span>
            <div className="border rounded-xl px-1 !text-mm">#{rank}</div>
          </div>
          <span className="!text-mm text-gray-500">
            Project Supported: <span className="text-gray-700">{projects}</span>
          </span>
        </div>
      </div>
      <div className="text-gray-700 items-end">₦{donation}</div>
    </div>
  );
};

export default LeaderboardTile;
