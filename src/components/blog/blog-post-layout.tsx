import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import type { BlogPost } from "@/data/blog";

type BlogPostLayoutProps = {
  post: BlogPost;
};

export function BlogPostLayout({ post }: BlogPostLayoutProps) {
  return (
    <article className="relative overflow-hidden bg-[#030806]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] driftless-glass-lines opacity-70" />
      <div className="pointer-events-none absolute inset-0 driftless-grid opacity-35" />

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-emerald-200"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Blog
        </Link>

        <header className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200/80">
            {post.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{post.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span>{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-4" aria-hidden="true" />
              {new Intl.DateTimeFormat("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(`${post.date}T00:00:00`))}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="size-4" aria-hidden="true" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="mt-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-2xl shadow-emerald-950/25">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={1200}
            height={675}
            priority
            className="aspect-video w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {post.heroPoints.map((point) => (
            <div
              key={point.label}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 text-cyan-200">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="text-sm font-semibold text-white">{point.label}</h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{point.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
          <div className="space-y-12">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight text-white">{section.heading}</h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-zinc-300">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/[0.06] p-5">
              <h2 className="text-sm font-semibold text-emerald-100">{post.callout.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{post.callout.body}</p>
            </div>

            <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <h2 className="text-sm font-semibold text-white">Further reading</h2>
              <div className="mt-4 space-y-3">
                {post.sourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2 text-sm leading-6 text-zinc-400 transition hover:text-emerald-200"
                  >
                    {link.label}
                    <ArrowUpRight className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
