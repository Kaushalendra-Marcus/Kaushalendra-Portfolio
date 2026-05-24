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
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputCls = "w-full bg-transparent border-b border-white/[0.08] py-2.5 text-sm text-white/70 " +
    "placeholder-white/15 focus:outline-none focus:border-white/30 transition-colors duration-200";

  if (status === "success") {
    return (
      <section id="contact" className="mb-24 pb-16 border-b border-white/[0.06]">
        <p className="section-label">Contact</p>
        <p className="text-sm text-white/40">
          Got it. I&apos;ll reply within 24 hours.{" "}
          <button onClick={() => setStatus("idle")} className="text-white/60 hover:text-white underline transition-colors">
            Send another
          </button>
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="mb-24 pb-16 border-b border-white/[0.06]">
      <p className="section-label">Contact</p>

      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 mb-8">
        <div className="pt-0.5">
          <p className="text-sm text-white/40 leading-relaxed">
            Open to internships, freelance, and interesting projects.
            Prefer async - fill in the form or email directly.
          </p>
          <a
            href="mailto:yadavkausha4a5@gmail.com"
            className="text-xs text-white/25 font-mono mt-3 block link-underline hover:text-white/50 transition-colors"
          >
            yadavkausha4a5@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputCls} />
            </div>
            <div>
              <label className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" className={inputCls} />
            </div>
          </div>

          <div>
            <label className="text-[10px] text-white/20 uppercase tracking-widest block mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
              placeholder="What's up?" className={inputCls + " resize-none"} />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-400/70">
              Something went wrong. Email me at{" "}
              <a href="mailto:yadavkausha4a5@gmail.com" className="underline">yadavkausha4a5@gmail.com</a>
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="text-sm text-white/50 hover:text-white/90 border border-white/[0.08]
              hover:border-white/[0.18] rounded-lg px-5 py-2 transition-all duration-200
              disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
