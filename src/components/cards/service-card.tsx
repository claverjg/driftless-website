"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
};

export function ServiceCard({ title, description, icon: Icon, index = 0 }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur transition-colors duration-300 hover:border-emerald-300/30 hover:bg-white/[0.055]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-emerald-300 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
      <div className="mb-5 flex size-11 items-center justify-center rounded-md border border-emerald-300/20 bg-emerald-300/10 text-emerald-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:text-cyan-200">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <h3 className="text-base font-medium text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
    </motion.article>
  );
}
