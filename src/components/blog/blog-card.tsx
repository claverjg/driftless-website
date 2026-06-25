import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 transition hover:border-emerald-300/35 hover:bg-white/[0.055]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent opacity-60" />
      <div className="mb-6 overflow-hidden rounded-lg border border-white/10 bg-black/30">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={1200}
          height={675}
          className="aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.025]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200/80">
        <span>{post.eyebrow}</span>
        <span className="h-1 w-1 rounded-full bg-zinc-600" aria-hidden="true" />
        <span className="inline-flex items-center gap-1.5 text-zinc-500">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          {new Intl.DateTimeFormat("en-AU", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }).format(new Date(`${post.date}T00:00:00`))}
        </span>
      </div>

      <h2 className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        <Link href={`/blog/${post.slug}`} className="outline-none focus-visible:text-emerald-200">
          <span className="absolute inset-0" aria-hidden="true" />
          {post.title}
        </Link>
      </h2>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
        {post.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-200">
        Read article
        <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </article>
  );
}
