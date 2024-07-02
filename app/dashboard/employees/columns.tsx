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
import { Delete, Update } from "@/partials/employee"
import { Pencil, Trash } from "lucide-react"

export interface IEmployee {
    id: number
    name: string
    age: string
    role: string
    payment: string
    phone: string
    email: string
}

export const columns: ColumnDef<IEmployee>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "age",
        header: "Idade",
    },
    {
        accessorKey: "role",
        header: "Cargo",
    },
    {
        accessorKey: "payment",
        header: () => <div>Salário</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("payment"))
            const formatted = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(amount)

            return <div>{formatted}</div>
        },
    },
    {
        accessorKey: "phone",
        header: "Telefone",
    },
    {
        accessorKey: "email",
        header: "Email",
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
