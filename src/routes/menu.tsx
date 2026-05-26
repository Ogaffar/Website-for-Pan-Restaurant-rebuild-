import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MenuLightbox, MenuItemCard, type MenuItem } from "@/components/MenuLightbox";

import icarusImg from "@/assets/menu/icarus.jpg";
import leclairImg from "@/assets/menu/leclair.jpg";
import margheritaImg from "@/assets/menu/margherita.jpg";
import gilbertImg from "@/assets/menu/gilbert.jpg";
import chickenPestoImg from "@/assets/menu/chicken-pesto.jpg";
import floraImg from "@/assets/menu/flora.jpg";
import bigItalianImg from "@/assets/menu/big-italian.jpg";
import capitalImg from "@/assets/menu/capital.jpg";
import cubanImg from "@/assets/menu/cuban.jpg";
import muffulettaImg from "@/assets/menu/muffuletta.jpg";
import loxImg from "@/assets/menu/lox.jpg";
import meatballImg from "@/assets/menu/meatball.jpg";
import bodegaImg from "@/assets/menu/bodega.jpg";
import hamEggImg from "@/assets/menu/ham-egg.jpg";
import sausageEggImg from "@/assets/menu/sausage-egg.jpg";
import bagelCreamImg from "@/assets/menu/bagel-cream.jpg";
import mediterraneanImg from "@/assets/menu/mediterranean.jpg";
import staceImg from "@/assets/menu/stace.jpg";
import tortelliniImg from "@/assets/menu/tortellini.jpg";
import cucumberTomatoImg from "@/assets/menu/cucumber-tomato.jpg";
import whoopieImg from "@/assets/menu/whoopie.jpg";
import cookieImg from "@/assets/menu/cookie.jpg";
import oatmealImg from "@/assets/menu/oatmeal.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Pan · Downtown Fayetteville" },
      { name: "description", content: "Browse the full menu: paninis, subs, breakfast bagels, salads and sides. Locally sourced and made to order at 105 Hay St." },
      { property: "og:title", content: "Menu — Pan" },
      { property: "og:description", content: "Paninis, subs, breakfast bagels, salads & sides." },
    ],
  }),
  component: MenuPage,
});

type Section = { title: string; note?: string; items: MenuItem[] };

const sections: Section[] = [
  {
    title: "Paninis",
    note: "Pressed on local ciabatta. Gluten-free flatbread available.",
    items: [
      { name: "The Icarus", price: "14", desc: "Smoked turkey, sweet tomato pesto, fresh mozzarella, arugula.", image: icarusImg },
      { name: "LeClair", price: "13", desc: "Italian deli meats, provolone, house Italian dressing, peppers.", image: leclairImg },
      { name: "Margherita", price: "12", desc: "Fresh mozzarella, basil, marinated tomato, balsamic glaze.", image: margheritaImg },
      { name: "Gilbert", price: "14", desc: "Smoked chicken, provolone, fig jam, green apple, peppered greens.", image: gilbertImg },
      { name: "Chicken Mozzarella Pesto", price: "13", desc: "Roasted chicken, basil pesto, fresh mozzarella, sundried tomato.", image: chickenPestoImg },
      { name: "Flora (V)", price: "12", desc: "Roasted vegetables, burrata, basil, pistachio vinaigrette.", image: floraImg },
    ],
  },
  {
    title: "Subs & Sandwiches",
    note: "Half or whole. Whole feeds two.",
    items: [
      { name: "Big Italian Sub", price: "15", desc: "Salami, capicola, mozzarella, hot peppers, oil & vinegar on focaccia.", image: bigItalianImg },
      { name: "Capital", price: "14", desc: "Roast beef, sharp cheddar, horseradish aioli, crisp lettuce.", image: capitalImg },
      { name: "Cuban", price: "14", desc: "Slow-roasted pork, ham, swiss, pickles, mustard, pressed.", image: cubanImg },
      { name: "Muffuletta", price: "15", desc: "Olive salad, salami, ham, mortadella, provolone on round loaf.", image: muffulettaImg },
      { name: "Lox", price: "13", desc: "Cured salmon, cream cheese, capers, red onion, dill on bagel.", image: loxImg },
      { name: "Meatball Sub", price: "13", desc: "House meatballs, marinara, melted mozzarella, fresh basil.", image: meatballImg },
    ],
  },
  {
    title: "Breakfast · 9–11am",
    items: [
      { name: "Bodega Bagel", price: "9", desc: "Asiago bagel, scrambled egg, sharp cheddar, choice of bacon or sausage.", image: bodegaImg },
      { name: "Ham, Egg & Cheese", price: "8", desc: "Black forest ham, scrambled egg, melted American on English muffin.", image: hamEggImg },
      { name: "Sausage, Egg & Cheese", price: "8", desc: "Pork sausage, scrambled egg, sharp cheddar.", image: sausageEggImg },
      { name: "Bagel & Cream Cheese", price: "5", desc: "House-baked bagel, plain or scallion cream cheese.", image: bagelCreamImg },
    ],
  },
  {
    title: "Salads & Sides",
    items: [
      { name: "Mediterranean Salad", price: "12", desc: "Crisp greens, feta, kalamata olives, cucumber, pistachio vinaigrette.", image: mediterraneanImg },
      { name: "The Stace", price: "11", desc: "Mixed greens, sundried tomato, mozzarella, balsamic vinaigrette.", image: staceImg },
      { name: "Tortellini Salad", price: "5", desc: "Cheese tortellini, basil pesto, sundried tomato. (Side)", image: tortelliniImg },
      { name: "Cucumber & Tomato Salad", price: "4", desc: "Marinated cucumber, heirloom tomato, fresh dill. (Side)", image: cucumberTomatoImg },
    ],
  },
  {
    title: "Sweets",
    items: [
      { name: "Whoopie Pie", price: "4", desc: "Chocolate cake sandwiching vanilla buttercream.", image: whoopieImg },
      { name: "Chocolate Chip Cookie", price: "3", desc: "Crispy edges, soft center. The town favorite.", image: cookieImg },
      { name: "Oatmeal Cream Pie", price: "4", desc: "House-baked, just like grandma's.", image: oatmealImg },
    ],
  },
];

// Flatten all items in render order so the lightbox can navigate the entire menu.
const allItems: MenuItem[] = sections.flatMap((s) => s.items);
const sectionOffsets: number[] = sections.reduce<number[]>((acc, s, i) => {
  const prev = i === 0 ? 0 : acc[i - 1] + sections[i - 1].items.length;
  acc.push(prev);
  return acc;
}, []);

function MenuPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-secondary">The Full Board</p>
          <h1 className="mt-4 font-display text-6xl text-primary md:text-8xl">Menu</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Tap any item to see the photo, description and price — then slide through
            the whole board. Everything is made to order with locally-sourced
            ingredients and house-baked breads.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20">
        {sections.map((section, sIdx) => (
          <section key={section.title} className="mb-20">
            <div className="mb-10 flex items-end justify-between gap-6 border-b border-primary/30 pb-4">
              <h2 className="font-display text-4xl text-primary md:text-5xl">{section.title}</h2>
              {section.note && (
                <p className="hidden max-w-xs text-right text-sm italic text-muted-foreground md:block">
                  {section.note}
                </p>
              )}
            </div>
            <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, iIdx) => (
                <MenuItemCard
                  key={item.name}
                  item={item}
                  showThumb
                  onClick={() => setOpenIndex(sectionOffsets[sIdx] + iIdx)}
                />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-24 border-t border-border pt-12 text-center">
          <p className="text-sm italic text-muted-foreground">
            Menu items rotate seasonally. Call ahead for large orders & catering.
          </p>
          <a href="tel:+19104913105" className="mt-6 inline-block rounded-sm bg-primary px-7 py-4 text-sm uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary/90">
            Call to Order · (910) 491-3105
          </a>
        </div>
      </div>

      <MenuLightbox
        items={allItems}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />

      <SiteFooter />
    </div>
  );
}
