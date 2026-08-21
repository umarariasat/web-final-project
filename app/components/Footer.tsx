
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#211F1C] px-5 pb-6 pt-12 text-[#F7F3EC] sm:px-6 sm:pt-14 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* =================================================
            TOP
        ================================================= */}

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-[#F7F3EC]/10 pb-10 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr]">

          {/* ================= BRAND ================= */}

          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F3EC] text-lg text-[#211F1C]">
                🐾
              </div>

              <div>
                <div className="text-lg font-black uppercase tracking-[-0.05em]">
                  PAW & CO.
                </div>

                <div className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#F7F3EC]/35">
                  Pet Essentials
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-[11px] leading-5 text-[#F7F3EC]/45">
              Thoughtfully chosen products for happier pets,
              easier routines, and everyday moments together.
            </p>

            {/* SOCIAL */}

            <div className="mt-6 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F7F3EC]/15 text-[8px] font-bold text-[#F7F3EC]/60 transition hover:bg-[#F7F3EC] hover:text-[#211F1C]"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F7F3EC]/15 text-[8px] font-bold text-[#F7F3EC]/60 transition hover:bg-[#F7F3EC] hover:text-[#211F1C]"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F7F3EC]/15 text-[8px] font-bold text-[#F7F3EC]/60 transition hover:bg-[#F7F3EC] hover:text-[#211F1C]"
              >
                TT
              </a>
            </div>
          </div>

          {/* ================= SHOP ================= */}

          <div>
            <h3 className="mb-5 text-[8px] font-black uppercase tracking-[0.3em] text-[#F7F3EC]/30">
              Shop
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/shop"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Food & Treats
              </Link>

              <Link
                href="/shop"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Toys & Play
              </Link>

              <Link
                href="/shop"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Grooming
              </Link>

              <Link
                href="/shop"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Wellness
              </Link>
            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h3 className="mb-5 text-[8px] font-black uppercase tracking-[0.3em] text-[#F7F3EC]/30">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Home
              </Link>

              <Link
                href="/services"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Services
              </Link>

              <a
                href="#why-us"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Why Paw & Co.
              </a>

              <a
                href="#contact"
                className="w-fit text-[11px] text-[#F7F3EC]/55 transition hover:translate-x-1 hover:text-[#F7F3EC]"
              >
                Contact
              </a>

              {/* ADMIN */}

              <Link
                href="/admin/login"
                className="group mt-2 flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F7F3EC]/35 transition hover:text-[#F7F3EC]"
              >
                Admin
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="mb-5 text-[8px] font-black uppercase tracking-[0.3em] text-[#F7F3EC]/30">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:umarariasat04@gmail.com"
                className="break-all text-[11px] text-[#F7F3EC]/55 transition hover:text-[#F7F3EC]"
              >
                hello@pawandco.pk
              </a>

              <a
                href="tel:+9230664713361"
                className="text-[11px] text-[#F7F3EC]/55 transition hover:text-[#F7F3EC]"
              >
                0306 64713361
              </a>

              <p className="text-[11px] leading-5 text-[#F7F3EC]/40">
                Gujrat
                <br />
                Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            NEWSLETTER
        ================================================= */}

        <div className="grid gap-6 border-b border-[#F7F3EC]/10 py-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-xl font-black uppercase tracking-[-0.04em] sm:text-2xl">
              Stay In The Loop.
            </p>

            <p className="mt-1 text-[10px] leading-5 text-[#F7F3EC]/35">
              New products, pet tips, and a little happiness.
            </p>
          </div>

          <form className="flex w-full max-w-md md:ml-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="min-w-0 flex-1 rounded-l-full border border-[#F7F3EC]/15 bg-transparent px-4 py-3 text-[10px] text-[#F7F3EC] outline-none placeholder:text-[#F7F3EC]/25 focus:border-[#F7F3EC]/35"
            />

            <button
              type="submit"
              className="shrink-0 rounded-r-full bg-[#F7F3EC] px-5 text-[8px] font-black uppercase tracking-[0.2em] text-[#211F1C] transition hover:bg-white"
            >
              Join
            </button>
          </form>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F7F3EC]/25">
            © 2026 Paw & Co. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F7F3EC]/25 transition hover:text-[#F7F3EC]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F7F3EC]/25 transition hover:text-[#F7F3FEC]"
            >
              Terms
            </a>

            <span className="text-sm">
              🐾
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
