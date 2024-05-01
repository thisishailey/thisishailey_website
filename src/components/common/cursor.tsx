'use client';

import { useEffect, useRef } from 'react';

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

    useEffect(() => {
        if (!window) {
            return;
        }

        window.addEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            ref={cursorRef}
            className="bg-theme rounded-full p-2 fixed pointer-events-none z-50"
        ></div>
    );
}
