"use client";

import Link from "next/link";
import { CursorToNormal, CursorToPointer } from "../../common/cursor";

export default function Logo() {
  const closeMenu = () => {
    const $button = document.getElementById("menu-button") as HTMLButtonElement;

    if ($button.classList.contains("isOpen")) {
      $button.click();
    }
  };

  return (
    <Link
      href={"/"}
      scroll={false}
      className="flex items-end justify-center h-12 w-12 sm:w-28 mb-1 font-logo text-4xl text-theme-dark dark:text-theme-light"
      onClick={closeMenu}
      onMouseOver={CursorToPointer}
      onMouseLeave={CursorToNormal}
    >
      <h1>
        <span className="hidden sm:block">hailey</span>
        <span className="sm:hidden">h.</span>
      </h1>
    </Link>
  );
}
