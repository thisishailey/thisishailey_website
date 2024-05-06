'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';

export interface INavButton {
    name: string;
    link: string;
}

interface NavButtonProps {
    value: INavButton;
    icon: React.ReactNode;
}

export function LeftNavButton({ value, icon }: NavButtonProps) {
    return (
        <Link
            href={value.link}
            scroll={false}
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            <motion.div
                className="relative z-10 px-6 sm:px-8 py-3 sm:py-4 flex gap-4 items-center rounded-full shadow-lg border border-theme text-theme font-normal text-lg sm:text-xl"
                whileHover={{
                    color: 'var(--theme-light)',
                    backgroundColor: 'var(--theme)',
                }}
                whileTap={{ scale: 0.9 }}
            >
                {icon}
                {value.name}
            </motion.div>
        </Link>
    );
}

export function RightNavButton({ value, icon }: NavButtonProps) {
    return (
        <Link
            href={value.link}
            scroll={false}
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            <motion.div
                className="relative z-10 px-6 sm:px-8 py-3 sm:py-4 flex gap-4 items-center rounded-full shadow-lg border border-theme text-theme font-normal text-lg sm:text-xl"
                whileHover={{
                    color: 'var(--theme-light)',
                    backgroundColor: 'var(--theme)',
                }}
                whileTap={{ scale: 0.9 }}
            >
                {value.name}
                {icon}
            </motion.div>
        </Link>
    );
}
