import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-black text-white" style={{ background: "black", color: "white" }}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-black">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-800 px-4 bg-black">
            <SidebarTrigger className="text-gray-300 hover:text-white" />
            <Separator orientation="vertical" className="h-4 bg-gray-700" />
          </header>
          <main className="flex-1 p-4 bg-black">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
