"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";

export interface NavigationButton {
  name: string;
  link: string;
}

interface Props {
  value: NavigationButton;
  icon: React.ReactNode;
}

export function LeftNavButton({ value, icon }: Props) {
  return (
    <Link
      href={value.link}
      scroll={false}
      onMouseOver={CursorToPointer}
      onMouseLeave={CursorToNormal}
    >
      <motion.div
        className="px-3 sm:px-5 py-2 sm:py-3 flex gap-2 sm:gap-3 items-center rounded-full shadow-lg border border-theme bg-theme-light dark:bg-theme-dark text-theme font-normal text-base sm:text-xl"
        whileHover={{
          color: "var(--theme-light)",
          backgroundColor: "var(--theme)",
        }}
        whileTap={{
          color: "var(--theme-light)",
          backgroundColor: "var(--theme)",
          scale: 0.9,
        }}
      >
        {icon}
        {value.name}
      </motion.div>
    </Link>
  );
}

export function RightNavButton({ value, icon }: Props) {
  return (
    <Link
      href={value.link}
      scroll={false}
      onMouseOver={CursorToPointer}
      onMouseLeave={CursorToNormal}
    >
      <motion.div
        className="px-3 sm:px-5 py-2 sm:py-3 flex gap-2 sm:gap-3 items-center rounded-full shadow-lg border border-theme bg-theme-light dark:bg-theme-dark text-theme font-normal text-base sm:text-xl"
        whileHover={{
          color: "var(--theme-light)",
          backgroundColor: "var(--theme)",
        }}
        whileTap={{
          color: "var(--theme-light)",
          backgroundColor: "var(--theme)",
          scale: 0.9,
        }}
      >
        {value.name}
        {icon}
      </motion.div>
    </Link>
  );
}
