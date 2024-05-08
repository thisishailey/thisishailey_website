import { type INavButton, LeftNavButton, RightNavButton } from '../ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/ui/icons';

interface BottomNavProps {
    values: INavButton[];
}

export default function BottomNavButtons({ values }: BottomNavProps) {
    return (
        <div className="flex justify-between w-full max-w-md sm:max-w-xl mt-3 px-4">
            <LeftNavButton value={values[0]} icon={<ArrowLeftIcon />} />
            <RightNavButton value={values[1]} icon={<ArrowRightIcon />} />
        </div>
    );
}
