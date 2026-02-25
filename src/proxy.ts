import { checkApiHealth } from '@/lib/app/health-check';
import { NextRequest, NextResponse } from 'next/server';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isServiceUnavailablePage: boolean = pathname === '/service-unavailable';
  const isHealthy: boolean = await checkApiHealth();

  if (isServiceUnavailablePage && isHealthy) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (isServiceUnavailablePage && !isHealthy) {
    return NextResponse.next();
  }

  if (!isHealthy) {
    return NextResponse.redirect(new URL('/service-unavailable', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};
