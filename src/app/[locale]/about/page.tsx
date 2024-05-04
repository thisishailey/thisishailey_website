import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import { Meteors } from '@/components/ui/meteors';

export default function About({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('About');

    return (
        <main className="flex flex-col items-center sm:justify-center gap-8 sm:gap-14 w-screen max-w-6xl h-screen mx-auto p-4 pt-20 sm:pt-24 pb-8 sm:pb-10">
            <Meteors number={50} />
            <h1
                className={cn(
                    'text-6xl sm:text-7xl',
                    locale === 'en' ? 'font-logo' : 'font-cafe'
                )}
            >
                {t('title')}
            </h1>
            <p>{t('content')}</p>
        </main>
    );
}
