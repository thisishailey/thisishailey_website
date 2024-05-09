'use client';

import { motion } from 'framer-motion';

export default function InitialTransition() {
    return (
        <motion.div
            className="absolute z-50 inset-x-0 bottom-0 bg-theme flex items-center justify-center"
            initial="initial"
            animate="animate"
            variants={{
                initial: {
                    height: '100vh',
                },
                animate: {
                    height: 0,
                    transition: {
                        when: 'afterChildren',
                        duration: 1.5,
                        ease: [0.87, 0, 0.13, 1],
                    },
                },
            }}
        >
            <motion.svg
                variants={{
                    initial: {
                        opacity: 1,
                    },
                    animate: {
                        opacity: 0,
                        transition: {
                            delay: 0.25,
                            duration: 0.25,
                            when: 'afterChildren',
                        },
                    },
                }}
            >
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    className="text-theme-light dark:text-theme-dark"
                >
                    <rect className="w-full h-full fill-current" />
                    <motion.rect
                        className="w-full h-full text-theme-dark dark:text-theme-light fill-current"
                        variants={{
                            initial: {
                                y: 0,
                            },
                            animate: {
                                y: 100,
                                transition: {
                                    duration: 1.25,
                                },
                            },
                        }}
                    />
                </pattern>
                <text
                    className="text-8xl font-logo fill-[url(#pattern)]"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                >
                    {'hailey'}
                </text>
            </motion.svg>
        </motion.div>
    );
}
