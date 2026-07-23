import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 md:py-28 flex flex-col justify-center text-center md:text-left border-b border-border-line transition-colors">
      <div className="max-w-3xl space-y-6">
        {/* Status Pill */}
        <div className="inline-flex mx-auto md:mx-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono tracking-wide text-emerald-600 dark:text-emerald-400 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
          status: active
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-text-main sm:text-6xl leading-[1.05]">
          Building fast, predictable <br className="hidden sm:inline" />
          digital interfaces.
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
