import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import Main from "@/components/common/Main";
import SparkleBackground from "@/components/background/SparkleBackground";
import ContactList from "@/components/contact/organisms/ContactList";
import ContactForm from "@/components/contact/organisms/ContactForm";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Contact({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Contact");

  const tAbout = useTranslations("About");
  const tProjects = useTranslations("Projects");
  const navValues = [
    { name: tAbout("title"), link: `/${locale}/about` },
    { name: tProjects("title"), link: `/${locale}/projects` },
  ];

  return (
    <>
      <SparkleBackground />
      <Main singlePage>
        <h2
          className={cn(
            "text-5xl sm:text-6xl",
            locale === "en" ? "font-logo" : "font-cafe"
          )}
        >
          {t("title")}
        </h2>
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
      <BottomNavigation values={navValues} />
    </>
  );
}
