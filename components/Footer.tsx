import Container from "./Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="text-center text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</div>
          <div className="mt-3 flex flex-wrap justify-center gap-4">
            <a className="hover:text-black" href={site.socials.facebook} target="_blank">Facebook</a>
            <a className="hover:text-black" href={site.socials.instagram} target="_blank">Instagram</a>
            <a className="hover:text-black" href={site.socials.x} target="_blank">X</a>
            <a className="hover:text-black" href={site.socials.youtube} target="_blank">YouTube</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
