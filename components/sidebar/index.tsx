import React from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent } from "../ui/card"
import { PackageOpen, ShoppingCart, Users } from 'lucide-react'
import Link from "next/link"

export const Sidebar = () => {
    return (
        <Card className="rounded-none pt-5">
            <CardContent>
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
            </CardContent>
        </Card>
    )
}