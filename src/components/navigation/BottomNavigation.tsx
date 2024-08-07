import { cn } from "@/lib/utils";
import {
  type NavigationButton,
  LeftNavButton,
  RightNavButton,
} from "@/components/navigation/BottomNavigationButtons";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/common/Icons";

interface Props {
  values: NavigationButton[];
  isFixed?: boolean;
}

export default function BottomNavigation({ values, isFixed }: Props) {
  return (
    <div
      className={cn(
        "flex justify-center gap-[20dvw]",
        isFixed
          ? "fixed bottom-16 xl:bottom-20 right-1/2 translate-x-1/2"
          : "mb-16"
      )}
    >
      <LeftNavButton value={values[0]} icon={<ArrowLeftIcon />} />
      <RightNavButton value={values[1]} icon={<ArrowRightIcon />} />
    </div>
  );
}
