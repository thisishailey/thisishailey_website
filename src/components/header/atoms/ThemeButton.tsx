"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";
import { MoonIcon, SunIcon } from "@/components/common/Icons";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className={"w-12 h-12 p-3 text-theme-dark dark:text-theme-light"}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.6 }}
      onClick={toggleDarkMode}
      onMouseOver={CursorToPointer}
      onMouseLeave={CursorToNormal}
    >
      {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
    </motion.button>
  );
}
