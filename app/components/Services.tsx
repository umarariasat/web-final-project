"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Pet Essentials",
    subtitle: "Nutrition & Daily Rituals",
    description:
      "Food, treats, and everyday essentials carefully selected to support happier and healthier routines.",
    highlight: "Curated Daily",
    accent: "beige",
  },
  {
    number: "02",
    title: "Grooming & Care",
    subtitle: "Wellness & Spa",
    description:
      "Gentle grooming and care products to keep your companion clean, comfortable, and feeling their best.",
    highlight: "Organic & Gentle",
    accent: "green",
  },
  {
    number: "03",
    title: "Toys & Play",
    subtitle: "Activity & Joy",
    description:
      "Fun and engaging choices that encourage movement, curiosity, and meaningful moments together.",
    highlight: "Designed for Bond",
    accent: "beige",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F3EC] py-10 text-[#211F1C] sm:py-14 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        
        {/* =================================================
            HEADER
        ================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col justify-between gap-4 border-b border-[#211F1C]/10 pb-6 sm:mb-12 sm:pb-10 lg:flex-row lg:items-end"
        >
          <div className="w-full lg:w-3/5">
            <h2 className="text-3xl font-black uppercase leading-[1.05] tracking-[-0.07em] sm:text-5xl lg:text-6xl">
              THEIR LIFE.
              <span className="block mt-1 sm:inline sm:mt-0 sm:ml-2 text-[#211F1C]/30">
                OUR CARE.
              </span>
            </h2>
          </div>

          <div className="w-full lg:w-2/5 lg:pb-1">
            <p className="text-xs font-medium leading-relaxed text-[#211F1C]/65 sm:text-sm sm:leading-6">
              Thoughtfully chosen services for every part of
              their everyday life — from wellness and grooming
              to play, comfort, and care.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            SERVICES GRID (With Staggered Animations)
        ================================================= */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isGreen = service.accent === "green";

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <Link
                  href="/services"
                  className={`group relative flex min-h-[240px] sm:min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border p-4 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                    isGreen
                      ? "border-[#DDE8D5] bg-[#DDE8D5]"
                      : "border-[#211F1C]/10 bg-[#E8D8C3]/30"
                  }`}
                >
                  {/* Subtle decorative circle */}
                  <div
                    className={`absolute -right-10 -top-10 h-28 w-28 sm:h-32 sm:w-32 rounded-full transition-transform duration-700 group-hover:scale-125 ${
                      isGreen
                        ? "bg-white/20"
                        : "bg-[#DDE8D5]/40"
                    }`}
                  />

                  {/* ================= TOP ROW ================= */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-black tracking-[0.25em] ${
                        isGreen
                          ? "text-[#211F1C]/45"
                          : "text-[#211F1C]/35"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`rounded-full border px-2.5 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] ${
                        isGreen
                          ? "border-[#211F1C]/10 bg-white/40 text-[#211F1C]/60"
                          : "border-[#211F1C]/10 bg-[#F7F3EC]/60 text-[#211F1C]/55"
                      }`}
                    >
                      {service.highlight}
                    </span>
                  </div>

                  {/* ================= MIDDLE CONTENT ================= */}
                  <div className="relative z-10 my-3 sm:my-7">
                    <span className="mb-1 block text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/45">
                      {service.subtitle}
                    </span>

                    <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-1.5 sm:mt-2 text-xs leading-relaxed text-[#211F1C]/60 sm:text-sm sm:leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* ================= BOTTOM ================= */}
                  <div className="relative z-10 flex items-center justify-between border-t border-[#211F1C]/10 pt-3 sm:pt-4">
                    <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/45 transition-colors group-hover:text-[#211F1C]">
                      Explore Details
                    </span>

                    <span
                      className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-xs transition-all duration-300 group-hover:scale-110 ${
                        isGreen
                          ? "bg-[#211F1C] text-white"
                          : "bg-[#DDE8D5] text-[#211F1C]"
                      }`}
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM CTA BAR
        ================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-6 sm:mt-8 flex flex-col items-start justify-between gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border border-[#211F1C]/10 bg-[#E8D8C3]/30 p-5 sm:p-6 transition-all duration-300 hover:border-[#211F1C]/20 sm:flex-row sm:items-center sm:px-8"
        >
          <div>
            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40">
              Complete Offering
            </p>
            <h4 className="mt-0.5 sm:mt-1 text-sm sm:text-lg font-black uppercase tracking-tight">
              Ready to elevate their everyday routines?
            </h4>
          </div>

          <Link
            href="/services"
            className="group inline-flex w-full items-center justify-center gap-3 sm:gap-4 rounded-full bg-[#211F1C] px-5 py-3 sm:px-6 sm:py-3.5 text-white transition-all duration-300 hover:scale-[1.02] sm:w-auto"
          >
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em]">
              Explore All Services
            </span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}