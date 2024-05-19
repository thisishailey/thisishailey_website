"use client";

import { motion } from "framer-motion";
import { CursorToNormal, CursorToPointer } from "@/components/common/cursor";
import { cn } from "@/utils/cn";

interface LearnMoreProps {
  text: string;
}

interface DownloadCVProps extends LearnMoreProps {
  filename: string;
}

interface HomeButtonProps extends LearnMoreProps {
  onClick: () => void;
  primary?: boolean;
}

export const DownloadCVButton = ({ text, filename }: DownloadCVProps) => {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return <HomeButton text={text} onClick={handleDownload} primary />;
};

export const LearnMoreButton = ({ text }: LearnMoreProps) => {
  const handleLearnMore = () => {
    document.getElementById("menu-button")?.click();
  };
  
  return <HomeButton text={text} onClick={handleLearnMore} />;
};

const HomeButton = ({ text, onClick, primary = false }: HomeButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 4.5,
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      className={cn(
        "mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg font-medium text-lg sm:text-xl",
        primary
          ? "bg-theme text-theme-light dark:text-theme-dark"
          : "bg-theme-light dark:bg-theme-dark text-theme border border-theme"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      onMouseOver={CursorToPointer}
      onMouseLeave={CursorToNormal}
    >
      {text}
    </motion.button>
  );
};
