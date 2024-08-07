import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import Main from "@/components/common/Main";
import Heading from "@/components/common/Heading";
import MeteorBackground from "@/components/background/MeteorBackground";
import WikiList from "@/components/wiki/organisms/WikiList";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Wiki({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Wiki");

  const tProjects = useTranslations("Projects");
  const tContact = useTranslations("Contact");
  const navValues = [
    { name: tProjects("title"), link: `/${locale}/projects` },
    { name: tContact("title"), link: `/${locale}/contact` },
  ];

  return (
    <>
      <MeteorBackground />
      <Main>
        <div className="space-y-6">
          <Heading text={t("title")} isEnglish={locale === "en"} />
          <p className="px-6 text-center !leading-[1.8] sm:!leading-loose text-base sm:text-lg whitespace-pre-line">
            {t("description")}
          </p>
        </div>
        <WikiList />
      </Main>
      <BottomNavigation values={navValues} />
    </>
  );
}
