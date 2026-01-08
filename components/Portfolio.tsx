"use client";

import { useEffect, useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";

type Category = { _id: string; title: string; order?: number };
type Project = {
  _id: string;
  title: string;
  subtitle?: string;
  videoType: string;
  videoUrl: string;
  tags?: string[];
  categoryId: string;
};

const PAGE_SIZE = 3;

export default function Portfolio() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [hasMore, setHasMore] = useState(false);
  const [offset, setOffset] = useState(0);

  const activeCategory = useMemo(
    () => categories.find((c) => c._id === activeCategoryId) || null,
    [categories, activeCategoryId]
  );

  async function loadInitial() {
    setLoading(true);
    try {
      const res = await fetch(`/api/portfolio?limit=${PAGE_SIZE}`, { cache: "no-store" });
      const data = await res.json();

      setCategories(data.categories || []);
      setActiveCategoryId(data.activeCategoryId || null);
      setProjects(data.projects || []);
      setHasMore(Boolean(data.hasMore));
      setOffset((data.projects?.length || 0) as number);
    } finally {
      setLoading(false);
    }
  }

  async function loadCategory(categoryId: string) {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/portfolio?categoryId=${encodeURIComponent(categoryId)}&offset=0&limit=${PAGE_SIZE}`,
        { cache: "no-store" }
      );
      const data = await res.json();

      setActiveCategoryId(categoryId);
      setProjects(data.projects || []);
      setHasMore(Boolean(data.hasMore));
      setOffset((data.projects?.length || 0) as number);
    } finally {
      setLoading(false);
    }
  }

  async function loadMore() {
    if (!activeCategoryId || loadingMore || !hasMore) return;
    setLoadingMore(true);

    try {
      const res = await fetch(
        `/api/portfolio?categoryId=${encodeURIComponent(activeCategoryId)}&offset=${offset}&limit=${PAGE_SIZE}`,
        { cache: "no-store" }
      );
      const data = await res.json();

      const newItems: Project[] = data.projects || [];
      setProjects((prev) => [...prev, ...newItems]);
      setHasMore(Boolean(data.hasMore));
      setOffset((prev) => prev + newItems.length);
    } finally {
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    loadInitial();
  }, []);

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
          Explore my diverse portfolio of video editing projects.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-soft">
            {categories.map((c) => (
              <button
                key={c._id}
                onClick={() => loadCategory(c._id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  c._id === activeCategoryId
                    ? "bg-black text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        {loading ? (
          <p className="text-center text-zinc-500">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-zinc-500">
            No projects found in <b>{activeCategory?.title || "this category"}</b>.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard
                key={p._id}
                project={{
                  title: p.title,
                  subtitle: p.subtitle,
                  tags: p.tags,
                  // keep your VideoEmbed props:
                  video: { videoType: p.videoType as any, url: p.videoUrl },
                  // use category name as label:
                  typeLabel: activeCategory?.title || "Project",
                }}
              />
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          {hasMore ? (
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-medium shadow-soft hover:opacity-90 disabled:opacity-60"
            >
              {loadingMore ? "Loading..." : "View More"}
            </button>
          ) : projects.length > 0 ? (
            <button
              onClick={() => loadCategory(activeCategoryId || "")}
              className="rounded-full border border-black/10 bg-white px-8 py-3 text-sm font-medium shadow-soft hover:opacity-90"
            >
              Reload
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
