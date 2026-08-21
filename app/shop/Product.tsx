
"use client";

import Image from "next/image";
import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  rating: string;
  description?: string | null;
};

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* =====================================================
          PRODUCT CARD
      ===================================================== */}

      <article
        className={`group relative ${
          showDetails ? "z-[9998]" : "z-0"
        }`}
      >
        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#E8D8C3]/40">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* IMAGE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-[#211F1C]/0 transition-colors duration-500 group-hover:bg-[#211F1C]/10" />

          {/* WISHLIST */}
          <button
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F3EC]/90 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            ♡
          </button>

          {/* VIEW PRODUCT */}
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="absolute bottom-4 left-4 right-4 z-20 flex translate-y-2 items-center justify-between rounded-full bg-[#211F1C] px-4 py-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
              View Product
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C]">
              ↗
            </span>
          </button>
        </div>

        {/* PRODUCT INFORMATION */}
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/40">
              {product.category}
            </span>

            <span className="text-[9px] text-[#211F1C]/45">
              ★ {product.rating}
            </span>
          </div>

          <h3 className="mt-2 text-sm font-bold uppercase tracking-tight">
            {product.name}
          </h3>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-black">
              ${product.price}
            </span>

            {/* ADD TO CART */}
            <button
              type="button"
              aria-label={`Add ${product.name} to cart`}
              onClick={() => onAddToCart(product)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-sm transition-all duration-300 hover:bg-[#211F1C] hover:text-white"
            >
              +
            </button>
          </div>
        </div>
      </article>

      {/* =====================================================
          PRODUCT DETAIL MODAL
      ===================================================== */}

      {showDetails && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#211F1C]/60 px-4 py-6 backdrop-blur-md"
          onClick={() => setShowDetails(false)}
        >
          {/* MODAL */}
          <div
            className="relative z-[100000] max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#F7F3EC] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-7 lg:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              aria-label="Close product details"
              className="absolute right-5 top-5 z-[100001] flex h-10 w-10 items-center justify-center rounded-full bg-[#211F1C] text-xl text-white transition-all duration-300 hover:scale-105"
            >
              ×
            </button>

            {/* =================================================
                MAIN MODAL CONTENT
            ================================================= */}

            <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
              {/* PRODUCT IMAGE */}
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#E8D8C3]/40">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* IMAGE LABEL */}
                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-[#F7F3EC]/90 px-4 py-2 text-[8px] font-black uppercase tracking-[0.25em] text-[#211F1C] backdrop-blur-sm">
                    Paw & Co.
                  </span>
                </div>
              </div>

              {/* =================================================
                  DETAILS
              ================================================= */}

              <div className="flex flex-col justify-center pr-2">
                {/* EDITORIAL CATEGORY */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#211F1C]/25" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40">
                    {product.category}
                  </span>
                </div>

                {/* PRODUCT NAME */}
                <h2 className="mt-5 max-w-xl text-[clamp(2.7rem,5vw,4.8rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#211F1C]">
                  {product.name}
                  <span className="text-[#211F1C]/20">
                    .
                  </span>
                </h2>

                {/* PRODUCT META */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-[#DDE8D5] px-4 py-2">
                    <span className="text-sm">★</span>

                    <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                      {product.rating}
                    </span>
                  </div>

                  <span className="h-1 w-1 rounded-full bg-[#211F1C]/20" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/40">
                    Customer Favorite
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-7 border-t border-[#211F1C]/10 pt-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                    Why they'll love it
                  </p>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#211F1C]/55">
                    {product.description ||
                      `A thoughtfully selected ${product.category.toLowerCase()} product made for happier, healthier everyday moments with your pet. Designed with comfort, quality, and everyday use in mind.`}
                  </p>
                </div>

                {/* PRICE + CART */}
                <div className="mt-7 flex flex-col gap-4 border-t border-[#211F1C]/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                      Your price
                    </p>

                    <p className="mt-1 text-3xl font-black tracking-[-0.05em]">
                      ${product.price}
                    </p>
                  </div>

                  {/* MODAL ADD TO CART */}
                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart(product);
                      setShowDetails(false);
                    }}
                    className="group flex items-center justify-between gap-8 rounded-full bg-[#211F1C] px-6 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                      Add to Cart
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover:rotate-45">
                      +
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* =================================================
                EXTRA PRODUCT INFO
            ================================================= */}

            <div className="mt-8 grid gap-3 border-t border-[#211F1C]/10 pt-7 sm:grid-cols-3">
              {/* QUALITY */}
              <div className="group rounded-[1.25rem] bg-[#E8D8C3]/35 p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/40">
                    Quality
                  </p>

                  <span className="text-lg">✦</span>
                </div>

                <p className="mt-3 text-xs font-bold uppercase">
                  Carefully Selected
                </p>
              </div>

              {/* FOR */}
              <div className="group rounded-[1.25rem] bg-[#DDE8D5] p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/40">
                    For
                  </p>

                  <span className="text-lg">♡</span>
                </div>

                <p className="mt-3 text-xs font-bold uppercase">
                  Everyday Pet Care
                </p>
              </div>

              {/* BRAND */}
              <div className="group rounded-[1.25rem] bg-[#E8D8C3]/35 p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/40">
                    Paw & Co.
                  </p>

                  <span className="text-lg">✦</span>
                </div>

                <p className="mt-3 text-xs font-bold uppercase">
                  Made With Care
                </p>
              </div>
            </div>

            {/* BOTTOM BRAND LINE */}
            <div className="mt-7 flex items-center justify-between border-t border-[#211F1C]/10 pt-5">
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/30">
                Thoughtfully selected
              </span>

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/30">
                Paw & Co. / Shop
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}