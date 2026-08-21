"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  Eye,
  Trash2,
  X,
  Phone,
  User,
  CalendarDays,
  Package,
  ChevronDown,
} from "lucide-react";
type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  product?: {
    name: string;
    image?: string;
  };
};

type Order = {
  id: string;
  customerName: string;
  phone: string;
  status: string;
  total: number;
  createdAt: string;
  items: OrderItem[];
};
export default function AdminOrdersPage() {
const [orders, setOrders] = useState<Order[]>([]);
const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
const [deleting, setDeleting] = useState<string | null>(null);
const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // =========================================
  // FETCH ORDERS
  // =========================================

  async function fetchOrders() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/orders", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to load orders."
        );
      }

      setOrders(data.orders || data || []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to load orders."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  // =========================================
  // STATUS COUNTS
  // =========================================

  const statusCounts = useMemo(() => {
    return {
      all: orders.length,
      pending: orders.filter(
        (order) => order.status === "PENDING"
      ).length,
      confirmed: orders.filter(
        (order) => order.status === "CONFIRMED"
      ).length,
      shipped: orders.filter(
        (order) => order.status === "SHIPPED"
      ).length,
      delivered: orders.filter(
        (order) => order.status === "DELIVERED"
      ).length,
      cancelled: orders.filter(
        (order) => order.status === "CANCELLED"
      ).length,
    };
  }, [orders]);

  // =========================================
  // FILTER ORDERS
  // =========================================

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        String(order.id)
          .toLowerCase()
          .includes(searchText) ||
        order.customerName
          ?.toLowerCase()
          .includes(searchText) ||
        order.phone
          ?.toLowerCase()
          .includes(searchText);

      const matchesStatus =
        statusFilter === "ALL" ||
        order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  // =========================================
  // UPDATE STATUS
  // =========================================

async function updateStatus(orderId: string, newStatus: string)  {
    try {
      setUpdatingStatus(orderId);
      setError("");

      const response = await fetch(
        `/api/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update order."
        );
      }

      setOrders((previous) =>
        previous.map((order) =>
          order.id === orderId
            ? {
                ...order,
                status: newStatus,
              }
            : order
        )
      );

      setSelectedOrder((previous) =>
        previous && previous.id === orderId
          ? {
              ...previous,
              status: newStatus,
            }
          : previous
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to update order."
      );
    } finally {
      setUpdatingStatus(null);
    }
  }

  // =========================================
  // DELETE ORDER
  // =========================================

async function deleteOrder(orderId: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmed) return;

    try {
      setDeleting(orderId);
      setError("");

      const response = await fetch(
        `/api/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to delete order."
        );
      }

      setOrders((previous) =>
        previous.filter((order) => order.id !== orderId)
      );

      setSelectedOrder(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to delete order."
      );
    } finally {
      setDeleting(null);
    }
  }

  // =========================================
  // FORMAT PRICE
  // =========================================

function formatPrice(price: number)  {
    return Number(price || 0).toLocaleString("en-PK");
  }

  // =========================================
  // FORMAT DATE
  // =========================================

function formatDate(date: string) {
    if (!date) return "—";

    return new Date(date).toLocaleDateString(
      "en-PK",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  // =========================================
  // STATUS STYLE
  // =========================================

 function getStatusClass(status: string) {
    switch (status) {
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";

      case "CONFIRMED":
        return "bg-blue-100 text-blue-800";

      case "SHIPPED":
        return "bg-purple-100 text-purple-800";

      case "DELIVERED":
        return "bg-[#DDE8D5] text-[#211F1C]";

      case "CANCELLED":
        return "bg-red-100 text-red-700";

      default:
        return "bg-[#211F1C]/10 text-[#211F1C]";
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C]">
      {/* =====================================
          HEADER
      ===================================== */}

      <header className="border-b border-[#211F1C]/10">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211F1C] text-lg text-[#F7F3EC]">
                🐾
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                  Paw & Co. / Admin
                </p>

                <h1 className="mt-1 text-2xl font-black uppercase tracking-[-0.06em] sm:text-3xl">
                  Orders
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================
          CONTENT
      ===================================== */}

      <section className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-10">
        {/* =====================================
            STATS
        ===================================== */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => setStatusFilter("ALL")}
            className={`rounded-2xl border p-4 text-left transition ${
              statusFilter === "ALL"
                ? "border-[#211F1C]/30 bg-white"
                : "border-[#211F1C]/10 bg-white/40"
            }`}
          >
            <ShoppingBag className="h-4 w-4 opacity-40" />

            <p className="mt-4 text-2xl font-black">
              {statusCounts.all}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.15em] opacity-40">
              All
            </p>
          </button>

          <button
            onClick={() => setStatusFilter("PENDING")}
            className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-4 text-left"
          >
            <p className="text-2xl font-black">
              {statusCounts.pending}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.15em] opacity-40">
              Pending
            </p>
          </button>

          <button
            onClick={() => setStatusFilter("CONFIRMED")}
            className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-4 text-left"
          >
            <p className="text-2xl font-black">
              {statusCounts.confirmed}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.15em] opacity-40">
              Confirmed
            </p>
          </button>

          <button
            onClick={() => setStatusFilter("SHIPPED")}
            className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-4 text-left"
          >
            <p className="text-2xl font-black">
              {statusCounts.shipped}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.15em] opacity-40">
              Shipped
            </p>
          </button>

          <button
            onClick={() => setStatusFilter("DELIVERED")}
            className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-4 text-left"
          >
            <p className="text-2xl font-black">
              {statusCounts.delivered}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.15em] opacity-40">
              Delivered
            </p>
          </button>

          <button
            onClick={() => setStatusFilter("CANCELLED")}
            className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-4 text-left"
          >
            <p className="text-2xl font-black">
              {statusCounts.cancelled}
            </p>

            <p className="mt-1 text-[7px] font-black uppercase tracking-[0.15em] opacity-40">
              Cancelled
            </p>
          </button>
        </div>

        {/* =====================================
            SEARCH
        ===================================== */}

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 opacity-30" />

            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search by order ID, customer name or phone..."
              className="h-12 w-full rounded-full border border-[#211F1C]/10 bg-white/50 pl-11 pr-5 text-xs font-medium outline-none focus:border-[#211F1C]/30"
            />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="h-12 w-full appearance-none rounded-full border border-[#211F1C]/10 bg-white/50 px-5 pr-10 text-xs font-semibold outline-none sm:w-52"
            >
              <option value="ALL">
                All Orders
              </option>

              <option value="PENDING">
                Pending
              </option>

              <option value="CONFIRMED">
                Confirmed
              </option>

              <option value="SHIPPED">
                Shipped
              </option>

              <option value="DELIVERED">
                Delivered
              </option>

              <option value="CANCELLED">
                Cancelled
              </option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 opacity-40" />
          </div>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-5 rounded-2xl bg-red-100 px-4 py-3 text-xs font-semibold text-red-700">
            {error}
          </div>
        )}

        {/* =====================================
            ORDERS
        ===================================== */}

        <div className="mt-7">
          {loading ? (
            <div className="rounded-3xl border border-[#211F1C]/10 bg-white/40 p-10 text-center">
              <p className="text-xs font-semibold opacity-50">
                Loading orders...
              </p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#211F1C]/20 bg-white/30 p-12 text-center">
              <ShoppingBag className="mx-auto h-8 w-8 opacity-20" />

              <p className="mt-4 text-sm font-black uppercase">
                No Orders Found
              </p>

              <p className="mt-2 text-xs opacity-40">
                Orders placed by customers will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredOrders.map((order) => (
                <article
                  key={order.id}
                  className="rounded-3xl border border-[#211F1C]/10 bg-white/50 p-4 sm:p-5"
                >
                  {/* MOBILE / DESKTOP */}

                  <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr_0.8fr_0.7fr_auto] lg:items-center">
                    {/* ORDER */}

                    <div>
                      <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
                        Order
                      </p>

                      <p className="mt-1 text-lg font-black">
                        #{order.id}
                      </p>

                      <p className="mt-1 text-[9px] opacity-40">
                        {formatDate(order.createdAt)}
                      </p>
                    </div>

                    {/* CUSTOMER */}

                    <div>
                      <div className="flex items-center gap-2">
                        <User className="h-3.5 w-3.5 opacity-35" />

                        <p className="text-xs font-black">
                          {order.customerName}
                        </p>
                      </div>

                      <div className="mt-2 flex items-center gap-2">
                        <Phone className="h-3 w-3 opacity-35" />

                        <p className="text-[10px] opacity-50">
                          {order.phone}
                        </p>
                      </div>
                    </div>

                    {/* TOTAL */}

                    <div>
                      <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
                        Total
                      </p>

                      <p className="mt-1 text-lg font-black">
                        Rs. {formatPrice(order.total)}
                      </p>

                      <p className="mt-1 text-[9px] opacity-40">
                        {order.items?.length || 0} item
                        {order.items?.length === 1
                          ? ""
                          : "s"}
                      </p>
                    </div>

                    {/* STATUS */}

                    <div>
                      <p className="mb-2 text-[7px] font-black uppercase tracking-[0.2em] opacity-35 lg:hidden">
                        Status
                      </p>

                      <select
                        value={order.status}
                        disabled={
                          updatingStatus === order.id
                        }
                        onChange={(event) =>
                          updateStatus(
                            order.id,
                            event.target.value
                          )
                        }
                        className={`rounded-full border-0 px-3 py-2 text-[7px] font-black uppercase tracking-[0.15em] outline-none ${getStatusClass(
                          order.status
                        )}`}
                      >
                        <option value="PENDING">
                          Pending
                        </option>

                        <option value="CONFIRMED">
                          Confirmed
                        </option>

                        <option value="SHIPPED">
                          Shipped
                        </option>

                        <option value="DELIVERED">
                          Delivered
                        </option>

                        <option value="CANCELLED">
                          Cancelled
                        </option>
                      </select>
                    </div>

                    {/* ACTIONS */}

                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setSelectedOrder(order)
                        }
                        className="flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#211F1C]/10 px-4 text-[7px] font-black uppercase tracking-[0.15em] transition hover:bg-[#211F1C] hover:text-[#F7F3EC] lg:flex-none"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </button>

                      <button
                        onClick={() =>
                          deleteOrder(order.id)
                        }
                        disabled={
                          deleting === order.id
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-red-200 text-red-600 transition hover:bg-red-600 hover:text-white disabled:opacity-50"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          ORDER DETAILS MODAL
      ===================================== */}

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#211F1C]/50 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#F7F3EC] shadow-2xl">
            {/* HEADER */}

            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#211F1C]/10 bg-[#F7F3EC] px-5 py-5 sm:px-7">
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] opacity-35">
                  Order Details
                </p>

                <h2 className="mt-1 text-xl font-black uppercase tracking-[-0.05em]">
                  Order #{selectedOrder.id}
                </h2>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#211F1C]/10 transition hover:bg-[#211F1C] hover:text-[#F7F3EC]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-6 p-5 sm:p-7">
              {/* CUSTOMER */}

              <div className="rounded-2xl border border-[#211F1C]/10 bg-white/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8D5]">
                    <User className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
                      Customer
                    </p>

                    <p className="mt-1 text-sm font-black">
                      {selectedOrder.customerName}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
                      Phone
                    </p>

                    <p className="mt-1 text-xs font-semibold">
                      {selectedOrder.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-35">
                      Date
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <CalendarDays className="h-3 w-3 opacity-40" />

                      <p className="text-xs font-semibold">
                        {formatDate(
                          selectedOrder.createdAt
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ITEMS */}

              <div>
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 opacity-40" />

                  <h3 className="text-[8px] font-black uppercase tracking-[0.25em]">
                    Order Items
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {selectedOrder.items?.map(
                    (item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-2xl border border-[#211F1C]/10 bg-white/40 p-3"
                      >
                        {item.product?.image ? (
                          <img
                            src={item.product.image}
                            alt={
                              item.product.name
                            }
                            className="h-14 w-14 rounded-xl object-cover"
                          />
                        ) : (
                          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#E8D8C3]/40">
                            🐾
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-black">
                            {item.product?.name ||
                              "Product"}
                          </p>

                          <p className="mt-1 text-[9px] opacity-40">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="text-xs font-black">
                          Rs.{" "}
                          {formatPrice(
                            Number(item.price) *
                              Number(
                                item.quantity
                              )
                          )}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* TOTAL */}

              <div className="flex items-center justify-between border-t border-[#211F1C]/10 pt-5">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">
                  Order Total
                </p>

                <p className="text-2xl font-black">
                  Rs.{" "}
                  {formatPrice(
                    selectedOrder.total
                  )}
                </p>
              </div>

              {/* STATUS */}

              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.2em] opacity-40">
                  Update Status
                </p>

                <select
                  value={selectedOrder.status}
                  disabled={
                    updatingStatus ===
                    selectedOrder.id
                  }
                  onChange={(event) =>
                    updateStatus(
                      selectedOrder.id,
                      event.target.value
                    )
                  }
                  className="mt-2 h-12 w-full rounded-xl border border-[#211F1C]/10 bg-white/50 px-4 text-xs font-semibold outline-none"
                >
                  <option value="PENDING">
                    Pending
                  </option>

                  <option value="CONFIRMED">
                    Confirmed
                  </option>

                  <option value="SHIPPED">
                    Shipped
                  </option>

                  <option value="DELIVERED">
                    Delivered
                  </option>

                  <option value="CANCELLED">
                    Cancelled
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}