"use client";

import { useState } from "react";
import { FaEnvelope, FaXTwitter, FaCalendarDays, FaArrowUpRightFromSquare, FaArrowRight, FaClock, FaCircleCheck } from "react-icons/fa6";

type Status = "idle" | "sending" | "success" | "error";

const METHODS = [
  {
    icon: <FaCalendarDays />,
    title: "Book a free call",
    subtitle: "30 min, no pressure",
    href: "https://cal.com/kaushalendra/30min",
  },
  {
    icon: <FaEnvelope />,
    title: "yadavkausha4a5@gmail.com",
    subtitle: "Best for detailed questions",
    href: "mailto:yadavkausha4a5@gmail.com",
  },
  {
    icon: <FaXTwitter />,
    title: "Follow on X",
    subtitle: "Occasional build-in-public updates",
    href: "https://x.com/kaushalxcode",
  },
];

function GetInTouchCard() {
  return (
    <div className="bg-card border border-foreground/[0.06] rounded-2xl p-6 h-full">
      <h3 className="text-base font-semibold text-foreground/85 mb-1.5">Ways to Connect</h3>
      <p className="text-sm text-foreground/40 leading-relaxed mb-5">
        Open to backend/AI engineering roles, internships, and freelance
        work — especially anything involving retrieval, agents, or LLM
        infrastructure.
      </p>

      <div className="divide-y divide-foreground/[0.06] border-y border-foreground/[0.06] mb-5">
        {METHODS.map((m) => (
          <a
            key={m.title}
            href={m.href}
            target={m.href.startsWith("http") ? "_blank" : undefined}
            rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-3.5 py-3.5 hover:bg-foreground/[0.03] transition-colors duration-200 -mx-1 px-1 rounded-lg"
          >
            <span className="w-9 h-9 rounded-lg bg-foreground/[0.04] border border-foreground/[0.07]
              flex items-center justify-center text-foreground/45 group-hover:text-foreground/75
              group-hover:border-foreground/[0.14] transition-all duration-200 flex-shrink-0 text-sm">
              {m.icon}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-medium text-foreground/75 group-hover:text-foreground/95 transition-colors duration-200 truncate">
                {m.title}
              </span>
              <span className="block text-xs text-foreground/35 mt-0.5">{m.subtitle}</span>
            </span>
            <FaArrowUpRightFromSquare className="text-[10px] text-foreground/20 group-hover:text-foreground/50 transition-colors duration-200 flex-shrink-0" />
          </a>
        ))}
      </div>

      <div className="space-y-2">
        <p className="flex items-center gap-2 text-xs text-foreground/35">
          <FaClock className="text-[11px] text-foreground/30" />
          Usually replies within a day
        </p>
        <p className="flex items-center gap-2 text-xs text-foreground/35">
          <FaCircleCheck className="text-[11px] text-foreground/30" />
          Available for remote, freelance, or full-time
        </p>
      </div>
    </div>
  );
}

function SendMessageCard() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const FORMSPREE_ID = "xqejwjww";
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputCls =
    "w-full bg-foreground/[0.02] border border-foreground/[0.10] rounded-lg px-3.5 py-2.5 text-sm text-foreground/85 " +
    "placeholder-foreground/30 focus:outline-none focus:border-foreground/30 focus:bg-foreground/[0.04] transition-colors duration-200";

  if (status === "success") {
    return (
      <div className="bg-card border border-foreground/[0.06] rounded-2xl p-6 h-full flex flex-col items-start justify-center min-h-[280px]">
        <h3 className="text-base font-semibold text-foreground/85 mb-2">Message sent</h3>
        <p className="text-sm text-foreground/45 leading-relaxed">
          Got it. I&apos;ll reply within 24 hours.{" "}
          <button
            onClick={() => setStatus("idle")}
            className="text-foreground/65 hover:text-foreground underline transition-colors"
          >
            Send another
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-foreground/[0.06] rounded-2xl p-6 h-full">
      <h3 className="text-base font-semibold text-foreground/85 mb-1.5">Quick Message</h3>
      <p className="text-sm text-foreground/40 leading-relaxed mb-5">
        Or type it out here — goes straight to my inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
          className={inputCls}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className={inputCls}
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="What's up?"
          className={inputCls + " resize-none"}
        />

        {status === "error" && (
          <p className="text-xs text-destructive/80">
            Something went wrong. Email me at{" "}
            <a href="mailto:yadavkausha4a5@gmail.com" className="underline">
              yadavkausha4a5@gmail.com
            </a>
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex items-center justify-center gap-2 text-sm font-medium text-foreground/90
            bg-foreground/[0.06] hover:bg-foreground/[0.10] border border-foreground/[0.09]
            rounded-lg px-5 py-2.5 transition-all duration-200
            disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send it over"}
          {status !== "sending" && <FaArrowRight className="text-xs" />}
        </button>
      </form>
    </div>
  );
}

export default function ContactForm() {
  return (
    <section id="contact" className="mb-16 pb-10 border-b border-foreground/[0.06]">
      <p className="section-label">Contact</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        <GetInTouchCard />
        <SendMessageCard />
      </div>
    </section>
  );
}
