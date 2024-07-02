'use client'

import React from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent } from "../ui/card"
import { LogOut, PackageOpen, ShoppingCart, Users } from 'lucide-react'
import Link from "next/link"
import { logout } from "@/lib/logout"
import { useRouter } from "next/navigation"

export const Sidebar = () => {
    const router = useRouter()
    const handleLogout = async () => {
        if (await logout()) {
            router.refresh()
        }
    }

    return (
        <Card className="rounded-none pt-5">
            <CardContent className="h-full relative">
                <TooltipProvider>
                    <div className="flex flex-col gap-5">
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='/dashboard/cashier'>
                                    <ShoppingCart />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Caixa</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='/dashboard/stock'>
                                    <PackageOpen />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Estoque</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='/dashboard/employees'>
                                    <Users />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Funcionários</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
                <div className="absolute bottom-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <LogOut onClick={handleLogout} className="text-red-500" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Sair</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </CardContent>
        </Card>
    )
}