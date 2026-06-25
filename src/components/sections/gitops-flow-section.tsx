"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Boxes, Cloud, Code2, GitBranch, Rocket, ServerCog, Workflow } from "lucide-react";

const pipeline = [
  {
    title: "GitOps Repo",
    description: "Source-controlled platform and application change.",
    icon: GitBranch,
    meta: "commit",
  },
  {
    title: "IaC Provisioning",
    description: "Declarative infrastructure plans, policy checks, and apply.",
    icon: Workflow,
    meta: "plan / apply",
  },
  {
    title: "Azure + AKS",
    description: "Cloud foundations and Kubernetes runtime converge.",
    icon: Cloud,
    meta: "platform",
  },
  {
    title: "DevOps + ArgoCD",
    description: "Continuous delivery syncs workloads into production.",
    icon: Rocket,
    meta: "prod",
  },
];

export function GitopsFlowSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="gitops" className="border-y border-white/10 bg-[#06100c] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase text-cyan-300">gitops flow</p>
          <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
            Every change leaves a trace.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Source-controlled infrastructure, reviewed automation, reconciled clusters, and visible
            production state from commit to release.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-lg border border-white/10 bg-black/25 p-4 shadow-2xl shadow-black/20 sm:p-6">
          <motion.div
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            initial={reduceMotion ? false : { x: "-100%" }}
            whileInView={reduceMotion ? undefined : { x: "320%" }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
          />
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="font-mono text-xs uppercase text-zinc-500">delivery path</p>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-300">
              <span>dev</span>
              <ArrowRight aria-hidden="true" className="size-3.5" />
              <span>prod</span>
            </div>
          </div>
          <div className="relative grid gap-5 lg:grid-cols-4 lg:gap-0">
            {pipeline.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                  className="group relative min-h-48 overflow-hidden rounded-lg border border-white/10 bg-[#07130f]/90 p-5 shadow-2xl shadow-black/20 backdrop-blur lg:-ml-px lg:[clip-path:polygon(0_0,calc(100%-28px)_0,100%_50%,calc(100%-28px)_100%,0_100%,28px_50%)] lg:first:[clip-path:polygon(0_0,calc(100%-28px)_0,100%_50%,calc(100%-28px)_100%,0_100%)]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-cyan-300/10 opacity-70 transition duration-300 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent"
                  />
                  <div className="relative flex h-full flex-col justify-between gap-8 lg:pl-6 lg:first:pl-0">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-[0_0_24px_rgba(103,232,249,0.08)]">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.68rem] uppercase text-emerald-300">
                        {step.meta}
                      </span>
                    </div>
                    <div>
                      <h3 className="max-w-[13rem] text-balance text-xl font-medium leading-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-[16rem] text-sm leading-6 text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < pipeline.length - 1 ? (
                    <motion.span
                      aria-hidden="true"
                      className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-emerald-300 lg:block"
                      animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25], x: [0, 4, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.16 }}
                    >
                      <ArrowRight className="size-5" />
                    </motion.span>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
          <div className="mt-6 grid gap-3 text-sm text-zinc-500 md:grid-cols-4">
            <div className="flex items-center gap-2">
              <Code2 aria-hidden="true" className="size-4 text-emerald-300" />
              Reviewed changes
            </div>
            <div className="flex items-center gap-2">
              <ServerCog aria-hidden="true" className="size-4 text-emerald-300" />
              Automated platform state
            </div>
            <div className="flex items-center gap-2">
              <Boxes aria-hidden="true" className="size-4 text-emerald-300" />
              Reconciled clusters
            </div>
            <div className="flex items-center gap-2">
              <Rocket aria-hidden="true" className="size-4 text-emerald-300" />
              Production release
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
