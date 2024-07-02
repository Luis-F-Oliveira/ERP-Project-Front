import { Sidebar } from "@/components/sidebar";
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Dashboard"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-screen h-screen flex gap-3">
            <Sidebar />
            {children}
        </main>
    )
}
