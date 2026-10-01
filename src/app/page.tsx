import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

import Hero from "@/components/home/Hero.section";
import Skills from "@/components/home/Skills.section";
import ContactMe from "@/components/home/Contact.section";
import Projects from "@/components/home/Projects.section";
import Education from "@/components/home/Education.section";

import { EDUCATION, PROJECTS, SKILLS, STATUS } from "@/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-app text-text-main transition-colors duration-200 antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navigation status={STATUS.availability} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Page Sections */}
        <Hero status={STATUS.availability} />
        <Skills skills={SKILLS} />
        <Projects projects={PROJECTS} />
        <Education education={EDUCATION} />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
