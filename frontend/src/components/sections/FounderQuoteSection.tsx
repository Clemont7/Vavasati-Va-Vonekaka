import founderPhoto from '@/assets/Ludmila_foto.png';

export default function FounderQuoteSection() {
  return (
    <section
      id="fundadora"
      aria-label="Citação da fundadora"
      data-section="founder-quote"
      className="bg-burgundy py-16"
    >
      <div className="container-max px-gutter text-center">
        <span className="font-display text-5xl leading-none text-primary-gold" aria-hidden="true">
          “
        </span>
        <blockquote className="mx-auto mt-4 max-w-3xl">
          <p className="font-display text-lg italic leading-relaxed text-ivory md:text-xl">
            Fazer parte da 3V mudou completamente a minha visão sobre liderança. Através do
            programa de mentoria, consegui estruturar a minha ideia de negócio e hoje inspiro
            outras jovens da minha comunidade.
          </p>
        </blockquote>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="h-28 w-28 overflow-hidden rounded-full border-[3px] border-primary-gold">
            <img
              src={founderPhoto}
              alt="Ludmila Ângelo Machaieie"
              className="h-full w-full scale-[1.15] object-cover object-[50%_30%]"
            />
          </div>
          <div>
            <p className="font-body text-base font-semibold text-ivory">Ludmila Ângelo Machaieie</p>
            <p className="font-body text-xs uppercase tracking-widest text-primary-gold">Fundadora</p>
          </div>
        </div>
      </div>
    </section>
  );
}
