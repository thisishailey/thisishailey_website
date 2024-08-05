import {
  type NavigationButton,
  LeftNavButton,
  RightNavButton,
} from "@/components/navigation/BottomNavigationButtons";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/common/Icons";

interface Props {
  values: NavigationButton[];
}

export default function BottomNavigation({ values }: Props) {
  return (
    <div className="fixed bottom-20 right-1/2 translate-x-1/2 flex justify-center gap-[20dvw]">
      <LeftNavButton value={values[0]} icon={<ArrowLeftIcon />} />
      <RightNavButton value={values[1]} icon={<ArrowRightIcon />} />
    </div>
  );
}
