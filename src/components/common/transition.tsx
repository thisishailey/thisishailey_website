'use client';

import { motion } from 'framer-motion';

export default function InitialTransition() {
    return (
        <motion.div
            className="absolute z-50 inset-x-0 top-0 bg-theme flex items-center justify-center"
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
                        duration: 1.25,
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
                            when: 'afterChildren',
                            delay: 0.1,
                            duration: 0.25,
                        },
                    },
                }}
            >
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={300}
                    height={150}
                    className="text-theme-dark dark:text-theme-light"
                >
                    <motion.rect
                        className="w-full h-full fill-current"
                        variants={{
                            initial: { opacity: 0 },
                            animate: {
                                opacity: 1,
                                transition: { duration: 0.5 },
                            },
                        }}
                    />
                    <motion.rect
                        className="w-full h-full text-theme-light dark:text-theme-dark fill-current"
                        variants={{
                            initial: {
                                y: 100,
                            },
                            animate: {
                                y: 0,
                                transition: {
                                    delay: 0.5,
                                    duration: 1.15,
                                },
                            },
                        }}
                    />
                </pattern>
                <text
                    className="text-6xl xs:text-8xl font-logo fill-[url(#pattern)]"
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
