import { SquareUserRound } from "lucide-react";

interface OnboardingTileProps {
  role: string;
  about: string;
}

const OnboardingTile = ({ role, about }: OnboardingTileProps) => {
  return (
    <div className="">
      {/* <div className="border border-gray-400 h-fit p-2 rounded-md">
        <SquareUserRound size={20} />
      </div> */}
      <div>
        <h2 className="!text-md">{role}</h2>
        <p className="!text-mm text-gray-400">{about}</p>
      </div>
    </div>
  );
};

export default OnboardingTile;
