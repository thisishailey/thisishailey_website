"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import storeMessage from "@/lib/firebase/message";
import sendEmail from "@/lib/firebase/mail";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";

interface Props {
  locale: string;
  text: { input: string; textarea: string; button: string };
}

const Loader = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    async function getLoader() {
      const { waveform } = await import("ldrs");
      waveform.register();
    }
    getLoader();

    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <l-waveform
      size={20}
      speed={1}
      color={isDarkMode ? "#292929" : "#f9f9ff"}
    />
  );
};

const Checkmark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="size-7"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "easeInOut",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

export default function ContactForm({ locale, text }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  useEffect(() => {
    if (isSent) {
      setTimeout(() => {
        setIsSent(false);
      }, 2500);
    }
  }, [isSent]);

  const handleMessage = async (name: string, content: string) => {
    const { error: messageError } = await storeMessage(name, content);
    const { error: emailError } = await sendEmail(name, content);

    if (!messageError && !emailError) {
      return true;
    } else {
      console.log(messageError, emailError);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const name = e.currentTarget.querySelector(
      "input#name"
    ) as HTMLInputElement;
    const message = e.currentTarget.querySelector(
      "textarea#message"
    ) as HTMLTextAreaElement;

    if (!name.value) {
      name.focus();
      setIsLoading(false);
    } else if (!message.value) {
      message.focus();
      setIsLoading(false);
    } else {
      const isSuccess = await handleMessage(name.value, message.value);
      setIsSent(isSuccess);

      setTimeout(() => {
        setIsLoading(false);
        name.value = "";
        message.value = "";
      }, 1200);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 pt-8 border-t-2 xl:border-t-0 xl:py-8 xl:pl-8 xl:border-l-2 border-neutral-200 dark:border-neutral-700"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="off"
        maxLength={30}
        placeholder={text.input}
        className="p-3 rounded-md border border-theme/50 focus:outline-theme/70"
        onMouseOver={CursorToPointer}
        onMouseLeave={CursorToNormal}
      />
      <textarea
        name="message"
        id="message"
        rows={5}
        autoComplete="off"
        maxLength={500}
        placeholder={text.textarea}
        className="p-3 rounded-md border border-theme/50 focus:outline-theme/70 break-keep"
        onMouseOver={CursorToPointer}
        onMouseLeave={CursorToNormal}
      />
      <motion.button
        type="submit"
        className={cn(
          "py-3 px-6 rounded-md text-xl text-theme-light dark:text-theme-dark bg-theme",
          locale === "en" ? "font-logo font-bold" : "font-cafe"
        )}
        onMouseOver={CursorToPointer}
        onMouseLeave={CursorToNormal}
        whileTap={{ scale: 0.9 }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-7">
            <Loader />
          </div>
        ) : isSent ? (
          <div className="flex items-center justify-center h-7">
            <Checkmark />
          </div>
        ) : (
          text.button
        )}
      </motion.button>
    </form>
  );
}
