// Stub - Clerk middleware removed
export function clerkMiddleware(handler: any) {
  return handler;
}
export function createRouteMatcher(routes: string[]) {
  return (req: any) => routes.some(r => req?.nextUrl?.pathname?.includes(r));
}
