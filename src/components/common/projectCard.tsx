'use client';

import { useState } from 'react';
import { projects } from '../../../messages/projects';
import { CursorToNormal, CursorToPointer } from '@/components/common/cursor';
import { GitHubIcon, OpenLinkIcon } from '@/components/ui/icons';
import { cn } from '@/utils/cn';

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
        <div className="flex flex-col gap-2">
            <div>
                <h3>{subtitle}</h3>
                <div className="flex items-center justify-between">
                    <h2 className="font-medium text-2xl">{title}</h2>
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
            <div className="flex justify-around">
                {tapButtons.map((tap) => (
                    <button
                        key={tap.id}
                        className={cn(
                            'border-b uppercase',
                            currentTap === tap.id && 'border-theme'
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
                <ul className="flex flex-col">
                    {techStack.map((stack) => (
                        <li key={stack.key}>
                            <span>{stack.name}</span>
                            <div>
                                {project[stack.key].map((e) => (
                                    <span key={e} className='mx-1 py-1.5 px-3 border rounded-full'>{e}</span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="whitespace-pre-line">{description}</p>
            )}
        </div>
    );
}
