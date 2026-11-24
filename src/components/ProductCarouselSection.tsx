import { useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Heart,
  Plus,
  Minus,
  Eye,
  ShoppingCart,
} from 'lucide-react';
import {
  CurrencyOption,
  ProductItem,
  formatCurrency,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface ProductCarouselSectionProps {
  id: string;
  title: string;
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
}

export function ProductCarouselSection({
  id,
  title,
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
}: ProductCarouselSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const step = Math.max(280, trackRef.current.clientWidth * 0.78);
    trackRef.current.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id={id}
      aria-labelledby={`heading-${id}`}
      className={`py-8 sm:py-11 ${
        tintedBackground ? 'border-y border-zinc-200/60 bg-[#F8FAF7]' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200/70 pb-4">
          <div>
            <div className="mb-1.5 h-[3px] w-8 rounded-full bg-[#6CC04A]" aria-hidden="true" />
            <div className="flex items-baseline gap-3">
              <h2
                id={`heading-${id}`}
                className="text-xl font-bold tracking-tight text-[#151515] sm:text-2xl"
              >
                {title}
              </h2>
              <span className="text-xs font-medium tabular-nums text-zinc-500">
                {products.length} items
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 sm:flex">
              <button
                type="button"
                onClick={() => scrollBy('left')}
                aria-label={`Scroll ${title} left`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#151515] transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy('right')}
                aria-label={`Scroll ${title} right`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[#151515] transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <a
              href={viewAllHref}
              className="group inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-xs font-bold text-[#151515] transition-all hover:border-[#6CC04A] hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <span>View all</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Horizontal Product Carousel */}
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2 sm:gap-4"
        >
          {products.map((product) => {
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
                className="group flex w-[62%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white transition-all duration-200 hover:border-[#6CC04A]/60 hover:shadow-[0_14px_30px_-16px_rgba(21,21,21,0.16)] sm:w-[36%] md:w-[27%] lg:w-[19%]"
              >
                {/* Product Image Well */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#F7F9F5]">
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

                  {/* Sale Discount Tag */}
                  {hasDiscount && (
                    <span className="pointer-events-none absolute left-2.5 top-2.5 rounded-md bg-[#6CC04A] px-2 py-0.5 text-[11px] font-bold tabular-nums text-white shadow-xs">
                      -{discountPct}%
                    </span>
                  )}

                  {/* Top-Right Action Icons */}
                  <div className="absolute right-2.5 top-2.5 flex flex-col gap-1.5">
                    <button
                      type="button"
                      onClick={() => onToggleWishlist(product.id)}
                      aria-label={
                        isWishlisted
                          ? `Remove ${product.name} from wishlist`
                          : `Add ${product.name} to wishlist`
                      }
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] ${
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

                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      aria-label={`Quick view ${product.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200/80 bg-white/95 text-zinc-500 opacity-0 transition-all hover:border-[#6CC04A] hover:text-[#569A3B] group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* Product Body */}
                <div className="flex flex-1 flex-col justify-between p-3.5">
                  <div>
                    <button
                      type="button"
                      onClick={() => onQuickView(product)}
                      className="line-clamp-2 min-h-[38px] text-left text-[13.5px] font-semibold leading-snug text-[#151515] transition-colors hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                    >
                      {product.name}
                    </button>

                    <p className="mt-1 text-[11.5px] font-medium tabular-nums text-zinc-500">
                      {product.weight}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-zinc-100">
                    {/* Price Row */}
                    <div className="mb-2.5 flex items-baseline gap-2">
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

                    {/* Add to Cart / Quantity Stepper */}
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-[#6CC04A]/30 bg-[#6CC04A]/10 text-xs font-bold text-[#3F7A27] transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Add to cart</span>
                      </button>
                    ) : (
                      <div className="flex h-9 w-full items-center justify-between overflow-hidden rounded-lg bg-[#6CC04A] text-white">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(product.id, -1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="flex h-full w-9 items-center justify-center transition-colors hover:bg-[#569A3B]"
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="text-xs font-bold tabular-nums">{qty}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(product.id, 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="flex h-full w-9 items-center justify-center transition-colors hover:bg-[#569A3B]"
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
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
