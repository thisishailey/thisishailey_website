import { useTranslations } from "next-intl";
import Logo from "@/components/header/molecules/Logo";
import Menu from "@/components/header/molecules/Menu";
import MenuList from "@/components/header/molecules/MenuList";

export default function Header() {
  const t = useTranslations("Header");
  const tLocale = useTranslations("Locale");

  const localeValues = { en: tLocale("en"), ko: tLocale("ko") };

  const menuItems = [
    { text: t("about"), link: "about" },
    { text: t("project"), link: "projects" },
    { text: t("contact"), link: "contact" },
  ];

  return (
    <>
      <header className="fixed z-40 top-3 inset-x-0 max-w-6xl mx-auto">
        <div className="relative flex items-center justify-between mx-3 px-5 sm:px-6 py-1.5 sm:py-3 rounded-full shadow-inner shadow-theme/50 ring-2 ring-theme/25 dark:ring-0 bg-theme-light dark:bg-theme-dark border border-transparent dark:border-theme/[0.2]">
          <Logo />
          <Menu localeValues={localeValues} />
        </div>
      </header>
      <MenuList items={menuItems} />
    </>
  );
}
