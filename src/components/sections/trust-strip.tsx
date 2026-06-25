"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, CircleDotDashed } from "lucide-react";

import { trustItems } from "@/data/services";

export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Core platform capabilities"
      className="relative overflow-hidden border-b border-white/10 bg-[#050b08]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent blur-xl"
        initial={reduceMotion ? false : { x: "-120%" }}
        animate={reduceMotion ? undefined : { x: ["-120%", "320%"] }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-5 py-6 sm:px-6 lg:flex-nowrap lg:px-8">
        {trustItems.map((item, index) => (
          <motion.div
            key={item}
            initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
            className="group relative min-w-[150px] flex-1 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-200 backdrop-blur transition-colors hover:border-emerald-300/30 hover:bg-white/[0.06] lg:min-w-0"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform duration-500 group-hover:scale-x-100"
            />
            <span className="flex items-center justify-center gap-2">
              <span className="relative flex size-5 items-center justify-center">
                <CircleDotDashed
                  aria-hidden="true"
                  className="absolute size-5 animate-spin-slow text-cyan-300/40"
                />
                <Check aria-hidden="true" className="size-3.5 text-emerald-300" />
              </span>
              <span className="font-medium">{item}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
