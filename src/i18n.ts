import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "../intl.config.mjs";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`@/lib/messages/${locale}.json`)).default,
  };
});
