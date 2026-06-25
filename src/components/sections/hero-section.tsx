import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { PlatformStatusPanel } from "@/components/terminal/platform-status-panel";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 driftless-grid opacity-60" aria-hidden="true" />
      <div className="driftless-glass-lines absolute inset-x-0 top-0 h-64 opacity-85" aria-hidden="true" />
      <div className="absolute inset-0 driftless-scanline opacity-30" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl driftless-float" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-black/20">
            <ShieldCheck aria-hidden="true" className="size-4 text-emerald-300" />
            Cloud platforms engineered for reliable delivery
          </div>
          <h1 className="max-w-4xl text-5xl font-normal leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Infrastructure without drift.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-normal leading-8 text-zinc-400 sm:text-xl">
            Driftless helps organisations design, automate and operate reliable Azure, Kubernetes
            and GitOps platforms.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 bg-emerald-300 px-5 text-black hover:bg-emerald-200"
            >
              <Link href="#contact">
                Book a Strategy Call
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-white/15 bg-white/[0.03] px-5 text-white hover:bg-white/10"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>

        <PlatformStatusPanel />
      </div>
    </section>
  );
}
