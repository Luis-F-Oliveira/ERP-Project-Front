import { AlertDialogAction } from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { api } from "@/lib/axios"
import { useRouter } from "next/navigation"
import React from "react"

interface Props {
    id: string
}

export const Delete: React.FC<Props> = ({ id }) => {
    const router = useRouter()

    const handleDelete = async () => {
        await api.delete(`stocks/${id}`)
            .then(() => {
                toast({
                    title: "Aviso",
                    description: "Estoque excluido com sucesso!"
                })
            })
    }

    return <AlertDialogAction onClick={handleDelete}>Continuar</AlertDialogAction>
}