"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const links: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-[12px] p-[1.5px] transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="View profile card">
              <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#1d4ed8_25%,#60a5fa_50%,#1e3a8a_75%,#3b82f6_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#60a5fa_0%,#3b82f6_25%,#93c5fd_50%,#1d4ed8_75%,#60a5fa_100%)]" />

              <div className="relative flex h-full w-full items-center justify-center rounded-[11px] bg-white dark:bg-gray-950 transition-colors duration-300 group-hover:bg-opacity-90">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Samson Sisay Profile"
                  width={36}
                  height={36}
                  className="h-full w-full rounded-[11px] object-cover"
                />
              </div>

              <span className="absolute -inset-1 rounded-[13px] bg-blue-500/30 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 animate-pulse-slow" />
            </button>

            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Samson Sisay
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  Available to work
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-950 dark:text-gray-400 dark:hover:text-white transition-colors duration-150">
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 md:hidden dark:text-gray-400 dark:hover:bg-gray-900"
            aria-label="Toggle Navigation Menu">
            <svg
              className="h-6 w-6"
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
          <div className="md:hidden border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div
            ref={modalRef}
            className="w-full max-w-sm transform rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl transition-all dark:border-gray-800 dark:bg-gray-900 animate-slide-up">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative h-14 w-14 overflow-hidden rounded-[16px] border-2 border-blue-500">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Samson Sisay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Samson Sisay
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Cross-Platform App Developer
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="Close modal">
                <svg
                  className="h-5 w-5"
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

            <div className="mt-5 space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about building highly polished interactive web apps.
                Focusing deeply on frontend engineering architectures and system
                layout patterns.
              </p>

              <div className="border-t border-gray-100 pt-4 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 space-y-2">
                <div className="flex justify-between">
                  <span>Based in:</span>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    Ethiopia
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Primary Stack:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    TypeScript, Next.js, React
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center text-xs font-semibold text-white hover:bg-blue-500 transition-colors">
                Hire Me
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 rounded-lg border border-gray-200 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors">
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
