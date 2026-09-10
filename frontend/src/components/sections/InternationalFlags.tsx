import { flagUrl, internationalPresence } from '@/data/presence';

export default function InternationalFlags() {
  const loop = [...internationalPresence, ...internationalPresence];

  return (
    <div
      aria-label="Presença internacional"
      className="relative mt-16 overflow-hidden pb-2 pt-8 md:mt-20 md:pb-3 md:pt-10"
    >
      <div className="relative z-10 text-center">
        <p className="mb-8 font-display text-2xl font-bold italic text-gold [text-shadow:0_2px_4px_rgba(61,28,2,0.9),0_0_16px_rgba(61,28,2,0.5)] md:text-3xl">
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
    </div>
  );
}
