import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Login"
}

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {children}
        </div>
    )
}
