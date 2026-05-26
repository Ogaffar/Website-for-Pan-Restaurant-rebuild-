import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import interior from "@/assets/interior.jpg";
import sub from "@/assets/sub.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Pan · Fayetteville" },
      { name: "description", content: "A small downtown Fayetteville deli pouring everything into hand-crafted sandwiches, paninis and salads. Locally sourced and made with care." },
      { property: "og:title", content: "Our Story — Pan" },
      { property: "og:description", content: "Locally sourced. Made with care. Built for Fayetteville." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-12 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-secondary">Our Story</p>
        <h1 className="mt-4 font-display text-6xl leading-[1.02] text-primary md:text-8xl">
          A small shop with <span className="italic text-secondary">big flavor.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <img src={interior} alt="Inside Pan" className="aspect-[16/9] w-full object-cover" loading="lazy" width={1600} height={900} />
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-24 md:grid-cols-12">
        <div className="md:col-span-7 md:col-start-3">
          <p className="font-display text-2xl leading-relaxed text-primary md:text-3xl">
            Pan opened in June 2022 in the heart of downtown Fayetteville with a single
            obsession: building sandwiches the way they should be built.
          </p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Every loaf, every dressing, every spread is made by hand. We work with local
              bakers and small farms, source the best deli meats we can find, and treat
              vegetables like they actually matter — because they do.
            </p>
            <p>
              The result is a short, considered menu where every item earns its place.
              The Icarus, the LeClair, the Gilbert — these aren't just sandwiches with
              names, they're little love letters to the craft.
            </p>
            <p>
              Come hungry. Stay a while. We'll take care of the rest.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <img src={sub} alt="Italian sub on focaccia" loading="lazy" className="aspect-square w-full object-cover" width={1024} height={1024} />
          <div>
            <h2 className="font-display text-5xl text-primary md:text-6xl">What we believe</h2>
            <ul className="mt-10 space-y-6">
              {[
                ["Local first.", "We partner with North Carolina farms, bakers and roasters whenever we can."],
                ["Made to order.", "Nothing pre-built. Nothing pre-wrapped. Your sandwich starts when you order it."],
                ["Real ingredients.", "House-cured, hand-sliced, in-house dressings. No shortcuts."],
                ["Hospitality matters.", "A friendly hello goes as far as a good sandwich."],
              ].map(([title, body]) => (
                <li key={title} className="border-l-2 border-secondary pl-5">
                  <h3 className="font-display text-2xl text-primary">{title}</h3>
                  <p className="mt-1 text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
