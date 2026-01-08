export default function SectionTitle({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-zinc-600 shadow-soft">
          <span className="text-zinc-400">▶</span>
          <span>{eyebrow}</span>
        </div>
      ) : null}

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title.split(" ").map((w, i) =>
          i === 1 ? (
            <span key={i} className="text-zinc-400">
              {" "}{w}
            </span>
          ) : (
            <span key={i}>{" "}{w}</span>
          )
        )}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-500">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
