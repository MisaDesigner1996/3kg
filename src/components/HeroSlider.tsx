import { HERO_BANNERS } from '../data/homepageData';
import { SafeImage } from './SafeImage';

export function HeroSlider() {
  const banner = HERO_BANNERS[0];

  return (
    <section
      id="hero-home"
      aria-label="Featured Fresh Offers"
      className="bg-white pt-4 pb-6 sm:pt-6 sm:pb-8"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <a
          href={banner.link}
          className="group relative block w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#F4F6F3] shadow-[0_16px_40px_-20px_rgba(21,21,21,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6CC04A]"
          style={{ aspectRatio: '2 / 1' }}
        >
          <SafeImage
            src={banner.image}
            alt={banner.alt}
            loading="eager"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </a>
      </div>
    </section>
  );
}
