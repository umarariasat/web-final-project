"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Trash2,
  Mail,
  X,
  ChevronRight,
  MessageSquare,
  RefreshCw,
  Inbox,
  Clock3,
  Tag,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default function AdminMessagesPage() {
  const router = useRouter();
type Message = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};
const [messages, setMessages] = useState<Message[]>([]);
const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
const [deleting, setDeleting] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");


  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);


  // =========================================================
  // LOAD MESSAGES FROM DATABASE
  // =========================================================

  async function loadMessages(showRefresh = false) {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await fetch("/api/admin/messages", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to load messages.");
      }

      setMessages(data.messages || []);
    } catch (error) {
      console.error("Failed to load messages:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  // =========================================================
  // DELETE MESSAGE
  // =========================================================

    async function deleteMessage(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmed) return;

    try {
      setDeleting(id);

      const response = await fetch("/api/admin/messages", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete message.");
      }

      setMessages((current) =>
        current.filter((message) => message.id !== id)
      );

      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Delete error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setDeleting(null);
    }
  }

  // =========================================================
  // SUBJECTS
  // =========================================================

  const subjects = useMemo(() => {
    return [
      ...new Set(
        messages
          .map((message) => message.subject)
          .filter(Boolean)
      ),
    ];
  }, [messages]);

  // =========================================================
  // FILTERED MESSAGES
  // =========================================================

  const filteredMessages = useMemo(() => {
    const query = search.toLowerCase().trim();

    return messages.filter((message) => {
      const matchesSearch =
        !query ||
        message.name?.toLowerCase().includes(query) ||
        message.email?.toLowerCase().includes(query) ||
        message.subject?.toLowerCase().includes(query) ||
        message.message?.toLowerCase().includes(query);

      const matchesFilter =
        filter === "all" || message.subject === filter;

      return matchesSearch && matchesFilter;
    });
  }, [messages, search, filter]);

  // =========================================================
  // STATISTICS
  // =========================================================

  const latestMessage = useMemo(() => {
    if (!messages.length) return null;

    return [...messages].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )[0];
  }, [messages]);

  // =========================================================
  // DATE FORMAT
  // =========================================================

  function formatDate(date: string) {
    if (!date) return "Unknown";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

 function formatDateTime(date: string) {
    if (!date) return "Unknown";

    return new Date(date).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#211F1C]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-7 lg:px-10 lg:py-10">

        {/* =====================================================
            BACK BUTTON
        ===================================================== */}

        <div className="mb-8">
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="group inline-flex items-center gap-2 rounded-full border border-[#211F1C]/10 bg-white/40 px-4 py-2.5 text-[8px] font-black uppercase tracking-[0.2em] transition hover:bg-[#211F1C] hover:text-[#F7F3EC]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />

            Back to Dashboard
          </button>
        </div>

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="border-t border-[#211F1C]/10 pt-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#211F1C]" />

                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#211F1C]/40">
                  Admin / Messages
                </span>
              </div>

              <h1 className="mt-5 text-5xl font-black uppercase leading-[0.8] tracking-[-0.08em] sm:text-6xl lg:text-7xl">
                Messages.
              </h1>

              <p className="mt-5 max-w-md text-xs leading-5 text-[#211F1C]/45">
                View and manage customer questions, product
                enquiries, and messages received through Paw & Co.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => loadMessages(true)}
                disabled={refreshing}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#211F1C]/10 bg-white/40 transition hover:bg-[#211F1C] hover:text-[#F7F3EC] disabled:opacity-40"
                aria-label="Refresh messages"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    refreshing ? "animate-spin" : ""
                  }`}
                />
              </button>

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE8D5]">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">

          {/* TOTAL */}

          <div className="rounded-3xl border border-[#211F1C]/10 bg-white/40 p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35">
                  Total
                </p>

                <p className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  {messages.length}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8D5]">
                <Inbox className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* SHOWING */}

          <div className="rounded-3xl border border-[#211F1C]/10 bg-white/40 p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35">
                  Showing
                </p>

                <p className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  {filteredMessages.length}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8C3]/60">
                <Search className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* TOPICS */}

          <div className="rounded-3xl border border-[#211F1C]/10 bg-white/40 p-5 sm:p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#211F1C]/35">
                  Topics
                </p>

                <p className="mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                  {subjects.length}
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDE8D5]">
                <Tag className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* LATEST */}

          <div className="col-span-2 rounded-3xl bg-[#211F1C] p-5 text-[#F7F3EC] lg:col-span-1 sm:p-6">
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <p className="text-[7px] font-black uppercase tracking-[0.25em] text-[#F7F3EC]/40">
                  Latest Message
                </p>

                <p className="mt-3 truncate text-sm font-black uppercase">
                  {latestMessage?.name || "No messages"}
                </p>

                <p className="mt-1 truncate text-[9px] text-[#F7F3EC]/40">
                  {latestMessage
                    ? formatDate(latestMessage.createdAt)
                    : "Waiting for messages"}
                </p>
              </div>

              <Clock3 className="h-4 w-4 shrink-0 text-[#F7F3EC]/50" />
            </div>
          </div>

        </div>

        {/* =====================================================
            SEARCH / FILTER BAR
        ===================================================== */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#211F1C]/30" />

            <input
              type="text"
              placeholder="Search name, email, subject or message..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="w-full rounded-full border border-[#211F1C]/10 bg-white/50 py-3.5 pl-11 pr-4 text-xs font-medium outline-none placeholder:text-[#211F1C]/25 focus:border-[#211F1C]/30"
            />
          </div>

          <select
            value={filter}
            onChange={(event) =>
              setFilter(event.target.value)
            }
            className="rounded-full border border-[#211F1C]/10 bg-white/50 px-5 py-3.5 text-xs font-semibold outline-none"
          >
            <option value="all">All Topics</option>

            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>

        </div>

        {/* =====================================================
            ACTIVE FILTER INFO
        ===================================================== */}

        {(search || filter !== "all") && (
          <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-[#211F1C]/10 bg-white/30 px-4 py-3">

            <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/40">
              {filteredMessages.length} result
              {filteredMessages.length === 1 ? "" : "s"} found
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="text-[8px] font-black uppercase tracking-[0.15em] underline underline-offset-4"
            >
              Clear
            </button>

          </div>
        )}

        {/* =====================================================
            MESSAGE LIST
        ===================================================== */}

        <div className="mt-6 overflow-hidden rounded-3xl border border-[#211F1C]/10 bg-white/35">

          {loading ? (
            <div className="px-6 py-20 text-center">
              <RefreshCw className="mx-auto h-5 w-5 animate-spin text-[#211F1C]/30" />

              <p className="mt-5 text-xs font-semibold text-[#211F1C]/40">
                Loading messages from database...
              </p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="px-6 py-20 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DDE8D5]">
                <Mail className="h-5 w-5" />
              </div>

              <p className="mt-5 text-sm font-black uppercase">
                No Messages
              </p>

              <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#211F1C]/40">
                {messages.length === 0
                  ? "Customer messages will appear here when someone submits the contact form."
                  : "No messages match your current search or filter."}
              </p>

            </div>
          ) : (
            <div>
              {filteredMessages.map((message, index) => (
                <div
                  key={message.id}
                  className={`group grid gap-5 p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center ${
                    index !== filteredMessages.length - 1
                      ? "border-b border-[#211F1C]/10"
                      : ""
                  }`}
                >

                  {/* MESSAGE CONTENT */}

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedMessage(message)
                    }
                    className="min-w-0 text-left"
                  >
                    <div className="flex items-start gap-4">

                      {/* AVATAR */}

                      <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDE8D5] text-sm font-black sm:flex">
                        {message.name
                          ?.charAt(0)
                          ?.toUpperCase() || "?"}
                      </div>

                      {/* DETAILS */}

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-2">

                          <p className="text-sm font-black">
                            {message.name || "Unknown"}
                          </p>

                          {message.subject && (
                            <span className="rounded-full bg-[#E8D8C3]/50 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.15em]">
                              {message.subject}
                            </span>
                          )}

                        </div>

                        <p className="mt-1 truncate text-[10px] text-[#211F1C]/40">
                          {message.email}
                        </p>

                        <p className="mt-3 line-clamp-2 max-w-3xl text-xs leading-5 text-[#211F1C]/55">
                          {message.message}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">

                          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/25">
                            {formatDate(message.createdAt)}
                          </p>

                          <span className="h-1 w-1 rounded-full bg-[#211F1C]/20" />

                          <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/25">
                            #{message.id}
                          </p>

                        </div>

                      </div>
                    </div>
                  </button>

                  {/* ACTIONS */}

                  <div className="flex items-center gap-2 pl-0 lg:justify-end lg:pl-4">

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedMessage(message)
                      }
                      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#211F1C]/10 px-4 py-2.5 text-[7px] font-black uppercase tracking-[0.2em] transition hover:bg-[#211F1C] hover:text-[#F7F3EC] sm:flex-none"
                    >
                      View

                      <ChevronRight className="h-3 w-3" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteMessage(message.id)
                      }
                      disabled={deleting === message.id}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-200 text-red-500 transition hover:bg-red-500 hover:text-white disabled:opacity-40"
                      aria-label="Delete message"
                    >
                      {deleting === message.id ? (
                        <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Trash2 className="h-3.5 w-3.5" />
                      )}
                    </button>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>

        {/* =====================================================
            FOOTER INFO
        ===================================================== */}

        {!loading && messages.length > 0 && (
          <div className="mt-5 flex flex-col gap-2 text-[7px] font-bold uppercase tracking-[0.2em] text-[#211F1C]/25 sm:flex-row sm:items-center sm:justify-between">

            <span>
              Showing {filteredMessages.length} of{" "}
              {messages.length} messages
            </span>

            <span>
              Connected to Paw & Co. database
            </span>

          </div>
        )}

      </div>

      {/* =======================================================
          MESSAGE MODAL
      ======================================================= */}

      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#211F1C]/50 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedMessage(null)}
        >

          <div
            className="my-auto w-full max-w-2xl rounded-3xl bg-[#F7F3EC] p-6 shadow-2xl sm:p-8"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="flex items-start justify-between gap-5">

              <div className="min-w-0">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DDE8D5] text-sm font-black">
                    {selectedMessage.name
                      ?.charAt(0)
                      ?.toUpperCase() || "?"}
                  </div>

                  <div>
                    <span className="text-[7px] font-black uppercase tracking-[0.3em] text-[#211F1C]/35">
                      Customer Message
                    </span>

                    <h2 className="mt-1 truncate text-2xl font-black uppercase tracking-[-0.06em] sm:text-3xl">
                      {selectedMessage.name}
                    </h2>
                  </div>
                </div>

                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="mt-4 block break-all text-xs font-semibold underline underline-offset-4"
                >
                  {selectedMessage.email}
                </a>

              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedMessage(null)
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#211F1C]/10 transition hover:bg-[#211F1C] hover:text-[#F7F3EC]"
                aria-label="Close message"
              >
                <X className="h-4 w-4" />
              </button>

            </div>

            {/* MESSAGE */}

            <div className="mt-8 rounded-2xl bg-white/50 p-5 sm:p-6">

              <div className="flex flex-wrap items-center justify-between gap-3">

                <span className="rounded-full bg-[#DDE8D5] px-3 py-1.5 text-[7px] font-black uppercase tracking-[0.18em]">
                  {selectedMessage.subject ||
                    "General Question"}
                </span>

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#211F1C]/30">
                  {formatDateTime(
                    selectedMessage.createdAt
                  )}
                </span>

              </div>

              <div className="mt-6 border-t border-[#211F1C]/10 pt-6">

                <p className="whitespace-pre-wrap text-sm leading-7 text-[#211F1C]/70">
                  {selectedMessage.message}
                </p>

              </div>

            </div>

            {/* MODAL ACTIONS */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">

              <a
                href={`mailto:${selectedMessage.email}?subject=${encodeURIComponent(
                  `Re: ${selectedMessage.subject || "Your message"}`
                )}`}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#211F1C] px-6 py-3 text-[8px] font-black uppercase tracking-[0.2em] text-[#F7F3EC] transition hover:-translate-y-0.5"
              >
                Reply By Email

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() =>
                  deleteMessage(selectedMessage.id)
                }
                disabled={
                  deleting === selectedMessage.id
                }
                className="rounded-full border border-red-200 px-6 py-3 text-[8px] font-black uppercase tracking-[0.2em] text-red-500 transition hover:bg-red-500 hover:text-white disabled:opacity-40"
              >
                {deleting === selectedMessage.id
                  ? "Deleting..."
                  : "Delete"}
              </button>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}