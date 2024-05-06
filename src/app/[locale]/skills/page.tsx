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
                        'mt-14 sm:mt-0 text-6xl sm:text-7xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <BottomNavButtons values={navValues} />
            </Main>
        </>
    );
}
