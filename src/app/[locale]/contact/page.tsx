import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { contactInfo } from "@/lib/messages/contact";
import type { Params } from "@/lib/types/param";
import { cn } from "@/lib/utils";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";
import Main from "@/components/common/Main";
import SparkleBackground from "@/components/background/SparkleBackground";
import BottomNavigation from "@/components/navigation/BottomNavigation";

export default function Contact({ params: { locale } }: Params) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Contact");

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
        <ul className="flex flex-col gap-6 sm:gap-10 divide-y-2 text-lg xs:text-xl sm:text-2xl">
          {contactInfo.map((info) => (
            <li
              key={info.key}
              className="flex items-center gap-3 px-4 pt-6 sm:pt-10 first:pt-4 last:pb-4"
            >
              <div className="flex items-center gap-3 w-14 sm:w-40">
                <div>{info.icon}</div>
                <div className="hidden sm:block font-medium">
                  {t(info.key).toUpperCase()}
                </div>
              </div>
              <a
                href={info.link}
                target="_blank"
                rel="noreferrer noopener"
                onMouseOver={CursorToPointer}
                onMouseLeave={CursorToNormal}
              >
                <div>{info.value}</div>
              </a>
            </li>
          ))}
        </ul>
        <BottomNavigation values={navValues} />
      </Main>
    </>
  );
}
