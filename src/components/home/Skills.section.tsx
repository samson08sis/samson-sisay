import type { Skill } from "@/types";

interface Props {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  return (
    <section
      id="capabilities"
      className="py-20 border-b border-border-line transition-colors">
      <div className="mb-10 font-mono">
        <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
          ~/core_competencies
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-text-main mt-1">
          What I Do
        </h2>
      </div>

      <div className="rounded-xl border border-border-line bg-bg-card p-5 sm:p-6 shadow-xl w-full transition-colors">
        {/* Fake IDE tab headers */}
        <div className="mb-6 flex items-center justify-between border-b border-border-line pb-3">
          <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
            <span>capabilities_manifest.yaml</span>
          </div>
          <span className="font-mono text-[10px] text-text-muted/70">
            v1.2.0
          </span>
        </div>

        {/* Grid Matrix */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-lg border border-border-line/70 bg-bg-app/60 p-4 transition-all duration-200 hover:border-emerald-500/40 hover:bg-bg-app">
              <div>
                <h3 className="text-xs font-bold tracking-tight text-text-main group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>

              {/* Dynamic Tags */}
              <div className="mt-5 flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-bg-card px-1.5 py-0.5 font-mono text-[9px] text-text-muted border border-border-line">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
