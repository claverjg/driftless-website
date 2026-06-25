import { DeployTerminal } from "@/components/terminal/deploy-terminal";

export function TerminalSection() {
  return (
    <section className="bg-[#030806] py-24 sm:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="font-mono text-xs font-semibold uppercase text-emerald-300">automation loop</p>
          <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
            Deterministic delivery for platform change.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Policies are checked before cloud state changes. Infrastructure is applied from code.
            Applications sync through GitOps, so teams can reason about what changed and why.
          </p>
        </div>
        <DeployTerminal />
      </div>
    </section>
  );
}
