"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const faqs = [
    {
      question: "What are your standard delivery timelines?",
      answer: "We typically process and dispatch all orders within 1 business day. Standard delivery across Pakistan usually takes 2 to 4 business days depending on your location.",
    },
    {
      question: "Can I schedule bespoke pet care or grooming services?",
      answer: "Yes! You can choose 'Pet Services' in the contact form subject dropdown above or reach out directly via phone or email to book personalized sessions.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we primarily ship nationwide across Pakistan. However, for special product inquiries, feel free to drop us a message and we'll see how we can help!",
    },
    {
      question: "How can I track my active order status?",
      answer: "Once your order has been dispatched from our Gujrat hub, you will receive a confirmation message along with tracking details via email or SMS.",
    },
  ];

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (
      !data.name ||
      !data.email ||
      !data.subject ||
      !data.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });

      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setStatus({
        type: "success",
        message:
          "Message sent successfully. We'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C] overflow-hidden">
      <Navbar />

      {/* =================================================
          HERO SECTION
      ================================================= */}
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
                  01 / Get In Touch
                </span>
              </div>

              <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                LET&apos;S
                <br />
                <span className="text-[#211F1C]/30">TALK.</span>
              </h1>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-sm leading-7 text-[#211F1C]/60 sm:text-[15px]">
                Have a question about our products, services,
                or your pet&apos;s next favourite thing? Drop us a
                message.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================
          CONTACT CARD AREA (Mixed Light & Dark Blocks)
      ================================================= */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid overflow-hidden rounded-3xl border border-[#211F1C]/10 bg-white/30 shadow-xl lg:grid-cols-[0.9fr_1.1fr]"
          >
            
            {/* LEFT: DETAILS (Dark Interior Block matching About section style) */}
            <div className="flex flex-col justify-between bg-[#211F1C] p-6 text-[#F7F3EC] sm:p-8 lg:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DDE8D5]">
                    Contact Details
                  </span>
                  <span className="text-lg">🐾</span>
                </div>

                <div className="mt-12">
                  <h2 className="text-3xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-4xl text-white">
                    COME
                    <br />
                    SAY
                    <br />
                    <span className="text-white/45">HELLO.</span>
                  </h2>

                  <p className="mt-5 max-w-xs text-xs leading-6 text-white/60">
                    Whether you&apos;re looking for something special
                    or simply want to say hi, we&apos;re here.
                  </p>
                </div>

                <div className="mt-10 space-y-5">
                  {/* EMAIL */}
                  <a
                    href="mailto:umarariasat04@gmail.com"
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] shadow-sm">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#DDE8D5]">
                        Email
                      </span>
                      <span className="mt-0.5 block text-xs font-bold text-white group-hover:underline">
                        umarariasat04@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* PHONE */}
                  <a
                    href="tel:+9230664713361"
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] shadow-sm">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#DDE8D5]">
                        Phone
                      </span>
                      <span className="mt-0.5 block text-xs font-bold text-white group-hover:underline">
                        0306 6473361
                      </span>
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] shadow-sm">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#DDE8D5]">
                        Location
                      </span>
                      <span className="mt-0.5 block text-xs font-bold text-white">
                        Gujrat, Pakistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="mt-12 border-t border-white/10 pt-5">
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#DDE8D5]">
                  Follow Along
                </span>

                <div className="mt-3 flex gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#DDE8D5] text-[9px] font-bold text-[#211F1C]">
                    IG
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#DDE8D5] text-[9px] font-bold text-[#211F1C]">
                    FB
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#DDE8D5] text-[9px] font-bold text-[#211F1C]">
                    TT
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM (Warm Sand Background Tone matching your Services cards) */}
            <div className="flex flex-col justify-between bg-[#E8D8C3]/60 p-6 sm:p-8 lg:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/45">
                      Send A Message
                    </span>
                    <p className="mt-2 text-xs font-medium text-[#211F1C]/60">
                      Tell us what&apos;s on your mind.
                    </p>
                  </div>

                  <span className="hidden text-2xl sm:block">🐾</span>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    
                    {/* NAME */}
                    <div className="border-b border-[#211F1C]/15 pb-3">
                      <label
                        htmlFor="name"
                        className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/50"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="mt-2 w-full bg-transparent text-sm font-bold text-[#211F1C] outline-none placeholder:text-[#211F1C]/25"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="border-b border-[#211F1C]/15 pb-3">
                      <label
                        htmlFor="email"
                        className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/50"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="hello@example.com"
                        className="mt-2 w-full bg-transparent text-sm font-bold text-[#211F1C] outline-none placeholder:text-[#211F1C]/25"
                      />
                    </div>

                    {/* SUBJECT */}
                    <div className="border-b border-[#211F1C]/15 pb-3 sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/50"
                      >
                        What Can We Help With?
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        defaultValue=""
                        className="mt-2 w-full bg-transparent text-sm font-bold text-[#211F1C] outline-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#F7F3EC] text-[#211F1C]">
                          Choose a topic
                        </option>
                        <option value="products" className="bg-[#F7F3EC] text-[#211F1C]">
                          Products &amp; Orders
                        </option>
                        <option value="services" className="bg-[#F7F3EC] text-[#211F1C]">
                          Pet Services
                        </option>
                        <option value="general" className="bg-[#F7F3EC] text-[#211F1C]">
                          General Question
                        </option>
                        <option value="other" className="bg-[#F7F3EC] text-[#211F1C]">
                          Something Else
                        </option>
                      </select>
                    </div>

                    {/* MESSAGE */}
                    <div className="border-b border-[#211F1C]/15 pb-3 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/50"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us a little about what you need..."
                        className="mt-2 w-full resize-none bg-transparent text-sm font-bold leading-6 text-[#211F1C] outline-none placeholder:text-[#211F1C]/25"
                      />
                    </div>
                  </div>

                  {/* STATUS */}
                  {status.message && (
                    <div
                      className={`mt-5 rounded-xl px-4 py-3 text-xs font-bold ${
                        status.type === "success"
                          ? "bg-[#DDE8D5] text-[#211F1C]"
                          : "bg-red-100 text-red-900"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  {/* SUBMIT */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[200px] text-[8px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/40">
                      We usually reply within one business day.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn inline-flex items-center gap-4 rounded-full bg-[#211F1C] px-6 py-3 text-white transition-all duration-300 hover:bg-[#302D29] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* =================================================
          FAQ SECTION (Soft Sage Highlight Block)
      ================================================= */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#DDE8D5]/30 p-6 sm:p-10 border border-[#211F1C]/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/45">
              Got Questions?
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.04em] sm:text-4xl">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
            <p className="mt-2 text-xs font-medium text-[#211F1C]/60">
              Quick answers about shipping, products, and pet care.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="rounded-2xl border border-[#211F1C]/10 bg-white/70 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-bold text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 text-[#211F1C]/70 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm font-semibold leading-relaxed text-[#211F1C]/65 border-t border-[#211F1C]/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================
          BOTTOM STATEMENT CTA
      ================================================= */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start justify-between gap-7 border-t border-[#211F1C]/10 pt-9 sm:flex-row sm:items-center"
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