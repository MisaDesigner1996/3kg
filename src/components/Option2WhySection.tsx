import { WHY_3KG_ITEMS } from '../data/homepageData';

export function Option2WhySection() {
  return (
    <section
      id="why-3kg"
      aria-labelledby="opt2-heading-why-3kg"
      className="bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2
            id="opt2-heading-why-3kg"
            className="text-xl font-bold tracking-tight text-[#151515] sm:text-2xl"
          >
            Why 3KG?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_3KG_ITEMS.map((item) => {
            const maskUrl = `url("${item.icon}")`;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-2xl border border-zinc-200/80 bg-[#F8FAF7] p-4 transition-colors hover:border-[#6CC04A]/60 lg:flex-col lg:gap-3 lg:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs">
                  <span
                    aria-hidden="true"
                    className="block h-5 w-5 bg-[#6CC04A]"
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
                <div>
                  <h3 className="text-[14px] font-bold text-[#151515]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
