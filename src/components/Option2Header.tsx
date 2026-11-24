import { useState, useRef, useEffect, FormEvent } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  MapPin,
} from 'lucide-react';
import {
  CURRENCIES,
  CurrencyOption,
  MEGA_MENU_CATEGORIES,
  STORE_INFO,
  TOP_NAV_LINKS,
  SITE_BASE_URL,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface Option2HeaderProps {
  cartCount: number;
  wishlistCount: number;
  currency: CurrencyOption;
  onCurrencyChange: (currency: CurrencyOption) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

function FilledCategoryIcon({
  id,
  className = 'h-4 w-4 shrink-0',
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case '863': // Vegetables (Filled Carrot)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M18.2 2.8a1 1 0 0 1 1.4 1.4l-1.5 1.5h2.1a1 1 0 1 1 0 2h-3.3l-.9.9a4.7 4.7 0 0 1 1.1 5.6l-6.6 6.6c-1.8 1.8-4.7 2.4-6.8 1.5a1 1 0 0 1-.5-.5c-.9-2.1-.3-5 1.5-6.8l6.6-6.6a4.7 4.7 0 0 1 5.6 1.1l.9-.9V5.5a1 1 0 1 1 2 0v2.1l-1.6-4.8Z" />
          <path
            d="M11.6 10.6 13.4 12.4M8.8 13.4 10.4 15"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case '870': // Exotic Fruits (Filled Citrus Slice)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M4.2 6.5a1 1 0 0 1 1.4-.1L18.4 19.2a1 1 0 0 1-.1 1.4A10.2 10.2 0 0 1 4.2 6.5Z" />
          <path
            d="M11.2 13.5 7 15.8M11.2 13.5l-2.3 4.2M11.2 13.5l1.6 4.7"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case '871': // Leaves (Filled Leaf)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19.5 3.5c-6.8 0-12 3.7-13.2 9.4-.4 1.9 0 3.7.9 5.2L4.3 21a1 1 0 1 0 1.4 1.4l2.9-2.9c1.5.9 3.3 1.3 5.2.9 5.7-1.2 9.4-6.4 9.4-13.2V3.5h-3.7Z" />
          <path
            d="M8.5 16.5 16.5 8.5"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case '877': // Bulk Buy (Filled Stacked Layers)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 3 2.5 8 12 13l9.5-5L12 3Z" />
          <path d="M3.4 12.2 12 16.8l8.6-4.6 1.2.6a1 1 0 0 1 0 1.8l-9.3 5a1 1 0 0 1-1 0l-9.3-5a1 1 0 0 1 0-1.8l1.2-.6Z" />
          <path d="M3.4 16.2 12 20.8l8.6-4.6 1.2.6a1 1 0 0 1 0 1.8l-9.3 5a1 1 0 0 1-1 0l-9.3-5a1 1 0 0 1 0-1.8l1.2-.6Z" />
        </svg>
      );
    case '882': // Boxes (Filled Parcel Cube)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.1 2.5a2 2 0 0 1 1.8 0l7.2 4a2 2 0 0 1 1 1.7v7.6a2 2 0 0 1-1 1.7l-7.2 4a2 2 0 0 1-1.8 0l-7.2-4a2 2 0 0 1-1-1.7V8.2a2 2 0 0 1 1-1.7l7.2-4Z" />
          <path
            d="M3.4 7.5 12 12.2l8.6-4.7M12 12.2V21.5M7.5 5l8.8 4.8"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case '883': // Eggs & Dairy (Filled Milk Bottle)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M9.5 2.5h5a1 1 0 0 1 1 1v1.7a1 1 0 0 1-.4.8l1.8 2.5c.4.6.6 1.3.6 2v9a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-9c0-.7.2-1.4.6-2l1.8-2.5a1 1 0 0 1-.4-.8V3.5a1 1 0 0 1 1-1Z" />
          <rect x="8.5" y="12.5" width="7" height="4.2" rx="0.8" fill="white" />
        </svg>
      );
    case '892': // Fresh Chicken (Filled Drumstick)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M15.4 3.6a5 5 0 0 1 4.9 8.2c-1.1 1.1-2.6 1.5-4.1 1.4l-4.5 4.5a2.1 2.1 0 0 1-3 2.9 2.1 2.1 0 0 1-2.9-3 2.1 2.1 0 0 1 .4-2.4l4.5-4.5c-.1-1.5.3-3 1.4-4.1a5 5 0 0 1 3.3-3Z" />
        </svg>
      );
    case '893': // Dates & Nuts (Filled Cluster / Sparkles)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M10.5 3.5c2.2 0 4 2.2 4 5s-1.8 5-4 5-4-2.2-4-5 1.8-5 4-5Zm6.2 6.8c1.9 0 3.5 2 3.5 4.4s-1.6 4.4-3.5 4.4-3.5-2-3.5-4.4 1.6-4.4 3.5-4.4ZM7.5 14c1.8 0 3.3 1.6 3.3 3.6S9.3 21.2 7.5 21.2s-3.3-1.6-3.3-3.6S5.7 14 7.5 14Z" />
        </svg>
      );
    case '898': // Water (Filled Droplet)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2.4c0 0-6.5 7.4-6.5 12.3a6.5 6.5 0 1 0 13 0C18.5 9.8 12 2.4 12 2.4Z" />
          <path
            d="M9.5 15.2a2.6 2.6 0 0 0 2.6 2.6"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    default: // More (Filled 4-Square Grid)
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <rect x="3.5" y="3.5" width="7.2" height="7.2" rx="1.8" />
          <rect x="13.3" y="3.5" width="7.2" height="7.2" rx="1.8" />
          <rect x="3.5" y="13.3" width="7.2" height="7.2" rx="1.8" />
          <rect x="13.3" y="13.3" width="7.2" height="7.2" rx="1.8" />
        </svg>
      );
  }
}

export function Option2Header({
  cartCount,
  wishlistCount,
  currency,
  onCurrencyChange,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
}: Option2HeaderProps) {
  const [activeMegaId, setActiveMegaId] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCat, setExpandedMobileCat] = useState<string | null>(null);
  const [searchDraft, setSearchDraft] = useState('');

  const currencyRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleNavMouseEnter = (id: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaId(id);
  };

  const handleNavMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMegaId(null);
    }, 180);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    onOpenSearch();
  };

  return (
    <>
      {/* Top 3KG Brand Green Utility Strip (3KG #6CC04A Background & White Text) */}
      <div className="bg-[#6CC04A] text-white">
        <div className="mx-auto flex max-w-[1250px] flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>
                Delivering across <strong className="font-bold">{STORE_INFO.storeLocation}</strong>
              </span>
            </span>

            <span className="hidden text-white/50 sm:inline" aria-hidden="true">
              |
            </span>

            <a
              href={`tel:+${STORE_INFO.contactPhone}`}
              className="hidden items-center gap-1 font-semibold text-white transition-opacity hover:opacity-80 sm:inline-flex"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              <span className="tabular-nums">{STORE_INFO.displayPhone}</span>
            </a>

            <a
              href={STORE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 font-semibold text-white transition-opacity hover:opacity-80 md:inline-flex"
            >
              <MessageCircle className="h-3 w-3" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <nav aria-label="Quick site links" className="hidden items-center gap-4 lg:flex">
              {TOP_NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap font-semibold text-white/95 transition-opacity hover:text-white hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <span className="hidden text-white/50 lg:inline" aria-hidden="true">
              |
            </span>

            {/* Currency Switcher */}
            <div ref={currencyRef} className="relative">
              <button
                type="button"
                onClick={() => setCurrencyOpen((o) => !o)}
                aria-expanded={currencyOpen}
                aria-label="Select currency"
                className="inline-flex items-center gap-1 font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{currency.code}</span>
                <ChevronDown className="h-3 w-3 opacity-85" aria-hidden="true" />
              </button>

              {currencyOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full z-50 mt-2 w-36 rounded-xl border border-zinc-200 bg-white py-1.5 shadow-lg"
                >
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onCurrencyChange(c);
                        setCurrencyOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3.5 py-1.5 text-left text-xs transition-colors hover:bg-[#F6F8F4] ${
                        c.code === currency.code
                          ? 'font-bold text-[#569A3B]'
                          : 'font-medium text-zinc-700'
                      }`}
                    >
                      <span>{c.code}</span>
                      <span className="text-zinc-400">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky GoFresh-Inspired Rounded Header + Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md">
        {/* Rounded Light-Green Main Header Bar (Option 1 Vegetable Add-to-Cart Light Color) */}
        <div className="rounded-b-2xl border-b border-[#6CC04A]/25 bg-[#F0F9EC] text-[#151515] shadow-sm sm:rounded-b-3xl">
          <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-3 px-4 py-3 sm:gap-5 sm:px-6 lg:px-8">
            {/* Mobile Menu Trigger + Original 3KG Logo */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6CC04A]/30 bg-white text-[#151515] transition-colors hover:border-[#6CC04A] hover:text-[#3F7A27] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] lg:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>

              <a
                href={`${SITE_BASE_URL}/`}
                aria-label={STORE_INFO.brandName}
                className="flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1 shadow-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <SafeImage
                  src={STORE_INFO.logo}
                  alt={STORE_INFO.brandName}
                  loading="eager"
                  className="h-8 w-auto max-w-[74px] object-contain sm:h-9 sm:max-w-[88px]"
                />
              </a>
            </div>

            {/* Center Rounded-Full Pill Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden max-w-2xl flex-1 items-center rounded-full border border-[#6CC04A]/30 bg-white py-1 pl-5 pr-1.5 shadow-xs focus-within:border-[#6CC04A] focus-within:ring-2 focus-within:ring-[#6CC04A]/25 md:flex"
            >
              <label htmlFor="opt2-header-search" className="sr-only">
                Search for fruits, vegetables, boxes
              </label>
              <input
                id="opt2-header-search"
                type="text"
                value={searchDraft}
                onChange={(e) => setSearchDraft(e.target.value)}
                onClick={onOpenSearch}
                readOnly
                placeholder="Search for fruits, vegetables, boxes..."
                className="min-w-0 flex-1 cursor-pointer bg-transparent text-sm text-[#151515] placeholder:text-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search products"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#6CC04A] text-white transition-colors hover:bg-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#151515]"
              >
                <Search className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
              </button>
            </form>

            {/* Right Circular Utility Controls */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search products"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6CC04A]/30 bg-white text-[#151515] transition-colors hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] md:hidden"
              >
                <Search className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenWishlist}
                aria-label={`Wish List (${wishlistCount})`}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6CC04A]/30 bg-white text-[#151515] transition-colors hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <Heart className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
                {wishlistCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#6CC04A] px-1 text-[10px] font-bold tabular-nums text-white ring-2 ring-[#F0F9EC]">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenAccount}
                aria-label="My Account"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#6CC04A]/30 bg-white text-[#151515] transition-colors hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] sm:inline-flex"
              >
                <User className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                aria-label={`Open cart (${cartCount} items)`}
                className="relative inline-flex h-10 items-center gap-1.5 rounded-full border border-[#6CC04A]/35 bg-white px-3 text-[#3F7A27] shadow-xs transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="text-xs font-bold tabular-nums">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Category Navigation Row with Icons & Original 3KG Website Text Colors */}
        <nav
          aria-label="Main categories"
          className="hidden border-b border-zinc-200/80 bg-white lg:block"
          onMouseLeave={handleNavMouseLeave}
        >
          <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
            <ul className="flex flex-wrap items-center gap-1 py-2 xl:gap-2">
              {MEGA_MENU_CATEGORIES.slice(0, 7).map((cat) => {
                const hasGroups = Boolean(cat.groups && cat.groups.length > 0);
                const isOpen = activeMegaId === cat.id;

                return (
                  <li
                    key={cat.id}
                    className="relative"
                    onMouseEnter={() => handleNavMouseEnter(cat.id)}
                  >
                    <a
                      href={cat.href}
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13.5px] font-semibold transition-colors xl:px-3 xl:text-sm ${
                        isOpen
                          ? 'bg-[#6CC04A]/10 text-[#417A29]'
                          : 'text-[#212121] hover:bg-zinc-100/80 hover:text-[#569A3B]'
                      }`}
                    >
                      <FilledCategoryIcon
                        id={cat.id}
                        className={`h-4 w-4 shrink-0 ${
                          isOpen ? 'text-[#417A29]' : 'text-[#6CC04A]'
                        }`}
                      />
                      <span>{cat.label}</span>
                      {hasGroups && (
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-150 ${
                            isOpen ? 'rotate-180 text-[#569A3B]' : 'text-zinc-400'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </a>

                    {/* Mega Menu Dropdown */}
                    {hasGroups && isOpen && cat.groups && (
                      <div className="absolute left-0 top-full z-50 pt-1.5">
                        <div className="w-56 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-xl">
                          <div className="mb-1 border-b border-zinc-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                            {cat.label}
                          </div>
                          <ul className="space-y-0.5">
                            {cat.groups.map((sub) => (
                              <li key={sub.id}>
                                <a
                                  href={sub.href}
                                  className="block rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-700 transition-colors hover:bg-[#F4F8F1] hover:text-[#417A29]"
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}

              {/* More Categories Dropdown with Filled Icon */}
              <li ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((o) => !o)}
                  aria-expanded={moreOpen}
                  className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-[13.5px] font-semibold transition-colors xl:px-3 xl:text-sm ${
                    moreOpen
                      ? 'bg-[#6CC04A]/10 text-[#417A29]'
                      : 'text-[#212121] hover:bg-zinc-100/80 hover:text-[#569A3B]'
                  }`}
                >
                  <FilledCategoryIcon
                    id="more"
                    className={`h-4 w-4 shrink-0 ${
                      moreOpen ? 'text-[#417A29]' : 'text-[#6CC04A]'
                    }`}
                  />
                  <span>More</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-150 ${
                      moreOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-full z-50 mt-1.5 w-60 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-xl">
                    {MEGA_MENU_CATEGORIES.slice(7).map((cat) => (
                      <div key={cat.id} className="mb-1 last:mb-0">
                        <a
                          href={cat.href}
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[#212121] transition-colors hover:bg-[#F4F8F1] hover:text-[#417A29]"
                        >
                          <FilledCategoryIcon
                            id={cat.id}
                            className="h-4 w-4 shrink-0 text-[#6CC04A]"
                          />
                          <span>{cat.label}</span>
                        </a>
                          {cat.groups && (
                            <div className="ml-3 border-l border-zinc-200 pl-2">
                              {cat.groups.map((sub) => (
                                <a
                                  key={sub.id}
                                  href={sub.href}
                                  className="block rounded-md px-2.5 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-[#417A29]"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          )}
                          </div>
                      ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
              <SafeImage
                src={STORE_INFO.logo}
                alt={STORE_INFO.brandName}
                className="h-10 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="mb-4 flex items-center justify-between rounded-xl border border-zinc-200 bg-[#F8FAF7] px-3.5 py-2.5">
                <span className="text-xs font-semibold text-zinc-600">Currency</span>
                <select
                  aria-label="Select currency"
                  value={currency.code}
                  onChange={(e) => {
                    const found = CURRENCIES.find((c) => c.code === e.target.value);
                    if (found) onCurrencyChange(found);
                  }}
                  className="bg-transparent text-xs font-bold text-[#151515] focus:outline-none"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} ({c.symbol})
                    </option>
                  ))}
                </select>
              </div>

              <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Shop Categories
              </p>
              <ul className="space-y-1">
                {MEGA_MENU_CATEGORIES.map((cat) => {
                  const hasGroups = Boolean(cat.groups && cat.groups.length > 0);
                  const isExpanded = expandedMobileCat === cat.id;
                  return (
                    <li key={cat.id}>
                      <div className="flex items-center justify-between rounded-lg hover:bg-zinc-50">
                        <a
                          href={cat.href}
                          className="flex flex-1 items-center gap-2.5 px-2.5 py-2.5 text-sm font-semibold text-[#212121]"
                        >
                          <FilledCategoryIcon
                            id={cat.id}
                            className="h-4 w-4 shrink-0 text-[#6CC04A]"
                          />
                          <span>{cat.label}</span>
                        </a>
                        {hasGroups && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMobileCat(isExpanded ? null : cat.id)
                            }
                            aria-label={`Toggle ${cat.label}`}
                            className="p-2.5 text-zinc-500"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {hasGroups && isExpanded && cat.groups && (
                        <ul className="ml-3 space-y-0.5 border-l border-zinc-200 pb-2 pl-3">
                          {cat.groups.map((sub) => (
                            <li key={sub.id}>
                              <a
                                href={sub.href}
                                className="block py-1.5 text-xs font-medium text-zinc-600 hover:text-[#569A3B]"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 border-t border-zinc-200 pt-4">
                <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Menu
                </p>
                <ul className="space-y-1">
                  {TOP_NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block rounded-lg px-2.5 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-200 bg-[#F8FAF7] p-4 text-xs text-zinc-600">
              <div className="flex items-center justify-between">
                <a
                  href={`tel:+${STORE_INFO.contactPhone}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#151515]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#569A3B]" aria-hidden="true" />
                  <span>{STORE_INFO.displayPhone}</span>
                </a>
                <a
                  href={`mailto:${STORE_INFO.contactEmail}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#569A3B]"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
