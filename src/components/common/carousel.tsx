'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '../ui/icons';
import { cn } from '@/utils/cn';

interface CarouselProps {
    children: React.ReactNode;
    className: string;
    count: number;
    close?: string;
}

export default function Carousel(props: CarouselProps) {
    const { children, className, count, close } = props;
    const { back } = useRouter();
    const searchParams = useSearchParams();
    const initial = parseInt(searchParams.get('project') || '0');
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
        let index = 0;

        if (toNext) {
            index = currentCard + 1;
        } else {
            index = currentCard - 1;
        }

        setCurrentCard(index);
    };

    const closeCarousel = () => {
        back();
    };

    return (
        <div
            className={cn(
                'flex flex-col w-full max-w-4xl bg-theme/10',
                className
            )}
        >
            {close && (
                <button
                    className="flex items-center justify-end gap-2 mb-2 p-3"
                    onClick={closeCarousel}
                    onMouseOver={CursorToPointer}
                    onMouseLeave={CursorToNormal}
                >
                    {close}
                    <CloseIcon />
                </button>
            )}
            <div className="flex items-center justify-center gap-4 md:gap-10">
                {currentCard > 0 ? (
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
                {currentCard < count - 1 ? (
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
