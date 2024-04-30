import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import type { Params } from '@/types/param';
import AuroraBackground from '@/components/ui/aurora-background';
import TypewriterEffect from '@/components/ui/typewriter-effect';

export default function Home({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Home');

    const words: { text: string }[] = t('subtitle')
        .split(' ')
        .map((text) => {
            return {
                text,
            };
        });

    return (
        <AuroraBackground>
            <h1 className="mt-20 w-72 mx-auto">{t('title1')}</h1>
            <h2 className="w-72 mx-auto">{t('title2')}</h2>
            <TypewriterEffect words={words} />
        </AuroraBackground>
    );
}
