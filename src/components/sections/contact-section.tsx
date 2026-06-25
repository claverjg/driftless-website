import Link from "next/link";
import { CalendarClock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#06100c] py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase text-cyan-300">contact</p>
            <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
              Ready to remove drift from your platform roadmap?
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Book a strategy call to map the current state, platform risks, and the shortest path
              toward reliable automation.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 bg-emerald-300 px-5 text-black hover:bg-emerald-200"
            >
              <Link href="mailto:deploy@driftless.com.au">
                <CalendarClock aria-hidden="true" className="size-4" />
                Book a Strategy Call
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 border-white/15 bg-transparent px-5 text-white hover:bg-white/10"
            >
              <Link href="mailto:deploy@driftless.com.au">
                <Mail aria-hidden="true" className="size-4" />
                deploy@driftless.com.au
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
