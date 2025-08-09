import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/app/lib/session";
import { cookies } from "next/headers";
import { auth } from "./lib/auth/utils";

// 1. Specify protected and public routes
const protectedRoutes = ["/dashboard", "/profile"];
const publicRoutes = ["/login", "/signup", "/"];

export async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  const nextSession = await auth();

  // 4. Redirect to /login if the user is not authenticated

  if (isProtectedRoute && !session?.userId && !nextSession?.user) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to / if the user is authenticated
  if (
    isPublicRoute &&
    (session?.userId || nextSession?.user) &&
    !req.nextUrl.pathname.startsWith("/")
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
