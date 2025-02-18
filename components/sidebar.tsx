import { Calculator, Paperclip, File , SmartphoneCharging} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "@/public/logo.svg";
// Menu items.
const items = [
  {
    title: "Calculations For New Meters",
    url: "/newmeter",
    icon: Calculator,
  },
  {
    title: "Calculations For Existing Meters",
    url: "/oldmeter",
    icon: SmartphoneCharging,
  },
  {
    title: "Instructions For New Meters",
    url: "/instructionnew",
    icon: Paperclip,
  },
  {
    title: "Instructions For Existing Meters",
    url: "#",
    icon: File,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-start flex-col gap-2 w-full">
        <Avatar className="h-20 w-20">
          <AvatarImage src={logo.src} />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Fastech</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
