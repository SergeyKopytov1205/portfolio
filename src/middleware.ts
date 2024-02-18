import { locales, localePrefix } from "./navigation";
import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: "ru",
    localePrefix,
  });
  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
