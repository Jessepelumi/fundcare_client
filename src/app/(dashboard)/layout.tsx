import { Sidebar } from "@/components/custom/sidebar";
import { Bell, Search, CircleUserRound, ChevronDown } from "lucide-react";

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
            <div>
              <div className="border rounded-3xl w-fit p-2">
                <Search size={18} />
              </div>
            </div>
            <div>
              <div className="border rounded-3xl w-fit p-2">
                <Bell size={18} />
              </div>
            </div>
            <div>
              <div className="flex items-center border rounded-3xl w-fit p-2">
                <CircleUserRound size={18} />
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </header>
        <aside className="flex flex-grow h-full overflow-hidden px-5 pt-5">
          {children}
        </aside>
      </section>
    </section>
  );
}
