import { ArrowRight } from 'lucide-react';
import { HERO_BANNERS, SITE_BASE_URL, STORE_INFO } from '../data/homepageData';
import { SafeImage } from './SafeImage';

export function Option2HeroBanner() {
  const banner = HERO_BANNERS[0];

  const handleShopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const fruitsSection = document.getElementById('fruits');
    if (fruitsSection) {
      e.preventDefault();
      const header = document.querySelector('header');
      const offset = (header?.getBoundingClientRect().height ?? 72) + 12;
      const top = fruitsSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-home"
      aria-label="Featured Fresh Offers"
      className="bg-white pt-4 pb-6 sm:pt-6 sm:pb-10"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#151515] shadow-[0_24px_48px_-22px_rgba(21,21,21,0.32)]">
          {/* Atmospheric Full-Bleed Hero Backdrop with 50% Black Overlay */}
          <SafeImage
            src={banner.image}
            alt=""
            loading="eager"
            className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover object-center blur-md"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-black/50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(108,192,74,0.18),transparent_58%)]"
          />

          <div className="relative z-10 grid items-center gap-6 p-6 sm:p-9 lg:grid-cols-[1.02fr_1.18fr] lg:gap-10 lg:p-11">
            {/* Left Editorial Content Column (Exact Original Content & Buttons) */}
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-xs">
                  <SafeImage
                    src={STORE_INFO.favicon}
                    alt={STORE_INFO.shortBrand}
                    loading="eager"
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#82C965]">
                  {STORE_INFO.shortBrand} · {STORE_INFO.storeLocation}
                </span>
              </div>

              <h1 className="max-w-[540px] [text-wrap:balance] text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[42px]">
                Fresh &amp; quality fruits and vegetables to your doorstep.
              </h1>

              <p className="mt-4 max-w-[480px] text-sm leading-[1.65] text-white/90 sm:text-[15px]">
                {STORE_INFO.footerDescription}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#fruits"
                  onClick={handleShopClick}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#6CC04A] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#569A3B] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Shop now</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={`${SITE_BASE_URL}/shop?discounted=true`}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/40 bg-black/25 px-5 py-3 text-sm font-semibold text-white backdrop-blur-[2px] transition-colors duration-200 hover:border-[#6CC04A] hover:bg-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
                >
                  <span>Special Offers</span>
                </a>
              </div>
            </div>

            {/* Right Framed 2:1 Hero Visual Showcase */}
            <a
              href={banner.link}
              aria-label={banner.alt}
              className="group relative block aspect-[2/1] w-full overflow-hidden rounded-2xl border border-white/20 bg-black/30 shadow-[0_20px_50px_-14px_rgba(0,0,0,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6CC04A]"
            >
              <SafeImage
                src={banner.image}
                alt={banner.alt}
                loading="eager"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
