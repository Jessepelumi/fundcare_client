import { CaretRight, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface HeaderBannerProps {
  link?: string;
  title: string;
  subtitle?: string;
  href?: string;
}

const headerBanner = ({ link, title, subtitle, href }: HeaderBannerProps) => {
  return (
    <header className="flex justify-between rounded-xl p-3 bg-campaign-background bg-cover">
      <div>
        {link && href && (
          <Link href={href} className="flex gap-3 items-center">
            <span className="!text-mm text-white">{link}</span>
            <CaretRight size={14} weight="bold" className="text-white" />
          </Link>
        )}
        <h2 className="text-lg text-white">{title}</h2>
        {subtitle && <p className="!text-mm text-white">{subtitle}</p>}
      </div>
      <X weight="bold" className="text-white" />
    </header>
  );
};

export default headerBanner;
