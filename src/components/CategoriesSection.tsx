import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { SHOP_BY_CATEGORIES, SITE_BASE_URL } from '../data/homepageData';
import { SafeImage } from './SafeImage';

export function CategoriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const step = Math.max(280, scrollRef.current.clientWidth * 0.72);
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="shop-by-category"
      className="bg-white py-8 sm:py-11"
      aria-labelledby="heading-categories"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200/70 pb-4">
          <div>
            <div className="mb-1.5 h-[3px] w-8 rounded-full bg-[#6CC04A]" aria-hidden="true" />
            <h2
              id="heading-categories"
              className="text-xl font-bold tracking-tight text-[#151515] sm:text-2xl"
            >
              Shop by Category
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-[#151515] transition-colors hover:border-[#6CC04A] hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
              <span>{expanded ? 'Carousel view' : `All ${SHOP_BY_CATEGORIES.length}`}</span>
            </button>

            {!expanded && (
              <div className="hidden items-center gap-1.5 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollBy('left')}
                  aria-label="Scroll categories left"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#151515] transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy('right')}
                  aria-label="Scroll categories right"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#151515] transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Category Cards Track or Grid */}
        <div
          ref={scrollRef}
          className={
            expanded
              ? 'grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4'
              : 'no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2 sm:gap-4'
          }
        >
          {SHOP_BY_CATEGORIES.map((category) => {
            const href = category.seo_url
              ? `${SITE_BASE_URL}/shop/${category.seo_url}`
              : `${SITE_BASE_URL}/shop/${category.category_id}`;

            return (
              <a
                key={category.category_id}
                href={href}
                className={`group flex flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6CC04A]/60 hover:shadow-[0_12px_26px_-14px_rgba(21,21,21,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] ${
                  expanded
                    ? 'w-full'
                    : 'w-[42%] shrink-0 snap-start sm:w-[27%] md:w-[21%] lg:w-[15.4%]'
                }`}
              >
                <div
                  className="relative w-full overflow-hidden bg-[#F6F8F4]"
                  style={{ aspectRatio: '335 / 425' }}
                >
                  <SafeImage
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between px-3 py-2.5 text-center">
                  <h3 className="truncate text-[13.5px] font-bold text-[#151515] transition-colors group-hover:text-[#569A3B]">
                    {category.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-medium tabular-nums text-zinc-500">
                    {category.product_count > 0
                      ? `${category.product_count} products`
                      : 'Launching soon'}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
