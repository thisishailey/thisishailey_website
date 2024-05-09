'use client';

import { motion } from 'framer-motion';

export default function InitialTransition() {
    return (
        <motion.div
            className="absolute z-50 inset-0 bg-theme flex items-center justify-center"
            initial="initial"
            animate="animate"
            variants={{
                initial: {
                    opacity: 1,
                    zIndex: 50,
                },
                animate: {
                    opacity: 0,
                    zIndex: -50,
                    transition: {
                        when: 'afterChildren',
                        duration: 0.2,
                        ease: 'circIn',
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
                            duration: 0.2,
                        },
                    },
                }}
            >
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={300}
                    height={150}
                >
                    <rect className="w-full h-full text-theme-dark dark:text-theme-light fill-current" />
                    <motion.rect
                        className="w-full h-full text-theme-light dark:text-theme-dark fill-current"
                        variants={{
                            initial: {
                                y: 100,
                            },
                            animate: {
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 1,
                                },
                            },
                        }}
                    />
                </pattern>
                <motion.text
                    className="text-6xl xs:text-8xl font-logo fill-[url(#pattern)]"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: { duration: 0.2 },
                        },
                    }}
                >
                    {'hailey'}
                </motion.text>
            </motion.svg>
        </motion.div>
    );
}

export function PageTransition() {
    return (
        <motion.div
            className="absolute z-30 inset-0 bg-theme flex items-center justify-center"
            initial="initial"
            animate="animate"
            variants={{
                initial: {
                    opacity: 1,
                    zIndex: 30,
                },
                animate: {
                    opacity: 0,
                    zIndex: -30,
                    transition: {
                        when: 'afterChildren',
                        duration: 0.2,
                        ease: 'circIn',
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
                            duration: 0.2,
                        },
                    },
                }}
            >
                <pattern
                    id="pattern-page"
                    patternUnits="userSpaceOnUse"
                    width={300}
                    height={150}
                >
                    <rect className="w-full h-full text-theme-dark dark:text-theme-light fill-current" />
                    <motion.rect
                        className="w-full h-full text-theme-light dark:text-theme-dark fill-current"
                        variants={{
                            initial: {
                                y: 100,
                            },
                            animate: {
                                y: 0,
                                transition: {
                                    delay: 0.2,
                                    duration: 1,
                                },
                            },
                        }}
                    />
                </pattern>
                <motion.text
                    className="text-6xl xs:text-8xl font-logo fill-[url(#pattern-page)]"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: { duration: 0.2 },
                        },
                    }}
                >
                    {'hailey'}
                </motion.text>
            </motion.svg>
        </motion.div>
    );
}
