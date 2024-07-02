import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Sidebar } from "@/components/sidebar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans dark antialiased flex gap-3",
          fontSans.variable
        )}
      >
        <Sidebar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
