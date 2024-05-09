import { Ubuntu } from 'next/font/google';

interface SkillCardProps {
    index: number;
    category: string;
    content: React.ReactNode;
}

const ubuntu = Ubuntu({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function SkillCard({
    index,
    category,
    content,
}: SkillCardProps) {
    return (
        <div
            id={`card${index}`}
            className="hidden flex flex-col md:flex-row gap-4 md:gap-0 items-center w-full h-64"
        >
            <h2 className="md:min-w-40 text-lg md:text-2xl font-medium">
                {category}
            </h2>
            <div
                className={`min-w-64 flex flex-wrap justify-center md:justify-normal gap-2 md:gap-4 text-sm md:text-base ${ubuntu.className}`}
            >
                {content}
            </div>
        </div>
    );
}
