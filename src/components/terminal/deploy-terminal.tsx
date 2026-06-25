"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { text: "$ driftless deploy", tone: "command" },
  { text: "Checking policies...", tone: "muted" },
  { text: "Passed", tone: "success" },
  { text: "Provisioning infrastructure...", tone: "muted" },
  { text: "Complete", tone: "success" },
  { text: "Syncing applications...", tone: "muted" },
  { text: "Healthy", tone: "success" },
  { text: "Deployment complete.", tone: "accent" },
];

export function DeployTerminal() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-lg border border-white/10 bg-[#020403] shadow-2xl shadow-emerald-950/30"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-slate-500/80" />
          <span className="size-2.5 rounded-full bg-emerald-300/80" />
          <span className="size-2.5 rounded-full bg-cyan-300/80" />
        </div>
        <p className="font-mono text-xs text-zinc-600">deploy.sh</p>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7 sm:p-7">
        <code>
          {lines.map((line, index) => (
            <motion.span
              key={line.text}
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={reduceMotion ? undefined : { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.16, duration: 0.25 }}
              className={
                line.tone === "success"
                  ? "block text-emerald-300"
                  : line.tone === "accent"
                    ? "block text-cyan-200"
                    : line.tone === "command"
                      ? "block text-white"
                      : "block text-zinc-500"
              }
            >
              {line.text}
              {index === lines.length - 1 ? (
                <motion.span
                  aria-hidden="true"
                  animate={reduceMotion ? undefined : { opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan-200"
                />
              ) : null}
            </motion.span>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}
