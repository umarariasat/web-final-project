"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  LayoutDashboard,
  Package,
  ShoppingBag,
  MessageSquare,
  LogOut,
  Plus,
  ChevronRight,
} from "lucide-react";

type RecentOrder = {
  id: string | number;
  customer: string;
  total: string | number;
  status: string;
};

type DashboardStat = {
  label: string;
  value: string;
  description: string;
  href: string;
  icon: typeof Package;
};

type DashboardData = {
  products?: number;
  orders?: number;
  messages?: number;
  recentOrders?: RecentOrder[];
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStat[]>([
    {
      label: "Products",
      value: "0",
      description: "Total products",
      href: "/admin/products",
      icon: Package,
    },
    {
      label: "Orders",
      value: "0",
      description: "Total orders",
      href: "/admin/orders",
      icon: ShoppingBag,
    },
    {
      label: "Messages",
      value: "0",
      description: "Customer messages",
      href: "/admin/messages",
      icon: MessageSquare,
    },
  ]);

  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const response = await fetch("/api/admin/stats", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load dashboard data");
        }

        const data: DashboardData = await response.json();

        setStats([
          {
            label: "Products",
            value: String(data.products ?? 0),
            description: "Total products",
            href: "/admin/products",
            icon: Package,
          },
          {
            label: "Orders",
            value: String(data.orders ?? 0),
            description: "Total orders",
            href: "/admin/orders",
            icon: ShoppingBag,
          },
          {
            label: "Messages",
            value: String(data.messages ?? 0),
            description: "Customer messages",
            href: "/admin/messages",
            icon: MessageSquare,
          },
        ]);

        setRecentOrders(data.recentOrders ?? []);
      } catch (error) {
        console.error("Dashboard error:", error);
      }
    }

    loadDashboard();
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C]">
      {/* MOBILE HEADER */}
      <header className="border-b border-[#211F1C]/10 bg-[#F7F3EC] px-5 py-4 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#211F1C] text-sm text-[#F7F3EC]">
              🐾
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[-0.04em]">
                Paw & Co.
              </p>

              <p className="text-[6px] font-bold uppercase tracking-[0.25em] text-[#211F1C]/35">
                Admin
              </p>
            </div>
          </Link>

          <Link
            href="/admin/login"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#211F1C]/10"
            title="Logout"
          >
            <LogOut className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 border-r border-[#211F1C]/10 lg:flex lg:flex-col">
          {/* Logo */}
          <div className="border-b border-[#211F1C]/10 p-7">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211F1C] text-sm text-[#F7F3EC]">
                🐾
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[-0.04em]">
                  Paw & Co.
                </p>

                <p className="mt-1 text-[6px] font-bold uppercase tracking-[0.3em] text-[#211F1C]/35">
                  Admin Panel
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-5">
            <p className="mb-3 px-3 text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/30">
              Management
            </p>

            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-xl bg-[#211F1C] px-3 py-3 text-[#F7F3EC]"
              >
                <LayoutDashboard className="h-4 w-4" />

                <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                  Dashboard
                </span>
              </Link>

              <Link
                href="/admin/products"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#211F1C]/50 transition hover:bg-[#211F1C]/5 hover:text-[#211F1C]"
              >
                <Package className="h-4 w-4" />

                <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                  Products
                </span>
              </Link>

              <Link
                href="/admin/orders"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#211F1C]/50 transition hover:bg-[#211F1C]/5 hover:text-[#211F1C]"
              >
                <ShoppingBag className="h-4 w-4" />

                <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                  Orders
                </span>
              </Link>

              <Link
                href="/admin/messages"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#211F1C]/50 transition hover:bg-[#211F1C]/5 hover:text-[#211F1C]"
              >
                <MessageSquare className="h-4 w-4" />

                <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                  Messages
                </span>
              </Link>
            </div>
          </nav>

          {/* Sidebar bottom */}
          <div className="border-t border-[#211F1C]/10 p-5">
            <Link
              href="/"
              className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-[#211F1C]/45 transition hover:bg-[#211F1C]/5 hover:text-[#211F1C]"
            >
              <ArrowUpRight className="h-4 w-4" />

              <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                View Website
              </span>
            </Link>

            <Link
              href="/admin/login"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-[#211F1C]/45 transition hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4" />

              <span className="text-[9px] font-black uppercase tracking-[0.15em]">
                Logout
              </span>
            </Link>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="min-w-0 flex-1 px-5 py-7 sm:px-7 lg:px-10 lg:py-10">
          {/* Top bar */}
          <div className="flex flex-col gap-5 border-b border-[#211F1C]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-7 bg-[#211F1C]" />

                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                  Paw & Co. / Admin
                </span>
              </div>

              <h1 className="text-4xl font-black uppercase leading-none tracking-[-0.07em] sm:text-5xl">
                Dashboard
              </h1>

              <p className="mt-3 text-xs text-[#211F1C]/40">
                Welcome back. Here's what's happening with your store.
              </p>
            </div>

            <Link
              href="/admin/products"
              className="group flex w-fit items-center gap-4 rounded-full bg-[#211F1C] py-2.5 pl-5 pr-2.5 text-[#F7F3EC]"
            >
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                Add Product
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C] transition-transform duration-300 group-hover:rotate-45">
                <Plus className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Link
                  key={stat.label}
                  href={stat.href}
                  className="group rounded-2xl border border-[#211F1C]/10 bg-white/30 p-5 transition hover:-translate-y-1 hover:bg-white/50"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8D5]">
                      <Icon className="h-4 w-4" />
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#211F1C]/25 transition group-hover:rotate-45 group-hover:text-[#211F1C]" />
                  </div>

                  <p className="mt-8 text-4xl font-black tracking-[-0.06em]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[8px] font-black uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>

                  <p className="mt-2 text-[10px] text-[#211F1C]/35">
                    {stat.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* CONTENT GRID */}
          <div className="mt-7 grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            {/* Recent orders */}
            <div className="rounded-2xl border border-[#211F1C]/10 bg-white/30">
              <div className="flex items-center justify-between border-b border-[#211F1C]/10 p-5">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35">
                    Recent Activity
                  </p>

                  <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.04em]">
                    Recent Orders
                  </h2>
                </div>

                <Link
                  href="/admin/orders"
                  className="flex items-center gap-1 text-[7px] font-black uppercase tracking-[0.2em] text-[#211F1C]/40 hover:text-[#211F1C]"
                >
                  View All

                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              {recentOrders.length === 0 ? (
                <div className="flex min-h-52 flex-col items-center justify-center px-5 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DDE8D5] text-lg">
                    🐾
                  </div>

                  <p className="mt-4 text-sm font-black uppercase tracking-[-0.02em]">
                    No Orders Yet
                  </p>

                  <p className="mt-2 max-w-xs text-[10px] leading-5 text-[#211F1C]/35">
                    When customers place orders, they will appear here.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#211F1C]/10">
                  {recentOrders.map((order) => (
                    <Link
                      key={order.id}
                      href={`/admin/orders/${order.id}`}
                      className="flex items-center justify-between gap-4 p-5 transition hover:bg-[#211F1C]/5"
                    >
                      <div>
                        <p className="text-xs font-bold">
                          {order.customer}
                        </p>

                        <p className="mt-1 text-[9px] text-[#211F1C]/35">
                          Order #{order.id}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-xs font-black">
                          {order.total}
                        </p>

                        <p className="mt-1 text-[8px] font-bold uppercase text-[#211F1C]/35">
                          {order.status}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions */}
            <div className="rounded-2xl border border-[#211F1C]/10 bg-[#E8D8C3]/25 p-5">
              <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35">
                Quick Actions
              </p>

              <div className="mt-5 space-y-2">
                <Link
                  href="/admin/products"
                  className="group flex items-center justify-between rounded-xl bg-[#211F1C] p-4 text-[#F7F3EC]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DDE8D5] text-[#211F1C]">
                      <Package className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[8px] font-black uppercase tracking-[0.15em]">
                      Add Product
                    </span>
                  </div>

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>

                <Link
                  href="/admin/products"
                  className="flex items-center justify-between rounded-xl bg-[#F7F3EC] p-4 transition hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#211F1C]/5">
                      <Package className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[8px] font-black uppercase tracking-[0.15em]">
                      Manage Products
                    </span>
                  </div>

                  <ChevronRight className="h-4 w-4 text-[#211F1C]/30" />
                </Link>

                <Link
                  href="/admin/orders"
                  className="flex items-center justify-between rounded-xl bg-[#F7F3EC] p-4 transition hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#211F1C]/5">
                      <ShoppingBag className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[8px] font-black uppercase tracking-[0.15em]">
                      Manage Orders
                    </span>
                  </div>

                  <ChevronRight className="h-4 w-4 text-[#211F1C]/30" />
                </Link>

                <Link
                  href="/admin/messages"
                  className="flex items-center justify-between rounded-xl bg-[#F7F3EC] p-4 transition hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#211F1C]/5">
                      <MessageSquare className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[8px] font-black uppercase tracking-[0.15em]">
                      Customer Messages
                    </span>
                  </div>

                  <ChevronRight className="h-4 w-4 text-[#211F1C]/30" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-7 flex flex-col gap-3 border-t border-[#211F1C]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/25">
              Paw & Co. / Store Management
            </p>

            <Link
              href="/"
              className="flex w-fit items-center gap-2 text-[7px] font-black uppercase tracking-[0.2em] text-[#211F1C]/35 transition hover:text-[#211F1C]"
            >
              View Store

              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}