'use client';

import { useEffect, useState } from 'react';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { ChevronLeftIcon, ChevronRightIcon } from '../ui/icons';

interface CarouselProps {
    children: React.ReactNode;
    count: number;
}

export default function Carousel({ children, count }: CarouselProps) {
    const [currentCard, setCurrentCard] = useState<number>(1);

    useEffect(() => {
        const $prev = document.querySelector('.current-card') as HTMLDivElement;
        $prev?.classList.replace('current-card', 'hidden');

        const $card = document.getElementById(
            `card${currentCard}`
        ) as HTMLDivElement;
        $card?.classList.replace('hidden', 'current-card');
    }, [currentCard]);

    const changeCard = (event: React.MouseEvent, toNext: boolean = true) => {
        let index = 1;

        if (toNext) {
            index = currentCard + 1;
        } else {
            index = currentCard - 1;
        }

        setCurrentCard(index);
    };

    return (
        <div className="flex items-center w-full max-w-3xl mx-2">
            {currentCard > 1 ? (
                <button
                    onClick={(e) => changeCard(e, false)}
                    onMouseOver={CursorToPointer}
                    onMouseLeave={CursorToNormal}
                >
                    {<ChevronLeftIcon />}
                </button>
            ) : (
                <div className="min-w-6 min-h-6"></div>
            )}
            {children}
            {currentCard < count ? (
                <button
                    onClick={changeCard}
                    onMouseOver={CursorToPointer}
                    onMouseLeave={CursorToNormal}
                >
                    {<ChevronRightIcon />}
                </button>
            ) : (
                <div className="min-w-6 min-h-6"></div>
            )}
        </div>
    );
}
