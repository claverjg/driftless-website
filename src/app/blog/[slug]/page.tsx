import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { blogPosts, getBlogPost } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Driftless",
    };
  }

  return {
    title: `${post.title} | Driftless`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main>
        <BlogPostLayout post={post} />
      </main>
      <SiteFooter />
    </>
  );
}
