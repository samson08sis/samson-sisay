import { AVAILABILITY_CONFIG } from "@/data/constants";
import { Availability } from "@/types";
import Link from "next/link";

interface Props {
  status: Availability;
}

interface StatusPillProps {
  status: Availability;
  className?: string;
}

export default function Hero({ status }: Props) {
  return (
    <section
      id="home"
      className="py-20 md:py-28 flex flex-col justify-center text-center md:text-left border-b border-border-line transition-colors">
      <div className="max-w-3xl space-y-6">
        <StatusPill status={status} />

        {/* Main Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-6xl leading-[1.05]">
          Building fast, predictable <br className="hidden sm:inline" />
          <span className="bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            digital systems
          </span>{" "}
          & interfaces.
        </h1>

        {/* Subtitle / Bio */}
        <p className="text-base leading-relaxed text-text-muted max-w-xl mx-auto md:mx-0">
          Hi, I&apos;m a Full-Stack Developer focused on building minimal
          overhead, type-safe web and cross-platform mobile applications with
          exceptional technical architecture.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
          {/* Primary CTA */}
          <Link
            href="#projects"
            className="w-full sm:w-auto rounded bg-text-main px-6 py-3 text-center text-xs font-bold text-bg-app hover:opacity-90 transition-all duration-150 shadow-sm">
            View Projects
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#contact"
            className="w-full sm:w-auto rounded border border-border-line bg-bg-card px-6 py-3 text-center text-xs font-bold text-text-main hover:bg-bg-app transition-all duration-150">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status, className = "" }: StatusPillProps) {
  const config = AVAILABILITY_CONFIG[status] ?? AVAILABILITY_CONFIG.AVAILABLE;

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-mono tracking-wide w-fit mx-auto md:mx-0 ${config.styles.border} ${config.styles.bg} ${config.styles.text} ${className}`}>
      <span
        className={`h-1.5 w-1.5 rounded-full ${config.styles.dot} ${
          status !== "UNAVAILABLE" ? "animate-pulse" : ""
        }`}
      />
      <span>status: {config.label}</span>
    </div>
  );
}
