'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    const moveCursor = (event: MouseEvent) => {
        if (!cursorRef.current) {
            return;
        }

        const { clientX: x, clientY: y } = event;

        cursorRef.current.style.left = x + 'px';
        cursorRef.current.style.top = y + 'px';
    };

    const showCursor = () => {
        if (!cursorRef.current) {
            return;
        }

        cursorRef.current.classList.remove('hidden');
    };

    const hideCursor = () => {
        if (!cursorRef.current) {
            return;
        }

        cursorRef.current.classList.add('hidden');
    };

    useEffect(() => {
        if (!window) {
            return;
        }

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseenter', showCursor);
        document.addEventListener('mouseleave', hideCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            id="cursor"
            className="fixed z-50 p-2 bg-theme border-[0.1px] border-theme-light dark:border-theme-dark rounded-full pointer-events-none"
        ></div>
    );
}

export const CursorToPointer = () => {
    animate(
        '#cursor',
        {
            scale: 4.5,
            opacity: 0.4,
        },
        { type: 'tween' }
    );
};

export const CursorToNormal = () => {
    animate(
        '#cursor',
        {
            scale: 1,
            opacity: 1,
        },
        { type: 'tween' }
    );
};
