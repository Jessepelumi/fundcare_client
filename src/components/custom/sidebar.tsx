import Link from "next/link";
import { SidebarItem } from "./sidebarItem";
import {
  House,
  BellSimple,
  ChartBar,
  ChartPieSlice,
  Gear,
  HeartStraight,
  NotePencil,
  Question,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";

export const Sidebar = () => {
  return (
    <section className="h-screen w-1/5 px-5 py-10 border-r flex flex-col justify-between">
      <div>
        <div className="flex items-center pb-10">
          <img src="/images/logo-green.png" alt="logo" className="pr-2" />
          <b className="text-md text-green-500 cursor-default">Fund Care</b>
        </div>

        <nav className="flex flex-col gap-3">
          <SidebarItem icon={House} text="Home" />
          <SidebarItem icon={NotePencil} text="Campaigns" />
          <SidebarItem icon={HeartStraight} text="Community" />
          <SidebarItem icon={ChartPieSlice} text="Impact Report" />
          <SidebarItem icon={ChartBar} text="Leaderboard" />
          <SidebarItem icon={BellSimple} text="Notification" />
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <Link href={""}>
          <div className="flex items-center gap-3 p-2 group hover:text-green-500">
            <Question
              size={20}
              className="text-gray-500 group-hover:text-green-500"
            />
            <p className="!text-mm text-gray-500 group-hover:text-green-500">
              Help & Support
            </p>
          </div>
        </Link>
        <Link href={""}>
          <div className="flex items-center gap-3 p-2 group hover:text-green-500">
            <Gear
              size={20}
              className="text-gray-500 group-hover:text-green-500"
            />
            <p className="!text-mm text-gray-500 group-hover:text-green-500">
              Settings
            </p>
          </div>
        </Link>
        <Link href={""}>
          <div className="flex items-center gap-3 bg-red-50 rounded-lg p-2 hover:bg-red-100">
            <SignOut size={20} className="text-red-500" />
            <p className="!text-mm text-red-500">Logout</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
