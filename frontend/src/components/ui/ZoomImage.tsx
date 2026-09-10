import type { CSSProperties, KeyboardEvent } from 'react';
import { useLightbox } from '@/context/LightboxContext';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  loading?: 'lazy' | 'eager';
  draggable?: boolean;
  /** Legenda a mostrar no lightbox, se diferente do alt */
  caption?: string;
  /** Erro de carregamento (ex.: para fallback do componente pai) */
  onError?: () => void;
};

/**
 * Imagem clicável: abre a foto em grande (lightbox).
 * Substituto directo de <img> — mantém as mesmas classes de layout.
 */
export default function ZoomImage({
  src,
  alt = '',
  className = '',
  caption,
  ...rest
}: Props) {
  const { open } = useLightbox();
  const show = () => open({ src, alt: caption ?? (alt || undefined) });

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} cursor-zoom-in`.trim()}
      role="button"
      tabIndex={0}
      onClick={show}
      onKeyDown={(e: KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          show();
        }
      }}
      {...rest}
    />
  );
}
