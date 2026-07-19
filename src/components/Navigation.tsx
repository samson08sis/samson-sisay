"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const links: NavLink[] = [
    { name: "~/home", href: "#home" },
    { name: "~/projects", href: "#projects" },
    { name: "~/contact", href: "#contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    }
    if (isModalOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800/60 bg-[#121316]/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl p-[1.5px] transition-all duration-200 hover:scale-[1.03] active:scale-95"
              aria-label="Open profile modal">
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#047857_25%,#34d399_50%,#064e3b_75%,#10b981_100%)]" />

              <div className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-[#16171a]">
                <Image
                  src="/images/profile.jpg"
                  alt="Samson Sisay"
                  width={36}
                  height={36}
                  className="h-full w-full rounded-[11px] object-cover filter brightness-95"
                />
              </div>
            </button>

            <div className="flex flex-col select-none">
              <span className="text-sm font-semibold tracking-tight text-zinc-100">
                Samson Sisay
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] tracking-wide text-emerald-400/90">
                  Available to work
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 font-mono text-xs">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-emerald-400 transition-colors duration-150">
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-100 md:hidden transition"
            aria-label="Toggle menu">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-b border-zinc-800/80 bg-[#121316] px-4 py-4 font-mono text-xs">
            <nav className="flex flex-col space-y-3.5">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* PROFILE CARD MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            ref={modalRef}
            className="w-full max-w-md overflow-hidden rounded-xl border border-zinc-800 bg-[#16171b] shadow-2xl transition-all">
            {/* Terminal Top Window Deck */}
            <div className="flex items-center justify-between border-b border-zinc-800/80 bg-[#121316]/50 px-4 py-3">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>identity_manifest.sh</span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded p-1 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 transition-colors"
                aria-label="Close modal">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body Profile Content */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Large Profile Image Deck */}
                <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border border-zinc-700/60 p-0.5 bg-linear-to-b from-zinc-700 to-zinc-900 shadow-md">
                  <Image
                    src="/images/profile.jpg"
                    alt="Samson Sisay"
                    width={68}
                    height={68}
                    className="h-full w-full rounded-[10px] object-cover"
                  />
                </div>

                {/* Identity Metadata Headers */}
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-lg font-bold text-zinc-100 tracking-tight">
                    Samson Sisay
                  </h3>
                  <div className="font-mono text-xs text-emerald-400 font-medium">
                    ~/fullstack_developer
                  </div>

                  {/* Status Indicator */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-emerald-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                    status: ready_for_hire
                  </div>
                </div>
              </div>

              {/* Minimal Bio Summary */}
              <p className="mt-5 text-xs leading-relaxed text-zinc-400 text-center sm:text-left">
                Engineering fast, scalable interface layers and deterministic
                runtime environments. Focused on type-safe frontend core
                layouts.
              </p>

              {/* Core Contact Parameters Env Block */}
              <div className="mt-5 rounded-lg bg-[#121316] border border-zinc-800/60 p-4 space-y-2.5 font-mono text-[11px] text-zinc-400">
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">EMAIL:</span>
                  <a
                    href="mailto:sams1307wolde@gmail.com"
                    className="text-zinc-200 hover:text-emerald-400 transition-colors font-sans font-medium">
                    sams1307wolde@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">LOCALE:</span>
                  <span className="text-zinc-300 font-sans">
                    Addis Ababa, ET
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-zinc-500">TELEMETRY:</span>
                  <span className="text-emerald-400/90 font-medium">
                    [GitHub, LinkedIn]
                  </span>
                </div>
              </div>

              {/* Core Handshake CTA Block */}
              <div className="mt-6">
                <a
                  href="mailto:sams1307wolde@gmail.com"
                  className="flex w-full items-center justify-center rounded bg-zinc-100 px-4 py-2.5 text-center text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition duration-150 shadow-sm">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
