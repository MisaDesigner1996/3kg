import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import {
  CurrencyOption,
  ProductItem,
  SITE_BASE_URL,
  formatCurrency,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

export interface CartEntry {
  product: ProductItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartEntry[];
  currency: CurrencyOption;
  onUpdateQty: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalCount = items.reduce((sum, entry) => sum + entry.quantity, 0);
  const subtotalBhd = items.reduce((sum, entry) => {
    const unit =
      entry.product.specialPrice > 0 && entry.product.specialPrice < entry.product.price
        ? entry.product.specialPrice
        : entry.product.price;
    return sum + unit * entry.quantity;
  }, 0);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
    >
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-[#6CC04A]" aria-hidden="true" />
            <h2 className="text-base font-bold text-[#151515]">
              Your Cart{' '}
              <span className="text-sm font-medium tabular-nums text-zinc-500">
                ({totalCount})
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                className="text-xs font-semibold text-zinc-500 transition-colors hover:text-red-600"
              >
                Clear all
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cart"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-[#151515]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F8F1] text-[#6CC04A]">
                <ShoppingBag className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-base font-bold text-[#151515]">Your cart is empty</p>
              <p className="mt-1.5 max-w-[260px] text-xs leading-relaxed text-zinc-500">
                Browse fresh fruits, vegetables, boxes, and 3kg savings to start your order.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-lg bg-[#6CC04A] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#569A3B]"
              >
                Browse Fresh Produce
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-200/80">
              {items.map(({ product, quantity }) => {
                const unitPrice =
                  product.specialPrice > 0 && product.specialPrice < product.price
                    ? product.specialPrice
                    : product.price;
                return (
                  <li key={product.id} className="flex gap-3.5 py-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-zinc-200/70 bg-[#F7F9F5] p-1.5">
                      <SafeImage
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="line-clamp-2 text-sm font-semibold text-[#151515]">
                            {product.name}
                          </h3>
                          <p className="mt-0.5 text-xs text-zinc-500">{product.weight}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(product.id)}
                          aria-label={`Remove ${product.name}`}
                          className="p-1 text-zinc-400 transition-colors hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between">
                        <div className="inline-flex h-8 items-center overflow-hidden rounded-lg border border-zinc-200 bg-white">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(product.id, -1)}
                            aria-label={`Decrease quantity of ${product.name}`}
                            className="flex h-full w-8 items-center justify-center text-zinc-600 transition-colors hover:bg-zinc-100"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold tabular-nums text-[#151515]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(product.id, 1)}
                            aria-label={`Increase quantity of ${product.name}`}
                            className="flex h-full w-8 items-center justify-center text-zinc-600 transition-colors hover:bg-zinc-100"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        </div>

                        <span className="text-sm font-bold tabular-nums text-[#151515]">
                          {formatCurrency(unitPrice * quantity, currency)}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-zinc-200 bg-[#F8FAF7] px-5 py-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-medium text-zinc-600">Subtotal</span>
              <span className="text-lg font-bold tabular-nums text-[#151515]">
                {formatCurrency(subtotalBhd, currency)}
              </span>
            </div>
            <p className="mb-4 text-xs text-zinc-500">
              Same-day delivery across Bahrain. Taxes &amp; delivery calculated at checkout.
            </p>
            <a
              href={`${SITE_BASE_URL}/checkout`}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#6CC04A] text-sm font-bold text-white transition-colors hover:bg-[#569A3B]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
