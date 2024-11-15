import { ArrowDown, ArrowUp, Minus } from "@phosphor-icons/react/dist/ssr";

interface CampaignCardProps {
  title: string;
  value: string;
  isMonetaryValue: boolean;
  amount: string;
  isIncreased: boolean;
  isMaintained: boolean;
}

const OverviewCard = ({
  title,
  value,
  isMonetaryValue,
  amount,
  isIncreased,
  isMaintained,
}: CampaignCardProps) => {
  // icon color
  const Icon = isIncreased ? (
    <ArrowUp size={14} color="green" />
  ) : isMaintained ? (
    <Minus size={14} color="gray" />
  ) : (
    <ArrowDown size={14} color="red" />
  );

  // border color
  const borderColor = isIncreased
    ? "border-green-500"
    : isMaintained
    ? "border-gray-500"
    : "border-red-500";

  // bg color
  const backgroundColor = isIncreased
    ? "bg-green-100"
    : isMaintained
    ? "bg-gray-100"
    : "bg-red-100";

  // text color
  const textColor = isIncreased
    ? "text-green-500"
    : isMaintained
    ? "text-gray-500"
    : "text-red-500";

  return (
    <div className="border rounded-xl p-2 min-w-60">
      <div className="flex justify-between items-center pb-3">
        <span className="!text-mm text-gray-500">{title}</span>
        {/* Placeholder for additional actions */}
      </div>
      <p className="text-lg">{isMonetaryValue ? `₦${value}` : value}</p>
      <div className="flex gap-1 items-center">
        <div
          className={`flex gap-1 items-center border px-1 rounded-xl ${borderColor} ${backgroundColor}`}
        >
          {Icon}
          <span className={`text-mm ${textColor}`}>
            {isMonetaryValue ? `₦${amount}` : amount}
          </span>
        </div>
        <span className="text-mm">in 24h</span>
      </div>
    </div>
  );
};

export default OverviewCard;
