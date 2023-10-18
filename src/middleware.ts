import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.JWT_SECRET });

    const { pathname } = request.nextUrl;

    if (!token && pathname !== '/login' && !pathname.includes("/_next/")) {
        return NextResponse.rewrite(new URL('/login', request.url));
      }
}
