import type { Education, Project, Skill, Status } from "@/types";

export const projects: Project[] = [
  {
    _id: "1",
    title: "Local-First AI Health Tracker",
    description:
      "A cross-platform mobile application utilizing reactive offline databases. Features sandboxed local AI models for real-time health data summarization, automated biometric trend analysis, and compliant CSV/JSON data export schemas.",
    tags: ["Expo", "React Native", "SQLite", "ONNX Runtime", "WatermelonDB"],
    githubUrl: "https://github.com/samson08sis",
  },
  {
    _id: "2",
    title: "WWTP Industrial Digitalization Platform",
    description:
      "A complete real-time monitoring system built for Waste-Water Treatment Plants. Integrates a lightweight Expo mobile field data entry application with a high-throughput, low-latency operational dashboard for analytics.",
    tags: ["Expo", "Next.js", "Tailwind CSS", "MySQL", "WebSockets"],
    liveUrl: "https://example.com",
  },
  {
    _id: "3",
    title: "Enterprise Architecture & Chatbot System",
    description:
      "A robust production web platform configured with an isolated Content Management System (CMS) and an intelligent, context-aware Retrieval-Augmented Generation (RAG) support chatbot handling dynamic data indexing.",
    tags: ["Next.js", "TypeScript", "LangChain", "Vector DB", "PayloadCMS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/samson08sis",
  },
];

// Specializations data
export const skills: Skill[] = [
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

export const education: Education[] = [
  {
    title: "B.Sc. in Computer Science",
    year: "2022 - 2026",
    institution: "CPU Business & Information College",
    description:
      "Focused heavily on object oriented paradigms, advanced data structures, database optimization design models, and secure mobile application architectures.",
  },
  {
    title: "Android Development",
    year: "2023",
    institution: "Udacity",
    description:
      "Android Development in Java and XML, layout design, dynamic data display, map integration and authentication.",
  },
  {
    title: "Artificial Intelligence",
    year: "2026",
    institution: "ALX Ethiopia",
    description:
      "Immersive specialization detailing RAG pattern integration, dynamic data streaming architectures, and low-footprint client state execution layers.",
  },
];

export const status: Status = {
  availability: "LIMITED",
};
