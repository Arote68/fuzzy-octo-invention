"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/services", label: "Nos savoir-faire" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/#histoire", label: "Notre histoire" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="brand-lockup" aria-label="Excellence Toiture 74, accueil">
          <span className="brand-mark"><span /></span>
          <span className="flex flex-col leading-none">
            <strong>EXCELLENCE <em>TOITURE</em></strong>
            <small>ANNECY · HAUTE-SAVOIE</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+33768647323" className="header-phone"><Phone size={15} /> 07 68 64 73 23</a>
          <Button asChild><Link href="/contact">Demander un devis <ArrowUpRight size={16} /></Link></Button>
        </div>

        <button className="mobile-menu-button lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu lg:hidden">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a href="tel:+33768647323" className="font-semibold">07 68 64 73 23</a>
          <Button asChild className="w-full"><Link href="/contact" onClick={() => setOpen(false)}>Demander un devis</Link></Button>
        </div>
      )}
    </header>
  );
}
