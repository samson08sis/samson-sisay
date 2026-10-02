"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileCardModal from "../modals/Profile";
import { Availability } from "@/types";
import { AVAILABILITY_CONFIG } from "@/data/constants";

interface NavLink {
  name: string;
  href: string;
}

const links: NavLink[] = [
  { name: "~/home", href: "#home" },
  { name: "~/projects", href: "#projects" },
  { name: "~/contact", href: "#contact" },
];

interface Props {
  status: Availability;
}

export default function Navigation({ status }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const config = AVAILABILITY_CONFIG[status] ?? AVAILABILITY_CONFIG.AVAILABLE;

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/60 bg-white/80 dark:bg-[#121316]/75 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl p-[1.5px] transition-all duration-200 hover:scale-[1.03] active:scale-95 cursor-pointer"
              aria-label="Open profile modal">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#047857_25%,#34d399_50%,#064e3b_75%,#10b981_100%)]" />

              <div className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-zinc-100 dark:bg-[#16171a]">
                <Image
                  src="/images/profile/samson-sisay.jpg"
                  alt="Samson Sisay"
                  width={36}
                  height={36}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="h-full w-full rounded-[11px] object-cover filter brightness-95 dark:brightness-95 select-none pointer-events-none"
                />
                <div
                  className="absolute inset-0 z-10 select-none"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </button>

            <Link href="/" className="flex flex-col select-none">
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                Samson Sisay
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5 justify-center items-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 dark:bg-emerald-400/60 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                </span>
                <span
                  className={`font-mono text-[10px] tracking-wide ${config.styles.text} font-medium dark:font-normal`}>
                  {config.label}
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6 font-mono text-xs">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors duration-150">
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative h-9 w-9 flex items-center justify-center rounded-lg text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/40 dark:hover:text-zinc-100 md:hidden transition-colors cursor-pointer"
            aria-label="Toggle menu">
            {/* Hamburger Icon */}
            <svg
              className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-90 opacity-0 scale-75"
                  : "rotate-0 opacity-100 scale-100"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            {/* Close (X) Icon */}
            <svg
              className={`absolute h-5 w-5 transition-all duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Container */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100 border-b border-zinc-200/80 dark:border-zinc-800/80"
              : "grid-rows-[0fr] opacity-0 border-b border-transparent"
          }`}>
          <div className="overflow-hidden bg-white/95 dark:bg-[#121316]">
            <nav className="flex flex-col space-y-3.5 px-4 py-4 font-mono text-xs">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <ProfileCardModal
        visible={isModalOpen}
        status={status}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
