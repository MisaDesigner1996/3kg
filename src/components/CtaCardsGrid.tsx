import { ArrowRight } from 'lucide-react';
import { CTA_CARDS_GRID } from '../data/homepageData';
import { SafeImage } from './SafeImage';

export function CtaCardsGrid() {
  return (
    <section
      id="featured-collections"
      aria-label="Featured Collections"
      className="bg-white py-8 sm:py-12"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {CTA_CARDS_GRID.map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="group relative block overflow-hidden rounded-2xl border border-zinc-200/70 bg-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_-18px_rgba(21,21,21,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6CC04A]"
              style={{ aspectRatio: '500 / 650' }}
            >
              <SafeImage
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Measured Contrast Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 transition-opacity duration-300 group-hover:from-black/90"
              />

              {/* Card Copy */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 text-white sm:p-6">
                <h3 className="text-base font-bold leading-tight tracking-tight sm:text-xl lg:text-[22px]">
                  {card.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 max-w-[240px] text-[11px] leading-relaxed text-white/85 sm:mt-2 sm:text-xs">
                  {card.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-[11px] font-bold text-[#151515] shadow-xs transition-all duration-200 group-hover:bg-[#6CC04A] group-hover:text-white sm:mt-4 sm:px-4 sm:py-2.5 sm:text-xs">
                  <span>Shop now</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
