import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import favicon from '@/assets/favicon.ico';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '../../../intl.config';
import Header from '@/components/common/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Hailey Kim • FE Developer',
    description: "Hi! I'm Hailey Kim, a front-end developer.",
};

export const dynamicParams = false;
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

interface Props {
    params: { locale: string };
    children: React.ReactNode;
}

export default function HomeLayout({ children, params: { locale } }: Props) {
    unstable_setRequestLocale(locale);
    return (
        <html lang={locale}>
            <link rel="icon" href={favicon.src} type="image/x-icon" />
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
