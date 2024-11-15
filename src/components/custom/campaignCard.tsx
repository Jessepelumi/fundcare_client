interface CampaignCardProps {
  title: string;
  summary: string;
  amount: string;
  amountRaised: string;
  duration: string;
  percentage: string;
}

const CampaignCard = ({
  title,
  summary,
  amount,
  amountRaised,
  duration,
  percentage,
}: CampaignCardProps) => {
  return (
    <div className="border rounded-xl p-2">
      <div className="w-full h-60 bg-gray-400 rounded-lg"></div>
      <p className="text-mm font-bold pt-1">
        {title}
      </p>
      <p className="!text-mm text-gray-500">
        {summary}
      </p>
      <div className="flex justify-between !text-mm text-green-500 pb-1">
        <p>Goal: ₦{amount}</p>
        <p>{duration} Days Remaining</p>
      </div>
      <div className="flex justify-between !text-mm">
        <p>Progress:</p>
        <p>₦{amountRaised} raised ({percentage}%)</p>
      </div>
      <div className="pb-1"></div>
      <div className="w-full h-1 bg-green-500 rounded-xl"></div>
    </div>
  );
};

export default CampaignCard;
