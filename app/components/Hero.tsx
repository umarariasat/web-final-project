"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F7F3EC] text-[#211F1C]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[#F7F3EC]" />

      {/* Soft organic shapes with fade-in */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#E8D8C3]/40 blur-3xl" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-32 right-[-100px] h-[500px] w-[500px] rounded-full bg-[#DDE8D5]/60 blur-3xl" 
      />

      {/* Tiny decorative circles */}
      <div className="absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#211F1C]/20" />
      <div className="absolute left-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#211F1C]/15" />

      {/* Oversized background typography */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute right-[-5%] sm:right-[-1%] top-[12%] sm:top-[18%] z-0 select-none"
      >
        <div className="text-right text-[clamp(5rem,15vw,15rem)] font-bold leading-[0.78] tracking-[-0.08em] text-[#211F1C]/[0.10]">
          PET
          <br />
          LOVE
          <br />
          CARE
        </div>
      </motion.div>

      {/* ================= PET IMAGE ================= */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.4, x: 0 }} // Fades to your default opacity rules or 1 on desktop
        // Note: keeping the responsive opacity logic via Tailwind classes, wrapping motion around it
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute right-[-80px] sm:right-[-40px] top-[58%] sm:top-1/2 z-0 h-[380px] w-[380px] sm:h-[620px] sm:w-[620px] -translate-y-1/2 lg:right-[-30px] lg:h-[720px] lg:w-[720px] opacity-40 sm:opacity-100 pointer-events-none sm:pointer-events-auto"
      >
        <Image
          src="/images/pawss.png"
          alt="Happy pet"
          fill
          priority
          className="object-contain object-center"
        />

        {/* Image fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EC] via-[#F7F3EC]/40 sm:via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F3EC] to-transparent" />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 sm:py-28 lg:px-10">
        <div className="max-w-3xl w-full">
          
          {/* ================= LABEL ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 sm:mb-7 flex items-center gap-4"
          >
            <span className="h-px w-8 sm:w-12 bg-[#211F1C]" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.35em] text-[#211F1C]/55">
              Paw & Co. / Pet Lifestyle
            </span>
          </motion.div>

          {/* ================= HEADING ================= */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(3.6rem,12vw,9.5rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]"
          >
            LOVE
            <br />
            <span className="text-[#211F1C]/30">THEM</span>
            <br />
            MORE.
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 sm:mt-9 max-w-sm sm:max-w-md text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-[#211F1C]/70 sm:text-[#211F1C]/60 bg-[#F7F3EC]/80 sm:bg-transparent p-2 sm:p-0 rounded-lg"
          >
            Thoughtfully chosen food, toys, grooming essentials,
            and everyday favorites for the pets who make life better.
          </motion.p>

          {/* ================= BUTTONS ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#shop"
              className="group inline-flex items-center justify-center gap-4 bg-[#211F1C] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#302D29]"
            >
              Shop For Them
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-[#211F1C]/20 bg-[#F7F3EC]/80 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#211F1C]/50"
            >
              Explore
              <span>↗</span>
            </a>
          </motion.div>

          {/* ================= BRAND STATEMENT ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 sm:mt-14 flex items-center gap-5"
          >
            <div className="h-px w-10 bg-[#211F1C]/20" />
            <p className="max-w-sm text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#211F1C]/40">
              Made for little paws,
              <br />
              chosen with lots of love.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}