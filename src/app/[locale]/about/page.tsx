import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import { Meteors } from '@/components/ui/meteors';
import BottomNavButtons from '@/components/common/bottomNav';

export default function About({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('About');

    const tSkills = useTranslations('Skills');
    const tProjects = useTranslations('Projects');
    const navValues = [
        { name: tSkills('title'), link: `/${locale}/skills` },
        { name: tProjects('title'), link: `/${locale}/projects` },
    ];

    return (
        <>
            <Meteors number={50} />
            <Main>
                <h1
                    className={cn(
                        'mt-14 sm:mt-0 text-6xl sm:text-7xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <p className="max-w-3xl mx-auto px-6 !leading-loose break-keep text-lg sm:text-2xl whitespace-pre-line">
                    {t('content')}
                </p>
                <BottomNavButtons values={navValues} />
            </Main>
        </>
    );
}
