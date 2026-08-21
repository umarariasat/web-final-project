"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-7 sm:pt-6 lg:px-10">
      <nav className="pointer-events-auto mx-auto max-w-7xl">
        {/* ================= DESKTOP & MAIN BAR ================= */}
        <div className="flex items-center justify-between">
          {/* ================= BRAND ================= */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#211F1C] text-base text-[#F7F3EC] shadow-lg shadow-[#211F1C]/10">
              🐾
            </div>

            <div className="leading-none">
              <p className="text-xs sm:text-[13px] font-black uppercase tracking-[-0.04em] text-[#211F1C]">
                Paw & Co.
              </p>
              <p className="mt-1 text-[5px] sm:text-[6px] font-bold uppercase tracking-[0.32em] text-[#211F1C]/40">
                Pet Lifestyle
              </p>
            </div>
          </Link>

          {/* ================= CENTER NAV (Desktop Only) ================= */}
          <div className="absolute left-1/2 top-5 hidden -translate-x-1/2 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-[#211F1C]/10 bg-[#F7F3EC]/80 p-1.5 shadow-sm backdrop-blur-xl">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-full px-4 py-2.5 text-[7px] font-black uppercase tracking-[0.22em] transition-all duration-200 ${
                      isActive
                        ? "bg-[#211F1C] text-[#F7F3EC] border border-[#211F1C] shadow-sm"
                        : "text-[#211F1C]/45 border border-transparent hover:text-[#211F1C]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-2">
            {/* Desktop Shop CTA */}
            <Link
              href="/shop"
              className={`group hidden md:flex items-center gap-3 rounded-full border py-2 pl-3 pr-2 transition-all duration-300 hover:-translate-y-0.5 ${
                pathname === "/shop"
                  ? "border-[#211F1C] bg-[#DDE8D5]"
                  : "border-[#211F1C]/10 bg-[#DDE8D5]"
              }`}
              aria-label="Shop"
            >
              <span className="text-right">
                <span className="block text-[5px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/40">
                  Made For
                </span>
                <span className="block text-[7px] font-black uppercase tracking-[0.18em] text-[#211F1C]">
                  Happy Paws
                </span>
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#211F1C] text-[10px] text-[#F7F3EC] transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="flex h-10 px-4 items-center gap-2 rounded-full border border-[#211F1C]/15 bg-[#F7F3EC]/90 text-[10px] font-black uppercase tracking-[0.2em] text-[#211F1C] backdrop-blur-xl md:hidden shadow-sm"
            >
              <span>{isOpen ? "Close" : "Menu"}</span>
              <span className="text-xs">{isOpen ? "✕" : "•••"}</span>
            </button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        {isOpen && (
          <div className="absolute inset-x-4 top-16 rounded-3xl border border-[#211F1C]/10 bg-[#F7F3EC]/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden transition-all animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-2.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-5 py-3 text-xs font-black uppercase tracking-[0.2em] transition-colors ${
                      isActive
                        ? "bg-[#211F1C] text-[#F7F3EC] border border-[#211F1C]"
                        : "text-[#211F1C]/80 border border-transparent hover:bg-[#211F1C]/5 hover:text-[#211F1C]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="mt-2 pt-3 border-t border-[#211F1C]/10">
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-xs font-black uppercase tracking-[0.2em] ${
                    pathname === "/shop"
                      ? "bg-[#211F1C] text-[#F7F3EC] border border-[#211F1C]"
                      : "bg-[#DDE8D5] text-[#211F1C]"
                  }`}
                >
                  <span>Shop Collection</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}