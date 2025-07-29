"use client"

import React from "react"
import { LayoutDashboard, Bell, Hash, Clock, Target } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Your Alerts",
    url: "/dashboard/alerts",
    icon: Bell,
  },
  {
    title: "Your Hashtags",
    url: "/dashboard/hashtags",
    icon: Hash,
  },
  {
    title: "History",
    url: "/dashboard/history",
    icon: Clock,
  },
]

export function AppSidebar() {
  const pathname = usePathname("/dashboard/")
  return (
    <Sidebar className="border-r-gray-800 bg-black" style={{ background: "black" }}>
      <SidebarHeader className="p-4 bg-black">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Starlo AI</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-black">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="text-gray-300 hover:text-white hover:bg-gray-900 data-[active=true]:bg-orange-500/20 data-[active=true]:text-orange-400"
                  >
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      {/* User details box at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-900 px-4 py-3 flex items-center space-x-3 border-t border-gray-800">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
          {/* Placeholder avatar initials */}
          U
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">User Name</span>
          <span className="text-xs text-gray-400">user@email.com</span>
        </div>
      </div>
    </Sidebar>
  )
}
