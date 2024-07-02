'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"
import { api } from "@/lib/axios"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Nome é obrigatório"
    }),
    description: z.string(),
    quantity: z.string().min(1, {
        message: "Quantidade é obrigatória"
    }).refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Apenas numero"
    }),
    price_per_unit: z.string().min(1, {
        message: "Preço por unidade é obrigatório"
    }).refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Apenas numero"
    })
})

interface Props {
    id: string
}

export const Update: React.FC<Props> = ({ id }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            quantity: "",
            price_per_unit: "",
        }
    })

    const getData = async (id: string) => {
        const response = await api.get(`stocks/${id}`)
        const { data } = response

        form.reset({
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            price_per_unit: data.price_per_unit,
        })
    }

    React.useEffect(() => {
        getData(id)
    }, [id])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await api.put(`stocks/${id}`, values)
            .then(() => {
                toast({
                    title: "Aviso",
                    description: "Estoque atualizado com sucesso!"
                })
            })
    }

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Quantidade</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price_per_unit"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Preço por Unidade</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button type="submit">
                        Salvar
                    </Button>
                </div>
            </form>
        </Form>
    )
}