import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border-line bg-bg-card shadow-sm transition-all duration-200 hover:border-zinc-500">
      <div className="flex items-center justify-between border-b border-border-line bg-bg-app/50 px-4 py-2.5 select-none">
        <span className="font-mono text-[10px] text-text-muted">
          {project.title.toLowerCase().replace(/[^a-z0-js]/g, "_")}.ts
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-sm font-bold tracking-tight text-text-main group-hover:text-emerald-500 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-bg-app border border-border-line px-2 py-0.5 font-mono text-[9px] text-text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-border-line pt-3.5 font-mono text-[11px]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-500 font-medium hover:underline">
              <span>sys.deploy()</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
