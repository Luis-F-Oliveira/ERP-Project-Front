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
    age: z.string().min(1, {
        message: "Idade é obrigatória"
    }),
    role: z.string().min(1, {
        message: "Cargo é obrigatório"
    }),
    payment: z.string().min(1, {
        message: "Salário é obrigatório"
    }).refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Apenas numero"
    }),
    phone: z.string().min(1, {
        message: "Telefone é obrigatório"
    }),
    email: z.string().min(1, {
        message: "Email é obrigatório"
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
            age: "",
            role: "",
            payment: "",
            phone: "",
            email: ""
        }
    })

    const getData = async (id: string) => {
        const response = await api.get(`employees/${id}`)
        const { data } = response

        form.reset({
            name: data.name,
            age: data.age,
            role: data.role,
            payment: data.payment,
            phone: data.phone,
            email: data.email
        })
    }

    React.useEffect(() => {
        getData(id)
    }, [id])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await api.put(`employees/${id}`, values)
            .then(() => {
                toast({
                    title: "Aviso",
                    description: "Funcionário atualizado com sucesso!"
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
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Idade</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Cargo</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="payment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Salário</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
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