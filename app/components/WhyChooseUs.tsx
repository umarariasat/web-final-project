"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Quality First",
    text: "We carefully select products for safety, comfort, and everyday wellbeing.",
  },
  {
    number: "02",
    title: "Pet Approved",
    text: "Everything is chosen with real pets and their people in mind.",
  },
  {
    number: "03",
    title: "Made With Care",
    text: "Every detail is handled with genuine care and intention.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#F7F3EC] px-5 py-12 text-[#211F1C] sm:px-6 sm:py-16 lg:px-10 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 border-b border-[#211F1C]/10 pb-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            {/* Heading */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-7 bg-[#211F1C]" />
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/45 sm:text-[9px]">
                  04 / Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl font-black uppercase tracking-[-0.055em] sm:text-4xl md:text-5xl">
                WHY
                <span className="ml-2 text-[#211F1C]/30">PAW & CO.</span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-sm text-[11px] leading-5 text-[#211F1C]/55 sm:text-xs sm:leading-6">
              Thoughtful choices for happier pets, easier routines, and everyday
              moments that matter.
            </p>
          </div>
        </motion.div>

        {/* ================= MAIN ================= */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40">
              Our Difference
            </span>

            <h3 className="mt-2 max-w-lg text-xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-2xl">
              Because they deserve more than just the basics.
            </h3>

            <p className="mt-3 max-w-md text-[11px] leading-5 text-[#211F1C]/50 sm:text-xs sm:leading-6">
              We're here to help you make better choices for the animals that
              make your life happier.
            </p>

            {/* Reasons */}
            <div className="mt-6 border-t border-[#211F1C]/10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  className="grid grid-cols-[30px_1fr] gap-3 border-b border-[#211F1C]/10 py-4"
                >
                  <span className="pt-0.5 text-[8px] font-bold tracking-[0.2em] text-[#211F1C]/30">
                    {reason.number}
                  </span>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-tight sm:text-sm">
                      {reason.title}
                    </h4>
                    <p className="mt-1 max-w-sm text-[10px] leading-4 text-[#211F1C]/50 sm:text-[11px] sm:leading-5">
                      {reason.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[350px] lg:h-[400px]">
              <Image
                src="/images/promise.png"
                alt="Happy pet"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
              className="absolute -bottom-3 right-4 flex items-center gap-2 rounded-full bg-[#DDE8D5] px-4 py-2 shadow-sm"
            >
              <span className="text-sm">🐾</span>
              <span className="text-[7px] font-bold uppercase tracking-[0.2em]">
                Love included
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}