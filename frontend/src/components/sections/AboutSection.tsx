import { BookOpen, Compass, Eye, Globe2 } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import InternationalFlags from '@/components/sections/InternationalFlags';

const highlights = [
  { text: siteContent.highlights[0], Icon: BookOpen },
  { text: siteContent.highlights[1], Icon: Globe2 },
] as const;

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden border-y border-sand bg-ivory px-4 py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 12% 0%, rgba(176, 138, 87, 0.14) 0%, transparent 42%), radial-gradient(ellipse at 90% 80%, rgba(90, 13, 27, 0.06) 0%, transparent 40%)',
        }}
        aria-hidden
      />

      <div className="container-max relative mx-auto max-w-5xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bronze">
            Quem somos
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-burgundy md:text-5xl">
            Sobre a 3V
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-bronze" />
        </header>

        <figure className="relative mx-auto mt-12 max-w-3xl text-center">
          <span
            className="font-display text-6xl leading-none text-bronze/50 md:text-7xl"
            aria-hidden
          >
            “
          </span>
          <blockquote className="-mt-4">
            <p className="font-display text-xl italic leading-relaxed text-burgundy md:text-2xl">
              {siteContent.meaning}
            </p>
          </blockquote>
        </figure>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-stone-600 md:text-lg">
          {siteContent.description}
        </p>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {highlights.map(({ text, Icon }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-2xl border border-sand bg-cream/80 px-4 py-4 shadow-[0_8px_24px_rgba(59,38,24,0.04)]"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-bronze">
                <Icon className="h-4 w-4" />
              </span>
              <span className="pt-1.5 text-sm font-medium leading-snug text-dark-brown">
                {text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-sand bg-cream p-7 shadow-[0_12px_40px_rgba(59,38,24,0.06)] md:p-9">
            <span className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-bronze" aria-hidden />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy/8 text-burgundy">
                <Compass className="h-4 w-4" />
              </span>
              <p className="font-display text-2xl font-bold text-burgundy">Missão</p>
            </div>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-stone-600">
              {siteContent.mission}
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-sand bg-cream p-7 shadow-[0_12px_40px_rgba(59,38,24,0.06)] md:p-9">
            <span className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-bronze" aria-hidden />
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy/8 text-burgundy">
                <Eye className="h-4 w-4" />
              </span>
              <p className="font-display text-2xl font-bold text-burgundy">Visão</p>
            </div>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-stone-600">
              {siteContent.vision}
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-3xl border border-sand bg-burgundy px-6 py-8 text-center md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bronze">
            Valores
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {siteContent.values.map((value, index) => (
              <li key={value} className="flex items-center gap-6">
                <span className="font-display text-xl font-semibold text-cream md:text-2xl">
                  {value}
                </span>
                {index < siteContent.values.length - 1 ? (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-bronze sm:block" aria-hidden />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <InternationalFlags />
    </section>
  );
}
