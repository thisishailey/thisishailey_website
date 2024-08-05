"use client";

import { useState } from "react";
import { Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/messages/projects";
import { CursorToNormal, CursorToPointer } from "@/components/common/Cursor";
import { GitHubIcon, OpenLinkIcon } from "@/components/common/Icons";
import ProjectCardImages from "@/components/project/ProjectCardImages";

const ubuntu = Ubuntu({
  weight: ["400", "500"],
  subsets: ["latin"],
});

interface ProjectPreviewProps {
  index: number;
  title: string;
  subtitle: string;
  overview: React.ReactNode;
  features: string;
}

type ProjectCardTaps = "preview" | "overview" | "desc";

export default function ProjectCard(props: ProjectPreviewProps) {
  const { index, title, subtitle, overview, features } = props;
  const project = projects[index];

  const [currentTap, setCurrentTap] = useState<ProjectCardTaps>("preview");

  const changeTap = (target: ProjectCardTaps) => {
    setCurrentTap(target);
  };

  const tapButtons: { name: string; id: ProjectCardTaps }[] = [
    {
      name: "Preview",
      id: "preview",
    },
    {
      name: "Overview",
      id: "overview",
    },
    {
      name: "Features",
      id: "desc",
    },
  ];

  const techStack: { key: "front" | "back" | "other"; name: string }[] = [
    { key: "front", name: "FE" },
    { key: "back", name: "BE" },
    { key: "other", name: "Other" },
  ];

  return (
    <div className="max-w-6xl w-screen p-6 space-y-4 rounded bg-theme/20">
      <div className="flex flex-col md:flex-row justify-between gap-4 pb-4 border-b-[0.5px] border-theme-dark/50 dark:border-theme-light/50">
        <div className="flex items-center gap-14">
          <div>
            <h3 className="text-sm sm:text-lg">{subtitle}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              onMouseOver={CursorToPointer}
              onMouseLeave={CursorToNormal}
            >
              <h2
                className={`font-medium text-xl sm:text-2xl ${ubuntu.className}`}
              >
                {title}
              </h2>
            </a>
          </div>
          <div className="flex gap-8">
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
        <div className="self-center flex rounded-full border border-theme-dark/80 dark:border-theme-light/80">
          {tapButtons.map((tap) => (
            <button
              key={tap.id}
              className={cn(
                "w-28 md:w-40 p-2 rounded-full uppercase text-center text-sm sm:text-base transition-colors duration-200",
                ubuntu.className,
                currentTap === tap.id
                  ? "bg-theme/80"
                  : "text-theme-dark/80 dark:text-theme-light/80"
              )}
              onClick={() => changeTap(tap.id)}
              onMouseOver={CursorToPointer}
              onMouseLeave={CursorToNormal}
            >
              {tap.name}
            </button>
          ))}
        </div>
      </div>
      {currentTap === "preview" ? (
        <>
          <div className="flex flex-wrap gap-1">
            {project.highlight.map((item) => (
              <span
                key={item}
                className={`py-0.5 sm:py-1 px-1 sm:px-3 border border-theme-dark/70 dark:border-theme-light/70 rounded-full font-medium text-xs sm:text-sm ${ubuntu.className}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="overflow-x-auto flex gap-2">
            <ProjectCardImages index={index} />
          </div>
        </>
      ) : currentTap === "overview" ? (
        <>
          <p className="whitespace-pre-line text-sm sm:text-lg">{overview}</p>
          <ul className="flex flex-col gap-2 pt-4 border-t-[0.5px] border-theme-dark/50 dark:border-theme-light/50">
            {techStack.map((stack) => (
              <li key={stack.key} className="flex items-center gap-4">
                <span
                  className={`hidden sm:block font-medium text-lg ${ubuntu.className}`}
                >
                  {`${stack.name}`}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project[stack.key].map((e) => (
                    <span
                      key={e}
                      className={`py-1 px-3 border border-theme-dark/70 dark:border-theme-light/70 rounded-full text-xs sm:text-base ${ubuntu.className}`}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p className="whitespace-pre-line text-sm sm:text-lg">{features}</p>
        </>
      )}
    </div>
  );
}
