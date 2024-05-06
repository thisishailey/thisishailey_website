import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Meteors from '@/components/ui/background/meteors';
import BottomNavButtons from '@/components/common/bottomNav';

export default function Projects({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Projects');

    const tSkills = useTranslations('Skills');
    const tContact = useTranslations('Contact');
    const navValues = [
        { name: tSkills('title'), link: `/${locale}/skills` },
        { name: tContact('title'), link: `/${locale}/contact` },
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
