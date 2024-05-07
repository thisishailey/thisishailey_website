import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Meteors from '@/components/ui/background/meteors';
import BottomNavButtons from '@/components/common/bottomNav';

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
                        'mt-14 sm:mt-0 text-5xl sm:text-6xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <ul className="flex md:flex-col gap-2 md:gap-10 w-full max-w-3xl mx-6 overflow-x-auto py-4">
                    {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
                            <h2 className="md:min-w-40 text-lg md:text-2xl font-medium">
                                {t(`category${i}`)}
                            </h2>
                            <div className="min-w-72 flex flex-wrap justify-center md:justify-normal gap-2 md:gap-4 text-sm md:text-base">
                                {t.rich(`content${i}`, {
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
                            </div>
                        </li>
                    ))}
                </ul>
                <BottomNavButtons values={navValues} />
            </Main>
        </>
    );
}
