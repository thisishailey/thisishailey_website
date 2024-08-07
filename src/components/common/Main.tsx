import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  singlePage?: boolean;
}

export default function Main({ children, singlePage }: Props) {
  if (singlePage) {
    return (
      <div
        className={
          singlePage
            ? "fixed bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-0"
            : "w-fit mx-auto pt-20 sm:pt-24 pb-8 sm:pb-10"
        }
      >
        <main
          className={cn(
            "flex flex-col items-center gap-8 sm:gap-14 w-screen max-w-6xl p-4",
            singlePage ? "max-h-[65dvh] overflow-y-auto" : ""
          )}
        >
          {children}
        </main>
      </div>
    );
  } else {
    return <main className="space-y-10 py-36">{children}</main>;
  }
}
