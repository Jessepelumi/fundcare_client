import { Sidebar } from "@/components/custom/sidebar";
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
import { Bell, Search, ChevronDown } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <section className="flex flex-col w-full">
        <header className="flex justify-between items-center p-3 border-b">
          <div>
            <p className="text-mm text-gray-400">Welcome,</p>
            <p className="text-md">Team Payaza</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-3xl">
              <Search size={18} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-3xl">
              <Bell size={18} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-3xl px-2">
                  <div className="h-6 w-6 bg-gray-400 rounded-3xl"></div>
                  <ChevronDown size={18} />
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
