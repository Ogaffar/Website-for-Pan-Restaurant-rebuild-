import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Pan · 105 Hay St, Fayetteville NC" },
      { name: "description", content: "Visit Pan in downtown Fayetteville. 105 Hay St. Open Monday through Saturday, 9am – 3pm. Indoor and outdoor seating." },
      { property: "og:title", content: "Visit Pan — 105 Hay St, Fayetteville" },
      { property: "og:description", content: "Open Mon–Sat 9am–3pm. Walk-ins, call-ahead, and to-go." },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12">
        <p className="text-sm uppercase tracking-[0.28em] text-secondary">Stop In</p>
        <h1 className="mt-4 font-display text-6xl text-primary md:text-8xl">Visit Pan.</h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-secondary">Address</h2>
            <p className="mt-3 font-display text-3xl text-primary">105 Hay St<br />Fayetteville, NC 28301</p>
            <a href="https://maps.google.com/?q=105+Hay+St+Fayetteville+NC+28301" className="mt-4 inline-block text-sm uppercase tracking-[0.22em] text-primary underline-offset-8 hover:underline">
              Get Directions →
            </a>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-secondary">Phone</h2>
            <a href="tel:+19104913105" className="mt-3 block font-display text-3xl text-primary hover:text-secondary">
              (910) 491-3105
            </a>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-secondary">Hours</h2>
            <dl className="mt-3 space-y-1.5 text-lg text-primary">
              {[
                ["Monday", "9am – 3pm"],
                ["Tuesday", "9am – 3pm"],
                ["Wednesday", "9am – 3pm"],
                ["Thursday", "9am – 3pm"],
                ["Friday", "9am – 3pm"],
                ["Saturday", "9am – 3pm"],
                ["Sunday", "Closed"],
              ].map(([day, hours]) => (
                <div key={day} className="flex items-baseline gap-3 border-b border-border/60 py-1">
                  <dt className="w-32 font-display text-lg">{day}</dt>
                  <div className="flex-1 border-b border-dotted border-primary/20 translate-y-[-3px]" />
                  <dd className="text-muted-foreground">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-secondary">Good to know</h2>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li>· Indoor & outdoor seating</li>
              <li>· Take-out and call-ahead orders welcome</li>
              <li>· Catering for offices & events</li>
              <li>· Gluten-free flatbread available</li>
            </ul>
          </div>
        </div>

        <div className="aspect-square w-full overflow-hidden rounded-sm border border-border">
          <iframe
            title="Map to Pan, 105 Hay St, Fayetteville NC"
            src="https://www.google.com/maps?q=105+Hay+St+Fayetteville+NC+28301&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
