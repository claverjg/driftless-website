"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { offers } from "@/data/services";

export function OffersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="offers" className="border-y border-white/10 bg-[#06100c] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase text-cyan-300">fixed-price offers</p>
          <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
            Clear entry points for high-signal platform work.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-emerald-300">{offer.price}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">{offer.title}</h3>
                </div>
                <ArrowUpRight aria-hidden="true" className="size-5 text-zinc-500" />
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400">{offer.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
