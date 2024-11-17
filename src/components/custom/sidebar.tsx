"use client";

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
import Image from "next/image";

export const Sidebar = () => {
  return (
    <section className="h-screen w-1/5 px-5 py-10 border-r flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 pb-10">
          <Image src="/images/logo-green.png" alt="logo" height={25} width={25} />
          <b className="text-md text-green-500 cursor-default">Fund Care</b>
        </div>

        <nav className="flex flex-col gap-3">
          <SidebarItem icon={House} text="Home" href="/home" />
          <SidebarItem icon={NotePencil} text="Campaigns" href="/campaigns" />
          <SidebarItem icon={HeartStraight} text="Community" href="community" />
          <SidebarItem
            icon={ChartPieSlice}
            text="Impact Report"
            href="impact"
          />
          <SidebarItem icon={ChartBar} text="Leaderboard" href="leaderboard" />
          <SidebarItem
            icon={BellSimple}
            text="Notification"
            href="notification"
          />
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
