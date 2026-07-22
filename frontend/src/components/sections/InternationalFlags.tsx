import logoBg from '@/assets/3V_brand_book/logo.jpg';
import { flagUrl, internationalPresence } from '@/data/presence';

export default function InternationalFlags() {
  const loop = [...internationalPresence, ...internationalPresence];

  return (
    <section
      aria-label="Presença internacional"
      className="relative overflow-hidden py-16"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <img
          src={logoBg}
          alt=""
          className="w-[120%] max-w-none grayscale contrast-125"
          aria-hidden
        />
      </div>

      <div className="relative z-10 text-center">
        <p className="mb-8 font-display text-xl italic text-terracotta">
          Nossa Presença Internacional
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-container flex animate-marquee items-center gap-16 px-8 md:gap-24">
            {loop.map((country, index) => (
              <img
                key={`${country.code}-${index}`}
                src={flagUrl(country.code)}
                alt={country.name}
                title={country.name}
                className="h-10 flex-shrink-0 rounded shadow-md transition-transform hover:scale-110 md:h-14"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
