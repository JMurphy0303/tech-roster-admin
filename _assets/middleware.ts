// middleware is code that runs before any request to the web app is completed (think of it as a gatekeeper)
// this middleware checks if the user is logged in before allowing them to access certain routes - if they are not they are redirected back to the login page
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    // The NEXTAUTH_SECRET is a cryptographic key used to decode and verify the JSON web token - extra layer of security
    // Get the user's session JSON web token from NextAuth
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // if no token is found (user is not logged in), redirect to the login page
    if (!token) {
        const loginUrl = new URL('/login', req.url);
        return NextResponse.redirect(loginUrl);
    }

    // if token found (user logged in), allow the request to proceed
    return NextResponse.next();
}

export const config = {
    // the routes that require authentication
    matcher: ['/', '/create', '/api/post']
};