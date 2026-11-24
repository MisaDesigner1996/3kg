import { useState, useEffect, useRef, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  Globe,
} from 'lucide-react';
import {
  APP_STORE_BADGES,
  CURRENCIES,
  CurrencyOption,
  FOOTER_LINK_COLUMNS,
  PAYMENT_LOGOS,
  SITE_BASE_URL,
  STORE_INFO,
} from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface FooterProps {
  currency?: CurrencyOption;
  onCurrencyChange?: (currency: CurrencyOption) => void;
}

export function Footer({
  currency = CURRENCIES[0],
  onCurrencyChange,
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const currencyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutsideCurrencyClick(e: MouseEvent) {
      if (
        currencyRef.current &&
        !currencyRef.current.contains(e.target as Node)
      ) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideCurrencyClick);
    return () =>
      document.removeEventListener('mousedown', handleOutsideCurrencyClick);
  }, []);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!newsletterConsent) {
      setErrorMsg('Please confirm newsletter consent to subscribe.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
    setEmail('');
  };

  const informationCol = FOOTER_LINK_COLUMNS[0];
  const extrasCol = FOOTER_LINK_COLUMNS[1];
  const accountCol = FOOTER_LINK_COLUMNS[2];

  return (
    <footer
      id="footer"
      className="mt-auto border-t border-black/15 bg-white font-sans text-black"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Reference Layout with Original 3KG Content, Logo, Colors & Typography */}
        <div className="grid gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.85fr_1.35fr] lg:items-start lg:gap-x-10 lg:py-16">
          {/* Column 1: Original 3KG Logo, Description & Contact Information */}
          <section className="min-w-0">
            <a
              href={`${SITE_BASE_URL}/`}
              aria-label={STORE_INFO.brandName}
              className="mb-4 inline-flex"
            >
              <SafeImage
                src={STORE_INFO.logo}
                alt={STORE_INFO.brandName}
                className="h-auto max-h-[64px] w-auto max-w-[144px] object-contain"
              />
            </a>

            <p className="mb-5 max-w-[300px] text-sm leading-6 text-black/70">
              {STORE_INFO.footerDescription}
            </p>

            <div className="space-y-2.5 text-sm text-black/70">
              <div className="flex items-center gap-2.5">
                <Phone
                  className="h-4 w-4 shrink-0 text-black"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <a
                  href={`tel:+${STORE_INFO.contactPhone}`}
                  dir="ltr"
                  className="font-bold text-black transition-colors hover:text-[#6CC04A]"
                >
                  {STORE_INFO.contactPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail
                  className="h-4 w-4 shrink-0 text-black"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${STORE_INFO.contactEmail}`}
                  className="break-all font-semibold text-black transition-colors hover:text-[#6CC04A]"
                >
                  {STORE_INFO.contactEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin
                  className="h-4 w-4 shrink-0 text-black"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="font-semibold text-black">
                  {STORE_INFO.storeLocation}
                </span>
              </div>
            </div>
          </section>

          {/* Column 2: Information */}
          <section className="min-w-0">
            <h2 className="mb-5 text-base font-bold text-black">
              {informationCol.title}
            </h2>
            <ul className="space-y-3 text-sm leading-5 text-black/70">
              {informationCol.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#6CC04A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Column 3: My Account & Extras */}
          <section className="min-w-0">
            <h2 className="mb-5 text-base font-bold text-black">
              {accountCol.title}
            </h2>
            <ul className="space-y-3 text-sm leading-5 text-black/70">
              {accountCol.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#6CC04A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 mb-3.5 text-base font-bold text-black">
              {extrasCol.title}
            </h2>
            <ul className="space-y-3 text-sm leading-5 text-black/70">
              {extrasCol.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#6CC04A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Column 4: Pill Newsletter Sign-Up + Consent Checkbox + App Badges */}
          <section className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h2 className="mb-3 text-base font-bold text-black">
              Stay in the loop
            </h2>
            <p className="mb-5 text-sm leading-6 text-black/70">
              Fresh deals &amp; new arrivals, weekly.
            </p>

            <form
              onSubmit={handleSubscribe}
              noValidate
              className="flex min-w-0 w-full overflow-hidden rounded-full border border-black/20 bg-white focus-within:border-[#6CC04A]"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                your@email.com
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="your@email.com"
                className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm text-black placeholder:text-black/55 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-r-full bg-[#6CC04A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#569A3B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black"
              >
                Subscribe
              </button>
            </form>

            <label className="mt-3.5 flex cursor-pointer items-center gap-2.5 text-xs leading-5 text-black/70">
              <input
                type="checkbox"
                checked={newsletterConsent}
                onChange={(e) => {
                  setNewsletterConsent(e.target.checked);
                  if (errorMsg) setErrorMsg('');
                }}
                className="h-4 w-4 shrink-0 rounded border-black/30 accent-[#6CC04A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              />
              <span>
                By subscribing you agree to our{' '}
                <a
                  href={`${SITE_BASE_URL}/privacy-policy`}
                  className="font-semibold text-[#6CC04A] hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {errorMsg && (
              <p role="alert" className="mt-2 text-xs font-medium text-red-600">
                {errorMsg}
              </p>
            )}

            {subscribed && (
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#6CC04A]">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Thank you for subscribing! Expect fresh deals soon.</span>
              </p>
            )}

            {/* Download Our App */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-bold text-black">
                Download our app
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={STORE_INFO.appAndroidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Play"
                  className="inline-flex h-10 w-[138px] items-center gap-2 rounded bg-black px-2.5 text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                >
                  <SafeImage
                    src={APP_STORE_BADGES.googlePlay}
                    alt=""
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <span className="min-w-0 whitespace-nowrap text-start leading-tight">
                    <span className="block text-[9px]">GET IT ON</span>
                    <span className="block text-xs font-semibold">Google Play</span>
                  </span>
                </a>

                <a
                  href={STORE_INFO.appIosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="App Store"
                  className="inline-flex h-10 w-[138px] items-center gap-2 rounded bg-black px-2.5 text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                >
                  <SafeImage
                    src={APP_STORE_BADGES.appStore}
                    alt=""
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <span className="min-w-0 whitespace-nowrap text-start leading-tight">
                    <span className="block text-[9px]">Download on</span>
                    <span className="block text-xs font-semibold">App Store</span>
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Utility Row (Reference Style: Region/Currency + Social Left | Payment Badges Right) */}
        <div className="flex flex-wrap items-center justify-between gap-6 py-5">
          {/* Left: Interactive 3KG Currency Selector & Social/Contact Icons */}
          <div className="flex flex-wrap items-center gap-6">
            <div ref={currencyRef} className="relative">
              <button
                type="button"
                onClick={() => setCurrencyOpen((prev) => !prev)}
                aria-expanded={currencyOpen}
                aria-label="Select footer currency"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-[#6CC04A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <Globe className="h-4 w-4 text-[#6CC04A]" aria-hidden="true" />
                <span>
                  {currency.country.toUpperCase()} / {currency.code}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 opacity-70 transition-transform duration-150 ${
                    currencyOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {currencyOpen && (
                <div
                  role="menu"
                  className="absolute bottom-full left-0 z-50 mb-2 w-36 rounded-xl border border-black/15 bg-white py-1.5 shadow-lg"
                >
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onCurrencyChange?.(c);
                        setCurrencyOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3.5 py-1.5 text-left text-xs transition-colors hover:bg-black/5 ${
                        c.code === currency.code
                          ? 'font-bold text-[#6CC04A]'
                          : 'font-medium text-black'
                      }`}
                    >
                      <span>{c.code}</span>
                      <span className="text-black/50">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 text-black">
              <a
                href={STORE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="transition-colors hover:text-[#6CC04A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a
                href={`tel:+${STORE_INFO.contactPhone}`}
                aria-label="Call Us"
                title="Call Us"
                className="transition-colors hover:text-[#6CC04A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <Phone className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${STORE_INFO.contactEmail}`}
                aria-label="Email Us"
                title="Email Us"
                className="transition-colors hover:text-[#6CC04A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
              >
                <Mail className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right: Payment Methods */}
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-9 items-center justify-center overflow-hidden rounded border border-black/10 bg-white px-1.5"
              >
                <SafeImage
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto max-w-[48px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Divider & Original 3KG Copyright / Registration Strip */}
        <div className="grid gap-3 border-t border-black/15 pt-5 pb-24 text-xs text-black/65 sm:pb-24 md:grid-cols-3 md:items-center">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <p>
              Copyright © {new Date().getFullYear()}. {STORE_INFO.brandName}.
            </p>
            <p>
              Powered By:{' '}
              <a
                href={STORE_INFO.poweredBy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-black no-underline transition-colors hover:text-[#6CC04A]"
              >
                {STORE_INFO.poweredBy.name}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 md:justify-center">
            <span className="font-semibold text-black">
              {STORE_INFO.storeLocation}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              License Number: {STORE_INFO.licenseNumber}
            </span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">
              TRN: {STORE_INFO.taxRegistrationNumber}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href={`${SITE_BASE_URL}/terms-and-conditions`}
              className="text-black/70 transition-colors hover:text-[#6CC04A]"
            >
              Terms &amp; Conditions
            </a>
            <a
              href={`${SITE_BASE_URL}/privacy-policy`}
              className="text-black/70 transition-colors hover:text-[#6CC04A]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
