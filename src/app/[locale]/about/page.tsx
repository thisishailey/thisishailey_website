import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import Main from "@/components/common/Main";
import SparkleBackground from "@/components/background/SparkleBackground";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function About({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");

  const tSkills = useTranslations("Skills");
  const tProjects = useTranslations("Projects");
  const navValues = [
    { name: tSkills("title"), link: `/${locale}/skills` },
    { name: tProjects("title"), link: `/${locale}/projects` },
  ];

  return (
    <>
      <SparkleBackground />
      <Main singlePage>
        <h2
          className={cn(
            "mt-14 text-5xl sm:text-6xl",
            locale === "en" ? "font-logo" : "font-cafe"
          )}
        >
          {t("title")}
        </h2>
        <p className="max-w-3xl mx-auto text-center !leading-[1.8] sm:!leading-loose text-lg sm:text-2xl whitespace-pre-line">
          {t.rich("content", {
            b: (chunks) => (
              <span className="text-theme font-bold">{chunks}</span>
            ),
          })}
        </p>
        <BottomNavigation values={navValues} />
      </Main>
    </>
  );
}
