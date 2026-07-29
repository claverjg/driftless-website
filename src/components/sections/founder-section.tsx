import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { founderCapabilities } from "@/data/services";

export function FounderSection() {
  return (
    <section className="bg-[#030806] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur sm:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent"
            />
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              <div>
                <p className="font-mono text-xs font-semibold uppercase text-emerald-300">
                  founder credibility
                </p>
                <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
                  Built from practical platform experience.
                </h2>
                <div className="mt-7 flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex size-14 shrink-0 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/10 font-mono text-lg font-semibold text-emerald-300"
                  >
                    JC
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Julian Claver</p>
                    <p className="text-sm text-zinc-500">Founder, Driftless</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg leading-8 text-zinc-300">
                  Driftless is shaped by hands-on delivery across Azure, AKS, GitOps, IaC, workloads,
                  monitoring, incident response, and SaaS operations. The work is pragmatic:
                  fewer fragile exceptions, better automation, cleaner ownership, and platforms teams
                  can keep improving after the engagement ends.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {founderCapabilities.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      <Check aria-hidden="true" className="size-3.5 text-emerald-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
