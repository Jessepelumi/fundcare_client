// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function authMiddleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   const isAuthenticated = request.cookies.has("authToken");
//   const hasCompletedOnboarding =
//     request.cookies.get("onboardingCompleted")?.value === "true";

//   // if user is not authenticated, redirect to login
//   if (!isAuthenticated && pathname !== "/login") {
//     return NextResponse.redirect(new URL("/onboarding", request.url));
//   }

//   // if authenticated and onboarding completed, redirect to home
//   if (isAuthenticated && pathname === "/") {
//     return NextResponse.redirect(new URL("/home", request.url));
//   }

//   // proceed as usual
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|favicon.ico|images|public).*)"],
// };
