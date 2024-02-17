import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  locales,
  defaultLocale: "ru",
  localePrefix,
});

export const config = {
  matcher: [
    "/",
    "/(ru|en)/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
