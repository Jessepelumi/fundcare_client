"use client";

import { SidebarItem } from "./sidebarItem";
import {
  House,
  BellSimple,
  ChartBar,
  ChartPieSlice,
  HeartStraight,
  NotePencil,
  Question,
  SignOut,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { SidebarSubItem } from "./sidebarSubItem";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  return (
    <section className="hidden h-screen w-1/5 px-5 py-10 border-r lg:flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 pb-10">
          <Image
            src="/images/logo-green.png"
            alt="logo"
            height={25}
            width={25}
          />
          <b className="text-md text-green-500 cursor-default">Fund Care</b>
        </div>

        <nav className="flex flex-col gap-3">
          <SidebarItem icon={House} text="Home" href="/home" />
          <SidebarItem icon={NotePencil} text="Campaigns" href="/campaigns" />
          <SidebarItem
            icon={HeartStraight}
            text="Community"
            href="/community"
          />
          <SidebarItem
            icon={ChartPieSlice}
            text="Impact Report"
            href="/impact"
          />
          <SidebarItem icon={ChartBar} text="Leaderboard" href="/leaderboard" />
          <SidebarItem
            icon={BellSimple}
            text="Notification"
            href="/notification"
          />
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <SidebarSubItem icon={Question} text="Help & Support" href="/support" />

        <button>
          <div className="flex items-center gap-3 bg-red-50 rounded-lg p-2 hover:bg-red-100">
            <SignOut size={20} className="text-red-500" />
            <p className="!text-mm text-red-500">Logout</p>
          </div>
        </button>
      </div>
    </section>
  );
};

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    onClose();
  }, [router]);

  return (
    <section
      ref={sidebarRef}
      className={`block z-10 fixed bg-white border-r px-7 py-14 h-screen w-4/5 max-w-xs lg:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transform transition-transform duration-300`}
    >
      <div className="flex flex-col justify-between h-full w-full">
        <div>
          <div className="flex items-center gap-2 pb-10">
            <Image
              src="/images/logo-green.png"
              alt="logo"
              height={25}
              width={25}
            />
            <b className="text-md text-green-500 cursor-default">Fund Care</b>
          </div>

          <nav className="flex flex-col gap-3">
            <SidebarItem icon={House} text="Home" href="/home" />
            <SidebarItem icon={NotePencil} text="Campaigns" href="/campaigns" />
            <SidebarItem
              icon={HeartStraight}
              text="Community"
              href="/community"
            />
            <SidebarItem
              icon={ChartPieSlice}
              text="Impact Report"
              href="/impact"
            />
            <SidebarItem
              icon={ChartBar}
              text="Leaderboard"
              href="/leaderboard"
            />
            <SidebarItem
              icon={BellSimple}
              text="Notification"
              href="/notification"
            />
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <SidebarSubItem
            icon={Question}
            text="Help & Support"
            href="/support"
          />

          <button>
            <div className="flex items-center gap-3 bg-red-50 rounded-lg p-2 hover:bg-red-100">
              <SignOut size={20} className="text-red-500" />
              <p className="!text-mm text-red-500">Logout</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
