"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm]     = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // ─── SETUP: Go to https://formspree.io → New Form → copy the ID → replace below ───
    // e.g. if your form URL is https://formspree.io/f/abcdefgh, use "abcdefgh"
    const FORMSPREE_ID = "YOUR_FORM_ID";
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
    "w-full bg-transparent border-b border-white/[0.08] py-2.5 text-sm text-white/70 " +
    "placeholder-white/15 focus:outline-none focus:border-white/30 transition-colors duration-200";

  if (status === "success") {
    return (
      <section id="contact" className="mb-24 pb-16 border-b border-white/[0.06]">
        <p className="section-label">Contact</p>
        <p className="text-sm text-white/40">
          Got it. I&apos;ll reply within 24 hours.{" "}
          <button
            onClick={() => setStatus("idle")}
            className="text-white/60 hover:text-white underline transition-colors"
          >
            Send another
          </button>
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="mb-24 pb-16 border-b border-white/[0.06]">
      <p className="section-label">Contact</p>

      <div className="flex flex-col sm:flex-row sm:gap-8">
        {/* Left: blurb */}
        <div className="flex-shrink-0 sm:w-44 mb-6 sm:mb-0">
          <p className="text-sm text-white/35 leading-relaxed">
            Open to internships, freelance, and interesting projects.
            Fill in the form or email directly.
          </p>
          <a
            href="mailto:yadavkausha4a5@gmail.com"
            className="text-xs text-white/20 font-mono mt-3 block link-underline hover:text-white/45 transition-colors"
          >
            yadavkausha4a5@gmail.com
          </a>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex-1 min-w-0 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="What's up?"
              className={inputCls + " resize-none"}
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-400/70">
              Something went wrong. Email me at{" "}
              <a href="mailto:yadavkausha4a5@gmail.com" className="underline">
                yadavkausha4a5@gmail.com
              </a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="text-sm text-white/45 hover:text-white/80
              border border-white/[0.08] hover:border-white/[0.18]
              rounded-lg px-5 py-2 transition-all duration-200
              disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
