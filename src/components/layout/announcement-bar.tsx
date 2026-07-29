"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function AnnouncementBar() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-black">
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent blur-md"
        initial={reduceMotion ? false : { x: "-120%" }}
        animate={reduceMotion ? undefined : { x: ["-120%", "320%"] }}
        transition={{ duration: 7, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
      />
      <Link
        href="/blog/argocd-applicationset-ui-platform-teams"
        className="group relative flex items-center justify-center gap-2 px-4 py-2.5 text-center text-sm text-zinc-300 transition hover:text-white"
      >
        <span className="hidden font-mono text-xs font-semibold uppercase tracking-wide text-emerald-300 sm:inline">
          New
        </span>
        <span className="truncate">
          Why Argo CD&apos;s ApplicationSet UI matters for platform teams
        </span>
        <ChevronRight
          aria-hidden="true"
          className="size-4 shrink-0 text-emerald-300 transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
