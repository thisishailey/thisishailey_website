import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import Main from "@/components/common/Main";
import Heading from "@/components/common/Heading";
import SparkleBackground from "@/components/background/SparkleBackground";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function About({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");

  const tProjects = useTranslations("Projects");
  const tContact = useTranslations("Contact");
  const navValues = [
    { name: tProjects("title"), link: `/${locale}/projects` },
    { name: tContact("title"), link: `/${locale}/contact` },
  ];

  return (
    <>
      <SparkleBackground />
      <Main singlePage>
        <Heading text={t("title")} isEnglish={locale === "en"} />
        <p className="max-w-3xl mx-auto text-center !leading-[1.8] sm:!leading-loose text-lg sm:text-2xl whitespace-pre-line">
          {t.rich("content", {
            b: (chunks) => (
              <span className="text-theme font-bold">{chunks}</span>
            ),
          })}
        </p>
      </Main>
      <BottomNavigation values={navValues} isFixed />
    </>
  );
}
