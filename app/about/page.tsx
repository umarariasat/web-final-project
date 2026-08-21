"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C] overflow-hidden">
      <Navbar />

      {/* =================================================
          TOP VIDEO — EDITORIAL HERO
      ================================================= */}
      <section className="pt-24 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          {/* TOP LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between border-t border-[#211F1C]/10 pt-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#211F1C]" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/40">
                01 / About Paw & Co.
              </span>
            </div>

            <span className="hidden text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/25 sm:block">
              Life With Them / 2026
            </span>
          </motion.div>

          {/* =================================================
              HERO INTRO
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5 border-b border-[#211F1C]/10 py-7 sm:py-9 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDE8D5] text-xs">
                  🐾
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                  Inside Paw & Co.
                </span>
              </div>

              <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                HAPPY
                <span className="ml-3 text-[#211F1C]/25">MOMENTS.</span>
              </h1>
            </div>

            <div className="flex max-w-sm items-end justify-between gap-6 lg:pb-1">
              <p className="text-xs font-medium leading-6 text-[#211F1C]/50 sm:text-sm">
                A little look at the joy, play, and companionship that make
                every day with them worth celebrating.
              </p>

              <span className="hidden text-xl sm:block">🐾</span>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            FULL WIDTH VIDEO
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative h-[55vw] min-h-[380px] max-h-[720px] w-full overflow-hidden bg-[#F7F3EC] my-4"
        >
          <iframe
            src="https://www.youtube.com/embed/sFrfcJIqTLQ?autoplay=1&mute=1&loop=1&playlist=sFrfcJIqTLQ&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3"
            title="Paw & Co. — Life With Them"
            className="
              absolute
              left-1/2
              top-1/2
              h-[100vw]
              w-[177.78vw]
              max-h-none
              max-w-none
              -translate-x-1/2
              -translate-y-1/2
            "
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </motion.div>

        {/* =================================================
            VIDEO FOOTER
        ================================================= */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-10">
          <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/30">
            More Walks · More Play · More Memories
          </span>
          <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/30">
            01 — 2026
          </span>
        </div>
      </section>

      {/* =================================================
          LITTLE THINGS SECTION
      ================================================= */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* TOP LINE */}
          <div className="flex items-center justify-between border-t border-[#211F1C]/10 pt-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#211F1C]" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/40">
                02 / Our Story
              </span>
            </div>
            <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/25">
              Everyday Joy
            </span>
          </div>

          {/* CONTENT */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#DDE8D5] text-xl">
                🐾
              </span>

              <h2 className="mt-6 text-4xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-5xl">
                IT'S THE
                <br />
                <span className="text-[#211F1C]/25">LITTLE THINGS.</span>
              </h2>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-lg font-semibold leading-7 tracking-[-0.02em] sm:text-xl sm:leading-8">
                The excited tail at the door. The favourite toy. The morning
                walk. The quiet cuddle after a long day.
              </p>

              <p className="mt-5 max-w-xl text-xs leading-6 text-[#211F1C]/50 sm:text-sm">
                Paw & Co. was created around these everyday moments. We believe
                the best pet lifestyle isn't about having more — it's about
                choosing things that make life together a little happier,
                healthier, and easier.
              </p>

              {/* =================================================
                  LITTLE MOMENTS CARDS
              ================================================= */}
              <div className="mt-8 grid gap-2 sm:grid-cols-3">
                {/* PLAY */}
                <div className="group rounded-2xl border border-[#211F1C]/10 bg-[#F7F3EC]/70 p-4 transition-colors hover:bg-[#DDE8D5]/60">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-sm">
                      🐾
                    </span>
                    <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/30">
                      Every Day
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-tight">
                    Play
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#211F1C]/45">
                    More energy. More fun.
                  </p>
                </div>

                {/* CARE */}
                <div className="group rounded-2xl border border-[#211F1C]/10 bg-[#F7F3EC]/70 p-4 transition-colors hover:bg-[#DDE8D5]/60">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-sm">
                      🐾
                    </span>
                    <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/30">
                      Always
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-tight">
                    Care
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#211F1C]/45">
                    Little things matter.
                  </p>
                </div>

                {/* TOGETHER */}
                <div className="group rounded-2xl border border-[#211F1C]/10 bg-[#F7F3EC]/70 p-4 transition-colors hover:bg-[#DDE8D5]/60">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-sm">
                      🐾
                    </span>
                    <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/30">
                      Together
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-tight">
                    Together
                  </p>
                  <p className="mt-1 text-[9px] leading-4 text-[#211F1C]/45">
                    That's the good part.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =================================================
          WHAT WE BELIEVE
      ================================================= */}
      <section className="border-y border-[#211F1C]/10 bg-[#E8D8C3]/25">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            {/* LEFT SIDE */}
            <div className="border-b border-[#211F1C]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                  Our Approach
                </span>
                <span className="text-lg opacity-60">🐾</span>
              </div>

              <h2 className="mt-16 text-4xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-5xl">
                BETTER
                <br />
                <span className="text-[#211F1C]/30">FOR THEM.</span>
              </h2>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid sm:grid-cols-2">
              {/* THOUGHTFUL */}
              <div className="border-b border-[#211F1C]/10 p-6 sm:border-r sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#211F1C]/30">
                    Chosen With Care
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-black uppercase tracking-[-0.04em]">
                  Thoughtful
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#211F1C]/50">
                  We choose things with purpose — useful, enjoyable, and made to
                  fit real pet life.
                </p>
              </div>

              {/* PET FIRST */}
              <div className="border-b border-[#211F1C]/10 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#211F1C]/30">
                    Always First
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-black uppercase tracking-[-0.04em]">
                  Pet First
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#211F1C]/50">
                  Every choice starts with their comfort, happiness, and
                  everyday wellbeing.
                </p>
              </div>

              {/* SIMPLE */}
              <div className="border-b border-[#211F1C]/10 p-6 sm:border-b-0 sm:border-r sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#211F1C]/30">
                    Keep It Easy
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-black uppercase tracking-[-0.04em]">
                  Simple
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#211F1C]/50">
                  Finding something good shouldn't feel complicated. We keep it
                  easy.
                </p>
              </div>

              {/* JOYFUL */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-black uppercase tracking-[0.2em] text-[#211F1C]/30">
                    Made For Joy
                  </span>
                </div>
                <h3 className="mt-10 text-xl font-black uppercase tracking-[-0.04em]">
                  Joyful
                </h3>
                <p className="mt-3 text-xs leading-6 text-[#211F1C]/50">
                  Because the best products are the ones that create more happy
                  moments together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          A DAY WITH THEM — EDITORIAL STORY
      ================================================= */}
      <section className="overflow-hidden border-y border-[#211F1C]/10 bg-[#E8D8C3]/20">
        <div className="mx-auto max-w-7xl">
          {/* ================= MORNING ================= */}
          <div className="grid min-h-[480px] border-t border-[#211F1C]/10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between border-b border-[#211F1C]/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/30">
                  Start Here
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/25">
                  Morning
                </span>
              </div>

              <div className="py-12 lg:py-0">
                <span className="text-[5rem] font-black leading-none tracking-[-0.1em] text-[#211F1C]/[0.06] sm:text-[7rem]">
                  AM
                </span>
                <h3 className="-mt-8 text-4xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-5xl">
                  WALK.
                  <br />
                  EAT.
                  <br />
                  <span className="text-[#211F1C]/30">SMILE.</span>
                </h3>
                <p className="mt-6 max-w-xs text-xs leading-6 text-[#211F1C]/50">
                  Fresh air, sleepy eyes, breakfast waiting, and a tail already
                  ready for the day.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#211F1C]" />
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/30">
                  Every morning starts somewhere
                </span>
              </div>
            </div>

            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[#DDE8D5]">
              <span className="absolute right-8 top-8 text-[8rem] font-black leading-none tracking-[-0.1em] text-[#211F1C]/[0.05]">
                01
              </span>
              <Image
                src="/images/walk.png"
                alt="Pet enjoying the morning"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-10 transition-transform duration-700 hover:scale-105 sm:p-16"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F3EC] text-sm shadow-sm">
                  🐾
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/50">
                  Walks + Breakfast
                </span>
              </div>
            </div>
          </div>

          {/* ================= AFTERNOON ================= */}
          <div className="grid min-h-[480px] border-t border-[#211F1C]/10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative order-2 flex min-h-[400px] items-center justify-center overflow-hidden bg-[#F7F3EC] lg:order-1">
              <div className="absolute inset-8 rounded-[2rem] border border-[#211F1C]/10" />
              <span className="absolute left-8 top-8 text-[8rem] font-black leading-none tracking-[-0.1em] text-[#211F1C]/[0.05]">
                02
              </span>
              <Image
                src="/images/playing.png"
                alt="Pet enjoying playtime"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-12 transition-transform duration-700 hover:scale-105 sm:p-20"
              />
              <div className="absolute bottom-6 right-6 flex items-center gap-3 sm:bottom-8 sm:right-8">
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/40">
                  Play + Treats
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8D5] text-sm">
                  🐾
                </span>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-between border-b border-[#211F1C]/10 p-6 sm:p-10 lg:order-2 lg:border-b-0 lg:border-l">
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/30">
                  Keep Going
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/25">
                  Afternoon
                </span>
              </div>

              <div className="py-12 lg:py-0">
                <span className="text-[5rem] font-black leading-none tracking-[-0.1em] text-[#211F1C]/[0.06] sm:text-[7rem]">
                  PM
                </span>
                <h3 className="-mt-8 text-4xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-5xl">
                  PLAY.
                  <br />
                  EXPLORE.
                  <br />
                  <span className="text-[#211F1C]/30">REPEAT.</span>
                </h3>
                <p className="mt-6 max-w-xs text-xs leading-6 text-[#211F1C]/50">
                  Favourite toys come out, curiosity takes over, and somehow
                  there is always room for one more treat.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#211F1C]" />
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/30">
                  The fun part of the day
                </span>
              </div>
            </div>
          </div>

          {/* ================= EVENING ================= */}
          <div className="grid min-h-[480px] border-t border-[#211F1C]/10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between border-b border-[#211F1C]/10 bg-[#211F1C] p-6 text-[#F7F3EC] sm:p-10 lg:border-b-0 lg:border-r lg:border-[#F7F3EC]/10">
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#F7F3EC]/35">
                  Slow Down
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#F7F3EC]/25">
                  Evening
                </span>
              </div>

              <div className="py-12 lg:py-0">
                <span className="text-[5rem] font-black leading-none tracking-[-0.1em] text-[#F7F3EC]/[0.06] sm:text-[7rem]">
                  PM
                </span>
                <h3 className="-mt-8 text-4xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-5xl">
                  REST.
                  <br />
                  CUDDLE.
                  <br />
                  <span className="text-[#F7F3EC]/30">TOGETHER.</span>
                </h3>
                <p className="mt-6 max-w-xs text-xs leading-6 text-[#F7F3EC]/45">
                  The house gets quiet. The day winds down. And somehow their
                  favourite place is still right beside you.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DDE8D5]" />
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#F7F3EC]/30">
                  That's the good part
                </span>
              </div>
            </div>

            <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-[#E8D8C3]">
              <span className="absolute right-8 top-8 text-[8rem] font-black leading-none tracking-[-0.1em] text-[#211F1C]/[0.05]">
                03
              </span>
              <Image
                src="/images/sleeping.png"
                alt="Pet relaxing in the evening"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-10 transition-transform duration-700 hover:scale-105 sm:p-16"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F3EC] text-sm">
                  🐾
                </span>
                <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/50">
                  Cuddles + Rest
                </span>
              </div>
            </div>
          </div>

          {/* ================= CLOSING LINE ================= */}
          <div className="flex flex-col gap-4 border-t border-[#211F1C]/10 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
            <p className="text-lg font-black uppercase tracking-[-0.04em] sm:text-xl">
              The best days are shared.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm">🐾</span>
              <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/30">
                Morning · Afternoon · Evening
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CTA
      ================================================= */}
      <section className="px-5 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start justify-between gap-5 border-t border-[#211F1C]/10 py-7 sm:flex-row sm:items-center"
          >
            <div>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                Ready for them?
              </span>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.05em] sm:text-3xl">
                LET&apos;S FIND SOMETHING GOOD.
              </h2>
            </div>

            <Link
              href="/shop"
              className="group inline-flex items-center gap-4 rounded-full bg-[#211F1C] py-2.5 pl-6 pr-2.5 text-[#F7F3EC]"
            >
              <span className="text-[8px] font-black uppercase tracking-[0.25em]">
                Explore Shop
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}