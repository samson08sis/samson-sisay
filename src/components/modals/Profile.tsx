"use client";

import { AVAILABILITY_CONFIG } from "@/data/constants";
import { Availability } from "@/types";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  visible: boolean;
  status: Availability;
  onClose: () => void;
}

export default function ProfileCardModal({ visible, status, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const config = AVAILABILITY_CONFIG[status] ?? AVAILABILITY_CONFIG.AVAILABLE;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (visible) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-xs">
      <div
        ref={ref}
        className="w-full max-w-md overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16171b] shadow-2xl transition-all">
        {/* Terminal Top Window Deck */}
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-[#121316]/50 px-4 py-3">
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500 animate-pulse" />
            <span>identity_manifest.sh</span>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 transition-colors"
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
            <div className="relative h-18 w-18 shrink-0 overflow-hidden rounded-xl border border-zinc-300 dark:border-zinc-700/60 p-0.5 bg-linear-to-b from-zinc-200 to-zinc-100 dark:from-zinc-700 dark:to-zinc-900 shadow-md">
              <Image
                src="/images/profile/samson-sisay.jpg"
                alt="Samson Sisay"
                width={68}
                height={68}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="h-full w-full rounded-[10px] object-cover select-none pointer-events-none"
              />
              <div
                className="absolute inset-0 z-10 select-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Identity Metadata Headers */}
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Samson Sisay
              </h3>
              <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                ~/fullstack_developer
              </div>

              {/* Status Indicator */}
              <div
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-mono tracking-wide w-fit mx-auto md:mx-0 ${config.styles.border} ${config.styles.bg} ${config.styles.text}`}>
                <span
                  className={`h-1 w-1 rounded-full ${config.styles.dot} ${
                    status !== "UNAVAILABLE" ? "animate-pulse" : ""
                  }`}
                />
                <span>{config.t_label}</span>
              </div>

              {/* <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 dark:border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-emerald-700 dark:text-emerald-400">
                <span className="h-1 w-1 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                available
              </div> */}
            </div>
          </div>

          {/* Minimal Bio Summary */}
          <p className="mt-5 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
            Engineering fast, scalable interface layers and deterministic
            runtime environments. Focused on type-safe frontend core layouts.
          </p>

          {/* Core Contact Parameters Env Block */}
          <div className="mt-5 rounded-lg bg-zinc-50 dark:bg-[#121316] border border-zinc-200 dark:border-zinc-800/60 p-4 space-y-2.5 font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center justify-between py-1 border-b border-zinc-200 dark:border-zinc-900">
              <span className="text-zinc-400 dark:text-zinc-500">EMAIL:</span>
              <a
                href="mailto:sams1307wolde@gmail.com"
                className="text-zinc-800 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-sans font-medium">
                sams1307wolde@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-zinc-200 dark:border-zinc-900">
              <span className="text-zinc-400 dark:text-zinc-500">LOCALE:</span>
              <span className="text-zinc-700 dark:text-zinc-300 font-sans">
                Addis Ababa, ET
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-zinc-400 dark:text-zinc-500">
                TELEMETRY:
              </span>
              <span className="text-emerald-600 dark:text-emerald-400/90 font-medium">
                [GitHub, LinkedIn]
              </span>
            </div>
          </div>

          {/* Core Handshake CTA Block */}
          <div className="mt-6">
            <a
              href="mailto:sams1307wolde@gmail.com"
              className="flex w-full items-center justify-center rounded bg-zinc-900 dark:bg-zinc-100 px-4 py-2.5 text-center text-xs font-bold text-zinc-50 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition duration-150 shadow-sm">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
