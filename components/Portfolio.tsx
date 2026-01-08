"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const [tab, setTab] = useState<"long" | "short">("long");

  const filtered = useMemo(
    () => projects.filter((p) => p.type === tab),
    [tab]
  );

  return (
    <section id="work" className="py-16">
      <div className="text-center">
        <div className="mx-auto mb-3 inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-soft">
          Portfolio
        </div>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Selected <span className="text-zinc-400">Work</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-500">
          From documentaries to social reels — explore my diverse portfolio of video editing projects.
        </p>

        <div className="mx-auto mt-8 inline-flex rounded-full bg-white p-1 shadow-soft">
          <button
            className={`rounded-full px-6 py-2 text-sm font-medium ${
              tab === "long" ? "bg-black text-white" : "text-zinc-600"
            }`}
            onClick={() => setTab("long")}
          >
            Long Form
          </button>
          <button
            className={`rounded-full px-6 py-2 text-sm font-medium ${
              tab === "short" ? "bg-black text-white" : "text-zinc-600"
            }`}
            onClick={() => setTab("short")}
          >
            Short Form
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#contact"
          className="inline-flex rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-medium text-black shadow-soft hover:opacity-90"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
