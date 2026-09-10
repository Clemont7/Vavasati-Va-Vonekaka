import { BookOpen, Compass, Eye, Globe2 } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import InternationalFlags from '@/components/sections/InternationalFlags';
import quemSomos from '@/assets/quem_somos_cortado.jpg';

const highlights = [
  { text: siteContent.highlights[0], Icon: BookOpen },
  { text: siteContent.highlights[1], Icon: Globe2 },
] as const;

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden border-y border-sand bg-ivory"
      style={{ scrollMarginTop: 'var(--header-h)' }}
      aria-label="Quem somos"
    >
      {/* Imagem «Quem Somos?» — fundo de toda a secção, em cor original */}
      <div
        className="pointer-events-none absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${quemSomos})`, backgroundColor: '#d9c4ae' }}
        aria-hidden
      />
      {/* Só um esbatimento no fundo para a imagem fundir com a cor de base */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#d9c4ae]"
        aria-hidden
      />

      <div className="relative px-4 pb-4 pt-[26vw] md:pb-6">
        <div className="container-max relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl rounded-3xl border border-sand/70 bg-cream/85 px-6 py-8 text-center shadow-[0_16px_48px_rgba(61,28,2,0.14)] backdrop-blur-sm md:px-10 md:py-10">
            <figure className="relative">
              <span
                className="font-display text-6xl leading-none text-bronze/50 md:text-7xl"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4">
                <p className="font-display text-xl italic leading-relaxed text-terracotta md:text-2xl">
                  {siteContent.meaning}
                </p>
              </blockquote>
            </figure>

            <p className="mt-6 text-base leading-relaxed text-stone-600 md:text-lg">
              {siteContent.description}
            </p>
          </div>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {highlights.map(({ text, Icon }) => (
              <li
                key={text}
                className="flex items-start gap-3 rounded-2xl border border-sand bg-cream/90 px-4 py-4 shadow-[0_8px_24px_rgba(59,38,24,0.08)] backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-bronze">
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
              <span
                className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-bronze"
                aria-hidden
              />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/8 text-terracotta">
                  <Compass className="h-4 w-4" />
                </span>
                <p className="font-display text-2xl font-bold text-terracotta">
                  Missão
                </p>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-stone-600">
                {siteContent.mission}
              </p>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-sand bg-cream p-7 shadow-[0_12px_40px_rgba(59,38,24,0.06)] md:p-9">
              <span
                className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-bronze"
                aria-hidden
              />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/8 text-terracotta">
                  <Eye className="h-4 w-4" />
                </span>
                <p className="font-display text-2xl font-bold text-terracotta">
                  Visão
                </p>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-stone-600">
                {siteContent.vision}
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-3xl border border-cream/25 bg-terracotta px-6 py-8 text-center md:px-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/90">
              Valores
            </p>
            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {siteContent.values.map((value, index) => (
                <li key={value} className="flex items-center gap-6">
                  <span className="font-display text-xl font-semibold text-cream md:text-2xl">
                    {value}
                  </span>
                  {index < siteContent.values.length - 1 ? (
                    <span
                      className="hidden h-1.5 w-1.5 rounded-full bg-primary-gold sm:block"
                      aria-hidden
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <InternationalFlags />
        </div>
      </div>
    </section>
  );
}
