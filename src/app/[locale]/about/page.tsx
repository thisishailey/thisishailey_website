import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Sparkles from '@/components/ui/background/sparkles';
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
            <Sparkles />
            <Main singlePage>
                <h2
                    className={cn(
                        'mt-14 text-5xl sm:text-6xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h2>
                <p className="max-w-3xl mx-auto text-center !leading-[1.8] sm:!leading-loose text-lg sm:text-2xl whitespace-pre-line">
                    {t.rich('content', {
                        b: (chunks) => (
                            <span className="text-theme font-bold">
                                {chunks}
                            </span>
                        ),
                    })}
                </p>
                <BottomNavButtons values={navValues} />
            </Main>
        </>
    );
}
