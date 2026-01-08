import VideoEmbed from "./VideoEmbed";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-3xl bg-white shadow-soft">
      <div className="p-4">
        <VideoEmbed
          videoType={project.video.videoType}
          url={project.video.url}
          variant={project.type}
        />
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span className="rounded-full bg-zinc-100 px-3 py-1">
            {project.type === "long" ? "Long Form" : "Short Form"}
          </span>
          <span>{project.subtitle ?? "Video Edit"}</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>

        {project.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
