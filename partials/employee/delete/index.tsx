import { AlertDialogAction } from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { api } from "@/lib/axios"
import React from "react"

interface Props {
    id: string
}

export const Delete: React.FC<Props> = ({ id }) => {
    const handleDelete = async () => {
        await api.delete(`employees/${id}`)
            .then(() => {
                toast({
                    title: "Aviso",
                    description: "Funcionário excluido com sucesso!"
                })
            })
    }

    return <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
}