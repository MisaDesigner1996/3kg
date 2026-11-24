import { useState } from 'react';
import { ArrowRight, Heart, Plus, Minus } from 'lucide-react';
import {
  CurrencyOption,
  ProductItem,
  formatCurrency,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface Option2ProductSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  viewAllHref: string;
  products: ProductItem[];
  currency: CurrencyOption;
  cartQuantities: Record<number, number>;
  wishlistIds: Set<number>;
  onAddToCart: (product: ProductItem) => void;
  onUpdateQty: (productId: number, delta: number) => void;
  onToggleWishlist: (productId: number) => void;
  onQuickView: (product: ProductItem) => void;
  tintedBackground?: boolean;
  initialCount?: number;
}

export function Option2ProductSection({
  id,
  title,
  subtitle = 'Delivered fresh across Bahrain',
  viewAllHref,
  products,
  currency,
  cartQuantities,
  wishlistIds,
  onAddToCart,
  onUpdateQty,
  onToggleWishlist,
  onQuickView,
  tintedBackground = false,
  initialCount = 10,
}: Option2ProductSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = products.length > initialCount;
  const visibleProducts = expanded ? products : products.slice(0, initialCount);

  return (
    <section
      id={id}
      aria-labelledby={`opt2-heading-${id}`}
      className={`py-8 sm:py-11 ${
        tintedBackground ? 'border-y border-zinc-200/60 bg-[#F8FAF7]' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Clean GoFresh-Inspired Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id={`opt2-heading-${id}`}
              className="text-xl font-bold tracking-tight text-[#151515] sm:text-2xl"
            >
              {title}
            </h2>
            <p className="mt-0.5 text-xs font-medium text-zinc-500">
              {subtitle} · {products.length} items
            </p>
          </div>

          <div className="flex items-center gap-4">
            {canExpand && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[#151515] transition-colors hover:border-[#6CC04A] hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                {expanded ? 'Show less' : `Show all ${products.length}`}
              </button>
            )}

            <a
              href={viewAllHref}
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

        {/* 5-Column Modern Product Card Grid */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {visibleProducts.map((product) => {
            const hasDiscount =
              product.specialPrice > 0 && product.specialPrice < product.price;
            const discountPct = hasDiscount
              ? Math.round(
                  ((product.price - product.specialPrice) / product.price) * 100
                )
              : 0;
            const effectivePrice = hasDiscount ? product.specialPrice : product.price;
            const qty = cartQuantities[product.id] || 0;
            const isWishlisted = wishlistIds.has(product.id);

            return (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-2.5 transition-all duration-200 hover:border-[#6CC04A]/65 hover:shadow-[0_14px_28px_-16px_rgba(21,21,21,0.18)] sm:p-3"
              >
                {/* Image Container with Signature Floating Quick-Add Circle */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#F7F9F5]">
                  <button
                    type="button"
                    onClick={() => onQuickView(product)}
                    aria-label={`Quick view ${product.name}`}
                    className="block h-full w-full p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#6CC04A]"
                  >
                    <SafeImage
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </button>

                  {hasDiscount && (
                    <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-[#6CC04A] px-2 py-0.5 text-[11px] font-bold tabular-nums text-white shadow-xs">
                      -{discountPct}%
                    </span>
                  )}

                  {/* Top-Right Wishlist Heart */}
                  <button
                    type="button"
                    onClick={() => onToggleWishlist(product.id)}
                    aria-label={
                      isWishlisted
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    className={`absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] ${
                      isWishlisted
                        ? 'border-[#6CC04A] bg-[#6CC04A] text-white'
                        : 'border-zinc-200/80 bg-white/95 text-zinc-500 hover:border-[#6CC04A] hover:text-[#569A3B]'
                    }`}
                  >
                    <Heart
                      className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-current' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Bottom-Right Floating Quick-Add Circle / Pill Stepper */}
                  <div className="absolute right-2 bottom-2">
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6CC04A] text-white shadow-md transition-all hover:scale-105 hover:bg-[#569A3B] active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                      </button>
                    ) : (
                      <div className="flex h-9 items-center gap-1 rounded-full bg-[#151515] px-1 text-white shadow-md">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(product.id, -1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-[#6CC04A]"
                        >
                          <Minus className="h-3 w-3" aria-hidden="true" />
                        </button>
                        <span className="min-w-[16px] text-center text-xs font-bold tabular-nums">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(product.id, 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors hover:bg-[#6CC04A]"
                        >
                          <Plus className="h-3 w-3" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clean Typography & Pricing */}
                <div className="flex flex-1 flex-col justify-between pt-3 px-0.5">
                  <div>
                    <p className="text-[11px] font-medium tabular-nums text-zinc-500">
                      {product.weight}
                    </p>
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="mt-1 line-clamp-2 min-h-[38px] text-left text-[13.5px] font-semibold leading-snug text-[#151515] transition-colors hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                    >
                      {product.name}
                    </button>
                  </div>

                  <div className="mt-2.5 flex items-baseline gap-2">
                    <span
                      className={`text-[15px] font-bold tabular-nums ${
                        hasDiscount ? 'text-[#569A3B]' : 'text-[#151515]'
                      }`}
                    >
                      {formatCurrency(effectivePrice, currency)}
                    </span>
                    {hasDiscount && (
                      <span className="text-xs font-medium tabular-nums text-zinc-400 line-through">
                        {formatCurrency(product.price, currency)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
