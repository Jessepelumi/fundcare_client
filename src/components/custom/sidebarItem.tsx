import { IconProps } from "@phosphor-icons/react";
import Link from "next/link";

interface SidebarItemProps {
  icon: React.ElementType<IconProps>;
  text: string;
}

export const SidebarItem = ({ icon: Icon, text }: SidebarItemProps) => {
  return (
    <Link href={""}>
      <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-green-500 group hover:text-white">
        <Icon size={20} className="text-gray-500 group-hover:text-white" />
        <p className="!text-mm text-gray-500 group-hover:text-white">{text}</p>
      </div>
    </Link>
  );
};
