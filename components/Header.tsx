import Container from "./Container";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Portfolio" },
  { href: "#contact", label: "Get in Touch" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f5f5]/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">{site.name}</div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-black">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu (simple) */}
          <a
            href="#contact"
            className="inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-soft hover:opacity-90 sm:hidden"
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}
