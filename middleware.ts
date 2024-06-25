import type { NextRequest } from 'next/server'
import CryptoJS from 'crypto-js'

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('authenticate')?.value
    const plaintext = process.env.APP_KEY
    let authenticated = false

    if (authToken && plaintext) {
        const decryptedKey = CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(authToken));
        
        if (decryptedKey === plaintext) {
            authenticated = true
        }
    }

    if (authenticated && !request.nextUrl.pathname.startsWith('/dashboard')) {
        return Response.redirect(new URL('/dashboard', request.url))
    }

    if (authenticated === false && !request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    ],
}