"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowUpRight, LockKeyhole, Mail } from "lucide-react";

export default function AdminLoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();


setError("");

if (!email || !password) {
  setError("Please enter your email and password.");
  return;
}

setIsLoading(true);

// Temporary demo login.
// We will replace this with real authentication.
setTimeout(() => {
  if (
    email === "admin@pawandco.pk" &&
    password === "admin123"
  ) {
    window.location.href = "/admin";
  } else {
    setError("Invalid email or password.");
    setIsLoading(false);
  }
}, 700);

}

return ( <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C]"> <div className="grid min-h-screen lg:grid-cols-2">


    {/* =====================================================
        LEFT — BRAND PANEL
    ===================================================== */}

    <section className="relative hidden overflow-hidden bg-[#211F1C] p-8 text-[#F7F3EC] lg:flex lg:flex-col lg:justify-between lg:p-12">

      {/* Decorative background text */}
      <div className="pointer-events-none absolute -bottom-8 -left-4 select-none text-[12rem] font-black uppercase leading-none tracking-[-0.12em] text-[#F7F3EC]/[0.025]">
        PAW
      </div>

      {/* Brand */}
      <div className="relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7F3EC] text-lg text-[#211F1C]">
            🐾
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[-0.04em]">
              Paw & Co.
            </p>

            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.3em] text-[#F7F3EC]/35">
              Pet Essentials
            </p>
          </div>
        </Link>
      </div>

      {/* Main statement */}
      <div className="relative z-10 max-w-lg">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#DDE8D5]" />

          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#F7F3EC]/40">
            Private Area
          </span>
        </div>

        <h1 className="text-7xl font-black uppercase leading-[0.8] tracking-[-0.1em] xl:text-8xl">
          WELCOME
          <br />
          <span className="text-[#F7F3EC]/25">
            BACK.
          </span>
        </h1>

        <p className="mt-7 max-w-sm text-xs leading-6 text-[#F7F3EC]/45">
          Manage your products, orders, customer messages, and
          everything behind Paw & Co.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex items-center justify-between border-t border-[#F7F3EC]/10 pt-5">
        <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#F7F3EC]/25">
          Paw & Co. / Admin
        </p>

        <span className="text-lg">🐾</span>
      </div>
    </section>

    {/* =====================================================
        RIGHT — LOGIN
    ===================================================== */}

    <section className="flex min-h-screen flex-col px-5 py-6 sm:px-8 lg:min-h-0 lg:px-16 lg:py-10 xl:px-24">

      {/* Mobile header */}
      <div className="flex items-center justify-between lg:hidden">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#211F1C] text-sm text-[#F7F3EC]">
            🐾
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[-0.04em]">
              Paw & Co.
            </p>

            <p className="text-[6px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/35">
              Admin
            </p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#211F1C]/10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Login container */}
      <div className="flex flex-1 items-center justify-center py-14 lg:py-10">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-sm">
                🐾
              </span>

              <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                Admin Portal
              </span>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-6xl">
              SIGN
              <br />
              <span className="text-[#211F1C]/25">
                IN.
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-xs leading-6 text-[#211F1C]/45">
              Sign in to manage your Paw & Co. store.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10"
          >

            {/* Email */}
            <div className="border-b border-[#211F1C]/15 pb-3">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35"
              >
                <Mail className="h-3 w-3" />
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="admin@pawandco.pk"
                className="mt-3 w-full bg-transparent text-sm font-semibold outline-none placeholder:text-[#211F1C]/20"
              />
            </div>

            {/* Password */}
            <div className="mt-8 border-b border-[#211F1C]/15 pb-3">
              <label
                htmlFor="password"
                className="flex items-center gap-2 text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35"
              >
                <LockKeyhole className="h-3 w-3" />
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="mt-3 w-full bg-transparent text-sm font-semibold outline-none placeholder:text-[#211F1C]/20"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mt-6 rounded-2xl bg-red-100 px-4 py-3 text-xs font-semibold text-red-700">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#211F1C] py-2.5 pl-6 pr-2.5 text-[#F7F3EC] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="text-[8px] font-black uppercase tracking-[0.25em]">
                {isLoading ? "Signing In..." : "Sign In"}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </form>

          {/* Back to website */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-[8px] font-black uppercase tracking-[0.22em] text-[#211F1C]/35 transition hover:text-[#211F1C]"
            >
              ← Back to Paw & Co.
            </Link>
          </div>

          {/* Temporary credentials */}
          <div className="mt-10 rounded-2xl border border-[#211F1C]/10 bg-[#E8D8C3]/20 p-4">
            <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35">
              Temporary Login
            </p>

            <div className="mt-3 space-y-1 text-[10px] text-[#211F1C]/55">
              <p>
                <span className="font-bold">Email:</span>{" "}
                admin@pawandco.pk
              </p>

              <p>
                <span className="font-bold">Password:</span>{" "}
                admin123
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#211F1C]/10 pt-5">
        <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/25">
          © 2026 Paw & Co.
        </p>

        <span className="text-sm">🐾</span>
      </div>

    </section>
  </div>
</main>

);
}
