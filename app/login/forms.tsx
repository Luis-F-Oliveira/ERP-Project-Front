"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { toast } from "@/components/ui/use-toast"

export const formSchema = z.object({
    email: z.string().min(1, {
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})

export const Forms = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (await auth(values)) {
            toast({
                title: "Success",
                description: "You have successfully logged in"
            })
        } else {
            toast({
                title: "Error",
                description: "Invalid email or password"
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <section className="space-x-1">
                    <Button>
                        SingIn
                    </Button>
                    <Link href=''>
                        Remember password
                    </Link>
                </section>
            </form>
        </Form>
    )
}