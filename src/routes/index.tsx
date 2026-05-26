import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MenuLightbox, MenuItemCard, type MenuItem } from "@/components/MenuLightbox";
import heroImg from "@/assets/hero-panini.jpg";
import subImg from "@/assets/sub.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import saladImg from "@/assets/salad.jpg";
import interiorImg from "@/assets/interior.jpg";
import icarusImg from "@/assets/menu/icarus.jpg";
import leclairImg from "@/assets/menu/leclair.jpg";
import gilbertImg from "@/assets/menu/gilbert.jpg";
import mediterraneanImg from "@/assets/menu/mediterranean.jpg";
import bodegaImg from "@/assets/menu/bodega.jpg";
import bigItalianImg from "@/assets/menu/big-italian.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const reviews = [
  {
    quote: "Hands down the best deli sandwiches we've ever had. Very fresh ingredients. Bursting with flavor.",
    author: "Matt T.",
    meta: "Local Guide · 57 reviews",
  },
  {
    quote: "I'm considering trips to Fayetteville just for this place. After today I'm convinced.",
    author: "R Vitale",
    meta: "Visiting from out of town",
  },
  {
    quote: "The Icarus panini was easily one of the best sandwiches I've ever had. We're from Ohio and our standards are high.",
    author: "Kayla",
    meta: "Local Guide",
  },
];

const highlights: MenuItem[] = [
  { name: "The Icarus", desc: "Smoked turkey, sweet tomato pesto, fresh mozzarella, arugula, pressed on ciabatta.", price: "14", image: icarusImg },
  { name: "LeClair Panini", desc: "Italian classics layered with house-made dressings and quality deli meats.", price: "13", image: leclairImg },
  { name: "The Gilbert", desc: "Smoked chicken, provolone, fig jam, peppered greens. A house favorite.", price: "14", image: gilbertImg },
  { name: "Mediterranean Salad", desc: "Crisp greens, feta, kalamata olives, cucumber, pistachio vinaigrette.", price: "12", image: mediterraneanImg },
  { name: "Bodega Bagel", desc: "Asiago bagel, scrambled egg, sharp cheddar, choice of bacon or sausage.", price: "9", image: bodegaImg },
  { name: "Big Italian Sub", desc: "Salami, capicola, mozzarella, hot peppers, oil & vinegar on focaccia.", price: "15", image: bigItalianImg },
];

function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-32">
          <div className="md:col-span-6 md:pt-12">
            <p className="text-sm uppercase tracking-[0.28em] text-primary/70">Downtown Fayetteville · Est. 2022</p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-primary md:text-8xl">
              Sandwiches,<br />
              <span className="italic text-secondary">made with love.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              Hand-crafted paninis, hearty subs and seasonal salads built on local sourdough,
              house dressings and the best ingredients we can find. No shortcuts, no compromises.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-primary/90"
              >
                See the Menu
                <span aria-hidden>→</span>
              </Link>
              <a
                href="tel:+19104913105"
                className="inline-flex items-center gap-3 rounded-sm border border-primary/40 px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary transition hover:bg-primary/5"
              >
                Call to Order
              </a>
            </div>

            <div className="mt-14 flex items-center gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-4xl text-primary">4.9<span className="text-secondary">★</span></div>
                <div className="text-sm uppercase tracking-[0.16em] text-muted-foreground">241 Google reviews</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="font-display text-4xl text-primary">100%</div>
                <div className="text-sm uppercase tracking-[0.16em] text-muted-foreground">Made to order</div>
              </div>
            </div>
          </div>

          <div className="relative md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="Pressed Italian panini cut in half on parchment paper"
                className="h-full w-full object-cover"
                width={1600}
                height={1200}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden bg-secondary px-6 py-5 text-secondary-foreground shadow-xl md:block">
              <p className="font-display text-2xl italic leading-tight">"Best deli sandwiches<br />we've ever had."</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em]">Google · 5 stars</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-secondary">Today's Board</p>
              <h2 className="mt-3 font-display text-5xl text-primary md:text-6xl">Menu Highlights</h2>
            </div>
            <Link to="/menu" className="text-sm uppercase tracking-[0.22em] text-primary underline-offset-8 hover:underline">
              Full Menu →
            </Link>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {highlights.map((item, idx) => (
              <MenuItemCard
                key={item.name}
                item={item}
                showThumb
                onClick={() => setOpenIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <MenuLightbox
        items={highlights}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />

      {/* THREE FEATURED CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: subImg, title: "Subs & Sandwiches", copy: "Stacked tall on focaccia and ciabatta." },
            { img: breakfastImg, title: "Breakfast All Morning", copy: "Egg sandwiches on house bagels, 9–11am." },
            { img: saladImg, title: "Salads & Sides", copy: "Tortellini, Mediterranean, seasonal greens." },
          ].map((c) => (
            <article key={c.title} className="group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  width={1024}
                  height={1280}
                />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Loved in Fayetteville</p>
          <h2 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl">
            <span className="italic">"</span>The kind of sandwich that's worth driving for.<span className="italic">"</span>
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.author} className="border-t border-secondary/40 pt-6">
                <div className="text-secondary tracking-widest">★★★★★</div>
                <blockquote className="mt-4 text-lg leading-relaxed text-primary-foreground/90">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm uppercase tracking-[0.16em] text-primary-foreground/60">
                  {r.author} · {r.meta}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div className="aspect-[5/4] overflow-hidden">
          <img src={interiorImg} alt="Inside the Pan deli — chalkboard menu and warm light" loading="lazy" className="h-full w-full object-cover" width={1600} height={1100} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">Find Us</p>
          <h2 className="mt-3 font-display text-5xl text-primary md:text-6xl">Come on by.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            We're tucked into a sunny corner of historic downtown Fayetteville with indoor and
            outdoor seating, fresh coffee, and friendly faces. Walk in, call ahead, or grab it to go.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm uppercase tracking-[0.2em] text-secondary">Address</dt>
              <dd className="mt-2 font-display text-xl text-primary">105 Hay St<br />Fayetteville, NC</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-[0.2em] text-secondary">Hours</dt>
              <dd className="mt-2 font-display text-xl text-primary">Mon–Sat<br />9am – 3pm</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=105+Hay+St+Fayetteville+NC+28301" className="rounded-sm bg-primary px-6 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90">Get Directions</a>
            <a href="tel:+19104913105" className="rounded-sm border border-primary/40 px-6 py-3.5 text-sm uppercase tracking-[0.2em] text-primary hover:bg-primary/5">(910) 491-3105</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
