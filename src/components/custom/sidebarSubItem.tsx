"use client";

import { IconProps } from "@phosphor-icons/react/";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarSubItemProps {
  icon: React.ElementType<IconProps>;
  text: string;
  href: string;
}

export const SidebarSubItem = ({
  icon: Icon,
  text,
  href,
}: SidebarSubItemProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-3 p-2 ${
          isActive ? "text-green-500" : "hover:text-green-500 group"
        }`}
      >
        <Icon
          size={20}
          className={`${
            isActive
              ? "text-green-500"
              : "text-gray-500 group-hover:text-green-500"
          }`}
        />
        <p
          className={`!text-mm ${
            isActive
              ? "text-green-500"
              : "text-gray-500 group-hover:text-green-500"
          }`}
        >
          {text}
        </p>
      </div>
    </Link>
  );
};
