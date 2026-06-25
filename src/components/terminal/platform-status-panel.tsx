"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, CircleDotDashed } from "lucide-react";

const platformItems = [
  { name: "Azure", state: "healthy", value: "99.99%" },
  { name: "AKS", state: "ready", value: "v1.31" },
  { name: "GitOps", state: "synced", value: "main" },
  { name: "IaC", state: "applied", value: "0 drift" },
  { name: "DNS", state: "verified", value: "global" },
  { name: "SSL", state: "valid", value: "89d" },
];

export function PlatformStatusPanel() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-xl bg-cyan-400/10 blur-2xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#06110d]/90 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-slate-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-300/80" />
            <span className="size-2.5 rounded-full bg-cyan-300/80" />
          </div>
          <p className="font-mono text-xs text-zinc-500">platform.status</p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-xs text-emerald-300">driftless control plane</p>
              <h2 className="mt-2 text-xl font-normal text-white">Operational baseline</h2>
            </div>
            <CircleDotDashed aria-hidden="true" className="size-5 animate-spin-slow text-cyan-300" />
          </div>
          <div className="grid gap-3">
            {platformItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + index * 0.07, duration: 0.35 }}
                className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-emerald-300" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-100">{item.name}</p>
                    <p className="font-mono text-xs text-emerald-300">{item.state}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-cyan-200">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
