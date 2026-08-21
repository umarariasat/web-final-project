"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F7F3EC] px-4 py-10 text-[#211F1C] sm:px-6 sm:py-12 lg:px-10 lg:py-14 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= TOP BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-between border-t border-[#211F1C]/10 pt-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-6 sm:w-7 bg-[#211F1C]" />
            <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/45">
              06 / Say Hello
            </span>
          </div>

          <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/25">
            PAW & CO. — 2026
          </span>
        </motion.div>

        {/* ================= HERO CONTACT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mt-6 sm:mt-7 overflow-hidden border-b border-[#211F1C]/10 pb-8 sm:pb-12"
        >
          {/* BACKGROUND PNG WATERMARK */}
          <div className="absolute inset-y-0 right-0 my-auto h-full w-full sm:w-1/2 pointer-events-none flex items-center justify-end z-0">
            <div className="relative h-full w-full max-w-[300px] opacity-15 sm:opacity-20">
              <Image
                src="/images/heart.png"
                alt=""
                fill
                sizes="(max-width: 768px) 80vw, 350px"
                className="object-contain object-right"
              />
            </div>
          </div>

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10 max-w-xl">
            <p className="mb-2 sm:mb-3 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
              We're All Ears
            </p>

            <h2 className="text-[clamp(3.5rem,11vw,7.5rem)] font-black uppercase leading-[0.78] sm:leading-[0.72] tracking-[-0.085em]">
              HELLO,
              <br />
              <span className="text-[#211F1C]/20">HUMAN.</span>
            </h2>

            <p className="mt-4 sm:mt-5 max-w-xs text-[11px] sm:text-xs leading-relaxed text-[#211F1C]/50 sm:leading-6">
              Have a question about your pet, an order, or something special?
              We're all ears.
            </p>
          </div>
        </motion.div>

        {/* ================= CONTACT ROW ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid border-b border-[#211F1C]/10 sm:grid-cols-2"
        >
          {/* EMAIL */}
          <a
            href="mailto:umarariasat04@gmail.com"
            className="group flex items-center justify-between border-b border-[#211F1C]/10 py-4 sm:py-5 sm:border-b-0 sm:border-r sm:pr-8"
          >
            <div>
              <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/30">
                Write To Us
              </p>
              <p className="mt-1 text-xs sm:text-sm font-bold break-all">
                pawandco.@gmail.com
              </p>
            </div>

            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-[#211F1C]/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.6}
            />
          </a>

          {/* PHONE */}
          <a
            href="tel:+9230664713361"
            className="group flex items-center justify-between py-4 sm:py-5 sm:pl-8"
          >
            <div>
              <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/30">
                Give Us A Call
              </p>
              <p className="mt-1 text-xs sm:text-sm font-bold">0306 6473361</p>
            </div>

            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-[#211F1C]/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.6}
            />
          </a>
        </motion.div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm">🐾</span>
            <span className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/30">
              Made With Care
            </span>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-3 rounded-full bg-[#211F1C] py-2.5 pl-5 pr-2.5 sm:pr-2 text-[#F7F3EC]"
          >
            <span className="text-[8px] font-black uppercase tracking-[0.25em]">
              Contact Us
            </span>

            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C]">
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.7}
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}