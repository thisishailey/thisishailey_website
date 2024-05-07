'use client';

import { motion } from 'framer-motion';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';

interface DownloadCVProps {
    text: string;
    filename: string;
}

export default function DownloadCVButton({ text, filename }: DownloadCVProps) {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = '/resume.pdf';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 7,
                    duration: 0.8,
                    ease: 'easeInOut',
                },
            }}
            className="mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg bg-theme text-theme-light font-normal text-lg sm:text-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleDownload}
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            {text}
        </motion.button>
    );
}
