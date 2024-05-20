import '@/styles/globals.css';
import Theme from '@/styles/theme';
import { Ubuntu } from 'next/font/google';
import favicon from '../../../public/favicon.ico';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '../../../intl.config';
import type { Params } from '@/types/param';
import { cn } from '@/utils/cn';
import InitialTransition from '@/components/common/transition';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Cursor from '@/components/common/cursor';

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

    return (
        <html lang={locale} suppressHydrationWarning>
            <link rel="icon" href={favicon.src} type="image/x-icon" />
            <body
                className={cn(
                    locale === 'en' ? ubuntu.className : 'font-nanum',
                    'select-none cursor-none break-keep antialiased bg-theme-light dark:bg-theme-dark'
                )}
            >
                <Theme>
                    <InitialTransition />
                    <Header />
                    {children}
                    <Cursor />
                    <Footer />
                </Theme>
            </body>
        </html>
    );
}
