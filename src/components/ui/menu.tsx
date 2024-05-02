'use client';

import { motion, useCycle } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '../common/cursor';

interface MenuProps {
    items: { text: string; link: string }[];
}

export default function Menu({ items }: MenuProps) {
    const [isOpen, toggleMenu] = useCycle(false, true);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="w-12 h-12 p-3 mt-1"
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            <ToggleButton onClick={() => toggleMenu()} />
        </motion.nav>
    );
}

const ToggleButton = ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} className="text-theme-dark dark:text-theme-light">
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
            />
            <motion.path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <motion.path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
);
