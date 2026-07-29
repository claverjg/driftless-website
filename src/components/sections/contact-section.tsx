import { Mail, Send } from "lucide-react";

import { SocialLinks } from "@/components/social/social-links";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#06100c] py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" aria-hidden="true" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/30 backdrop-blur sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase text-cyan-300">contact</p>
            <h2 className="mt-3 text-3xl font-normal leading-tight tracking-normal text-white sm:text-4xl">
              Tell us what you are building.
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Share the platform problem, delivery pressure, or reliability risk you want to
              solve. The details land directly in the Driftless inbox and we will come back with a
              practical next step.
            </p>
            <div className="mt-7 rounded-lg border border-white/10 bg-black/20 p-4">
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <Mail aria-hidden="true" className="size-4 text-emerald-300" />
                Prefer email?
              </div>
              <a
                href="mailto:deploy@driftless.com.au"
                className="mt-2 block text-sm text-emerald-200 transition hover:text-emerald-100"
              >
                deploy@driftless.com.au
              </a>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Social
                </p>
                <SocialLinks className="mt-3" linkClassName="text-emerald-200 hover:text-emerald-100" />
              </div>
            </div>
          </div>

          <form
            action="https://formsubmit.co/deploy@driftless.com.au"
            method="POST"
            className="grid gap-4"
          >
            <input type="hidden" name="_subject" value="New Driftless website enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://driftless.com.au/thank-you" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for contacting Driftless. We have received your enquiry and will review the details shortly."
            />
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Organisation
                <input
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                  placeholder="Company or team"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Focus area
                <select
                  name="focus"
                  defaultValue=""
                  className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-white outline-none transition focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Platform Engineering</option>
                  <option>Azure Reliability</option>
                  <option>AKS / Kubernetes</option>
                  <option>GitOps / CI-CD</option>
                  <option>Infrastructure as Code</option>
                  <option>Operations / Incident Response</option>
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Timeline
                <select
                  name="timeline"
                  defaultValue=""
                  className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-white outline-none transition focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Now / urgent</option>
                  <option>This quarter</option>
                  <option>Planning ahead</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-200">
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="h-11 rounded-lg border border-white/10 bg-black/25 px-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                  placeholder="Optional"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-zinc-200">
              What do you need help with?
              <textarea
                required
                name="message"
                rows={5}
                className="resize-y rounded-lg border border-white/10 bg-black/25 px-3 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/60 focus:ring-3 focus:ring-emerald-300/15"
                placeholder="Tell us about your platform, current challenges, and what a good outcome would look like."
              />
            </label>

            <Button
              type="submit"
              size="lg"
              className="mt-2 h-11 w-full bg-emerald-300 px-5 text-black hover:bg-emerald-200 sm:w-fit"
            >
              <Send aria-hidden="true" className="size-4" />
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
