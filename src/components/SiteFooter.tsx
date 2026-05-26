import { Link } from "@tanstack/react-router";
import logo from "@/assets/pan-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Pan" className="h-12 w-12" width={48} height={48} />
            <span className="font-display text-3xl">Pan</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Hand-crafted sandwiches, paninis & salads in the heart of downtown Fayetteville.
            Locally sourced, made to order, every single day.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-secondary">Visit</h4>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            105 Hay St<br />Fayetteville, NC 28301
          </p>
          <a href="https://maps.google.com/?q=105+Hay+St+Fayetteville+NC+28301" className="mt-3 inline-block text-sm underline underline-offset-4 hover:text-secondary">Get Directions →</a>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-secondary">Hours</h4>
          <ul className="mt-4 space-y-1 text-sm text-primary-foreground/80">
            <li>Mon–Fri · 9am – 3pm</li>
            <li>Sat · 9am – 3pm</li>
            <li>Sun · Closed</li>
          </ul>
          <a href="tel:+19104913105" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-secondary">(910) 491-3105</a>
          <div className="mt-5 flex gap-4 text-sm">
            <a href="https://www.instagram.com/pansandwiches/?hl=en" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-secondary">Instagram</a>
            <a href="https://www.facebook.com/panfaync/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-secondary">Facebook</a>
            <a href="https://www.yelp.com/biz/pan-fayetteville" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-secondary">Yelp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-sm uppercase tracking-[0.16em] text-primary-foreground/60 md:flex-row">
          <span>© {new Date().getFullYear()} Pan · Fayetteville, NC</span>
          <span>Made with sourdough &amp; care.</span>
        </div>
      </div>
    </footer>
  );
}
