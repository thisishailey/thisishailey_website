import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { contactInfo } from '../../../../messages/contact';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Sparkles from '@/components/ui/background/sparkles';
import BottomNavButtons from '@/components/common/bottomNav';

export default function Contact({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Contact');

    const tSkills = useTranslations('Skills');
    const tProjects = useTranslations('Projects');
    const navValues = [
        { name: tSkills('title'), link: `/${locale}/skills` },
        { name: tProjects('title'), link: `/${locale}/projects` },
    ];

    return (
        <>
            <Sparkles />
            <Main>
                <h1
                    className={cn(
                        'mt-14 sm:mt-0 text-5xl sm:text-6xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <ul className="flex flex-col gap-6 sm:gap-10 divide-y-2 text-lg xs:text-xl sm:text-2xl">
                    {contactInfo.map((info) => (
                        <li
                            key={info.key}
                            className="flex items-center gap-4 sm:gap-10 pt-6 sm:pt-10 first:pt-4"
                        >
                            <span className="hidden sm:block font-medium">
                                {t(info.key).toUpperCase()}
                            </span>
                            <span className="sm:hidden">{info.icon}</span>
                            <a
                                href={info.link}
                                target="_blank"
                                rel="noreferrer noopener"
                                onMouseOver={CursorToPointer}
                                onMouseLeave={CursorToNormal}
                            >
                                <span>{info.value}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <BottomNavButtons values={navValues} />
            </Main>
        </>
    );
}
