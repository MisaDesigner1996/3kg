import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import {
  CurrencyOption,
  ProductItem,
  formatCurrency,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: ProductItem[];
  currency: CurrencyOption;
  onRemove: (productId: number) => void;
  onAddToCart: (product: ProductItem) => void;
}

export function WishlistDrawer({
  isOpen,
  onClose,
  products,
  currency,
  onRemove,
  onAddToCart,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Wish List"
    >
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <Heart className="h-5 w-5 text-[#6CC04A]" aria-hidden="true" />
            <h2 className="text-base font-bold text-[#151515]">
              Wish List{' '}
              <span className="text-sm font-medium tabular-nums text-zinc-500">
                ({products.length})
              </span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close wish list"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-[#151515]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {products.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F8F1] text-[#6CC04A]">
                <Heart className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="text-base font-bold text-[#151515]">
                No saved items yet
              </p>
              <p className="mt-1.5 max-w-[260px] text-xs leading-relaxed text-zinc-500">
                Tap the heart icon on any product to save your weekly favorites here.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-200/80">
              {products.map((product) => {
                const effectivePrice =
                  product.specialPrice > 0 && product.specialPrice < product.price
                    ? product.specialPrice
                    : product.price;
                return (
                  <li key={product.id} className="flex items-center gap-3.5 py-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-zinc-200/70 bg-[#F7F9F5] p-1.5">
                      <SafeImage
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-[#151515]">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-zinc-500">{product.weight}</p>
                      <p className="mt-1 text-sm font-bold tabular-nums text-[#569A3B]">
                        {formatCurrency(effectivePrice, currency)}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="inline-flex h-9 items-center gap-1 rounded-lg bg-[#6CC04A] px-3 text-xs font-bold text-white transition-colors hover:bg-[#569A3B]"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Add</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
