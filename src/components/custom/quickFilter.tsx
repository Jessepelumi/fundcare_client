interface CampaignCardProps {
  title: string;
  isSelected: boolean;
}

const QuickFilter = ({ title, isSelected }: CampaignCardProps) => {
  // text color
  const textColor = isSelected ? "text-green-500" : "text-gray-500";

  // border color
  const borderColor = isSelected ? "border-green-500" : "border-gray-500";

  // bg color
  const backgroundColor = isSelected ? "bg-green-100" : "bg-transparent";

  return (
    <div
      className={`!text-mm ${textColor} border ${borderColor} ${backgroundColor} py-1 px-2 rounded-lg w-fit`}
    >
      {title}
    </div>
  );
};

export default QuickFilter;
