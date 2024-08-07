import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import Main from "@/components/common/Main";
import Heading from "@/components/common/Heading";
import MeteorBackground from "@/components/background/MeteorBackground";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import ProjectCard from "@/components/project/ProjectCard";

export default function Projects({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Projects");

  const tAbout = useTranslations("About");
  const tWiki = useTranslations("Wiki");
  const navValues = [
    { name: tAbout("title"), link: `/${locale}/about` },
    { name: tWiki("title"), link: `/${locale}/wiki` },
  ];

  return (
    <>
      <MeteorBackground number={50} />
      <Main>
        <Heading text={t("title")} isEnglish={locale === "en"} />
        <div className="flex flex-col gap-4 w-[90dvw] mx-auto lg:px-20">
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
      </Main>
      <BottomNavigation values={navValues} />
    </>
  );
}
