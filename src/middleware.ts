import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const publicRoutes = [
        '/auth',
        '/auth/signup',
        '/auth/verify',
    ]

    try {
        const path = request.nextUrl.pathname;
        const access_token = request.cookies.get('access_token')?.value || undefined;

        const isPublicPath = publicRoutes.includes(path);

        console.log('Path:', path);
        console.log('Is Public Path:', isPublicPath);
        console.log('Access Token:', access_token);

        if (isPublicPath && access_token) {
            console.log('Redirecting to home');
            return NextResponse.redirect(new URL('/', request.url));
        }

        if (!isPublicPath && !access_token) {
            console.log('Redirecting to login');
            return NextResponse.redirect(new URL('/auth', request.url));
        }

        return NextResponse.next(); // Continue to the next middleware or request handler
    } catch (error) {
        console.error('Middleware error:', error);
        return NextResponse.redirect(new URL('/error', request.url)); // Redirect to an error page if needed
    }
}

export const config = {
    matcher: ['/auth/:path*', '/', '/:path*'],
}