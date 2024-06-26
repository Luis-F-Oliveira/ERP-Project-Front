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
        <main>
            {children}
        </main>
    )
}
