'use client';

import { type Cycle, motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '../../common/cursor';
import { cn } from '@/utils/cn';

interface MenuButtonProps {
    isOpen: boolean;
    toggleMenu: Cycle;
}

export default function MenuButton({ isOpen, toggleMenu }: MenuButtonProps) {
    return (
        <motion.button
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            id="menu-button"
            className={cn(
                'w-12 h-12 p-3 pt-3.5 text-theme-dark dark:text-theme-light',
                isOpen && 'isOpen'
            )}
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
    );
}
