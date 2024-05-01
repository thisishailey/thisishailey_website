import '@/styles/globals.css';
import { Ubuntu } from 'next/font/google';
import favicon from '@/assets/favicon.ico';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '../../../intl.config';
import type { Params } from '@/types/param';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

export const dynamicParams = false;
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Params) {
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

interface Props extends Params {
    children: React.ReactNode;
}

const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
});

export default function RootLayout({ children, params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    const tFooter = useTranslations('Footer');

    return (
        <html lang={locale}>
            <link rel="icon" href={favicon.src} type="image/x-icon" />
            <body
                className={locale === 'en' ? ubuntu.className : 'font-korean'}
            >
                <Header />
                {children}
                <Footer t={tFooter} />
            </body>
        </html>
    );
}
