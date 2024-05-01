import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Params } from '@/types/param';
import AuroraBackground from '@/components/ui/aurora-background';
import TypewriterEffect from '@/components/ui/typewriter-effect';

export default function Home({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Home');

    const words: { text: string }[] = t('description')
        .split(' ')
        .map((text) => {
            return {
                text,
            };
        });

    return (
        <AuroraBackground>
            <div className="space-y-4 sm:space-y-8">
                <h2 className="w-max mx-auto text-xl sm:text-2xl lg:text-3xl font-medium opacity-90 text-theme-dark dark:text-theme-light">
                    {t('subtitle')}
                </h2>
                <h1 className="w-max mx-auto text-6xl sm:text-8xl lg:text-9xl font-medium text-theme-dark dark:text-theme-light">
                    {t('title')}
                </h1>
            </div>
            <TypewriterEffect words={words} />
            <button className="bg-theme text-theme-light dark:text-theme-dark rounded-full px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl lg:text-2xl">
                {t('download')}
            </button>
        </AuroraBackground>
    );
}
