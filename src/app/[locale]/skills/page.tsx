import { Suspense } from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import Loading from "@/app/[locale]/loading";
import Main from "@/components/common/Main";
import MeteorBackground from "@/components/background/MeteorBackground";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import SkillCard from "@/components/skill/SkillCard";

export default function Skills({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Skills");

  const tAbout = useTranslations("About");
  const tProjects = useTranslations("Projects");
  const navValues = [
    { name: tAbout("title"), link: `/${locale}/about` },
    { name: tProjects("title"), link: `/${locale}/projects` },
  ];

  return (
    <>
      <MeteorBackground number={50} />
      <Main>
        <h2
          className={cn(
            "mt-14 text-5xl sm:text-6xl",
            locale === "en" ? "font-logo" : "font-cafe"
          )}
        >
          {t("title")}
        </h2>
        <Suspense fallback={<Loading />}>
          {[1, 2, 3, 4].map((i) => (
            <SkillCard
              key={i}
              index={i - 1}
              category={t(`category${i}`)}
              content={t.rich(`content${i}`, {
                s: (chunks) => (
                  <span className="bg-theme-light dark:bg-theme-dark border-theme border rounded-full px-2.5 py-1">
                    {chunks}
                  </span>
                ),
                sb: (chunks) => (
                  <span className="bg-theme text-theme-light font-bold rounded-full px-2.5 py-1">
                    {chunks}
                  </span>
                ),
              })}
            />
          ))}
        </Suspense>
        <BottomNavigation values={navValues} />
      </Main>
    </>
  );
}
