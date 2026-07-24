import { useEffect, useState } from 'react';
import {
  Globe2,
  Heart,
  Laptop,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { memberBenefits } from '@/data/programs';

const icons = {
  career: Rocket,
  enterprise: Lightbulb,
  branding: Sparkles,
  personal: Heart,
  network: Globe2,
  growth: TrendingUp,
  digital: Laptop,
} as const;

const CYCLE_MS = 2000;

export default function FeaturedPrograms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % memberBenefits.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-burgundy px-4 py-16 text-cream md:py-20"
      aria-labelledby="beneficios-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #C4A484 0%, transparent 45%), radial-gradient(circle at 80% 80%, #E07A5F 0%, transparent 40%)',
        }}
        aria-hidden
      />

      <div className="container-max relative">
        <div className="mb-12 max-w-3xl md:mb-16">
          <h2
            id="beneficios-title"
            className="whitespace-nowrap font-display text-[clamp(1.05rem,3.6vw,2.75rem)] font-bold text-cream"
          >
            Vantagens de Ser Membro Integral da 3V
          </h2>
          <div className="mt-5 h-1 w-20 bg-bronze" />
          <p className="mt-6 text-base leading-relaxed text-cream/80 md:text-lg">
            Sete direitos concretos para quem faz parte da comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {memberBenefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            const featured = index === 0;
            const isActive = !reducedMotion && index === activeIndex;

            return (
              <article
                key={benefit.id}
                className={`group relative overflow-hidden border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-sm transition-[background-color,transform] duration-500 hover:border-bronze/50 hover:bg-cream/[0.12] ${
                  featured ? 'sm:col-span-2 lg:col-span-2 xl:col-span-2' : ''
                } ${isActive ? 'z-10 scale-[1.02] animate-benefit-shine bg-cream/[0.14]' : ''}`}
              >
                {isActive ? (
                  <span
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                    aria-hidden
                  >
                    <span className="absolute -inset-y-8 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-primary-gold/40 to-transparent benefit-shimmer" />
                  </span>
                ) : null}

                <div className="relative mb-5 flex items-start justify-between gap-4">
                  <span
                    className={`font-display text-4xl font-bold leading-none md:text-5xl ${
                      isActive ? 'text-primary-gold' : 'text-bronze/90'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                      isActive
                        ? 'bg-primary-gold text-burgundy shadow-[0_0_20px_rgba(212,175,55,0.65)]'
                        : 'bg-bronze/20 text-bronze group-hover:bg-bronze group-hover:text-burgundy'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3
                  className={`relative mb-2 font-display font-bold text-cream ${
                    featured ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`relative leading-relaxed text-cream/70 ${
                    featured ? 'max-w-md text-base' : 'text-sm'
                  }`}
                >
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
