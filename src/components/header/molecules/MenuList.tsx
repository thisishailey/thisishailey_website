"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";

interface MenuNavProps {
  items: { text: string; link: string }[];
}

export default function MenuList({ items }: MenuNavProps) {
  const locale = useLocale();

  const closeMenu = () => {
    const $button = document.getElementById("menu-button") as HTMLButtonElement;
    $button.click();
  };

  return (
    <motion.nav id="menu" className="fixed z-30 w-screen h-screen bg-theme">
      <ul
        className={cn(
          "flex flex-col items-center justify-center gap-10 xs:gap-12 w-full h-full pt-20 pb-28 sm:pb-14 text-7xl sm:text-8xl lg:text-9xl text-theme-light dark:text-theme-dark",
          locale === "en" ? "font-logo" : "font-cafe"
        )}
      >
        {items.map((item) => (
          <Link
            key={item.link}
            href={`/${locale}/${item.link}`}
            scroll={false}
            onClick={closeMenu}
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
          >
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.text}
            </motion.li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}
