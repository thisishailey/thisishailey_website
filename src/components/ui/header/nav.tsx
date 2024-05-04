'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '../../common/cursor';
import { cn } from '@/utils/cn';

interface MenuNavProps {
    items: { text: string; link: string }[];
}

export default function MenuNavigation({ items }: MenuNavProps) {
    const locale = useLocale();

    const closeMenu = () => {
        const $button = document.getElementById(
            'menu-button'
        ) as HTMLButtonElement;
        $button.click();
    };

    return (
        <motion.nav
            id="menu"
            initial={{ display: 'none' }}
            className="absolute top-0 left-0 z-30 w-screen h-screen bg-theme"
        >
            <ul
                className={cn(
                    'flex flex-col items-center justify-center gap-10 xs:gap-12 w-full h-full pt-24 pb-12 text-7xl sm:text-8xl lg:text-9xl text-theme-light dark:text-theme-dark',
                    locale === 'en' ? 'font-logo' : 'font-cafe'
                )}
            >
                {items.map((item) => (
                    <Link
                        key={item.link}
                        href={`/${locale}/${item.link}`}
                        onClick={closeMenu}
                        onMouseOver={CursorToPointer}
                        onMouseLeave={CursorToNormal}
                    >
                        <motion.li
                            initial={{ opacity: 0, y: 30 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item.text}
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </motion.nav>
    );
}
