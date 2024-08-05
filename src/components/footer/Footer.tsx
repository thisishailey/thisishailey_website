import { Nanum_Myeongjo } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { cn } from "@/lib/utils";

const myeongjo = Nanum_Myeongjo({ weight: '400', subsets: ['latin'] });

export default function Footer() {
    const t = useTranslations('Footer');
    const year = new Date().getFullYear();

    return (
        <footer
            className={cn(
                'fixed bottom-0 z-50 w-screen pb-5 opacity-0 text-center text-sm sm:text-base text-theme-light dark:text-theme-dark',
                myeongjo.className
            )}
        >
            {t('copyright', { year })}
        </footer>
    );
}
