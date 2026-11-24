/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { CheckCircle2, Layers } from 'lucide-react';
import {
  BOXES_PRODUCTS,
  BULK_SAVINGS_PRODUCTS,
  CURRENCIES,
  CurrencyOption,
  FRUITS_PRODUCTS,
  ProductItem,
  SITE_BASE_URL,
  THREE_KG_SAVINGS_PRODUCTS,
  VEGETABLES_PRODUCTS,
} from './data/homepageData';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { CategoriesSection } from './components/CategoriesSection';
import { ProductCarouselSection } from './components/ProductCarouselSection';
import { CtaCardsGrid } from './components/CtaCardsGrid';
import { WhyThreeKgSection } from './components/WhyThreeKgSection';
import { Footer } from './components/Footer';
import { Option2Header } from './components/Option2Header';
import { Option2HeroBanner } from './components/Option2HeroBanner';
import { Option2CategoriesSection } from './components/Option2CategoriesSection';
import { Option2ProductSection } from './components/Option2ProductSection';
import { Option2WhySection } from './components/Option2WhySection';
import { BottomQuickNav } from './components/BottomQuickNav';
import { CartDrawer, CartEntry } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';

type HomepageDesignOption = 'option1' | 'option2';

export default function App() {
  const [designOption, setDesignOption] = useState<HomepageDesignOption>(() => {
    if (typeof window !== 'undefined') {
      const param = new URLSearchParams(window.location.search).get('design');
      if (param === '1') return 'option1';
    }
    return 'option2';
  });
  const [currency, setCurrency] = useState<CurrencyOption>(CURRENCIES[0]);
  const [cart, setCart] = useState<Record<number, CartEntry>>({});
  const [wishlistIds, setWishlistIds] = useState<Set<number>>(() => new Set());
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(
    null
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const allProducts = useMemo(() => {
    const map = new Map<number, ProductItem>();
    [
      ...FRUITS_PRODUCTS,
      ...VEGETABLES_PRODUCTS,
      ...BULK_SAVINGS_PRODUCTS,
      ...BOXES_PRODUCTS,
      ...THREE_KG_SAVINGS_PRODUCTS,
    ].forEach((item) => {
      if (!map.has(item.id)) map.set(item.id, item);
    });
    return Array.from(map.values());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 2400);
  };

  const handleAddToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
    showToast(`${product.name.split('|')[0].trim()} added to cart`);
  };

  const handleUpdateQty = (productId: number, delta: number) => {
    setCart((prev) => {
      const existing = prev[productId];
      if (!existing) return prev;
      const nextQty = existing.quantity + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return {
        ...prev,
        [productId]: { ...existing, quantity: nextQty },
      };
    });
  };

  const handleRemoveCartItem = (productId: number) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const handleToggleWishlist = (productId: number) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) {
        next.delete(productId);
        showToast('Removed from wish list');
      } else {
        next.add(productId);
        showToast('Saved to wish list');
      }
      return next;
    });
  };

  const cartEntries = useMemo(() => Object.values(cart), [cart]);
  const cartCount = useMemo(
    () => cartEntries.reduce((sum, item) => sum + item.quantity, 0),
    [cartEntries]
  );

  const cartQuantities = useMemo(() => {
    const map: Record<number, number> = {};
    cartEntries.forEach((entry) => {
      map[entry.product.id] = entry.quantity;
    });
    return map;
  }, [cartEntries]);

  const wishlistProducts = useMemo(
    () => allProducts.filter((p) => wishlistIds.has(p.id)),
    [allProducts, wishlistIds]
  );

  const handleSwitchDesign = (option: HomepageDesignOption) => {
    setDesignOption(option);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('design', option === 'option1' ? '1' : '2');
      window.history.replaceState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-dvh flex-col bg-white text-[#151515]">
      {/* Design Option Switcher Bar */}
      <div className="border-b border-zinc-200 bg-[#151515] text-white">
        <div className="mx-auto flex max-w-[1250px] flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80">
            <Layers className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
            <span>Homepage Design Options</span>
          </div>
          <div
            role="tablist"
            aria-label="Select homepage design option"
            className="inline-flex items-center rounded-full bg-white/10 p-0.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={designOption === 'option1'}
              onClick={() => handleSwitchDesign('option1')}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors ${
                designOption === 'option1'
                  ? 'bg-[#6CC04A] text-white'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              Option 1 · Classic 3KG
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={designOption === 'option2'}
              onClick={() => handleSwitchDesign('option2')}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors ${
                designOption === 'option2'
                  ? 'bg-[#6CC04A] text-white'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              Option 2 · Modern Storefront
            </button>
          </div>
        </div>
      </div>

      {designOption === 'option1' ? (
        <Header
          cartCount={cartCount}
          wishlistCount={wishlistIds.size}
          currency={currency}
          onCurrencyChange={setCurrency}
          onOpenCart={() => setCartOpen(true)}
          onOpenWishlist={() => setWishlistOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenAccount={() => setAccountOpen(true)}
        />
      ) : (
        <Option2Header
          cartCount={cartCount}
          wishlistCount={wishlistIds.size}
          currency={currency}
          onCurrencyChange={setCurrency}
          onOpenCart={() => setCartOpen(true)}
          onOpenWishlist={() => setWishlistOpen(true)}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenAccount={() => setAccountOpen(true)}
        />
      )}

      {designOption === 'option1' ? (
        <>
          <main className="flex-1">
            {/* Section 0: Hero Banner Slider */}
            <HeroSlider />

            {/* Section 1: Shop by Category */}
            <CategoriesSection />

            {/* Section 2: Fruits */}
            <ProductCarouselSection
              id="fruits"
              title="Fruits"
              viewAllHref={`${SITE_BASE_URL}/shop/59`}
              products={FRUITS_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              tintedBackground
            />

            {/* Section 3: Vegetables */}
            <ProductCarouselSection
              id="vegetables"
              title="Vegetables"
              viewAllHref={`${SITE_BASE_URL}/shop/61`}
              products={VEGETABLES_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
            />

            {/* Section 4: 4-Column CTA Cards Grid */}
            <CtaCardsGrid />

            {/* Section 5: Bulk savings */}
            <ProductCarouselSection
              id="bulk-savings"
              title="Bulk savings"
              viewAllHref={`${SITE_BASE_URL}/shop/72`}
              products={BULK_SAVINGS_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              tintedBackground
            />

            {/* Section 6: Boxes */}
            <ProductCarouselSection
              id="boxes"
              title="Boxes"
              viewAllHref={`${SITE_BASE_URL}/shop/64`}
              products={BOXES_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
            />

            {/* Section 7: 3kg Savings */}
            <ProductCarouselSection
              id="3kg-savings"
              title="3kg Savings"
              viewAllHref={`${SITE_BASE_URL}/shop/65`}
              products={THREE_KG_SAVINGS_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              tintedBackground
            />

            {/* Section 8: Why 3KG? */}
            <WhyThreeKgSection />
          </main>

          <Footer currency={currency} onCurrencyChange={setCurrency} />
        </>
      ) : (
        <>
          <main className="flex-1">
            {/* Option 2 Section 0: GoFresh-Inspired Split Modern Hero */}
            <Option2HeroBanner />

            {/* Option 2 Section 1: Modern Category Cards */}
            <Option2CategoriesSection />

            {/* Option 2 Section 2: Fruits */}
            <Option2ProductSection
              id="fruits"
              title="Fruits"
              subtitle="Hand-picked fruits delivered fresh across Bahrain"
              viewAllHref={`${SITE_BASE_URL}/shop/59`}
              products={FRUITS_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              tintedBackground
            />

            {/* Option 2 Section 3: Vegetables */}
            <Option2ProductSection
              id="vegetables"
              title="Vegetables"
              subtitle="Fresh farm vegetables for your family every day"
              viewAllHref={`${SITE_BASE_URL}/shop/61`}
              products={VEGETABLES_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
            />

            {/* Option 2 Section 4: Featured Collections */}
            <CtaCardsGrid />

            {/* Option 2 Section 5: Bulk savings */}
            <Option2ProductSection
              id="bulk-savings"
              title="Bulk savings"
              subtitle="Save more on family cartons and bulk packs"
              viewAllHref={`${SITE_BASE_URL}/shop/72`}
              products={BULK_SAVINGS_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              tintedBackground
            />

            {/* Option 2 Section 6: Boxes */}
            <Option2ProductSection
              id="boxes"
              title="Boxes"
              subtitle="Curated fruit, veg, salad, and platter boxes"
              viewAllHref={`${SITE_BASE_URL}/shop/64`}
              products={BOXES_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
            />

            {/* Option 2 Section 7: 3kg Savings */}
            <Option2ProductSection
              id="3kg-savings"
              title="3kg Savings"
              subtitle="Special 3kg value bundles and weekly savings"
              viewAllHref={`${SITE_BASE_URL}/shop/65`}
              products={THREE_KG_SAVINGS_PRODUCTS}
              currency={currency}
              cartQuantities={cartQuantities}
              wishlistIds={wishlistIds}
              onAddToCart={handleAddToCart}
              onUpdateQty={handleUpdateQty}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={setQuickViewProduct}
              tintedBackground
            />

            {/* Option 2 Section 8: Why 3KG? */}
            <Option2WhySection />
          </main>

          <Footer currency={currency} onCurrencyChange={setCurrency} />
        </>
      )}

      {/* Shared Fixed Interactive Bottom Navigation (Identical Design & Behavior Across Both Options) */}
      <BottomQuickNav layoutKey={designOption} />

      {/* Interactive Drawers & Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartEntries}
        currency={currency}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCart({})}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        products={wishlistProducts}
        currency={currency}
        onRemove={(id) => handleToggleWishlist(id)}
        onAddToCart={handleAddToCart}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        currency={currency}
        cartQty={quickViewProduct ? cartQuantities[quickViewProduct.id] || 0 : 0}
        isWishlisted={
          quickViewProduct ? wishlistIds.has(quickViewProduct.id) : false
        }
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onUpdateQty={handleUpdateQty}
        onToggleWishlist={handleToggleWishlist}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        allProducts={allProducts}
        currency={currency}
        onAddToCart={handleAddToCart}
        onQuickView={setQuickViewProduct}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-zinc-200 bg-[#151515] px-4 py-2.5 text-xs font-semibold text-white shadow-xl"
        >
          <CheckCircle2 className="h-4 w-4 text-[#6CC04A]" aria-hidden="true" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
