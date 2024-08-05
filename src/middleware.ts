import createMiddleware from "next-intl/middleware";
import { locales } from "../intl.config.mjs";

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
});

export const config = {
  matcher: ["/", "/(en|ko)/:path*"],
};
