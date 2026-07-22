import heroImage from '@/assets/3V_brand_book/img1.jpeg';
import { siteContent } from '@/data/siteContent';

export default function HeroSection() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="inicio" className="section-screen overflow-x-hidden px-4 py-12 md:py-16">
      <div className="container-max grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <h1 className="hero-title font-display font-bold text-burgundy">
            Mulheres que <br />
            <span className="font-playfair-italic text-terracotta">Resplandecem</span>
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-stone-600">
            {siteContent.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={() => scrollTo('contactos')}
              className="rounded-full bg-burgundy px-8 py-4 font-medium text-white shadow-lg transition-all hover:bg-burgundy/90"
            >
              Tornar-se Membro
            </button>
            <button
              type="button"
              onClick={() => scrollTo('oportuniza')}
              className="rounded-full border border-terracotta px-8 py-4 font-medium text-terracotta transition-all hover:bg-terracotta/5"
            >
              Explorar Oportunidades
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="translate-x-2 overflow-hidden rounded-3xl border-4 border-white shadow-2xl rotate-1 md:translate-x-6 md:rotate-3">
            <img
              src={heroImage}
              alt="Mulheres da comunidade 3V"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden max-w-[180px] rounded-xl border border-stone-100 bg-white p-4 shadow-xl sm:block md:-left-6">
            <p className="mb-1 text-xs font-bold uppercase text-burgundy">
              {siteContent.impactBadge.title}
            </p>
            <p className="text-[10px] text-stone-500">{siteContent.impactBadge.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
