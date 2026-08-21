import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { prisma } from "@/lib/prisma";
import ShopClient from "./ShopClient";
import { Product } from "./Product";

export default async function ShopPage() {
  const dbProducts = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const products: Product[] = dbProducts.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price.toString(),
    image: product.image,
    rating: product.rating.toString(),
    description:
      "description" in product
        ? String(product.description ?? "")
        : null,
  }));

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="px-5 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10  pb-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">

            {/* LEFT */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#211F1C]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#211F1C]/45">
                  03 / The Shop
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
                EVERYTHING
                <br />
                <span className="text-[#211F1C]/25">
                  THEY LOVE.
                </span>
              </h1>
            </div>

            {/* RIGHT */}
            <div className="lg:pb-2 lg:pl-8">
              <p className="max-w-md text-sm leading-7 text-[#211F1C]/60 sm:text-[15px]">
                Thoughtfully selected essentials for the pets who
                make everyday life a little better.
              </p>

              <div className="mt-8 grid grid-cols-2 border-t border-[#211F1C]/10 pt-5">

              
              

              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* =========================================================
          CLIENT SHOP
      ========================================================= */}

      <ShopClient products={products} />

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[2rem] bg-[#DDE8D5] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

            {/* Decorative text */}

            <div className="pointer-events-none absolute -right-4 -top-8 select-none text-[7rem] font-black uppercase leading-none tracking-[-0.08em] text-[#211F1C]/[0.035] sm:text-[10rem]">
              PAWS
            </div>

            <div className="relative z-10 max-w-2xl">

              <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#211F1C]/40">
                Paw & Co.
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl">
                MADE FOR
                <br />
                THEIR EVERYDAY.
              </h2>

              <p className="mt-5 max-w-lg text-xs leading-6 text-[#211F1C]/55 sm:text-sm">
                Because the little things — a good meal, a favorite
                toy, a fresh coat, and a comfortable nap — make a
                big difference.
              </p>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}