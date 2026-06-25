import { founderCapabilities } from "@/data/services";

export function FounderSection() {
  return (
    <section className="bg-[#030806] py-24 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="font-mono text-xs font-semibold uppercase text-emerald-300">founder credibility</p>
          <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
            Built from practical platform experience.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-zinc-300">
            Driftless is shaped by hands-on delivery across Azure, AKS, GitOps, IaC, workloads,
            monitoring, incident response, and SaaS operations. The work is pragmatic:
            fewer fragile exceptions, better automation, cleaner ownership, and platforms teams can
            keep improving after the engagement ends.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {founderCapabilities.map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
