import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import WikiList from "@/components/wiki/organisms/WikiList";

export default function Wiki({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Wiki");

  return (
    <main className="space-y-10 pt-36">
      <div className="space-y-6">
        <h2
          className={cn(
            "text-center text-5xl sm:text-6xl",
            locale === "en" ? "font-logo" : "font-cafe"
          )}
        >
          {t("title")}
        </h2>
        <p className="px-6 text-center !leading-[1.8] sm:!leading-loose text-base sm:text-lg whitespace-pre-line">
          {t("description")}
        </p>
      </div>
      <WikiList />
    </main>
  );
}
