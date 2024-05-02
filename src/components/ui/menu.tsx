'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { animate, motion, useCycle } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '../common/cursor';
import { LanguageIcon, MoonIcon, SunIcon } from './icons';
import { cn } from '@/utils/cn';

interface MenuProps {
    localeValues: {
        en: string;
        ko: string;
    };
}

export const Menu = ({ localeValues }: MenuProps) => {
    const { replace } = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const [isOpen, toggleMenu] = useCycle(false, true);
    const [showLocale, setShowLocale] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleLocale = () => {
        if (!showLocale) {
            return setShowLocale(true);
        }

        const pathArr = pathname.split('/');

        if (locale === 'en') {
            pathArr[1] = 'ko';
        } else {
            pathArr[1] = 'en';
        }

        const href = pathArr.join('/');
        replace(href);
    };

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDark(isDark);
    }, []);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setIsDark(!isDark);
    };

    useEffect(() => {
        const rect = (
            document.getElementById('menu-button') as HTMLButtonElement
        ).getBoundingClientRect();
        const x = rect.x + 24;
        const y = rect.y + 24;

        if (isOpen) {
            animate(
                '#menu',
                {
                    display: 'block',
                    clipPath: `circle(2200px at ${x}px ${y}px)`,
                },
                { type: 'spring', stiffness: 20 }
            );
            animate('footer', { display: 'block' });
        } else {
            animate(
                '#menu',
                {
                    display: 'none',
                    clipPath: `circle(0px at ${x}px ${y}px)`,
                },
                {
                    delay: 0.1,
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                }
            );
            animate('footer', { display: 'none' });
        }
    }, [isOpen]);

    return (
        <div className="flex gap-2 xs:gap-5 sm:gap-10">
            {showLocale ? (
                <motion.button
                    className="flex items-center justify-between rounded-full border border-theme-dark/60 dark:border-theme-light/60 text-theme-dark dark:text-theme-light"
                    animate={{ x: [10, 0] }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    onMouseOver={CursorToPointer}
                    onMouseLeave={CursorToNormal}
                >
                    <div
                        className={cn(
                            'p-3 pl-5 pr-2',
                            locale === 'en' && 'text-theme font-semibold'
                        )}
                        onClick={locale === 'ko' ? toggleLocale : undefined}
                    >
                        {localeValues.en.toUpperCase()}
                    </div>
                    <span className="w-1 h-6 border-r border-theme-dark/60 dark:border-theme-light/60"></span>
                    <div
                        className={cn(
                            'p-3',
                            locale === 'ko' && 'text-theme font-semibold'
                        )}
                        onClick={locale === 'en' ? toggleLocale : undefined}
                    >
                        {localeValues.ko.toUpperCase()}
                    </div>
                    <button
                        className="p-3 rounded-full border-l border-theme"
                        onClick={() => setShowLocale(false)}
                    >
                        <LanguageIcon />
                    </button>
                </motion.button>
            ) : (
                <motion.button
                    className="w-12 h-12 p-3 text-theme-dark dark:text-theme-light"
                    initial={{ opacity: 0 }}
                    animate={isOpen ? 'open' : 'closed'}
                    variants={{
                        closed: {
                            scale: 0.5,
                            opacity: 0,
                            transition: { delay: 0.1, duration: 0.4 },
                        },
                        open: {
                            scale: 1,
                            opacity: 1,
                            transition: { delay: 0.1, duration: 0.4 },
                        },
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.6 }}
                    onClick={toggleLocale}
                    onMouseOver={CursorToPointer}
                    onMouseLeave={CursorToNormal}
                >
                    <LanguageIcon />
                </motion.button>
            )}
            <motion.button
                className={
                    'w-12 h-12 p-3 text-theme-dark dark:text-theme-light'
                }
                initial={{ opacity: 0 }}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    closed: {
                        scale: 0.5,
                        opacity: 0,
                        transition: { delay: 0.1, duration: 0.4 },
                    },
                    open: {
                        scale: 1,
                        opacity: 1,
                        transition: { delay: 0.1, duration: 0.4 },
                    },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.6 }}
                onClick={toggleDarkMode}
                onMouseOver={CursorToPointer}
                onMouseLeave={CursorToNormal}
            >
                {isDark ? <MoonIcon /> : <SunIcon />}
            </motion.button>
            <motion.button
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                id="menu-button"
                className="w-12 h-12 p-3 pt-3.5 text-theme-dark dark:text-theme-light"
                onClick={() => toggleMenu()}
                onMouseOver={CursorToPointer}
                onMouseLeave={CursorToNormal}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <motion.path
                        variants={{
                            closed: { d: 'M 2 2.5 L 20 2.5' },
                            open: { d: 'M 3 16.5 L 17 2.5' },
                        }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.path
                        variants={{
                            closed: { d: 'M 2 16.346 L 20 16.346' },
                            open: { d: 'M 3 2.5 L 17 16.346' },
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </svg>
            </motion.button>
        </div>
    );
};

interface MenuNavProps {
    items: { text: string; link: string }[];
}

export const MenuNav = ({ items }: MenuNavProps) => {
    const locale = useLocale();

    return (
        <motion.nav
            id="menu"
            initial={{ display: 'none' }}
            className="absolute top-0 left-0 z-30 w-screen h-screen bg-theme"
        >
            <ul
                className={cn(
                    'flex flex-col items-center justify-center gap-12 w-full h-full text-7xl sm:text-8xl lg:text-9xl text-theme-light dark:text-theme-dark',
                    locale === 'en' ? 'font-logo' : 'font-cafe'
                )}
            >
                {items.map((item) => (
                    <Link
                        key={item.text}
                        href={item.link}
                        onMouseOver={CursorToPointer}
                        onMouseLeave={CursorToNormal}
                    >
                        <li>{item.text}</li>
                    </Link>
                ))}
            </ul>
        </motion.nav>
    );
};
