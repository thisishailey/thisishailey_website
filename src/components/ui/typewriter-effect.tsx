'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TypewriterEffectProps {
    words: {
        text: string;
        className?: string;
    }[];
}

export default function TypewriterEffect({ words }: TypewriterEffectProps) {
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split(''),
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        setTimeout(() => {
            if (isInView) {
                animate(
                    'span',
                    {
                        display: 'inline-block',
                        opacity: 1,
                        width: 'fit-content',
                    },
                    {
                        duration: 0.3,
                        delay: stagger(0.1),
                        ease: 'easeInOut',
                    }
                );
            }
        }, 2000);
    }, [animate, isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(
                                        `text-theme-dark dark:text-theme-light opacity-0 hidden`,
                                        word.className
                                    )}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div
            className={
                'text-3xl sm:text-4xl lg:text-5xl font-medium text-center'
            }
        >
            {renderWords()}
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
                className={
                    'inline-block relative top-1.5 rounded-sm w-1 h-8 sm:h-10 lg:h-12 bg-theme'
                }
            ></motion.span>
        </div>
    );
}
