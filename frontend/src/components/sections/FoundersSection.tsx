import { ChevronDown, Image as ImageIcon } from 'lucide-react';
import { founders, type Founder, type FounderPhoto } from '@/data/founders';

/**
 * Fotos já disponíveis, mapeadas por id.
 * Para publicar uma foto: importa o ficheiro de `@/assets` e adiciona aqui,
 * ou define `src` (caminho em /public) na biografia em `data/founders.ts`.
 */
const photoAssets: Record<string, string> = {};

function PhotoSlot({
  photo,
  className = '',
}: {
  photo: FounderPhoto;
  className?: string;
}) {
  const ratio =
    photo.orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[3/2]';
  const src = photo.src ?? photoAssets[photo.id];

  if (src) {
    return (
      <img
        src={src}
        alt={photo.caption}
        loading="lazy"
        className={`${ratio} w-full rounded-2xl border border-cream/15 object-cover shadow-[0_18px_50px_rgba(61,28,2,0.28)] ${className}`}
      />
    );
  }

  return (
    <div
      className={`${ratio} flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-cream/30 bg-cream/[0.06] px-4 text-center ${className}`}
      role="img"
      aria-label={`Espaço reservado para foto: ${photo.caption}`}
    >
      <ImageIcon className="h-7 w-7 text-cream/45" aria-hidden />
      <p className="text-xs font-medium leading-snug text-cream/60">
        {photo.caption}
      </p>
      <p className="text-[10px] uppercase tracking-[0.2em] text-cream/35">
        Foto a carregar
      </p>
    </div>
  );
}

function FounderProfile({
  founder,
  index,
}: {
  founder: Founder;
  index: number;
}) {
  const firstName = founder.name.split(' ')[0];
  const imageRight = index % 2 === 1;

  return (
    <article className="relative">
      <div
        className={`flex flex-col gap-8 md:flex-row md:items-start md:gap-12 ${
          imageRight ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-72 md:shrink-0 lg:w-80">
          <PhotoSlot photo={founder.portrait} />
        </div>

        <div className="md:flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-gold">
            {founder.role}
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-[2.6rem]">
            {founder.name}
          </h3>
          <div className="mt-5 h-px w-14 bg-primary-gold/70" />
          <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-cream/85">
            {founder.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <figure className="mx-auto mt-12 max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-gold">
          {founder.pullQuote.label}
        </p>
        <span
          className="mt-3 block font-display text-5xl leading-none text-cream/25"
          aria-hidden
        >
          &ldquo;
        </span>
        <blockquote className="-mt-3">
          <p className="font-display text-xl italic leading-relaxed text-cream md:text-2xl">
            {founder.pullQuote.text}
          </p>
        </blockquote>
      </figure>

      <details className="group mt-10">
        <summary className="mx-auto flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-primary-gold hover:text-primary-gold [&::-webkit-details-marker]:hidden">
          Ler a biografia completa de {firstName}
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
        </summary>

        <div className="mt-10 border-t border-cream/15 pt-10">
          <div className="grid gap-x-12 gap-y-9 md:grid-cols-2">
            {founder.sections.map((section) => (
              <section key={section.heading}>
                <h4 className="font-display text-lg font-bold text-primary-gold">
                  {section.heading}
                </h4>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-cream/80">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {founder.photos.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {founder.photos.map((photo) => (
                <PhotoSlot key={photo.id} photo={photo} />
              ))}
            </div>
          ) : null}
        </div>
      </details>

      <div className="mt-10 rounded-2xl border border-cream/20 bg-cream/[0.06] p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-gold">
          Mensagem final para as mulheres da 3V
        </p>
        <p className="mt-3 font-display text-lg italic leading-relaxed text-cream md:text-xl">
          {founder.finalMessage}
        </p>
      </div>
    </article>
  );
}

export default function FoundersSection() {
  return (
    <section
      id="fundadoras"
      className="bg-cream px-4 py-20 md:py-28"
      aria-labelledby="fundadoras-title"
    >
      <div className="container-max mx-auto max-w-5xl">
        {/* Título no «gap» — cor de fundo da Home, fora do painel */}
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-terracotta">
            As nossas raízes
          </p>
          <h2
            id="fundadoras-title"
            className="mt-4 font-display text-4xl font-bold leading-tight text-terracotta md:text-5xl"
          >
            Conheça as Fundadoras da 3V
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-primary-gold" />
        </header>

        {/* Painel das biografias */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-terracotta px-6 py-14 text-cream shadow-[0_30px_80px_rgba(61,28,2,0.22)] md:mt-16 md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 15% 0%, rgba(212,175,55,0.6) 0%, transparent 45%), radial-gradient(ellipse at 85% 100%, rgba(61,28,2,0.7) 0%, transparent 45%)',
            }}
            aria-hidden
          />

          <div className="relative">
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-cream/90 md:text-xl">
              Duas irmãs, um propósito: levantar mulheres moçambicanas e
              democratizar o acesso a conhecimento e oportunidades.
            </p>

            <div className="mt-16 space-y-20 md:mt-20 md:space-y-32">
              {founders.map((founder, index) => (
                <FounderProfile
                  key={founder.id}
                  founder={founder}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
