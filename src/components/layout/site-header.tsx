import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "GitOps", href: "/#gitops" },
  { label: "Offers", href: "/#offers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030806]/80 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="relative h-12 w-48 overflow-hidden rounded-md sm:w-60"
          aria-label="Driftless home"
        >
          <Image
            src="/driftless-logo.png?v=20260625-4"
            alt="Driftless"
            fill
            priority
            sizes="(min-width: 640px) 240px, 192px"
            className="object-contain object-left"
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-100 transition hover:text-emerald-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="h-9 border border-emerald-300/30 bg-emerald-300 text-black hover:bg-emerald-200"
        >
          <Link href="/#contact">
            Book a Call
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
