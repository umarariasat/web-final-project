"use client";

import { useMemo, useState } from "react";
import ProductCard, { Product } from "./Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type ShopClientProps = {
  products: Product[];
};

const FILTERS = [
  { id: "all", label: "All Products" },
  { id: "essentials", label: "Essentials" },
  { id: "grooming", label: "Grooming" },
  { id: "toys", label: "Toys & Play" },
  { id: "wellness", label: "Wellness" },
];

const COLLECTIONS = [
  {
    id: "essentials",
    number: "01",
    title: "Pet Essentials",
    description:
      "Everyday food, treats, feeding essentials, and simple products that make their daily routine better.",
    categories: ["All", "Food", "Treats", "Feeding"],
    color: "cream",
    match: ["Food", "Treats", "Feeding", "Essentials"],
  },
  {
    id: "grooming",
    number: "02",
    title: "Grooming & Care",
    description:
      "Gentle grooming and hygiene essentials designed to keep your companion fresh, clean, and comfortable.",
    categories: ["All", "Shampoo", "Brushes", "Hygiene"],
    color: "green",
    match: ["Shampoo", "Brushes", "Hygiene", "Care"],
  },
  {
    id: "toys",
    number: "03",
    title: "Toys & Play",
    description:
      "Interactive toys, chews, fetch favorites, and enrichment products designed for movement and bonding.",
    categories: ["All", "Interactive", "Chews", "Fetch"],
    color: "cream",
    match: ["Interactive", "Chews", "Fetch", "Toys"],
  },
  {
    id: "wellness",
    number: "04",
    title: "Pet Wellness",
    description:
      "Thoughtfully selected wellness and comfort products to support happier, healthier everyday lives.",
    categories: ["All", "Wellness", "Health", "Comfort"],
    color: "green",
    match: ["Wellness", "Health", "Comfort"],
  },
];

export default function ShopClient({ products }: ShopClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // CUSTOMER DETAILS
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const filteredCollections = useMemo(() => {
    if (activeFilter === "all") {
      return COLLECTIONS;
    }

    return COLLECTIONS.filter(
      (collection) => collection.id === activeFilter
    );
  }, [activeFilter]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.product.price) * item.quantity,
    0
  );

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id
      );

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  }

  function increaseQuantity(productId: number) {
    setCart((current) =>
      current.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  async function placeOrder() {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setPlacingOrder(true);

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),

          items: cart.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to place order."
        );
      }

      // Clear cart after successful order
      setCart([]);
      setName("");
      setPhone("");
      setCartOpen(false);
      setOrderSuccess(true);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setPlacingOrder(false);
    }
  }

  return (
    <>
      {/* ================================
          CART BUTTON
      ================================= */}

      <button
        type="button"
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 z-[5000] flex items-center gap-3 rounded-full bg-[#211F1C] px-5 py-4 text-white shadow-2xl transition-transform hover:-translate-y-1"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.2em]">
          Cart
        </span>

        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#DDE8D5] px-2 text-[10px] font-black text-[#211F1C]">
          {cartCount}
        </span>
      </button>

      {/* ================================
          FILTER
      ================================= */}

      <section className="sticky top-0 z-40 border-y border-[#211F1C]/10 bg-[#F7F3EC]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-5 py-3 sm:px-6 lg:px-10">
          <span className="hidden shrink-0 text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35 sm:block">
            Browse
          </span>

          <div className="h-4 w-px shrink-0 bg-[#211F1C]/10" />

          <div className="flex gap-2">
            {FILTERS.map((filter) => {
              const active = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    active
                      ? "bg-[#211F1C] text-white"
                      : "border border-[#211F1C]/10 bg-transparent text-[#211F1C]/45 hover:border-[#211F1C]/25 hover:text-[#211F1C]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================
          PRODUCTS
      ================================= */}

      <section className="px-5 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {filteredCollections.map((collection, index) => {
            const collectionProducts = products.filter((product) =>
              collection.match.includes(product.category)
            );

            if (collectionProducts.length === 0) {
              return null;
            }

            return (
              <CollectionSection
                key={collection.id}
                collection={collection}
                products={collectionProducts}
                index={index}
                onAddToCart={addToCart}
              />
            );
          })}
        </div>
      </section>

      {/* ================================
          CART DRAWER
      ================================= */}

      {cartOpen && (
        <div
          className="fixed inset-0 z-[99998] bg-[#211F1C]/50 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-[#F7F3EC] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-[#211F1C]/10 pb-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/40">
                  Paw & Co.
                </p>

                <h2 className="mt-1 text-3xl font-black uppercase tracking-[-0.05em]">
                  Your Cart
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211F1C] text-xl text-white"
              >
                ×
              </button>
            </div>

            {/* EMPTY CART */}

            {cart.length === 0 ? (
              <div className="py-24 text-center">
                <div className="text-4xl">♡</div>

                <p className="mt-4 text-sm font-black uppercase">
                  Your cart is empty
                </p>
              </div>
            ) : (
              <>
                {/* CART ITEMS */}

                <div className="space-y-5 py-6">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 border-b border-[#211F1C]/10 pb-5"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#E8D8C3]/40">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs font-black uppercase">
                          {item.product.name}
                        </h3>

                        <p className="mt-1 text-sm font-black">
                          ${item.product.price}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(item.product.id)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-[#211F1C]/15"
                          >
                            −
                          </button>

                          <span className="text-xs font-black">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(item.product.id)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DDE8D5]"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ================================
                    CUSTOMER INFORMATION
                ================================= */}

                <div className="border-t border-[#211F1C]/10 pt-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#211F1C]/40">
                    Delivery Information
                  </p>

                  {/* NAME */}

                  <div className="mt-5">
                    <label
                      htmlFor="customer-name"
                      className="text-[9px] font-black uppercase tracking-[0.25em] text-[#211F1C]/45"
                    >
                      Full Name
                    </label>

                    <input
                      id="customer-name"
                      type="text"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Your full name"
                      autoComplete="name"
                      className="mt-3 w-full rounded-2xl border border-[#211F1C]/10 bg-white/60 px-4 py-4 text-sm outline-none transition focus:border-[#211F1C]/30"
                    />
                  </div>

                  {/* PHONE */}

                  <div className="mt-4">
                    <label
                      htmlFor="customer-phone"
                      className="text-[9px] font-black uppercase tracking-[0.25em] text-[#211F1C]/45"
                    >
                      Phone Number
                    </label>

                    <input
                      id="customer-phone"
                      type="tel"
                      value={phone}
                      onChange={(event) =>
                        setPhone(event.target.value)
                      }
                      placeholder="03XX XXXXXXX"
                      autoComplete="tel"
                      className="mt-3 w-full rounded-2xl border border-[#211F1C]/10 bg-white/60 px-4 py-4 text-sm outline-none transition focus:border-[#211F1C]/30"
                    />

                    <p className="mt-2 text-[10px] text-[#211F1C]/40">
                      We'll use this number to contact you
                      about your order.
                    </p>
                  </div>
                </div>

                {/* TOTAL */}

                <div className="mt-6 flex items-center justify-between border-t border-[#211F1C]/10 pt-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#211F1C]/40">
                    Total
                  </span>

                  <span className="text-2xl font-black">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                {/* PLACE ORDER */}

                <button
                  type="button"
                  disabled={placingOrder}
                  onClick={placeOrder}
                  className="mt-5 w-full rounded-full bg-[#211F1C] px-6 py-4 text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.25em]">
                    {placingOrder
                      ? "Placing Order..."
                      : "Place Order"}
                  </span>
                </button>
              </>
            )}
          </aside>
        </div>
      )}

      {/* ================================
          SUCCESS
      ================================= */}

      {orderSuccess && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#211F1C]/60 px-5 backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl bg-[#F7F3EC] p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE8D5] text-2xl">
              ✓
            </div>

            <h2 className="mt-5 text-3xl font-black uppercase">
              Order Received
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#211F1C]/50">
              Thank you, {name || "customer"}! Your order has
              been saved successfully. We'll contact you on
              your phone number.
            </p>

            <button
              type="button"
              onClick={() => setOrderSuccess(false)}
              className="mt-7 rounded-full bg-[#211F1C] px-7 py-4 text-[9px] font-black uppercase tracking-[0.25em] text-white"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function CollectionSection({
  collection,
  products,
  index,
  onAddToCart,
}: {
  collection: (typeof COLLECTIONS)[number];
  products: Product[];
  index: number;
  onAddToCart: (product: Product) => void;
}) {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory
        );

  const isGreen = collection.color === "green";

  return (
    <section
      className={`border-b border-[#211F1C]/10 py-14 sm:py-20 ${
        index === 0 ? "border-t" : ""
      }`}
    >
      {/* HEADER */}

      <div className="mb-9 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[8px] font-black ${
                isGreen
                  ? "bg-[#DDE8D5]"
                  : "bg-[#E8D8C3]"
              }`}
            >
              {collection.number}
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/35">
              Collection
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            {collection.title}
            <span className="text-[#211F1C]/20">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-xs leading-6 text-[#211F1C]/50 sm:text-sm">
            {collection.description}
          </p>
        </div>

        {/* CATEGORY FILTER */}

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {collection.categories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`rounded-full border px-4 py-2 text-[8px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  active
                    ? "border-[#211F1C] bg-[#211F1C] text-white"
                    : "border-[#211F1C]/10 text-[#211F1C]/45 hover:border-[#211F1C]/25 hover:text-[#211F1C]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRODUCTS */}

      {visibleProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-[#211F1C]/15 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#211F1C]/35">
            No products in this category
          </p>

          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="mt-5 text-[8px] font-black uppercase tracking-[0.25em] underline underline-offset-4"
          >
            Show all products
          </button>
        </div>
      )}

      {/* FOOTER */}

      <div className="mt-8 flex items-center justify-between border-t border-[#211F1C]/10 pt-5">
        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/35">
          {visibleProducts.length}{" "}
          {visibleProducts.length === 1
            ? "Product"
            : "Products"}
        </span>

        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/35">
          Paw & Co.
        </span>
      </div>
    </section>
  );
}