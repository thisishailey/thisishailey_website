'use client';

import { motion } from 'framer-motion';

interface TypewriterEffectProps {
    sentence: string;
    language: string;
}

export default function TypewriterEffect({
    sentence,
    language,
}: TypewriterEffectProps) {
    return (
        <div className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
            <motion.div
                initial="initial"
                animate="animate"
                variants={{
                    initial: { display: 'none' },
                    animate: {
                        display: 'inline',
                        transition: {
                            delay: 1.6,
                            when: 'beforeChildren',
                            staggerChildren: language === 'en' ? 0.1 : 0.13,
                        },
                    },
                }}
            >
                {sentence.split(' ').map((word, idx) => (
                    <div key={`word-${idx}`} className="inline-block">
                        {word.split('').map((char, index) => (
                            <motion.span
                                key={`char-${index}`}
                                className="text-theme-dark dark:text-theme-light opacity-0 hidden"
                                variants={{
                                    initial: {
                                        display: 'none',
                                        opacity: 0,
                                    },
                                    animate: {
                                        display: 'inline-block',
                                        opacity: 1,
                                        width: 'fit-content',
                                        transition: {
                                            duration: 0.5,
                                            ease: 'linear',
                                        },
                                    },
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        &nbsp;
                    </div>
                ))}
            </motion.div>
            <Cursor />
        </div>
    );
}

const Cursor = () => {
    return (
        <motion.span
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'reverse',
            }}
            className="inline-block relative top-1.5 rounded-sm w-1 h-8 sm:h-10 lg:h-12 bg-theme"
        ></motion.span>
    );
};
