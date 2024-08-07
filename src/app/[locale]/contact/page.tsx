import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import Main from "@/components/common/Main";
import Heading from "@/components/common/Heading";
import SparkleBackground from "@/components/background/SparkleBackground";
import ContactList from "@/components/contact/organisms/ContactList";
import ContactForm from "@/components/contact/organisms/ContactForm";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Contact({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Contact");

  const tProjects = useTranslations("Projects");
  const tWiki = useTranslations("Wiki");
  const navValues = [
    { name: tProjects("title"), link: `/${locale}/projects` },
    { name: tWiki("title"), link: `/${locale}/wiki` },
  ];

  return (
    <>
      <SparkleBackground />
      <Main singlePage>
        <Heading text={t("title")} isEnglish={locale === "en"} />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <ContactList />
          <ContactForm
            locale={locale}
            text={{
              input: t("input"),
              textarea: t("textarea"),
              button: t("send"),
            }}
          />
        </div>
      </Main>
      <BottomNavigation values={navValues} isFixed />
    </>
  );
}
