import Image from "next/image";
import Link from "next/link";

import { SocialLinks } from "@/components/social/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030806]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-zinc-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link
          href="/"
          className="relative h-12 w-52 overflow-hidden rounded-md"
          aria-label="Driftless home"
        >
          <Image
            src="/driftless-logo.png?v=20260625-4"
            alt="Driftless"
            fill
            sizes="208px"
            className="object-contain object-left"
          />
        </Link>
        <div className="flex flex-col gap-3 md:items-end">
          <p>Platform Engineering / Azure / Kubernetes / GitOps / Infrastructure as Code</p>
          <nav aria-label="Footer navigation" className="flex gap-4 text-zinc-400">
            <Link href="/blog" className="transition hover:text-emerald-200">
              Blog
            </Link>
            <Link href="/#contact" className="transition hover:text-emerald-200">
              Contact
            </Link>
          </nav>
          <SocialLinks className="justify-start md:justify-end" />
        </div>
      </div>
    </footer>
  );
}
