// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = true; // TODO: Fix this when implementing auth
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname == "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  if (!isAuthenticated && !request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!auth).*)"],
};
