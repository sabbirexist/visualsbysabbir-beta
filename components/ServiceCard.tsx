import { LucideIcon } from "lucide-react";

export default function ServiceCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      {/* ICON */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100">
        <Icon className="h-6 w-6 text-zinc-700" />
      </div>

      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
    </div>
  );
}
