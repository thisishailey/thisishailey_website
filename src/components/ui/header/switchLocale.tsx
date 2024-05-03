'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '../../common/cursor';
import { cn } from '@/utils/cn';
import { LocaleIcon } from '../icons';
import type { MenuProps } from './menu';

interface LocaleProps extends MenuProps {
    isOpen: boolean;
}

export default function LocaleButton({ localeValues, isOpen }: LocaleProps) {
    const { replace } = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const [showLocale, setShowLocale] = useState<boolean>(false);

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

    return (
        <>
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
                    <div
                        className="p-3 rounded-full border-l border-theme"
                        onClick={() => setShowLocale(false)}
                    >
                        <LocaleIcon />
                    </div>
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
                    <LocaleIcon />
                </motion.button>
            )}
        </>
    );
}
