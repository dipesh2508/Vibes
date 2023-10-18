import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = getToken({ req: request, secret: process.env.JWT_SECRET });

    const { pathname } = request.nextUrl;

    if (pathname.includes("/api/auth") || token!==null) {
        return NextResponse.next();
    }

    if (!token && pathname !== '/login') {
        return NextResponse.rewrite(new URL('/login', request.url));
    }
}