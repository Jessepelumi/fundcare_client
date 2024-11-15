import { ChatCircle, ShareFat, ThumbsUp } from "@phosphor-icons/react/dist/ssr";

interface CampaignCardProps {
  title: string;
  summary: string;
  name: string;
  likes: string;
  comment: string;
  shares: string;
}

const FeedCard = ({
  title,
  summary,
  name,
  likes,
  comment,
  shares,
}: CampaignCardProps) => {
  return (
    <div className="border rounded-xl p-2">
      <div className="w-full h-32 bg-gray-400 rounded-lg"></div>
      <p className="text-mm font-bold pt-1">{title}</p>
      <p className="!text-mm text-gray-500 line-clamp-3">{summary}</p>
      <div className="flex gap-1 items-center !text-mm py-1">
        <div className="h-5 w-5 rounded-full bg-gray-500"></div>
        <p>{name}</p>
      </div>
      <div className="flex justify-between !text-mm">
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <ThumbsUp />
            {likes}
          </div>
          <div className="flex gap-1 items-center">
            <ChatCircle />
            {comment}
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <ShareFat />
          {shares}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
