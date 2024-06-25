'use server'

import { formSchema } from "@/app/login/forms"
import { z } from "zod"
import { api } from "./axios"
import CryptoJS from 'crypto-js'
import { cookies } from "next/headers"

export async function auth(values: z.infer<typeof formSchema>)
{
    try {
        await api.post('login', values)
        const plaintext = process.env.APP_KEY
        if (plaintext) {
            const encryptedKey = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(plaintext))
            cookies().set('authenticate', encryptedKey)
        }
        return true
    } catch (err) {
        console.error(err)
        return false
    }
}