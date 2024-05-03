import { useLocale, useTranslations } from 'next-intl';
import { contactInfo } from '../../../../messages/info';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { cn } from '@/utils/cn';

export default function Contact() {
    const locale = useLocale();
    const t = useTranslations('Contact');

    return (
        <main className="flex flex-col items-center justify-center gap-20 w-screen max-w-6xl h-screen mx-auto">
            <h1
                className={cn(
                    'text-7xl',
                    locale === 'en' ? 'font-logo' : 'font-cafe'
                )}
            >
                {t('title')}
            </h1>
            <ul className="flex flex-col gap-10 text-2xl">
                {contactInfo.map((info) => (
                    <li key={info.key} className="flex gap-10">
                        <span>{t(info.key).toUpperCase()}</span>
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
        </main>
    );
}
