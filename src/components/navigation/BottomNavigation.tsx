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
    <div className="flex justify-between w-full max-w-md sm:max-w-xl mt-3 px-4">
      <LeftNavButton value={values[0]} icon={<ArrowLeftIcon />} />
      <RightNavButton value={values[1]} icon={<ArrowRightIcon />} />
    </div>
  );
}
