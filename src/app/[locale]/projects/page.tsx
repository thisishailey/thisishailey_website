import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import Main from "@/components/common/Main";
import MeteorBackground from "@/components/background/MeteorBackground";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import ProjectCard from "@/components/project/ProjectCard";

export default function Projects({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Projects");

  const tSkills = useTranslations("Skills");
  const tContact = useTranslations("Contact");
  const navValues = [
    { name: tSkills("title"), link: `/${locale}/skills` },
    { name: tContact("title"), link: `/${locale}/contact` },
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
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <ProjectCard
              key={i}
              index={i - 1}
              title={t(`project${i}`)}
              subtitle={t(`subtitle${i}`)}
              overview={t.rich(`overview${i}`, {
                b: (chunks) => <span className="font-semibold">{chunks}</span>,
              })}
              features={t(`features${i}`)}
            />
          ))}
        </div>
        <BottomNavigation values={navValues} />
        <div className="min-h-10"></div>
      </Main>
    </>
  );
}
