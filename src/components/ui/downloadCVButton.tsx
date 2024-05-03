'use client';

import { motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';

export default function DownloadCV({ text }: { text: string }) {
    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 7,
                duration: 0.8,
                ease: 'easeInOut',
            }}
            className="mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg bg-theme text-theme-light font-normal text-lg sm:text-xl"
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            {text}
        </motion.button>
    );
}
