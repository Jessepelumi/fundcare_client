"use client";

import { IconProps } from "@phosphor-icons/react/";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  icon: React.ElementType<IconProps>;
  text: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, text, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 rounded-lg p-2 ${
          isActive
            ? "bg-green-500 text-white"
            : "hover:bg-green-500 group hover:text-white"
        }`}
      >
        <Icon
          size={20}
          className={`${
            isActive ? "text-white" : "text-gray-500 group-hover:text-white"
          }`}
        />
        <p
          className={`!text-mm ${
            isActive ? "text-white" : "text-gray-500 group-hover:text-white"
          }`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};
