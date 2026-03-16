import Link from "next/link";
import { ActiveLink } from "../active-link";
import { Logo } from "../../logo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background/95 supports-backdrop-filters:bg-background/60 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="ls:px-80 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
