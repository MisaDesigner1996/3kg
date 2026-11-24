import { useState } from 'react';
import { ArrowRight, LayoutGrid } from 'lucide-react';
import { SHOP_BY_CATEGORIES, SITE_BASE_URL } from '../data/homepageData';
import { SafeImage } from './SafeImage';

export function Option2CategoriesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll
    ? SHOP_BY_CATEGORIES
    : SHOP_BY_CATEGORIES.slice(0, 12);

  return (
    <section
      id="shop-by-category"
      aria-labelledby="opt2-heading-categories"
      className="bg-white py-8 sm:py-11"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="opt2-heading-categories"
              className="text-xl font-bold tracking-tight text-[#151515] sm:text-2xl"
            >
              Shop by Category
            </h2>
            <p className="mt-1 text-xs font-medium text-zinc-500 sm:text-sm">
              Fresh aisles across Bahrain · {SHOP_BY_CATEGORIES.length} categories
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-bold text-[#151515] transition-colors hover:border-[#6CC04A] hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
              <span>
                {showAll ? 'Show compact' : `View all ${SHOP_BY_CATEGORIES.length}`}
              </span>
            </button>

            <a
              href={`${SITE_BASE_URL}/categories`}
              className="group inline-flex items-center gap-1 text-xs font-bold text-[#569A3B] transition-colors hover:text-[#151515] sm:text-sm"
            >
              <span>See all</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Modern Category Cards Grid */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {visibleCategories.map((category) => {
            const href = category.seo_url
              ? `${SITE_BASE_URL}/shop/${category.seo_url}`
              : `${SITE_BASE_URL}/shop/${category.category_id}`;

            return (
              <a
                key={category.category_id}
                href={href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#F8FAF7] p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6CC04A]/70 hover:bg-white hover:shadow-[0_14px_28px_-14px_rgba(21,21,21,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-white"
                  style={{ aspectRatio: '335 / 400' }}
                >
                  <SafeImage
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between px-1.5 pt-3 pb-1 text-left">
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
