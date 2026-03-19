import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Forside" },
  { href: "/kontakt", label: "Kontakt & ydelser" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,20,30,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white"
          href="/"
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-[#f7b43e] text-[#07141e]">
            <Zap className="size-5" />
          </span>
          <span className="leading-tight">
            Aalborg El-service
            <span className="block text-[11px] tracking-[0.18em] text-white/65">
              Elarbejde uden bøvl
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/78 md:flex">
          {navItems.map((item) => (
            <Link
              className="transition-colors hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="bg-white text-[#07141e] hover:bg-white/90">
          <Link href="/kontakt">
            Ring nu
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
