import { unstable_setRequestLocale } from 'next-intl/server';
import { useMessages, useTranslations } from 'next-intl';
import type { Params } from '@/types/param';
import AuroraBackground from '@/components/ui/home/auroraBackground';
import TypewriterEffect from '@/components/ui/home/typewriterEffect';
import DownloadCV from '@/components/ui/home/downloadCVButton';
import { cn } from '@/utils/cn';

export default function Home({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Home');

    const description = useTranslations('Description');
    const messages = useMessages();
    const keys = Object.keys(messages.Description);
    const sentences = keys.map((key) => description(key));

    return (
        <AuroraBackground>
            <div className="space-y-4 sm:space-y-8 mt-12">
                <h2 className="w-max mx-auto text-xl sm:text-2xl lg:text-3xl font-medium opacity-80 text-theme-dark dark:text-theme-light">
                    {t('subtitle')}
                </h2>
                <h1
                    className={cn(
                        'w-max mx-auto text-7xl sm:text-8xl lg:text-9xl text-theme-dark dark:text-theme-light',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
            </div>
            <TypewriterEffect sentences={sentences} />
            <DownloadCV text={t('download')} />
        </AuroraBackground>
    );
}
