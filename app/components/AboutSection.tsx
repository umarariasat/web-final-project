"use client";

import WhyChooseUs from "./WhyChooseUs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F3EC] py-14 text-[#211F1C] sm:py-20 lg:py-36"
    >

      {/* =====================================================
          SUBTLE BACKGROUND WATERMARK
      ===================================================== */}

      <div className="pointer-events-none absolute -left-4 top-8 select-none sm:left-6 sm:top-12">
        <p className="whitespace-nowrap text-[4rem] font-black uppercase leading-none tracking-[-0.08em] text-[#211F1C]/[0.03] sm:text-[7rem] md:text-[10rem] lg:text-[14rem]">
     paw & co.
        </p>
      </div>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">


        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-6 border-b border-[#211F1C]/10 pb-7 sm:mb-14 sm:gap-8 sm:pb-8 md:flex-row md:items-end md:justify-between"
        >

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#211F1C] sm:w-8" />
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/45 sm:text-[10px] sm:tracking-[0.35em]">
                01 / About Us
              </span>
            </div>

            <h2 className="text-[clamp(3rem,12vw,5.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              MORE THAN
              <br />
              <span className="text-[#211F1C]/30">
                A PET SHOP.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-[13px] leading-6 text-[#211F1C]/60 sm:text-[14px]">
            Thoughtfully curated essentials designed around
            the everyday moments that make life with your
            companion extraordinary.
          </p>

        </motion.div>


        {/* ===================================================
            MAIN EDITORIAL GRID
        =================================================== */}

        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-8">


          {/* =================================================
              PET IMAGE
          ================================================= */}

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-sm sm:h-[380px] md:h-[500px] lg:col-span-5 lg:h-[540px]"
          >
            <Image
              src="/images/dog.png"
              alt="Happy pet"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 40vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/80 via-transparent to-transparent" />

            {/* Core Rule */}
            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6 sm:right-6">
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
                Our Core Rule
              </span>
              <p className="mt-2 max-w-sm text-base font-bold leading-6 tracking-tight sm:text-lg">
                "Would we choose this for our own beloved pet?"
              </p>
            </div>
          </motion.div>


          {/* =================================================
              STORY CONTENT
          ================================================= */}

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-5 lg:col-span-7 lg:space-y-8 lg:pl-8 xl:pl-10"
          >

            {/* Intro */}
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40 sm:text-[10px]">
                Built for real life
              </span>

              <h3 className="max-w-2xl text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
                Every detail is chosen with genuine intention.
              </h3>

              <p className="max-w-2xl text-[13px] leading-6 text-[#211F1C]/65 sm:text-[15px] sm:leading-7">
                Pets aren't just animals; they are family.
                From the first morning stretch to the final
                cuddle of the day, we source food, toys,
                and grooming gear that seamlessly elevate
                their daily routine.
              </p>
            </div>


            {/* =================================================
                FEATURE MINI CARDS
            ================================================= */}

            <div className="grid grid-cols-3 gap-2 pt-1 sm:gap-4">

              {/* 01 */}
              <div className="rounded-xl border border-[#211F1C]/5 bg-[#E8D8C3]/30 p-3 sm:p-5">
                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/40 sm:text-[10px] sm:tracking-[0.25em]">
                  01 / Nutrition
                </span>
                <h4 className="mt-1.5 text-[10px] font-bold uppercase leading-tight tracking-tight sm:mt-2 sm:text-base">
                  Pure & Healthy
                </h4>
                <p className="mt-1.5 text-[8px] leading-4 text-[#211F1C]/60 sm:mt-2 sm:text-xs sm:leading-5">
                  Clean ingredients tailored for vitality and wellbeing.
                </p>
              </div>

              {/* 02 */}
              <div className="rounded-xl border border-[#211F1C]/5 bg-[#DDE8D5]/50 p-3 sm:p-5">
                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/40 sm:text-[10px] sm:tracking-[0.25em]">
                  02 / Lifestyle
                </span>
                <h4 className="mt-1.5 text-[10px] font-bold uppercase leading-tight tracking-tight sm:mt-2 sm:text-base">
                  Play & Comfort
                </h4>
                <p className="mt-1.5 text-[8px] leading-4 text-[#211F1C]/60 sm:mt-2 sm:text-xs sm:leading-5">
                  Durable favorites built for endless tail-wagging fun.
                </p>
              </div>

              {/* 03 */}
              <div className="rounded-xl border border-[#211F1C]/5 bg-[#F0E6D8]/60 p-3 sm:p-5">
                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/40 sm:text-[10px] sm:tracking-[0.25em]">
                  03 / Care
                </span>
                <h4 className="mt-1.5 text-[10px] font-bold uppercase leading-tight tracking-tight sm:mt-2 sm:text-base">
                  Everyday Care
                </h4>
                <p className="mt-1.5 text-[8px] leading-4 text-[#211F1C]/60 sm:mt-2 sm:text-xs sm:leading-5">
                  Simple essentials to keep your pets happy, clean, and comfortable.
                </p>
              </div>

            </div>

            {/* =================================================
                SERVICES CTA
            ================================================= */}

            <div className="pt-2">
              <Link
                href="/services"
                aria-label="Explore our services"
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl border border-[#211F1C]/10 bg-[#DDE8D5] px-6 py-5 transition-all duration-500 hover:bg-[#E8D8C3] sm:px-8 sm:py-6"
              >
                <span className="pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 text-[5rem] font-black uppercase leading-none tracking-[-0.08em] text-[#211F1C]/[0.05] transition-transform duration-700 group-hover:translate-x-3 sm:text-[7rem]">
                  CARE
                </span>

                <div className="relative z-10">
                  <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40">
                    For every companion
                  </p>
                  <h4 className="text-lg font-black uppercase tracking-[-0.03em] sm:text-xl">
                    Explore Our Services
                  </h4>
                </div>

                <span className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center text-6xl leading-none transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                  🐾
                </span>
              </Link>
            </div>

          </motion.div>

        </div>


        <WhyChooseUs />


        {/* ===================================================
            COMPANION PILLARS
        =================================================== */}

        <div className="mt-14 sm:mt-20 lg:mt-24">

          <div className="mb-5 flex flex-col gap-2 border-t border-[#211F1C]/10 pt-5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40 sm:text-[9px]">
              The Companion Pillars
            </p>
            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/30 sm:text-[9px]">
              PLAY / CARE / LOVE
            </p>
          </div>


          {/* =================================================
              IMAGE CARDS
          ================================================= */}

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3"
          >

            {/* PLAY */}
            <div className="group relative h-[190px] overflow-hidden rounded-xl bg-[#E8D8C3] sm:h-[340px]">
              <Image
                src="/images/play.png"
                alt="Play"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
                  01
                </span>
                <h4 className="mt-1 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  Playtime
                </h4>
              </div>
            </div>

            {/* CARE */}
            <div className="group relative h-[190px] overflow-hidden rounded-xl bg-[#DDE8D5] sm:h-[340px]">
              <Image
                src="/images/carepet.png"
                alt="Care"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
                  02
                </span>
                <h4 className="mt-1 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  Daily Care
                </h4>
              </div>
            </div>

            {/* LOVE */}
            <div className="group relative h-[190px] overflow-hidden rounded-xl bg-[#E8D8C3] sm:h-[340px]">
              <Image
                src="/images/love.png"
                alt="Love"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/60 sm:text-[9px]">
                  03
                </span>
                <h4 className="mt-1 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                  True Bond
                </h4>
              </div>
            </div>

          </motion.div>


          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}

          <div className="mt-5 flex flex-col gap-4 border-b border-[#211F1C]/10 pb-7 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[11px] leading-5 text-[#211F1C]/45 sm:text-sm sm:leading-6">
              From the first morning walk to the last cuddle
              of the day — we're here for all of it.
            </p>

            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] sm:text-[10px]"
            >
              Shop their everyday
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}