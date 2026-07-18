export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[70vh] flex-col justify-center px-4 sm:px-6">
      <div className="mx-auto max-w-4xl text-center md:text-left">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300">
          Available for new opportunities
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Building fast, modern interfaces for the web.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl">
          Hi, I&apos;m a Frontend Engineer specializing in Next.js, TypeScript,
          and fluid animations. I build scalable, high-performance web
          applications with clean, interactive UX.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-lg bg-gray-900 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100">
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-lg px-6 py-3.5 text-center text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition dark:text-white dark:ring-gray-700 dark:hover:bg-gray-900">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
