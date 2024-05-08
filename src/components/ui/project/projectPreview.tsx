'use client';

import { Ubuntu } from 'next/font/google';
import { projects } from '../../../../messages/projects';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';

const ubuntu = Ubuntu({
    weight: ['400', '500'],
    subsets: ['latin'],
});

interface ProjectPreviewProps {
    index: number;
    title: string;
    subtitle: string;
}

export default function ProjectPreview(props: ProjectPreviewProps) {
    const { index, title, subtitle } = props;
    const project = projects[index];

    const openCarousel = () => {
        const $carousel = document.getElementById(
            'project-carousel'
        ) as HTMLDivElement;
        $carousel.classList.remove('hidden');
    };

    return (
        <div
            id={`preview${index}`}
            className="w-full p-2 space-y-2 rounded bg-theme/20 dark:bg-theme-light/10"
            onClick={openCarousel}
            onMouseOver={CursorToPointer}
            onMouseLeave={CursorToNormal}
        >
            <h2
                className={`font-medium text-xl sm:text-2xl ${ubuntu.className}`}
            >
                {title}
            </h2>
            <h3 className="text-sm sm:text-base">{subtitle}</h3>
            <div className="flex flex-wrap gap-2">
                {project.highlight.map((item) => (
                    <span
                        key={item}
                        className={`py-1 px-3 border border-theme-dark/70 dark:border-theme-light/70 rounded-full font-medium text-xs sm:text-sm ${ubuntu.className}`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
