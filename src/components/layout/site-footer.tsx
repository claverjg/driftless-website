import Link from "next/link";
import Image from "next/image";

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
        <p>Platform Engineering / Azure / Kubernetes / GitOps / Infrastructure as Code</p>
      </div>
    </footer>
  );
}
