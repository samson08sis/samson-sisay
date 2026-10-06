import type { Project } from "@/types";
import ProjectCard from "../ProjectCard";

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <section id="projects" className="py-20">
      <div className="mb-10 font-mono">
        <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
          ~/portfolio_artifacts
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-text-main mt-1">
          Selected Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}
