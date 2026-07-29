import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/data/social-links";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <nav aria-label="Social links" className={cn("flex flex-wrap gap-3", className)}>
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition hover:text-emerald-200",
            linkClassName,
          )}
        >
          {link.label}
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      ))}
    </nav>
  );
}
