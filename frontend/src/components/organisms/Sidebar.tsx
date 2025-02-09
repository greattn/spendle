import { Home, Wallet, ChartNoAxesCombined, Settings } from "lucide-react";
import Link from "next/link";
import { AddTransactionDialog } from "../molecules/AddTransactionDialog";

import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Finances",
    url: "/my-finances",
    icon: Wallet,
  },
  {
    title: "Statistics",
    url: "/statistics",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const Sidebar: React.FC = () => {
  return (
    <SidebarUI>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-4xl font-bold h-16">
            <Link
              href="/dashboard"
              className={`hover:cursor-pointer w-full text-primary`}
            >
              Spendle
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <AddTransactionDialog />
      </SidebarContent>
    </SidebarUI>
  );
};

export default Sidebar;
