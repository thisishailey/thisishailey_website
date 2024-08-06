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
          <ul className="self-center flex flex-col gap-6 sm:gap-10 py-3 text-lg xs:text-xl sm:text-2xl">
            {contactInfo.map((info) => (
              <li key={info.key} className="flex items-center gap-3 px-4">
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
          <form className="flex flex-col gap-3 pt-8 border-t-2 xl:border-t-0 xl:py-8 xl:pl-8 xl:border-l-2 border-neutral-200 dark:border-neutral-700">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder={t("input")}
              className="p-3 rounded-md"
              onMouseOver={CursorToPointer}
              onMouseLeave={CursorToNormal}
            />
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder={t("textarea")}
              className="p-3 rounded-md"
              onMouseOver={CursorToPointer}
              onMouseLeave={CursorToNormal}
            />
            <button
              type="submit"
              className={cn(
                "py-3 px-6 rounded-md text-xl text-theme-light dark:text-theme-dark bg-theme",
                locale === "en" ? "font-logo font-bold" : "font-cafe"
              )}
              onMouseOver={CursorToPointer}
              onMouseLeave={CursorToNormal}
            >
              {t("send")}
            </button>
          </form>
        </div>
      </Main>
      <BottomNavigation values={navValues} />
    </>
  );
}
