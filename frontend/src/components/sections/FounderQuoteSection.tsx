import founderPhoto from '@/assets/Ludmila_foto.png';
import { founderQuote } from '@/data/testimonials';

export default function FounderQuoteSection() {
  return (
    <section
      className="section-screen relative overflow-hidden bg-burgundy px-4 py-16 text-cream"
      aria-label="Mensagem da fundadora"
    >
      <div className="container-max relative z-10 mx-auto max-w-4xl text-center">
        <span className="font-display text-5xl leading-none text-primary-gold" aria-hidden>
          “
        </span>
        <blockquote className="mt-4">
          <p className="font-display text-xl italic leading-relaxed md:text-2xl">
            {founderQuote.text}
          </p>
        </blockquote>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="h-28 w-28 overflow-hidden rounded-full border-[3px] border-bronze">
            <img
              src={founderPhoto}
              alt={founderQuote.name}
              className="h-full w-full scale-[1.15] object-cover object-[50%_30%]"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-ivory">{founderQuote.name}</p>
            <p className="text-xs uppercase tracking-widest text-bronze">{founderQuote.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
