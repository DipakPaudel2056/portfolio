import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const response = NextResponse.next();
    response.headers.set("X-User-Authenticated", "true");
    return response;
  },
  {
    pages: {
      signIn: "/login", 
    },
  }
);

// Specify which paths are protected
export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"], 
};
