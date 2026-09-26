import type { Education as EducationType } from "@/types";

interface Props {
  education: EducationType[];
}

export default function Education({ education }: Props) {
  return (
    <section
      id="education"
      className="py-20 border-t border-border-line transition-colors">
      <div className="mb-10 font-mono">
        <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
          ~/academic_history
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-text-main mt-1">
          Education
        </h2>
      </div>

      {/* Chronological Technical Timeline */}
      <div className="relative border-l border-border-line ml-2 pl-6 space-y-10 max-w-3xl">
        {education.map((item) => (
          <TimelineItem
            key={item.title}
            title={item.title}
            year={item.year}
            institution={item.institution}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function TimelineItem(item: EducationType) {
  return (
    <div className="relative group">
      {/* Node Indicator */}
      <span className="absolute -left-7.75 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg-card border border-border-line group-hover:border-emerald-500 transition-colors">
        <span className="h-1.5 w-1.5 rounded-full bg-text-muted group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400" />
      </span>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <h3 className="text-sm font-bold text-text-main group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {item.title}
        </h3>
        <span className="font-mono text-xs text-text-muted bg-bg-card border border-border-line px-2 py-0.5 rounded w-fit">
          {item.year}
        </span>
      </div>
      <p className="font-mono text-[11px] text-text-muted mt-0.5">
        {item.institution}
      </p>
      <p className="mt-2 text-xs text-text-muted leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
