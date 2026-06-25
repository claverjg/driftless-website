"use client";

import { ServiceCard } from "@/components/cards/service-card";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#030806] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase text-emerald-300">services</p>
          <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
            Platform work that holds up after launch.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Driftless pairs implementation depth with operating discipline, helping teams move
            from fragile cloud estates to repeatable, observable platforms.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
