"use client"

import React from "react"
import { LayoutDashboard, Bell, Hash, Clock, Target } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  SignOutButton,
} from "@clerk/nextjs"

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
  const { user } = useUser()
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
      {/* User details/auth box at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gray-900 px-4 py-3 flex items-center space-x-3 border-t border-gray-800">
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-9 h-9",
              },
            }}
            afterSignOutUrl="/"
          />
          <div className="flex flex-col flex-1 min-w-0 ml-2">
            <span className="text-sm font-semibold text-white truncate">
              {user?.fullName || user?.username || "User"}
            </span>
            <span className="text-xs text-gray-400 truncate">
              {user?.primaryEmailAddress?.emailAddress || user?.emailAddresses?.[0]?.emailAddress}
            </span>
          </div>
          <SignOutButton>
            <button className="ml-2 text-xs text-orange-400 hover:underline">Sign out</button>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col flex-1 min-w-0">
            <SignInButton>
              <button className="w-full mb-1 bg-orange-500 text-white rounded px-3 py-1 text-xs font-semibold hover:bg-orange-600">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="w-full bg-gray-800 text-orange-400 rounded px-3 py-1 text-xs font-semibold hover:bg-gray-700">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
      </div>
    </Sidebar>
  )
}
