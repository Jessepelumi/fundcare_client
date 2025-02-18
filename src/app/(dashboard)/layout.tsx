"use client";

import { MobileSidebar, Sidebar } from "@/components/custom/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { List } from "@phosphor-icons/react/dist/ssr";
import { Bell, Search, ChevronDown } from "lucide-react";
import { useCallback, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const onClose = useCallback(() => setIsMobileSidebarOpen(false), []);

  return (
    <section className="flex h-screen">
      <Sidebar />
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={onClose} />
      <section className="flex flex-col w-full">
        <header className="flex justify-between items-center p-3 border-b">
          <div className="flex gap-3 items-center">
            <Button
              variant="outline"
              size="icon"
              className="rounded-3xl lg:hidden"
              onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            >
              <List size={18} />
            </Button>
            <div>
              <p className="text-mm text-gray-400">Welcome,</p>
              <p className="text-md">Team Payaza</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-3xl">
              <Search size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-3xl">
              <Bell size={18} />
            </Button>

            <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
              <DropdownMenuTrigger asChild className="ring-0 outline-none">
                <Button
                  variant="outline"
                  className="rounded-3xl px-2 focus-visible:border-green-500"
                >
                  <div className="h-6 w-6 bg-gray-400 rounded-3xl"></div>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="!text-mm">
                  Manage Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="!text-mm">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="!text-mm">
                    Billing
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="!text-mm">
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem className="!text-mm">
                          Email
                        </DropdownMenuItem>
                        <DropdownMenuItem className="!text-mm">
                          Message
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="!text-mm">
                          More...
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="!text-mm">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="!text-mm">
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="!text-mm text-red-500">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <aside className="flex flex-grow h-full overflow-hidden px-5 pt-5">
          {children}
        </aside>
      </section>
    </section>
  );
}
