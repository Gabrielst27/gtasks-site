import { checkApiHealth } from '@/lib/app/health-check';
import { ERoutes } from '@/utils/routes.enum';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isServiceUnavailablePage: boolean =
    pathname === ERoutes.SERVICE_UNAVAILABLE;
  const isHealthy: boolean = await checkApiHealth();
  if (isServiceUnavailablePage && isHealthy) {
    return NextResponse.redirect(new URL(ERoutes.WORKSPACE, request.url));
  }
  if (isServiceUnavailablePage && !isHealthy) {
    return NextResponse.next();
  }
  if (!isServiceUnavailablePage && !isHealthy) {
    return NextResponse.redirect(
      new URL(ERoutes.SERVICE_UNAVAILABLE, request.url),
    );
  }

  const isRootPage: boolean = pathname === '/';
  if (isRootPage) {
    return NextResponse.redirect(new URL(ERoutes.WORKSPACE, request.url));
  }

  const loginCookie = request.cookies.get(
    process.env.LOGIN_COOKIE_NAME ?? '',
  )?.value;
  const isAuthenticated: boolean = loginCookie ? true : false;

  const isAuthPage: boolean = pathname === ERoutes.AUTH;
  if (!isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL(ERoutes.LOGIN, request.url));
  }
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL(ERoutes.WORKSPACE, request.url));
  }

  const isLoginOrSignup: boolean = pathname.startsWith(ERoutes.AUTH);
  if (!isAuthenticated && !isLoginOrSignup) {
    return NextResponse.redirect(new URL(ERoutes.LOGIN, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};
