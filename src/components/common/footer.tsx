import { Nanum_Myeongjo } from 'next/font/google';
import { cn } from '@/utils/cn';
import { useTranslations } from 'next-intl';

const myeongjo = Nanum_Myeongjo({ weight: '400', subsets: ['latin'] });

export default function Footer() {
    const t = useTranslations('Footer');
    const year = new Date().getFullYear();

    return (
        <footer
            className={cn(
                'opacity-0 absolute bottom-0 z-50 w-screen pb-5 text-center text-sm sm:text-base text-theme-light dark:text-theme-dark',
                myeongjo.className
            )}
        >
            {t('copyright', { year })}
        </footer>
    );
}
