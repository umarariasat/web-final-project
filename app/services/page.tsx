"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Pet Essentials",
    category: "Nutrition & Everyday Care",
    description:
      "The everyday things your companion depends on, thoughtfully selected for comfort, nutrition, and a healthier routine.",
    details: [
      "Nutritious everyday food",
      "Healthy treats & rewards",
      "Feeding essentials",
      "Daily comfort products",
    ],
    image: "/images/cat.png",
    color: "bg-[#E8D8C3]",
  },
  {
    number: "02",
    title: "Grooming & Care",
    category: "Cleanliness & Wellness",
    description:
      "Gentle grooming essentials designed to make everyday care easier while keeping your companion fresh, comfortable, and happy.",
    details: [
      "Gentle shampoos",
      "Brushes & grooming tools",
      "Coat & skin care",
      "Everyday hygiene essentials",
    ],
    image: "/images/carepet.png",
    color: "bg-[#DDE8D5]",
  },
  {
    number: "03",
    title: "Toys & Play",
    category: "Activity & Enrichment",
    description:
      "Play is an important part of a happy pet's life. Discover engaging products that encourage movement, curiosity, and bonding.",
    details: [
      "Interactive toys",
      "Chew toys",
      "Fetch & activity toys",
      "Mental enrichment",
    ],
    image: "/images/image copy.png",
    color: "bg-[#E8D8C3]",
  },
  {
    number: "04",
    title: "Pet Wellness",
    category: "Health & Wellbeing",
    description:
      "Thoughtfully chosen wellness products that support your companion's everyday wellbeing and help you care for them with confidence.",
    details: [
      "Wellness essentials",
      "Health-support products",
      "Comfort products",
      "Everyday wellbeing",
    ],
    image: "/images/birds.png",
    color: "bg-[#DDE8D5]",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F3EC] text-[#211F1C] overflow-hidden">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-5 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-8 border-b border-[#211F1C]/10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#211F1C]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/45">
                  02 / Services
                </span>
              </div>

              <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                EVERYTHING
                <br />
                <span className="text-[#211F1C]/30">THEY NEED.</span>
              </h1>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-sm leading-7 text-[#211F1C]/60 sm:text-[15px]">
                From everyday nutrition to grooming, play, and wellness, Paw &
                Co. brings together carefully selected essentials for every part
                of your companion's life.
              </p>

              <Link
                href="/shop"
                className="group mt-6 inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em]"
              >
                Shop Our Collection
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-5">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl border border-[#211F1C]/10 bg-white/30"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* IMAGE */}
                <div
                  className={`relative min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[430px] ${service.color}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#211F1C]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/65">
                      Service {service.number}
                    </span>
                    <h2 className="mt-1 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/40">
                        {service.category}
                      </span>
                      <span className="text-[9px] font-bold text-[#211F1C]/25">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-3xl">
                      {service.title}
                      <span className="text-[#211F1C]/25">.</span>
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#211F1C]/60">
                      {service.description}
                    </p>

                    {/* DETAILS */}
                    <div className="mt-7 grid grid-cols-1 gap-3 border-t border-[#211F1C]/10 pt-6 sm:grid-cols-2">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DDE8D5] text-[10px]">
                            ✓
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#211F1C]/65">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SHOP CTA */}
                  <div className="mt-9 flex flex-col gap-4 border-t border-[#211F1C]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/35">
                      Find products for this service
                    </p>

                    <Link
                      href="/shop"
                      className="group/btn inline-flex w-fit items-center gap-4 rounded-full bg-[#211F1C] px-5 py-3 text-white transition-all duration-300 hover:bg-[#302D29]"
                    >
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                        Shop {service.title}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHY PAW & CO.
      ===================================================== */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-8 rounded-2xl bg-[#DDE8D5] p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-12"
          >
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40">
                Why Paw & Co.
              </span>

              <h2 className="mt-4 max-w-sm text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-4xl">
                CAREFULLY
                <br />
                CHOSEN.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <span className="text-xl font-black">01</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                  Quality First
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#211F1C]/55">
                  We focus on products that genuinely add value to your
                  companion's everyday life.
                </p>
              </div>

              <div>
                <span className="text-xl font-black">02</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                  Pet First
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#211F1C]/55">
                  Every choice starts with one question: is this good for them?
                </p>
              </div>

              <div>
                <span className="text-xl font-black">03</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                  Everyday Comfort
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#211F1C]/55">
                  Simple products that make routines easier, happier, and more
                  enjoyable.
                </p>
              </div>

              <div>
                <span className="text-xl font-black">04</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                  Made For Bonding
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#211F1C]/55">
                  Because the best part of caring for pets is everything you
                  experience together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL SHOP CTA
      ===================================================== */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start justify-between gap-7 border-y border-[#211F1C]/10 py-9 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/35">
                Ready for their next favorite?
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">
                SHOP THEIR EVERYDAY.
              </h2>
            </div>

            <Link
              href="/shop"
              className="group inline-flex items-center gap-4 rounded-full bg-[#211F1C] px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
                Visit The Shop
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}