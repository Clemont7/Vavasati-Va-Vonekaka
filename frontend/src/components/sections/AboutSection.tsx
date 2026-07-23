import { Home, Users } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import InternationalFlags from '@/components/sections/InternationalFlags';

export default function AboutSection() {
  return (
    <section id="sobre" className="section-screen border-y border-stone-200 bg-stone-50 px-4 py-16">
      <div className="container-max mx-auto max-w-5xl space-y-8">
        <div className="max-w-3xl space-y-6">
          <h2 className="font-display text-3xl font-bold text-burgundy">Sobre a 3V</h2>
          <p className="font-playfair-italic leading-relaxed text-stone-600">
            “{siteContent.meaning}”
          </p>
          <p className="leading-relaxed text-stone-600">{siteContent.description}</p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-terracotta">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta/10">
                <Home className="h-4 w-4" />
              </span>
              <span className="font-medium">{siteContent.highlights[0]}</span>
            </li>
            <li className="flex items-center gap-3 text-terracotta">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta/10">
                <Users className="h-4 w-4" />
              </span>
              <span className="font-medium">{siteContent.highlights[1]}</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          <div className="rounded-2xl bg-cream p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze">Missão</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{siteContent.mission}</p>
          </div>

          <div className="rounded-2xl bg-cream p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze">Visão</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">{siteContent.vision}</p>
          </div>

          <div className="rounded-2xl bg-cream p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze">Valores</p>
            <ul className="mt-3 space-y-2.5">
              {siteContent.values.map((value) => (
                <li key={value} className="text-sm font-semibold text-burgundy">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <InternationalFlags />
    </section>
  );
}
