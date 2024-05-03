'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
    sentences: string[];
}

export default function TypewriterEffect({ sentences }: TypewriterEffectProps) {
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [currentSentence, setCurrentSentence] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            setIsTyping(true);
        }, 2500);
    }, []);

    const variants = {
        type: {
            display: 'inline-block',
            opacity: 1,
            width: 'fit-content',
            transition: {
                duration: 0.6,
				type: 'tween'
            },
        },
        erase: {
            display: 'none',
            opacity: 0,
        },
    };

    return (
        <div className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
            <motion.div
                initial={'erase'}
                animate={isTyping ? 'type' : 'erase'}
                variants={{
                    type: {
                        display: 'inline',
                        transition: { staggerChildren: 0.13 },
                    },
                    erase: {
                        display: 'none',
                    },
                }}
            >
                {sentences[currentSentence].split(' ').map((word, idx) => (
                    <motion.div key={`word-${idx}`} className="inline-block">
                        {word.split('').map((char, index) => (
                            <motion.span
                                key={`char-${index}`}
                                className="text-theme-dark dark:text-theme-light opacity-0 hidden"
                                variants={variants}
                            >
                                {char}
                            </motion.span>
                        ))}
                        &nbsp;
                    </motion.div>
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
