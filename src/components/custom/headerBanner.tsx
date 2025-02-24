"use client";

import { CaretRight, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

interface HeaderBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  link?: string;
  href?: string;
  color: string;
}

const HeaderBanner = ({
  backgroundImage,
  title,
  subtitle,
  link,
  href,
  color,
}: HeaderBannerProps) => {
  const [isBannerShown, setIsBannerShown] = useState(true);

  return (
    <header className={`${isBannerShown ? "block" : "hidden"}`}>
      <div
        className="flex justify-between rounded-xl p-3 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
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
        <Button
          variant="ghost"
          size="icon"
          className={`text-${color} hover:text-black`}
          onClick={() => setIsBannerShown(!isBannerShown)}
        >
          <X weight="bold" />
        </Button>
      </div>

      <div className="pb-4"></div>
    </header>
  );
};

export default HeaderBanner;
