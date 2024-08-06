import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";

export default function Wiki({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Wiki");

  return (
    <main className="pt-36">
      <h2
        className={cn(
          "text-center text-5xl sm:text-6xl",
          locale === "en" ? "font-logo" : "font-cafe"
        )}
      >
        {t("title")}
      </h2>
      <p className="mt-6 px-6 text-center !leading-[1.8] sm:!leading-loose text-base sm:text-lg whitespace-pre-line">
        {t("description")}
      </p>
    </main>
  );
}
