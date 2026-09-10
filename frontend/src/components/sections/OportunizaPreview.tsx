import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react';
import {
  HOME_OPPORTUNITIES_LIMIT,
  opportunities,
  oportunizaWhatsAppChannel,
  type Opportunity,
} from '@/data/opportunities';

type Filter = 'Todas' | Opportunity['type'];

const typeBadge: Record<Opportunity['typeColor'], string> = {
  red: 'bg-terracotta',
  emerald: 'bg-terracotta',
  amber: 'bg-bronze',
  blue: 'bg-dark-brown',
};

function OpportunityCard({ item }: { item: Opportunity }) {
  const [imgFailed, setImgFailed] = useState(!item.image);

  return (
    <article className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-lg">
      <div className="relative h-48 overflow-hidden">
        {imgFailed ? (
          <div
            className="h-full w-full bg-gradient-to-br from-dark-brown via-terracotta to-bronze"
            aria-hidden
          />
        ) : (
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgFailed(true)}
          />
        )}
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase text-white ${typeBadge[item.typeColor]}`}
        >
          {item.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-1 font-display text-lg font-bold text-terracotta">
          {item.title}
        </h3>
        <p className="mb-4 flex items-center gap-1 text-xs text-stone-500">
          <MapPin className="h-3 w-3" />
          {item.location}
        </p>
        <p className="mb-6 line-clamp-3 text-sm text-stone-600">
          {item.summary}
        </p>
        <div className="flex items-center justify-between border-t border-stone-100 pt-4">
          <span className="text-xs text-stone-400">{item.expiresIn}</span>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bronze/40 text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
            aria-label={`Abrir ${item.title} numa nova aba`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function OportunizaPreview() {
  const [filter, setFilter] = useState<Filter>('Todas');

  const typeOptions = useMemo(() => {
    const types = [...new Set(opportunities.map((item) => item.type))];
    return types;
  }, []);

  const visible = useMemo(() => {
    const list =
      filter === 'Todas'
        ? opportunities
        : opportunities.filter((item) => item.type === filter);
    return list.slice(0, HOME_OPPORTUNITIES_LIMIT);
  }, [filter]);

  return (
    <section
      id="oportuniza"
      className="relative bg-stone-50 px-4 py-16 md:py-20"
      style={{ scrollMarginTop: 'var(--header-h)' }}
    >
      <div className="container-max mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
        <div className="text-left">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-terracotta">
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
          className="flex items-center gap-2 font-semibold text-terracotta transition-transform hover:translate-x-1"
        >
          Ver todas as oportunidades
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="container-max mb-8 flex flex-wrap gap-2">
        {(['Todas', ...typeOptions] as Filter[]).map((option) => {
          const active = filter === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active
                  ? 'bg-terracotta text-cream'
                  : 'border border-sand bg-cream text-dark-brown hover:border-bronze'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="container-max grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <OpportunityCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
