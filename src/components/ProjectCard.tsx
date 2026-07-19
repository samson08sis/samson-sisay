import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800/80 bg-[#16171b] shadow-md transition-all duration-200 hover:border-zinc-700 hover:bg-[#1a1b20]">
      {/* Terminal Window Header Decoration */}
      <div className="flex items-center justify-between border-b border-zinc-800/50 bg-[#121316]/50 px-4 py-2.5 select-none">
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <span>
            {project.title.toLowerCase().replace(/[^a-z0-js]/g, "_")}.ts
          </span>
        </div>
        {/* Fake window buttons */}
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
        </div>
      </div>

      {/* Main Technical Content Panel */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-bold tracking-tight text-zinc-100 group-hover:text-emerald-400 transition-colors duration-150">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* Technical Architecture Tag Badges */}
        <div className="mt-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[#121316] border border-zinc-800/60 px-2 py-0.5 font-mono text-[9px] text-zinc-400 group-hover:border-zinc-700/60 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* System Outbound Links */}
        <div className="mt-5 flex items-center gap-4 border-t border-zinc-800/40 pt-3.5 font-mono text-[11px]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:underline">
              <span>Visit</span>
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors">
              src_code
            </a>
          ) : (
            <p className="text-zinc-500">private</p>
          )}
        </div>
      </div>
    </article>
  );
}
