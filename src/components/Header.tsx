import { useState, useRef, useEffect } from 'react';
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

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  currency: CurrencyOption;
  onCurrencyChange: (currency: CurrencyOption) => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
}

export function Header({
  cartCount,
  wishlistCount,
  currency,
  onCurrencyChange,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
}: HeaderProps) {
  const [activeMegaId, setActiveMegaId] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCat, setExpandedMobileCat] = useState<string | null>(null);

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

  return (
    <>
      {/* Top Utility Strip (Desktop) */}
      <div className="hidden border-b border-zinc-200/80 bg-[#F8FAF7] text-xs text-zinc-600 lg:block">
        <div className="mx-auto flex max-w-[1250px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a
              href={`tel:+${STORE_INFO.contactPhone}`}
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 transition-colors hover:text-[#569A3B]"
            >
              <Phone className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
              <span className="tabular-nums">{STORE_INFO.displayPhone}</span>
            </a>
            <span className="text-zinc-300" aria-hidden="true">
              |
            </span>
            <a
              href={`mailto:${STORE_INFO.contactEmail}`}
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 transition-colors hover:text-[#569A3B]"
            >
              <Mail className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
              <span>{STORE_INFO.contactEmail}</span>
            </a>
            <span className="text-zinc-300" aria-hidden="true">
              |
            </span>
            <a
              href={STORE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-zinc-700 transition-colors hover:text-[#569A3B]"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <nav aria-label="Quick site links" className="flex items-center gap-4">
              {TOP_NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap text-zinc-600 transition-colors hover:text-[#151515]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <span className="text-zinc-300" aria-hidden="true">
              |
            </span>

            {/* Currency Switcher */}
            <div ref={currencyRef} className="relative">
              <button
                type="button"
                onClick={() => setCurrencyOpen((o) => !o)}
                aria-expanded={currencyOpen}
                aria-label="Select currency"
                className="inline-flex items-center gap-1.5 font-semibold text-[#151515] transition-colors hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <Globe className="h-3.5 w-3.5 text-[#6CC04A]" aria-hidden="true" />
                <span>{currency.code}</span>
                <ChevronDown className="h-3 w-3 opacity-70" aria-hidden="true" />
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

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:gap-6 lg:px-8 lg:py-3">
          {/* Mobile Menu & Search */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Open search"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Original 3KG Logo */}
          <a
            href={`${SITE_BASE_URL}/`}
            aria-label={STORE_INFO.brandName}
            className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
          >
            <SafeImage
              src={STORE_INFO.logo}
              alt={STORE_INFO.brandName}
              loading="eager"
              className="h-11 w-auto max-w-[80px] object-contain sm:h-12 lg:h-[52px] lg:max-w-[96px]"
            />
          </a>

          {/* Primary Category Navigation (Desktop) */}
          <nav
            aria-label="Main categories"
            className="hidden min-w-0 flex-1 items-center justify-center lg:flex"
            onMouseLeave={handleNavMouseLeave}
          >
            <ul className="flex items-center gap-1 xl:gap-2">
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
                      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-semibold transition-colors xl:px-3 xl:text-sm ${
                        isOpen
                          ? 'bg-[#6CC04A]/10 text-[#417A29]'
                          : 'text-[#212121] hover:bg-zinc-100/80 hover:text-[#569A3B]'
                      }`}
                    >
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
                      <div className="absolute left-0 top-full z-50 pt-2">
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

              {/* More Categories Dropdown */}
              <li ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((o) => !o)}
                  aria-expanded={moreOpen}
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-semibold text-[#212121] transition-colors hover:bg-zinc-100/80 hover:text-[#569A3B] xl:px-3 xl:text-sm"
                >
                  <span>More</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 text-zinc-400 transition-transform duration-150 ${
                      moreOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {moreOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-60 rounded-xl border border-zinc-200/90 bg-white p-2 shadow-xl">
                    {MEGA_MENU_CATEGORIES.slice(7).map((cat) => (
                      <div key={cat.id} className="mb-1 last:mb-0">
                        <a
                          href={cat.href}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#151515] transition-colors hover:bg-[#F4F8F1] hover:text-[#417A29]"
                        >
                          {cat.label}
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
          </nav>

          {/* Right Action Controls */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search products"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-zinc-100 hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] lg:inline-flex"
            >
              <Search className="h-[19px] w-[19px]" strokeWidth={1.75} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label={`Wish List (${wishlistCount})`}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-zinc-100 hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <Heart className="h-[19px] w-[19px]" strokeWidth={1.75} aria-hidden="true" />
              {wishlistCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#151515] px-1 text-[10px] font-bold tabular-nums text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenAccount}
              aria-label="My Account"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-[#212121] transition-colors hover:bg-zinc-100 hover:text-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] sm:inline-flex"
            >
              <User className="h-[19px] w-[19px]" strokeWidth={1.75} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              aria-label={`Open cart (${cartCount} items)`}
              className="relative inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-[#F8FAF7] px-3 text-[#151515] transition-all hover:border-[#6CC04A] hover:bg-[#6CC04A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
            >
              <ShoppingBag className="h-[18px] w-[18px] text-[#569A3B]" strokeWidth={2} aria-hidden="true" />
              <span className="text-xs font-bold tabular-nums">{cartCount}</span>
            </button>
          </div>
        </div>
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
                          className="flex-1 px-2.5 py-2.5 text-sm font-semibold text-[#151515]"
                        >
                          {cat.label}
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
                  className="font-semibold text-[#151515]"
                >
                  {STORE_INFO.displayPhone}
                </a>
                <a
                  href={STORE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#569A3B]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
