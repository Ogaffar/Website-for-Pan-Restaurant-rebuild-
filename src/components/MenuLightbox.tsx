import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
};

export function MenuLightbox({
  items,
  openIndex,
  onClose,
  onChange,
}: {
  items: MenuItem[];
  openIndex: number | null;
  onClose: () => void;
  onChange: (idx: number) => void;
}) {
  const isOpen = openIndex !== null;

  const next = useCallback(() => {
    if (openIndex === null) return;
    onChange((openIndex + 1) % items.length);
  }, [openIndex, items.length, onChange]);

  const prev = useCallback(() => {
    if (openIndex === null) return;
    onChange((openIndex - 1 + items.length) % items.length);
  }, [openIndex, items.length, onChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, next, prev]);

  if (openIndex === null) return null;
  const active = items[openIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={active.name}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 rounded-full bg-background/95 p-3 text-primary shadow-lg transition hover:bg-background"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Desktop / tablet side arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/95 p-3 text-primary shadow-lg transition hover:bg-background md:block md:left-8"
        aria-label="Previous"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-background/95 p-3 text-primary shadow-lg transition hover:bg-background md:block md:right-8"
        aria-label="Next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="relative grid w-full max-w-4xl gap-0 overflow-hidden rounded-sm bg-background shadow-2xl md:grid-cols-2 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={active.image}
            alt={active.name}
            className="h-full w-full object-cover"
            width={1024}
            height={1024}
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary md:text-sm">
            {String(openIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </p>
          <h3 className="mt-3 font-display text-3xl text-primary md:mt-4 md:text-5xl">
            {active.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {active.desc}
          </p>
          <p className="mt-5 font-display text-3xl text-secondary">
            ${active.price}
          </p>

          {/* Mobile slideshow controls — inline below content */}
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5 md:hidden">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="flex items-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition active:bg-primary/80"
              aria-label="Previous meal"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="rounded-sm border border-primary px-4 py-3 text-xs uppercase tracking-[0.2em] text-primary transition active:bg-primary/10"
            >
              Exit
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="flex items-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground transition active:bg-primary/80"
              aria-label="Next meal"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MenuItemCard({
  item,
  onClick,
  showThumb: _showThumb = false,
}: {
  item: MenuItem;
  onClick: () => void;
  /** @deprecated thumbnail now shows only on hover (md+) */
  showThumb?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full border-b border-border/60 pb-6 text-left transition hover:border-secondary"
    >
      {/* Hover preview — desktop & tablet only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-20 hidden w-56 -translate-x-1/2 -translate-y-[calc(100%+12px)] overflow-hidden rounded-sm bg-background opacity-0 shadow-2xl ring-1 ring-primary/10 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-[calc(100%+4px)] md:block"
      >
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={item.image}
            alt=""
            loading="lazy"
            width={512}
            height={512}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-primary group-hover:text-secondary transition-colors md:text-2xl">
          {item.name}
        </h3>
        <div className="flex-1 border-b border-dotted border-primary/30 translate-y-[-3px]" />
        <span className="font-display text-xl text-secondary md:text-2xl">
          ${item.price}
        </span>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {item.desc}
      </p>
      <span className="mt-2 inline-block text-[11px] uppercase tracking-[0.22em] text-secondary/80 md:hidden">
        Tap to view photo →
      </span>
    </button>
  );
}
