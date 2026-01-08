"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Portfolio from "@/components/Portfolio";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Palette, Sparkles, Zap } from "lucide-react";
import { site } from "@/lib/site";

export default function Page() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; // ✅ keep safe reference

  setSending(true);
  setStatus(null);

  const fd = new FormData(form);
  const payload = {
    name: String(fd.get("name") || ""),
    email: String(fd.get("email") || ""),
    message: String(fd.get("message") || "")
  };

  try {
    const res = await fetch(`${window.location.origin}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus(data?.error || "Failed to send message.");
      return;
    }

    setStatus("Message sent successfully!");
    form.reset(); // ✅ works (no null)
  } catch (err: any) {
    setStatus(`Network error: ${err?.message || "unknown"}`);
  } finally {
    setSending(false);
  }
  }
  return (
    <>
      <Header />

      {/* HERO */}
      <main>
        <section className="py-16 sm:py-20">
          <Container>
            <div className="text-center">
              <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-soft">
                <span className="text-zinc-400">▶</span>
                <span>{site.role}</span>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                Transform Your <span className="text-zinc-400">Raw Footage</span>{" "}
                Into Visual Magic
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-500">
                {site.intro}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex rounded-full bg-black px-8 py-3 text-sm font-medium text-white shadow-soft hover:opacity-90"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-medium text-black shadow-soft hover:opacity-90"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="text-sm font-semibold">Long Form</div>
                  <div className="mt-1 text-sm text-zinc-500">Documentaries & Films</div>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="text-sm font-semibold">Short Form</div>
                  <div className="mt-1 text-sm text-zinc-500">Reels & Social Content</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                {/* Add your image at public/avatar.jpg */}
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/avatar.jpg"
                    alt="Sabbir"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-600">
                  About Me
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Passionate About <span className="text-zinc-400">Visual Storytelling</span>
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-500">{site.aboutText1}</p>
                <p className="mt-4 text-base leading-7 text-zinc-500">{site.aboutText2}</p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  {site.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-4xl font-semibold">{s.value}</div>
                      <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SERVICES */}
<section id="services" className="py-16">
  <Container>
    <div className="text-center">
      <div className="mx-auto mb-3 inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-soft">
        Services
      </div>
      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        What I <span className="text-zinc-400">Do</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-500">
        Video editing, motion graphics, and post-production with fast delivery and consistent quality.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <ServiceCard
        title="Video Editing"
        desc={site.toolsLine}
        icon={Scissors}
      />
      <ServiceCard
        title="Color Grading"
        desc="Professional color correction and cinematic looks."
        icon={Palette}
      />
      <ServiceCard
        title="Motion Graphics"
        desc="After Effects animations, titles, and visual effects."
        icon={Sparkles}
      />
      <ServiceCard
        title="Quick Turnaround"
        desc="Fast delivery without compromising quality."
        icon={Zap}
      />
    </div>
  </Container>
</section>

        {/* PORTFOLIO */}
        <Container>
          <Portfolio />
        </Container>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <Container>
            <div className="text-center">
              <div className="mx-auto mb-3 inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-soft">
                Get in Touch
              </div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Let's Work <span className="text-zinc-400">Together</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-500">
                Have a project in mind? I’d love to hear about it. Send details and I’ll reply quickly.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="text-sm text-zinc-500">Email</div>
                <div className="mt-1 text-lg font-semibold">{site.email}</div>

                <div className="mt-6 text-sm text-zinc-500">Location</div>
                <div className="mt-1 text-lg font-semibold">{site.location}</div>

                <div className="mt-8 text-sm text-zinc-500">Follow me</div>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a className="rounded-full bg-zinc-100 px-4 py-2 text-sm hover:bg-zinc-200" href={site.socials.facebook} target="_blank">Facebook</a>
                  <a className="rounded-full bg-zinc-100 px-4 py-2 text-sm hover:bg-zinc-200" href={site.socials.instagram} target="_blank">Instagram</a>
                  <a className="rounded-full bg-zinc-100 px-4 py-2 text-sm hover:bg-zinc-200" href={site.socials.x} target="_blank">X</a>
                  <a className="rounded-full bg-zinc-100 px-4 py-2 text-sm hover:bg-zinc-200" href={site.socials.youtube} target="_blank">YouTube</a>
                </div>
              </div>

              <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-soft">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  name="name"
                  placeholder="Muhammad Sabbir"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  required
                />

                <label className="mt-5 block text-sm font-medium">Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  required
                />

                <label className="mt-5 block text-sm font-medium">Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 outline-none focus:ring-2 focus:ring-black/10"
                  required
                />

                <button
                  disabled={sending}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-soft hover:opacity-90 disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

                {status ? (
                  <p className="mt-3 text-sm text-zinc-600">{status}</p>
                ) : null}
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
