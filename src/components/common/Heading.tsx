import { cn } from "@/lib/utils";

interface Props {
  text: string;
  isEnglish: boolean;
}

export default function Heading({ text, isEnglish }: Props) {
  return (
    <h2
      className={cn(
        "text-center text-5xl sm:text-6xl",
        isEnglish ? "font-logo" : "font-cafe"
      )}
    >
      {text}
    </h2>
  );
}
