import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLightbox } from '@/context/LightboxContext';

/** Sobreposição que mostra uma única foto em grande. Fecha com Esc, clique fora ou no X. */
export default function Lightbox() {
  const { image, close } = useLightbox();

  useEffect(() => {
    if (!image) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, close]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || 'Foto ampliada'}
    >
      <button
        type="button"
        className="absolute inset-0 bg-dark-brown/85 backdrop-blur-sm"
        aria-label="Fechar"
        onClick={close}
      />

      <button
        type="button"
        onClick={close}
        aria-label="Fechar"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream ring-1 ring-cream/30 transition-colors hover:bg-cream/20"
      >
        <X className="h-6 w-6" />
      </button>

      <figure className="relative m-0 flex max-h-full max-w-full flex-col items-center">
        <img
          src={image.src}
          alt={image.alt || ''}
          className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-2xl animate-modal-in"
        />
        {image.alt ? (
          <figcaption className="mt-3 max-w-2xl px-4 text-center text-sm text-cream/80">
            {image.alt}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
