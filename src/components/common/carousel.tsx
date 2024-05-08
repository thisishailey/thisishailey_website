'use client';

import { useEffect, useState } from 'react';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../ui/icons';

interface CarouselProps {
    children: React.ReactNode;
    count: number;
    initial?: number;
}

export default function Carousel({
    children,
    count,
    initial = 1,
}: CarouselProps) {
    const [currentCard, setCurrentCard] = useState<number>(initial);

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

    const closeCarousel = () => {
        const $carousel = document.getElementById(
            'project-carousel'
        ) as HTMLDivElement;
        $carousel.classList.add('hidden');
    };

    return (
        <div className="flex flex-col w-full max-w-4xl px-4">
            <button
                className="self-end mb-2 p-3"
                onClick={closeCarousel}
                onMouseOver={CursorToPointer}
                onMouseLeave={CursorToNormal}
            >
                <CloseIcon />
            </button>
            <div className="flex items-center gap-4 md:gap-10">
                {currentCard > 1 ? (
                    <button
                        className="sm:p-3 sm:pl-2.5 rounded sm:bg-theme/10"
                        onClick={(e) => changeCard(e, false)}
                        onMouseOver={CursorToPointer}
                        onMouseLeave={CursorToNormal}
                    >
                        {<ChevronLeftIcon />}
                    </button>
                ) : (
                    <div className="box-content min-w-6 min-h-6 sm:p-3 sm:pl-2.5"></div>
                )}
                {children}
                {currentCard < count ? (
                    <button
                        className="sm:p-3 sm:pr-2.5 rounded sm:bg-theme/10"
                        onClick={changeCard}
                        onMouseOver={CursorToPointer}
                        onMouseLeave={CursorToNormal}
                    >
                        {<ChevronRightIcon />}
                    </button>
                ) : (
                    <div className="box-content min-w-6 min-h-6 sm:p-3 sm:pr-2.5"></div>
                )}
            </div>
        </div>
    );
}
