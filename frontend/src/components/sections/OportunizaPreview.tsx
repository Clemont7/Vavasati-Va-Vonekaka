import { ArrowRight, MapPin } from 'lucide-react';
import {
  opportunities,
  oportunizaWhatsAppChannel,
  type Opportunity,
} from '@/data/opportunities';

const typeBadge: Record<Opportunity['typeColor'], string> = {
  red: 'bg-red-600',
  emerald: 'bg-emerald-600',
  amber: 'bg-amber-600',
  blue: 'bg-blue-600',
};

export default function OportunizaPreview() {
  return (
    <section id="oportuniza" className="section-screen overflow-hidden bg-stone-50 px-4 py-16">
      <div className="container-max mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
        <div className="text-left">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-burgundy">
            OPORTUNIZA
          </h2>
          <p className="mt-2 text-stone-500">
            As melhores vagas, bolsas e estágios selecionados para a nossa rede.
          </p>
        </div>
        <a
          href={oportunizaWhatsAppChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-burgundy transition-transform hover:translate-x-1"
        >
          Ver todas as oportunidades
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="container-max grid grid-cols-1 gap-8 md:grid-cols-3">
        {opportunities.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase text-white ${typeBadge[item.typeColor]}`}
              >
                {item.type}
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-1 font-display text-lg font-bold text-burgundy">{item.title}</h3>
              <p className="mb-4 flex items-center gap-1 text-xs text-stone-500">
                <MapPin className="h-3 w-3" />
                {item.location}
              </p>
              <p className="mb-6 line-clamp-3 text-sm text-stone-600">{item.summary}</p>
              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="text-xs text-stone-400">{item.expiresIn}</span>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase text-terracotta hover:text-burgundy"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
