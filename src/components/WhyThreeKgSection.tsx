import { WHY_3KG_ITEMS } from '../data/homepageData';

export function WhyThreeKgSection() {
  return (
    <section
      id="why-3kg"
      aria-labelledby="heading-why-3kg"
      className="border-t border-zinc-200/80 bg-[#F7F9F5] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <div className="mx-auto mb-2 h-[3px] w-8 rounded-full bg-[#6CC04A]" aria-hidden="true" />
          <h2
            id="heading-why-3kg"
            className="text-2xl font-bold tracking-tight text-[#151515] sm:text-[26px]"
          >
            Why 3KG?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_3KG_ITEMS.map((item) => {
            const maskUrl = `url("${item.icon}")`;
            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-xl border border-zinc-200/80 bg-white px-5 py-6 text-center transition-all duration-200 hover:border-[#6CC04A]/50 hover:shadow-[0_10px_26px_-14px_rgba(21,21,21,0.12)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6CC04A]/12">
                  <span
                    aria-hidden="true"
                    className="block h-6 w-6 bg-[#569A3B]"
                    style={{
                      maskImage: maskUrl,
                      WebkitMaskImage: maskUrl,
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                    }}
                  />
                </div>
                <h3 className="text-[15px] font-bold text-[#151515]">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
