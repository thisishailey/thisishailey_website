import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { contactInfo } from '../../../../messages/info';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import Sparkles from '@/components/ui/background/sparkles';

export default function Contact({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Contact');

    return (
        <>
            <Sparkles />
            <Main>
                <h1
                    className={cn(
                        'mt-14 sm:mt-0 text-6xl sm:text-7xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <ul className="flex flex-col gap-6 sm:gap-10 divide-y-2 mb-10 sm:mb-14 text-lg xs:text-xl sm:text-2xl">
                    {contactInfo.map((info) => (
                        <li
                            key={info.key}
                            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 pt-6 sm:pt-10"
                        >
                            <span className="font-medium">
                                {t(info.key).toUpperCase()}
                            </span>
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
            </Main>
        </>
    );
}
