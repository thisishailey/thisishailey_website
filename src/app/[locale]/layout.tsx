import favicon from "../../../public/favicon.ico";
import { locales } from "../../../intl.config.mjs";
import { Ubuntu } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import "@/lib/styles/globals.css";
import Theme from "@/lib/styles/theme";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import InitialTransition from "@/components/common/InitialTransition";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/common/Cursor";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

interface Props extends Params {
  children: React.ReactNode;
}

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href={favicon.src} type="image/x-icon" />
      <body
        className={cn(
          locale === "en" ? ubuntu.className : "font-nanum",
          "select-none cursor-none break-keep antialiased bg-theme-light dark:bg-theme-dark"
        )}
      >
        <Theme>
          <InitialTransition />
          <Header />
          <Cursor />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
