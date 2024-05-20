import { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Meteors from '@/components/ui/background/meteors';
import BottomNavButtons from '@/components/common/bottomNav';
import Carousel from '@/components/common/carousel';
import SkillCard from '@/components/ui/skill/skillCard';
import Loading from '@/components/common/loading';

export default function Skills({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Skills');

    const tAbout = useTranslations('About');
    const tProjects = useTranslations('Projects');
    const navValues = [
        { name: tAbout('title'), link: `/${locale}/about` },
        { name: tProjects('title'), link: `/${locale}/projects` },
    ];

    return (
        <>
            <Meteors number={50} />
            <Main>
                <h1
                    className={cn(
                        'mt-14 text-5xl sm:text-6xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <Suspense fallback={<Loading />}>
                    <Carousel count={4} className="p-4">
                        {[1, 2, 3, 4].map((i) => (
                            <SkillCard
                                key={i}
                                index={i - 1}
                                category={t(`category${i}`)}
                                content={t.rich(`content${i}`, {
                                    s: (chunks) => (
                                        <span className="bg-theme-light dark:bg-theme-dark border-theme border rounded-full px-2.5 py-1">
                                            {chunks}
                                        </span>
                                    ),
                                    sb: (chunks) => (
                                        <span className="bg-theme text-theme-light font-bold rounded-full px-2.5 py-1">
                                            {chunks}
                                        </span>
                                    ),
                                })}
                            />
                        ))}
                    </Carousel>
                </Suspense>
                <BottomNavButtons values={navValues} />
            </Main>
        </>
    );
}
