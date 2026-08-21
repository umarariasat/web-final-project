"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  X,
  Package,
  Star,
  Image as ImageIcon,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  description: string | null;
};

type ProductForm = {
  name: string;
  category: string;
  price: string;
  image: string;
  rating: string;
  description: string;
};

const emptyForm: ProductForm = {
  name: "",
  category: "",
  price: "",
  image: "",
  rating: "0",
  description: "",
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [form, setForm] = useState<ProductForm>({
    ...emptyForm,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState("");

  // =========================
  // FETCH PRODUCTS
  // =========================

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/products", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            "Failed to load products."
        );
      }

      const productList = Array.isArray(data)
        ? data
        : data.products || [];

      setProducts(productList);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load products."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // =========================
  // CATEGORIES
  // =========================

  const categories = useMemo(() => {
    const unique = [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ];

    return unique;
  }, [products]);

  // =========================
  // FILTER PRODUCTS
  // =========================

  const filteredProducts = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesSearch =
        product.name
          ?.toLowerCase()
          .includes(searchValue) ||
        product.category
          ?.toLowerCase()
          .includes(searchValue);

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  // =========================
  // OPEN ADD FORM
  // =========================

  function openAddForm() {
    setEditingProduct(null);
    setForm({ ...emptyForm });
    setShowForm(true);
    setError("");
  }

  // =========================
  // OPEN EDIT FORM
  // =========================

  function openEditForm(product: Product) {
    setEditingProduct(product);

    setForm({
      name: product.name || "",
      category: product.category || "",
      price:
        product.price !== null &&
        product.price !== undefined
          ? product.price.toString()
          : "",
      image: product.image || "",
      rating:
        product.rating !== null &&
        product.rating !== undefined
          ? product.rating.toString()
          : "0",
      description: product.description || "",
    });

    setShowForm(true);
    setError("");
  }

  // =========================
  // CLOSE FORM
  // =========================

  function closeForm() {
    setShowForm(false);
    setEditingProduct(null);
    setForm({ ...emptyForm });
    setError("");
  }

  // =========================
  // HANDLE NORMAL INPUT
  // =========================

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // =========================
  // HANDLE PRICE
  // =========================

  function handlePriceChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;

    // Allows:
    // 2500
    // 2500.5
    // 2500.50
    // 0.99
    // Maximum 2 decimal places

    if (
      value === "" ||
      /^\d*\.?\d{0,2}$/.test(value)
    ) {
      setForm((previous) => ({
        ...previous,
        price: value,
      }));
    }
  }

  // =========================
  // HANDLE RATING
  // =========================

  function handleRatingChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;

    if (value === "") {
      setForm((previous) => ({
        ...previous,
        rating: "",
      }));

      return;
    }

    // Maximum one decimal place
    if (!/^\d*\.?\d?$/.test(value)) {
      return;
    }

    const numberValue = Number(value);

    if (numberValue > 5) {
      return;
    }

    setForm((previous) => ({
      ...previous,
      rating: value,
    }));
  }

  // =========================
  // CREATE / UPDATE
  // =========================

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");

    // PRODUCT NAME
    if (!form.name.trim()) {
      setError("Product name is required.");
      return;
    }

    // CATEGORY
    if (!form.category.trim()) {
      setError("Category is required.");
      return;
    }

    // PRICE
    if (form.price === "") {
      setError("Price is required.");
      return;
    }

    const price = Number(form.price);

    if (!Number.isFinite(price) || price < 0) {
      setError("Please enter a valid price.");
      return;
    }

    // IMAGE
    if (!form.image.trim()) {
      setError("Image URL is required.");
      return;
    }

    // RATING
    const rating =
      form.rating === ""
        ? 0
        : Number(form.rating);

    if (
      !Number.isFinite(rating) ||
      rating < 0 ||
      rating > 5
    ) {
      setError("Rating must be between 0 and 5.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: form.name.trim(),
        category: form.category.trim(),
        price,
        image: form.image.trim(),
        rating,
        description:
          form.description.trim() || null,
      };

      const url = editingProduct
        ? `/api/products/${editingProduct.id}`
        : "/api/products";

      const method = editingProduct ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            "Failed to save product."
        );
      }

      closeForm();
      await fetchProducts();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to save product."
      );
    } finally {
      setSaving(false);
    }
  }

  // =========================
  // DELETE PRODUCT
  // =========================

  async function deleteProduct(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleting(id);
      setError("");

      const response = await fetch(
        `/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            "Failed to delete product."
        );
      }

      setProducts((previous) =>
        previous.filter(
          (product) => product.id !== id
        )
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to delete product."
      );
    } finally {
      setDeleting(null);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C]">
      {/* HEADER */}

      <header className="border-b border-[#211F1C]/10">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211F1C] text-lg text-[#F7F3EC]">
                🐾
              </span>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                  Paw & Co. / Admin
                </p>

                <h1 className="mt-1 text-2xl font-black uppercase tracking-[-0.06em] sm:text-3xl">
                  Products
                </h1>
              </div>
            </div>

            <button
              type="button"
              onClick={openAddForm}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#211F1C] px-5 py-3 text-[8px] font-black uppercase tracking-[0.2em] text-[#F7F3EC] transition hover:-translate-y-0.5 sm:w-auto"
            >
              <Plus className="h-4 w-4" />
              Add Product
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-10">
        {/* STATS */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-5">
            <Package className="h-4 w-4 opacity-40" />

            <p className="mt-5 text-2xl font-black">
              {products.length}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
              Total Products
            </p>
          </div>

          <div className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-5">
            <Star className="h-4 w-4 opacity-40" />

            <p className="mt-5 text-2xl font-black">
              {categories.length}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
              Categories
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-[#211F1C]/10 bg-[#DDE8D5]/50 p-5 sm:col-span-1">
            <p className="text-2xl font-black">
              {filteredProducts.length}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
              Showing
            </p>
          </div>
        </div>

        {/* SEARCH + FILTER */}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 opacity-30" />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search products..."
              className="h-12 w-full rounded-full border border-[#211F1C]/10 bg-white/50 pl-11 pr-5 text-xs font-medium outline-none transition focus:border-[#211F1C]/30"
            />
          </div>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
            className="h-12 rounded-full border border-[#211F1C]/10 bg-white/50 px-5 text-xs font-semibold outline-none sm:w-52"
          >
            <option value="all">
              All Categories
            </option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-5 rounded-2xl bg-red-100 px-4 py-3 text-xs font-semibold text-red-700">
            {error}
          </div>
        )}

        {/* PRODUCTS */}

        <div className="mt-7">
          {loading ? (
            <div className="rounded-3xl border border-[#211F1C]/10 bg-white/40 p-10 text-center">
              <p className="text-xs font-semibold opacity-50">
                Loading products...
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#211F1C]/20 bg-white/30 p-12 text-center">
              <Package className="mx-auto h-8 w-8 opacity-25" />

              <p className="mt-4 text-sm font-black uppercase">
                No Products Found
              </p>

              <p className="mt-2 text-xs opacity-40">
                Add your first product to get started.
              </p>

              <button
                type="button"
                onClick={openAddForm}
                className="mt-5 rounded-full bg-[#211F1C] px-5 py-3 text-[8px] font-black uppercase tracking-[0.2em] text-[#F7F3EC]"
              >
                Add Product
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-3xl border border-[#211F1C]/10 bg-white/50"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-square overflow-hidden bg-[#E8D8C3]/30">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <ImageIcon className="h-8 w-8 opacity-20" />
                      </div>
                    )}

                    <span className="absolute left-3 top-3 rounded-full bg-[#F7F3EC]/90 px-3 py-1 text-[7px] font-black uppercase tracking-[0.15em]">
                      {product.category}
                    </span>
                  </div>

                  {/* INFO */}

                  <div className="p-4">
                    <h2 className="truncate text-sm font-black uppercase tracking-[-0.03em]">
                      {product.name}
                    </h2>

                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-black">
                        Rs.{" "}
                        {Number(
                          product.price || 0
                        ).toLocaleString("en-PK")}
                      </p>

                      <div className="flex items-center gap-1 text-[9px] font-bold">
                        <Star className="h-3 w-3 fill-current" />
                        {product.rating ?? 0}
                      </div>
                    </div>

                    {/* ACTIONS */}

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          openEditForm(product)
                        }
                        className="flex items-center justify-center gap-2 rounded-full border border-[#211F1C]/10 py-2.5 text-[7px] font-black uppercase tracking-[0.15em] transition hover:bg-[#211F1C] hover:text-[#F7F3EC]"
                      >
                        <Pencil className="h-3 w-3" />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteProduct(product.id)
                        }
                        disabled={
                          deleting === product.id
                        }
                        className="flex items-center justify-center gap-2 rounded-full border border-red-200 py-2.5 text-[7px] font-black uppercase tracking-[0.15em] text-red-600 transition hover:bg-red-600 hover:text-white disabled:opacity-50"
                      >
                        <Trash2 className="h-3 w-3" />

                        {deleting === product.id
                          ? "..."
                          : "Delete"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ADD / EDIT MODAL */}

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#211F1C]/50 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#F7F3EC] shadow-2xl">
            {/* MODAL HEADER */}

            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#211F1C]/10 bg-[#F7F3EC] px-5 py-5 sm:px-7">
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] opacity-35">
                  Product Management
                </p>

                <h2 className="mt-1 text-xl font-black uppercase tracking-[-0.05em]">
                  {editingProduct
                    ? "Edit Product"
                    : "Add Product"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeForm}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#211F1C]/10 transition hover:bg-[#211F1C] hover:text-[#F7F3EC]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-5 sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* NAME */}

                <div>
                  <label className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                    Product Name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Premium Dog Food"
                    className="mt-2 h-12 w-full rounded-xl border border-[#211F1C]/10 bg-white/50 px-4 text-xs font-semibold outline-none focus:border-[#211F1C]/30"
                  />
                </div>

                {/* CATEGORY */}

                <div>
                  <label className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                    Category
                  </label>

                  <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="Food & Treats"
                    className="mt-2 h-12 w-full rounded-xl border border-[#211F1C]/10 bg-white/50 px-4 text-xs font-semibold outline-none focus:border-[#211F1C]/30"
                  />
                </div>

                {/* PRICE */}

                <div>
                  <label className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                    Price (PKR)
                  </label>

                  <input
                    name="price"
                    type="text"
                    inputMode="decimal"
                    value={form.price}
                    onChange={handlePriceChange}
                    placeholder="2500.00"
                    className="mt-2 h-12 w-full rounded-xl border border-[#211F1C]/10 bg-white/50 px-4 text-xs font-semibold outline-none focus:border-[#211F1C]/30"
                  />

                  <p className="mt-1 text-[9px] opacity-35">
                    Numbers only • up to 2 decimal places
                  </p>
                </div>

                {/* RATING */}

                <div>
                  <label className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                    Rating
                  </label>

                  <input
                    name="rating"
                    type="text"
                    inputMode="decimal"
                    value={form.rating}
                    onChange={handleRatingChange}
                    placeholder="4.5"
                    className="mt-2 h-12 w-full rounded-xl border border-[#211F1C]/10 bg-white/50 px-4 text-xs font-semibold outline-none focus:border-[#211F1C]/30"
                  />

                  <p className="mt-1 text-[9px] opacity-35">
                    0–5 • one decimal place
                  </p>
                </div>
              </div>

              {/* IMAGE */}

              <div>
                <label className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                  Image URL
                </label>

                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="mt-2 h-12 w-full rounded-xl border border-[#211F1C]/10 bg-white/50 px-4 text-xs font-semibold outline-none focus:border-[#211F1C]/30"
                />
              </div>

              {/* DESCRIPTION */}

              <div>
                <label className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                  Description
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe this product..."
                  className="mt-2 w-full resize-none rounded-xl border border-[#211F1C]/10 bg-white/50 p-4 text-xs font-medium leading-5 outline-none focus:border-[#211F1C]/30"
                />
              </div>

              {/* FORM ERROR */}

              {error && (
                <div className="rounded-xl bg-red-100 px-4 py-3 text-xs font-semibold text-red-700">
                  {error}
                </div>
              )}

              {/* BUTTONS */}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-full border border-[#211F1C]/10 px-6 py-3 text-[8px] font-black uppercase tracking-[0.2em]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-full bg-[#211F1C] px-6 py-3 text-[8px] font-black uppercase tracking-[0.2em] text-[#F7F3EC] disabled:opacity-50"
                >
                  {saving
                    ? "Saving..."
                    : editingProduct
                    ? "Update Product"
                    : "Create Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}