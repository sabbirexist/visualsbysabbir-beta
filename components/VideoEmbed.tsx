"use client";

import ReactPlayer from "react-player";
import { gdriveToPreview } from "@/lib/utils";

export default function VideoEmbed({
  videoType,
  url,
  variant
}: {
  videoType: "youtube" | "vimeo" | "direct" | "iframe" | "gdrive";
  url: string;
  variant: "long" | "short";
}) {
  // Aspect ratio:
  // long  → 16:9
  // short → 9:16
  const aspectClass =
    variant === "long" ? "aspect-video" : "aspect-[9/16]";

  if (videoType === "iframe") {
    return (
      <div className={`${aspectClass} w-full overflow-hidden rounded-2xl bg-black shadow-soft`}>
        <iframe
          className="h-full w-full"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  if (videoType === "gdrive") {
    const preview = gdriveToPreview(url);
    return (
      <div className={`${aspectClass} w-full overflow-hidden rounded-2xl bg-black shadow-soft`}>
        <iframe
          className="h-full w-full"
          src={preview}
          allow="autoplay"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={`${aspectClass} w-full overflow-hidden rounded-2xl bg-black shadow-soft`}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playsinline
      />
    </div>
  );
}
