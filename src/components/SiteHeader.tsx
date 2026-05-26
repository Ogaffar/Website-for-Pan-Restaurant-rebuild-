import { Link } from "@tanstack/react-router";
import logo from "@/assets/pan-logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Pan" className="h-11 w-11" width={44} height={44} />
          <span className="font-display text-2xl text-primary">Pan</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] md:flex">
          <Link to="/menu" className="text-primary/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Menu</Link>
          <Link to="/about" className="text-primary/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Our Story</Link>
          <Link to="/visit" className="text-primary/80 hover:text-primary" activeProps={{ className: "text-primary" }}>Visit</Link>
        </nav>
        <a
          href="tel:+19104913105"
          className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm uppercase tracking-[0.16em] text-primary-foreground transition hover:bg-primary/90 sm:inline-block"
        >
          Call to Order
        </a>
      </div>
    </header>
  );
}
