import { useState, type CSSProperties } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import {
  founders,
  foundersIntro,
  type Founder,
  type FounderPoster,
  type MobileSlide,
  type PosterBlock,
  type PosterPhoto,
} from '@/data/founders';
import ZoomImage from '@/components/ui/ZoomImage';

function PosterImage({
  photo,
  variant,
}: {
  photo: PosterPhoto;
  /** 'tall' = retrato numa moldura 3:4 · 'full' = imagem inteira, sem corte */
  variant: 'tall' | 'full';
}) {
  // Numa faixa 'full', uma foto de retrato manteria-se inteira mas centrada e
  // com largura limitada, para não ser cortada nem dominar o poster.
  const portraitInFull = variant === 'full' && photo.orientation === 'portrait';
  const ratio =
    variant === 'tall' || portraitInFull ? 'aspect-[3/4]' : 'aspect-[3/2]';
  const wrap = portraitInFull ? 'mx-auto w-full max-w-[300px]' : 'w-full';
  const frame = `${ratio} object-cover`;

  if (!photo.src) {
    return (
      <div
        className={`flex ${ratio} ${wrap} flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-terracotta/40 bg-terracotta/[0.06] px-3 text-center`}
        role="img"
        aria-label={`Espaço reservado para foto: ${photo.alt}`}
      >
        <ImageIcon className="h-6 w-6 text-terracotta/50" aria-hidden />
        <p className="text-[11px] font-medium leading-snug text-dark-brown/55">
          {photo.alt}
        </p>
      </div>
    );
  }

  return (
    <ZoomImage
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      className={`${frame} ${wrap} rounded-xl shadow-[0_14px_36px_rgba(61,28,2,0.22)]`}
    />
  );
}

function Block({ block }: { block: PosterBlock }) {
  return (
    <div>
      <h4 className="font-display text-lg font-bold text-terracotta sm:text-xl">
        {block.heading}
      </h4>
      <p className="mt-2 hyphens-auto text-justify text-[0.95rem] leading-relaxed text-dark-brown/80 sm:text-base">
        {block.text}
      </p>
    </div>
  );
}

/**
 * Layout alternado: texto · foto / foto · texto.
 * No telemóvel os textos ocupam a largura toda e as duas fotos ficam lado a lado.
 * No desktop são duas colunas que se ajustam ao conteúdo — assim a foto de baixo
 * sobe até junto do primeiro texto, sem a folga que uma grelha 2×2 deixaria.
 */
function QuadBody({ poster }: { poster: FounderPoster }) {
  const [firstBlock, ...restBlocks] = poster.blocks;
  const [topPhoto, bottomPhoto] = poster.photos;

  return (
    <>
      {/* Telemóvel: texto → 2 fotos lado a lado → texto */}
      <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5 md:hidden">
        <div className="col-span-2">
          {firstBlock ? <Block block={firstBlock} /> : null}
        </div>
        {topPhoto ? <PosterImage photo={topPhoto} variant="tall" /> : null}
        {bottomPhoto ? <PosterImage photo={bottomPhoto} variant="tall" /> : null}
        <div className="col-span-2 space-y-5">
          {restBlocks.map((block) => (
            <Block key={block.heading} block={block} />
          ))}
        </div>
      </div>

      {/* Desktop: duas colunas que encostam ao conteúdo */}
      <div className="mt-6 hidden gap-x-8 md:grid md:grid-cols-2">
        <div className="space-y-6">
          {firstBlock ? <Block block={firstBlock} /> : null}
          {bottomPhoto ? <PosterImage photo={bottomPhoto} variant="tall" /> : null}
        </div>
        <div className="space-y-6">
          {topPhoto ? <PosterImage photo={topPhoto} variant="tall" /> : null}
          {restBlocks.map((block) => (
            <Block key={block.heading} block={block} />
          ))}
        </div>
      </div>
    </>
  );
}

/** Foto(s) inteira(s) por cima, texto por baixo */
function StackedBody({ poster }: { poster: FounderPoster }) {
  return (
    <>
      {poster.photos.length > 0 ? (
        <div className="mt-6 space-y-3 md:mt-8">
          {poster.photos.map((photo) => (
            <PosterImage key={photo.alt} photo={photo} variant="full" />
          ))}
        </div>
      ) : null}

      <div className="mt-6 grid gap-x-8 gap-y-5 md:mt-8 md:grid-cols-2">
        {poster.blocks.map((block) => (
          <Block key={block.heading} block={block} />
        ))}
      </div>
    </>
  );
}

function Poster({
  founder,
  poster,
  isLast,
  direction,
}: {
  founder: Founder;
  poster: FounderPoster;
  isLast: boolean;
  direction: number;
}) {
  return (
    <article
      className="overflow-hidden rounded-3xl bg-cream text-dark-brown shadow-[0_24px_60px_rgba(61,28,2,0.3)] animate-poster-in"
      style={
        { '--poster-from': `${direction >= 0 ? 28 : -28}px` } as CSSProperties
      }
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-primary-gold via-terracotta to-primary-gold" />

      <div className="p-5 sm:p-8 md:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-terracotta">
          {founder.kicker}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-dark-brown sm:text-3xl">
          {founder.name}
        </h3>
        <div className="mt-4 h-px w-14 bg-primary-gold" />

        {poster.layout === 'quad' ? (
          <QuadBody poster={poster} />
        ) : (
          <StackedBody poster={poster} />
        )}

        {poster.quote ? (
          <blockquote className="mt-6 rounded-2xl bg-primary-gold px-5 py-4">
            <p className="font-display text-base italic leading-relaxed text-dark-brown sm:text-lg">
              <span
                aria-hidden
                className="mr-1 font-display text-2xl leading-none text-dark-brown/50"
              >
                &ldquo;
              </span>
              {poster.quote}&rdquo;
            </p>
          </blockquote>
        ) : null}

        {isLast ? (
          <p className="mt-6 border-t border-dark-brown/10 pt-4 text-sm italic leading-relaxed text-dark-brown/70">
            {founder.closing}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function FounderCarousel({ founder }: { founder: Founder }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = founder.posters.length;
  const firstName = founder.name.split(' ')[0];

  const go = (next: number) => {
    if (next < 0 || next > total - 1 || next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  return (
    <div>
      <div className="relative">
        <div aria-live="polite">
          <Poster
            key={index}
            founder={founder}
            poster={founder.posters[index]!}
            isLast={index === total - 1}
            direction={direction}
          />
        </div>

        {index > 0 ? (
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={`Ver poster anterior de ${firstName}`}
            className="absolute -left-2 top-44 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg ring-1 ring-primary-gold/40 transition-colors hover:bg-dark-brown sm:-left-4 sm:top-52 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : null}

        {index < total - 1 ? (
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={`Ver poster seguinte de ${firstName}`}
            className="absolute -right-2 top-44 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg ring-1 ring-primary-gold/40 transition-colors hover:bg-dark-brown sm:-right-4 sm:top-52 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          {founder.posters.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir para o poster ${i + 1} de ${firstName}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-6 bg-primary-gold'
                  : 'w-2 bg-cream/40 hover:bg-cream/70'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold tabular-nums text-cream/75">
          {index + 1}/{total}
        </span>
      </div>
    </div>
  );
}

/** Telemóvel: foto + texto por ecrã. Tudo cabe no poster, sem scroll interno. */
function FounderMobileCarousel({
  founder,
  slides,
}: {
  founder: Founder;
  slides: MobileSlide[];
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = slides.length;
  const firstName = founder.name.split(' ')[0];
  const slide = slides[index]!;

  const go = (next: number) => {
    if (next < 0 || next > total - 1 || next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  return (
    <div className="md:hidden">
      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/80">
        {founder.kicker}
      </p>
      <h3 className="mt-1.5 font-display text-2xl font-bold text-cream">
        {founder.name}
      </h3>
      <div className="mt-3 h-px w-14 bg-primary-gold" />

      <div className="relative mt-5">
        <article
          key={index}
          className="overflow-hidden rounded-3xl bg-cream text-dark-brown shadow-[0_24px_60px_rgba(61,28,2,0.3)] animate-poster-in"
          style={
            {
              '--poster-from': `${direction >= 0 ? 28 : -28}px`,
            } as CSSProperties
          }
        >
          <div className="h-1.5 bg-gradient-to-r from-primary-gold via-terracotta to-primary-gold" />

          {slide.photo?.src ? (
            <ZoomImage
              src={slide.photo.src}
              alt={slide.photo.alt}
              className="w-full"
            />
          ) : slide.photo ? (
            <div className="flex aspect-[3/2] w-full items-center justify-center bg-terracotta/[0.06] text-terracotta/50">
              <ImageIcon className="h-8 w-8" aria-hidden />
            </div>
          ) : null}

          <div className={`px-5 ${slide.photo ? 'py-6' : 'py-8'}`}>
            <div className="space-y-4">
              {slide.blocks.map((block, i) => (
                <div key={i}>
                  {block.heading ? (
                    <h4 className="font-display text-lg font-bold text-terracotta">
                      {block.heading}
                    </h4>
                  ) : null}
                  <p
                    className={`hyphens-auto text-justify text-[0.95rem] leading-relaxed text-dark-brown/80 ${
                      block.heading ? 'mt-2' : ''
                    }`}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            {slide.quote ? (
              <blockquote className="mt-5 rounded-2xl bg-primary-gold px-4 py-3">
                <p className="font-display text-[0.95rem] italic leading-relaxed text-dark-brown">
                  <span
                    aria-hidden
                    className="mr-1 font-display text-xl leading-none text-dark-brown/50"
                  >
                    &ldquo;
                  </span>
                  {slide.quote}&rdquo;
                </p>
              </blockquote>
            ) : null}
          </div>
        </article>

        {index > 0 ? (
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={`Ecrã anterior de ${firstName}`}
            className="absolute -left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg ring-1 ring-primary-gold/40 transition-colors hover:bg-dark-brown"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : null}

        {index < total - 1 ? (
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={`Ecrã seguinte de ${firstName}`}
            className="absolute -right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta text-cream shadow-lg ring-1 ring-primary-gold/40 transition-colors hover:bg-dark-brown"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir para o ecrã ${i + 1} de ${firstName}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-6 bg-primary-gold'
                  : 'w-2 bg-cream/40 hover:bg-cream/70'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-semibold tabular-nums text-cream/75">
          {index + 1}/{total}
        </span>
      </div>
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section
      id="fundadoras"
      className="bg-cream px-2 py-20 sm:px-4 md:py-28"
      style={{ scrollMarginTop: 'var(--header-h)' }}
      aria-labelledby="fundadoras-title"
    >
      <div className="container-max mx-auto max-w-6xl">
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

        <div className="relative mt-14 overflow-hidden rounded-[2rem] bg-terracotta px-3 py-12 text-cream shadow-[0_30px_80px_rgba(61,28,2,0.22)] sm:px-6 md:mt-16 md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 15% 0%, rgba(212,175,55,0.6) 0%, transparent 45%), radial-gradient(ellipse at 85% 100%, rgba(61,28,2,0.7) 0%, transparent 45%)',
            }}
            aria-hidden
          />

          <div className="relative space-y-14 md:space-y-20">
            {founders.map((founder, i) => (
              <div key={founder.id}>
                {i > 0 ? (
                  <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
                    <div className="mx-auto mb-6 h-px w-16 bg-primary-gold/60" />
                    <p className="font-display text-xl italic leading-relaxed text-cream/90 md:text-2xl">
                      {foundersIntro}
                    </p>
                    <div className="mx-auto mt-6 h-px w-16 bg-primary-gold/60" />
                  </div>
                ) : null}

                {founder.mobileSlides ? (
                  <>
                    <FounderMobileCarousel
                      founder={founder}
                      slides={founder.mobileSlides}
                    />
                    <div className="hidden md:block">
                      <FounderCarousel founder={founder} />
                    </div>
                  </>
                ) : (
                  <FounderCarousel founder={founder} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
