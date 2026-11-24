import { X, ShoppingCart, Heart, ExternalLink, Check, Plus, Minus } from 'lucide-react';
import {
  CurrencyOption,
  ProductItem,
  formatCurrency,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface ProductQuickViewModalProps {
  product: ProductItem | null;
  currency: CurrencyOption;
  cartQty: number;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (product: ProductItem) => void;
  onUpdateQty: (productId: number, delta: number) => void;
  onToggleWishlist: (productId: number) => void;
}

export function ProductQuickViewModal({
  product,
  currency,
  cartQty,
  isWishlisted,
  onClose,
  onAddToCart,
  onUpdateQty,
  onToggleWishlist,
}: ProductQuickViewModalProps) {
  if (!product) return null;

  const hasDiscount =
    product.specialPrice > 0 && product.specialPrice < product.price;
  const effectivePrice = hasDiscount ? product.specialPrice : product.price;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 grid w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl sm:grid-cols-2">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-[#151515]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Image Stage */}
        <div className="flex aspect-square items-center justify-center bg-[#F7F9F5] p-6">
          <SafeImage
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between p-6">
          <div>
            <p className="text-xs font-semibold text-[#569A3B]">
              {product.categoryLabel} · {product.weight}
            </p>
            <h2 className="mt-1.5 text-xl font-bold leading-snug text-[#151515]">
              {product.name}
            </h2>

            <div className="mt-4 flex items-baseline gap-2.5">
              <span
                className={`text-2xl font-bold tabular-nums ${
                  hasDiscount ? 'text-[#569A3B]' : 'text-[#151515]'
                }`}
              >
                {formatCurrency(effectivePrice, currency)}
              </span>
              {hasDiscount && (
                <span className="text-sm font-medium tabular-nums text-zinc-400 line-through">
                  {formatCurrency(product.price, currency)}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#569A3B]">
              <Check className="h-4 w-4" aria-hidden="true" />
              <span>In stock · Ready for same-day delivery in Bahrain</span>
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t border-zinc-200/80 pt-5">
            {cartQty === 0 ? (
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#6CC04A] text-sm font-bold text-white transition-colors hover:bg-[#569A3B]"
              >
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                <span>Add to cart</span>
              </button>
            ) : (
              <div className="flex h-11 w-full items-center justify-between overflow-hidden rounded-xl bg-[#6CC04A] text-white">
                <button
                  type="button"
                  onClick={() => onUpdateQty(product.id, -1)}
                  aria-label="Decrease quantity"
                  className="flex h-full w-12 items-center justify-center hover:bg-[#569A3B]"
                >
                  <Minus className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="text-sm font-bold tabular-nums">
                  {cartQty} in cart
                </span>
                <button
                  type="button"
                  onClick={() => onUpdateQty(product.id, 1)}
                  aria-label="Increase quantity"
                  className="flex h-full w-12 items-center justify-center hover:bg-[#569A3B]"
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => onToggleWishlist(product.id)}
                className={`flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border text-xs font-bold transition-colors ${
                  isWishlisted
                    ? 'border-[#6CC04A] bg-[#6CC04A]/10 text-[#417A29]'
                    : 'border-zinc-200 text-zinc-700 hover:border-[#6CC04A]'
                }`}
              >
                <Heart
                  className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-current' : ''}`}
                  aria-hidden="true"
                />
                <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
              </button>

              <a
                href={product.href}
                className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 text-xs font-bold text-[#151515] transition-colors hover:border-[#6CC04A] hover:text-[#569A3B]"
              >
                <span>Product page</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
