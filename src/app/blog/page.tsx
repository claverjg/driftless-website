import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/blog-card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Driftless",
  description:
    "Technical writing from Driftless on platform engineering, Azure, Kubernetes, GitOps and infrastructure automation.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden bg-[#030806]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 driftless-glass-lines opacity-65" />
        <div className="pointer-events-none absolute inset-0 driftless-grid opacity-30" />

        <section className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-emerald-200/80">
              Driftless blog
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Field notes for infrastructure without drift.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Practical writing on platform engineering, GitOps, Azure, Kubernetes, operations
              and the systems that keep production environments understandable.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
