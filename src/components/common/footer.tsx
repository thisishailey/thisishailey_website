import { Nanum_Myeongjo } from 'next/font/google';
import { cn } from '@/utils/cn';
import type { Translation } from '@/types/intl';

const myeongjo = Nanum_Myeongjo({ weight: '400', subsets: ['latin'] });

export default function Footer({ t }: { t: Translation }) {
    const year = new Date().getFullYear();

    return (
        <footer
            className={cn(
                'absolute bottom-0 w-screen pb-5 text-center text-sm sm:text-base text-theme-dark dark:text-theme-light',
                myeongjo.className
            )}
        >
            {t('copyright', { year })}
        </footer>
    );
}
