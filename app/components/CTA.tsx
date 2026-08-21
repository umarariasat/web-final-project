"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-[#F7F3EC] px-5 py-12 text-[#211F1C] sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-hidden"
    >
      {/* Narrower container max-width */}
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#211F1C] shadow-2xl shadow-[#211F1C]/10 transition-all duration-500"
        >
          {/* TOP RIGHT BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
            className="absolute right-6 top-6 z-30 rounded-full border border-[#F7F3EC]/20 bg-[#F7F3EC]/10 px-4 py-2 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#F7F3EC]/75">
                PAW & CO.
              </span>
              <span className="h-1 w-1 rounded-full bg-[#DDE8D5]" />
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#F7F3EC]/50">
                2026
              </span>
            </div>
          </motion.div>

          {/* BACKGROUND PETS PNG */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/pets.png"
              alt="Surrounding pets frame"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover object-center opacity-90 transition-transform duration-1000 hover:scale-105"
            />

            {/* Light overlay — keeps pets visible */}
            <div className="absolute inset-0 bg-[#211F1C]/35" />

            {/* Slight center fade for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#211F1C]/20 via-[#211F1C]/30 to-[#211F1C]/20" />
          </div>

          {/* =================================================
              CENTERED CONTENT WRAPPER
          ================================================= */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center sm:px-12 sm:py-28 lg:py-32">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#F7F3EC]/50" />
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#F7F3EC]/50">
                05 / For Them
              </span>
              <span className="h-px w-8 bg-[#F7F3EC]/50" />
            </motion.div>

            {/* Heading & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="my-8 max-w-xl"
            >
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#F7F3EC]/50">
                Little things. Big happiness.
              </p>

              <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-black uppercase leading-[0.85] tracking-[-0.07em] text-[#F7F3EC]">
                GOOD <span className="text-[#F7F3EC]/30">THINGS.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-sm text-xs leading-6 text-[#F7F3EC]/70 sm:text-sm sm:leading-7">
                From their favorite treats to everyday essentials, find
                thoughtful picks made for happier moments together.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <Link
                href="/shop"
                className="group inline-flex items-center gap-5 rounded-full bg-[#DDE8D5] py-3 pl-7 pr-3 text-[#211F1C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAF1E5] hover:shadow-lg hover:shadow-black/20"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.25em]">
                  Shop For Them
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211F1C] text-[#F7F3EC] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105">
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}