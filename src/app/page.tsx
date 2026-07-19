"use client";

import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Local-First AI Health Tracker",
    description:
      "A cross-platform mobile application utilizing reactive offline databases. Features sandboxed local AI models for real-time health data summarization, automated biometric trend analysis, and compliant CSV/JSON data export schemas.",
    tags: ["Expo", "React Native", "SQLite", "ONNX Runtime", "WatermelonDB"],
    githubUrl: "https://github.com/samson08sis",
  },
  {
    id: "2",
    title: "WWTP Industrial Digitalization Platform",
    description:
      "A complete real-time monitoring system built for Waste-Water Treatment Plants. Integrates a lightweight Expo mobile field data entry application with a high-throughput, low-latency operational dashboard for analytics.",
    tags: ["Expo", "Next.js", "Tailwind CSS", "MySQL", "WebSockets"],
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "Enterprise Architecture & Chatbot System",
    description:
      "A robust production web platform configured with an isolated Content Management System (CMS) and an intelligent, context-aware Retrieval-Augmented Generation (RAG) support chatbot handling dynamic data indexing.",
    tags: ["Next.js", "TypeScript", "LangChain", "Vector DB", "PayloadCMS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/samson08sis",
  },
];

// Specializations data for your "What I Do" directory
const WHAT_I_DO = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building high-performance, crawl-optimized user interfaces with Next.js and React. Engineered for perfect Core Web Vitals and programmatic SEO pipelines.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend Engineering & APIs",
    description:
      "Designing low-latency server runtimes, structured REST APIs, and robust middleware authorization architectures.",
    tags: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Developing fluid native interfaces for iOS and Android out of a unified codebase utilizing the Expo ecosystems.",
    tags: ["React Native", "Expo", "Reanimated", "Native Modules"],
  },
  {
    title: "Database Architecture",
    description:
      "Structuring highly reliable data schemas, relational configurations, index optimizations, and atomic analytical migrations.",
    tags: ["MySQL", "MongoDB", "SQLite", "Prisma ORM"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121316] text-zinc-200 antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navigation />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* --- HERO SECTION --- */}
        <Hero />

        {/* --- WHAT I DO (CAPABILITIES) SECTION --- */}
        <section id="capabilities" className="py-20 border-b border-zinc-900">
          <div className="mb-10 font-mono">
            <div className="text-[11px] text-emerald-400/90">
              ~/core_competencies
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
              What I Do
            </h2>
          </div>

          <div className="rounded-xl border border-zinc-800/60 bg-[#16171b] p-5 sm:p-6 shadow-xl w-full">
            {/* Fake IDE tab headers */}
            <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
                <span>capabilities_manifest.yaml</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-600">
                v1.2.0
              </span>
            </div>

            {/* Full-Width Capabilities Grid Matrix */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WHAT_I_DO.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-lg border border-zinc-800/40 bg-[#121316]/60 p-4 transition-all duration-200 hover:border-zinc-700/60 hover:bg-[#121316]">
                  <div>
                    <h3 className="text-xs font-bold tracking-tight text-zinc-200 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Dynamic Tags */}
                  <div className="mt-5 flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-zinc-800/50 px-1.5 py-0.5 font-mono text-[9px] text-zinc-400 border border-zinc-800/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* --- SELECTED WORK PROJECTS SECTION --- */}
        <section id="projects" className="py-20">
          <div className="mb-10 font-mono">
            <div className="text-[11px] text-emerald-400/90">
              ~/portfolio_artifacts
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
              Selected Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div> */}
        </section>

        {/* --- EDUCATION & TIMELINE SECTION --- */}
        <section id="education" className="py-20 border-t border-zinc-900">
          <div className="mb-10 font-mono">
            <div className="text-[11px] text-emerald-400/90">
              ~/academic_history
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 mt-1">
              Education
            </h2>
          </div>

          {/* Chronological Technical Timeline */}
          <div className="relative border-l border-zinc-800/80 ml-2 pl-6 space-y-10 max-w-3xl">
            {/* Timeline Item 1 */}
            <div className="relative group">
              {/* Node Indicator */}
              <span className="absolute -left-7.75 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#16171b] border border-zinc-700 group-hover:border-emerald-500 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 group-hover:bg-emerald-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  B.Sc. in Computer Science
                </h3>
                <span className="font-mono text-xs text-zinc-500 bg-[#16171b] border border-zinc-800 px-2 py-0.5 rounded w-fit">
                  2022 - 2026
                </span>
              </div>
              <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
                CPU Business & Information College
              </p>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Focused heavily on object oriented paradigms, advanced data
                structures, database optimization design models, and secure
                mobile application architectures.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <span className="absolute -left-7.75 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#16171b] border border-zinc-700 group-hover:border-emerald-500 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 group-hover:bg-emerald-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  Android Development
                </h3>
                <span className="font-mono text-xs text-zinc-500 bg-[#16171b] border border-zinc-800 px-2 py-0.5 rounded w-fit">
                  2023
                </span>
              </div>
              <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
                Udacity
              </p>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Android Development in Java and XML, layout design, dynamic data
                display, map integration and authentication.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group">
              <span className="absolute -left-7.75 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#16171b] border border-zinc-700 group-hover:border-emerald-500 transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 group-hover:bg-emerald-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                  Artificial Intelligence
                </h3>
                <span className="font-mono text-xs text-zinc-500 bg-[#16171b] border border-zinc-800 px-2 py-0.5 rounded w-fit">
                  2026
                </span>
              </div>
              <p className="font-mono text-[11px] text-zinc-500 mt-0.5">
                ALX Ethiopia
              </p>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Immersive specialization detailing RAG pattern integration,
                dynamic data streaming architectures, and low-footprint client
                state execution layers.
              </p>
            </div>
          </div>
        </section>

        {/* --- CONTACT & ENVIRONMENT ADDRESS SECTION --- */}
        <section id="contact" className="py-20 border-t border-zinc-900">
          <div className="max-w-2xl mx-auto rounded-xl border border-zinc-800/80 bg-[#16171b] p-6 shadow-xl">
            {/* Terminal Tab Bar */}
            <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>establish_connection.sh</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-600">
                secure_tls
              </span>
            </div>

            {/* Interactive Terminal Body */}
            <div className="space-y-5 font-mono text-xs">
              <div>
                <span className="text-zinc-500">$ echo $DEVELOPER_ADDRESS</span>
                <p className="mt-1 text-sm font-sans font-semibold text-zinc-200 pl-4 border-l-2 border-zinc-800">
                  Addis Ababa, Ethiopia
                </p>
              </div>

              <div>
                <span className="text-zinc-500">
                  $ cat routing_endpoints.json
                </span>
                <div className="mt-2 rounded-lg bg-[#121316] border border-zinc-800/60 p-4 space-y-2 text-[11px] text-zinc-400">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/40">
                    <span className="text-zinc-500">email:</span>
                    <a
                      href="mailto:sams1307wolde@gmail.com"
                      className="text-emerald-400 hover:underline font-sans font-medium">
                      sams1307wolde@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/40">
                    <span className="text-zinc-500">github:</span>
                    <a
                      href="https://github.com/samson08sis"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-300 hover:text-emerald-400 transition-colors">
                      github.com/samson08sis
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-500">linkedin:</span>
                    <a
                      href="https://www.linkedin.com/in/samson-sisay-b7623b37b/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-300 hover:text-emerald-400 transition-colors">
                      linkedin.com/in/samsonsisay
                    </a>
                  </div>
                </div>
              </div>

              {/* Call To Action Button */}
              <div className="pt-2 text-center sm:text-left">
                <a
                  href="mailto:sams1307wolde@gmail.com"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-center text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition-all duration-150">
                  <span>./initialize_handshake.exe</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
