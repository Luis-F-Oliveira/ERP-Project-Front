"use client"

import { ColumnDef } from "@tanstack/react-table"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Delete, Update } from "@/partials/stock"
import { Pencil, Trash } from "lucide-react"

export interface IStock {
    id: number
    name: string
    description: string
    quantity: number
    price_per_unit: number
}

export const columns: ColumnDef<IStock>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "description",
        header: "Descrição",
    },
    {
        accessorKey: "quantity",
        header: "Quantidade",
    },
    {
        accessorKey: "price_per_unit",
        header: () => <div>Preço por unidade</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("price_per_unit"))
            const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(amount)

            return <div>{formatted}</div>
        },
    },
    {
        id: "delete",
        cell: ({ row }) => {
            const stock = row.original
            return (
                <AlertDialog>
                    <AlertDialogTrigger>
                        <Trash />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                            <AlertDialogDescription>
                            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
                            e remova seus dados de nossos servidores.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <Delete id={stock.id.toString()} />
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )
        },
    },
    {
        id: "update",
        cell: ({ row }) => {
            const stock = row.original
            return (
                <Dialog>
                    <DialogTrigger className="ml-5">
                        <Pencil />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                ATUALIZAR
                            </DialogTitle>
                            <Update id={stock.id.toString()} />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            )
        },
    },
]
