import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 md:py-28 flex flex-col justify-center text-center md:text-left border-b border-zinc-900">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex mx-auto md:mx-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[11px] font-mono tracking-wide text-emerald-400 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          status: active
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-6xl leading-[1.05]">
          Building fast, predictable <br className="hidden sm:inline" />
          digital interfaces.
        </h1>

        <p className="text-base leading-relaxed text-zinc-400 max-w-xl mx-auto md:mx-0">
          Hi, I&apos;m a Full-Stack Developer focused on building minimal
          overhead, type-safe web and cross-platform mobile applications with
          exceptional technical architecture.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
          <Link
            href="#projects"
            className="w-full sm:w-auto rounded bg-zinc-100 px-6 py-3 text-center text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition duration-150">
            View Projects
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto rounded border border-zinc-800 bg-zinc-900/40 px-6 py-3 text-center text-xs font-bold text-zinc-300 hover:bg-zinc-800/60 transition duration-150">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
