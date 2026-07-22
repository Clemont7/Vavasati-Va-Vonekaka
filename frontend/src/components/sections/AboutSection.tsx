import { Home, Users } from 'lucide-react';
import aboutImage from '@/assets/3V_brand_book/img2.jpeg';
import { siteContent } from '@/data/siteContent';

export default function AboutSection() {
  return (
    <section id="sobre" className="section-screen border-y border-stone-200 bg-stone-50 px-4 py-16">
      <div className="container-max grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <div className="relative aspect-video overflow-hidden rounded-2xl border-8 border-white shadow-xl">
            <img
              src={aboutImage}
              alt="Sobre a 3V"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-burgundy/80 px-4 py-1 text-xs font-medium text-white backdrop-blur">
              Essência & Tradição
            </div>
          </div>
        </div>

        <div className="order-1 space-y-6 md:order-2">
          <h2 className="font-display text-3xl font-bold text-burgundy">Sobre a 3V</h2>
          <p className="font-playfair-italic leading-relaxed text-stone-600">
            “{siteContent.meaning}”
          </p>
          <p className="leading-relaxed text-stone-600">{siteContent.description}</p>

          <div className="grid gap-3 sm:grid-cols-3">
            {siteContent.values.map((value) => (
              <div
                key={value}
                className="rounded-xl border border-bronze/30 bg-cream px-3 py-3 text-center"
              >
                <p className="text-sm font-semibold text-burgundy">{value}</p>
              </div>
            ))}
          </div>

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

          <div className="rounded-2xl bg-cream p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-bronze">Missão</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{siteContent.mission}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-bronze">Visão</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{siteContent.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
