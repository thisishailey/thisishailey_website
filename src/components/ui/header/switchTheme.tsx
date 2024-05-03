'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '../../common/cursor';
import { MoonIcon, SunIcon } from '../icons';

export default function ThemeButton({ isOpen }: { isOpen: boolean }) {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <motion.button
            className={'w-12 h-12 p-3 text-theme-dark dark:text-theme-light'}
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
            {resolvedTheme === 'light' ? <SunIcon /> : <MoonIcon />}
        </motion.button>
    );
}
