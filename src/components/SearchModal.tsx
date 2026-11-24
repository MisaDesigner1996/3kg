import { useState, useMemo } from 'react';
import { Search, X, ShoppingCart } from 'lucide-react';
import {
  CurrencyOption,
  ProductItem,
  formatCurrency,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: ProductItem[];
  currency: CurrencyOption;
  onAddToCart: (product: ProductItem) => void;
  onQuickView: (product: ProductItem) => void;
}

export function SearchModal({
  isOpen,
  onClose,
  allProducts,
  currency,
  onAddToCart,
  onQuickView,
}: SearchModalProps) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allProducts.slice(0, 8);
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
    );
  }, [query, allProducts]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24"
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3.5">
          <Search className="h-5 w-5 shrink-0 text-[#6CC04A]" aria-hidden="true" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fruits, vegetables, boxes, 3kg offers..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#151515] placeholder:text-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs font-semibold text-zinc-400 hover:text-zinc-600"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-3">
          <p className="mb-2 px-2 text-xs font-semibold text-zinc-500">
            {query.trim()
              ? `${results.length} results found`
              : 'Popular fresh picks'}
          </p>

          {results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-semibold text-[#151515]">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Try searching for Apple, Lemon, Cucumber, Box, or 3kg.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-zinc-100">
              {results.slice(0, 20).map((product) => {
                const effectivePrice =
                  product.specialPrice > 0 && product.specialPrice < product.price
                    ? product.specialPrice
                    : product.price;
                return (
                  <li
                    key={`${product.categoryLabel}-${product.id}`}
                    className="flex items-center justify-between gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-[#F8FAF7]"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onQuickView(product);
                      }}
                      className="flex min-w-0 flex-1 items-center gap-3 text-left"
                    >
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-zinc-200/70 bg-[#F7F9F5] p-1">
                        <SafeImage
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#151515]">
                          {product.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {product.categoryLabel} · {product.weight}
                        </p>
                      </div>
                    </button>

                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-sm font-bold tabular-nums text-[#151515]">
                        {formatCurrency(effectivePrice, currency)}
                      </span>
                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                        className="inline-flex h-8 items-center gap-1 rounded-lg bg-[#6CC04A]/15 px-2.5 text-xs font-bold text-[#3F7A27] transition-colors hover:bg-[#6CC04A] hover:text-white"
                      >
                        <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Add</span>
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
