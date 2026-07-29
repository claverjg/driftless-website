import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank you | Driftless",
  description: "Thanks for contacting Driftless. Your enquiry has been received.",
};

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex min-h-[calc(100vh-8rem)] items-center overflow-hidden bg-[#030806]">
        <div className="pointer-events-none absolute inset-0 driftless-grid opacity-35" />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-80 driftless-glass-lines opacity-80"
          aria-hidden="true"
        />
        <section className="relative mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex size-14 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 text-emerald-200">
            <CheckCircle2 className="size-7" aria-hidden="true" />
          </div>
          <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            enquiry received
          </p>
          <h1 className="mt-4 text-4xl font-normal tracking-normal text-white sm:text-5xl">
            Thanks for contacting Driftless.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Your details have been sent through. We will review the context and come back with a
            practical next step.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-11 border border-emerald-300/30 bg-emerald-300 text-black hover:bg-emerald-200"
            >
              <Link href="/">
                <ArrowLeft aria-hidden="true" className="size-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
