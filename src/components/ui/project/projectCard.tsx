'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Ubuntu } from 'next/font/google';
import { projects } from '../../../../messages/projects';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { GitHubIcon, OpenLinkIcon } from '@/components/ui/icons';
import { cn } from '@/utils/cn';

const ubuntu = Ubuntu({
    weight: ['400', '500'],
    subsets: ['latin'],
});

interface ProjectCardProps {
    index: number;
    title: string;
    subtitle: string;
    description: string;
}

type ProjectCardTaps = 'stack' | 'desc';

export default function ProjectCard(props: ProjectCardProps) {
    const { index, title, subtitle, description } = props;
    const project = projects[index];

    const [currentTap, setCurrentTap] = useState<ProjectCardTaps>('stack');

    const changeTap = (target: ProjectCardTaps) => {
        setCurrentTap(target);
    };

    const tapButtons: { name: string; id: ProjectCardTaps }[] = [
        {
            name: 'Tech Stack',
            id: 'stack',
        },
        {
            name: 'Description',
            id: 'desc',
        },
    ];

    const techStack: { key: 'front' | 'back' | 'other'; name: string }[] = [
        { key: 'front', name: 'FE' },
        { key: 'back', name: 'BE' },
        { key: 'other', name: 'Other' },
    ];

    return (
        <div id={`card${index + 1}`} className="hidden space-y-2">
            {/* <div className="snap-x snap-mandatory overflow-x-auto flex gap-6 w-full h-64">
                <div className="snap-center snap-always w-80 h-64">
                    <div className="relative w-80 h-64">
                        <Image
                            className="object-contain object-top"
                            src={'/projects/1/1.png'}
                            alt="project1"
                            fill={true}
                            sizes="(max-width: 400px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="snap-center snap-always w-80 h-64">
                    <div className="relative w-80 h-64">
                        <Image
                            className="object-contain object-top"
                            src={'/projects/1/2.png'}
                            alt="project2"
                            fill={true}
                            sizes="(max-width: 400px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div> */}
            <div className="mb-2">
                <h3 className="text-sm sm:text-base">{subtitle}</h3>
                <div className="flex items-center justify-between">
                    <h2
                        className={`font-medium text-xl sm:text-2xl ${ubuntu.className}`}
                    >
                        {title}
                    </h2>
                    <div className="flex gap-6">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            onMouseOver={CursorToPointer}
                            onMouseLeave={CursorToNormal}
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            onMouseOver={CursorToPointer}
                            onMouseLeave={CursorToNormal}
                        >
                            <OpenLinkIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex my-2">
                {tapButtons.map((tap) => (
                    <button
                        key={tap.id}
                        className={cn(
                            'w-full py-2 border-b-2 uppercase text-center text-sm sm:text-lg transition-colors duration-200',
                            ubuntu.className,
                            currentTap === tap.id
                                ? 'border-theme bg-theme/20 text-theme font-medium'
                                : 'border-theme-dark/10 dark:border-theme-light/10 text-theme-dark/80 dark:text-theme-light/80'
                        )}
                        onClick={() => changeTap(tap.id)}
                        onMouseOver={CursorToPointer}
                        onMouseLeave={CursorToNormal}
                    >
                        {tap.name}
                    </button>
                ))}
            </div>
            {currentTap === 'stack' ? (
                <ul className="flex flex-col gap-2">
                    {techStack.map((stack) => (
                        <li key={stack.key} className="flex flex-col">
                            <span
                                className={`hidden sm:block ${ubuntu.className}`}
                            >
                                {stack.name}
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project[stack.key].map((e) => (
                                    <span
                                        key={e}
                                        className={`py-1 px-3 border rounded-full text-xs sm:text-base ${ubuntu.className}`}
                                    >
                                        {e}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="whitespace-pre-line text-sm sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
