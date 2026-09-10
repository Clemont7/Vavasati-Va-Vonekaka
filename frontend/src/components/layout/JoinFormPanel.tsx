import { useEffect, useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { useJoinForm } from '@/context/JoinFormContext';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

/** Altura generosa para o embed do Google Forms caber sem scroll interno no iframe */
const FORM_IFRAME_HEIGHT = 2840;

function toEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (
      parsed.hostname.includes('google.com') &&
      parsed.pathname.includes('/viewform')
    ) {
      parsed.searchParams.set('embedded', 'true');
      parsed.searchParams.delete('usp');
      return parsed.toString();
    }
    return url;
  } catch {
    return url;
  }
}

export default function JoinFormPanel() {
  const { isOpen, intent, close } = useJoinForm();
  const isSponsor = intent === 'patrocinador';

  const formUrl = (
    isSponsor ? contactInfo.sponsorFormUrl : contactInfo.joinFormUrl
  ).trim();
  const embedUrl = formUrl ? toEmbedUrl(formUrl) : '';
  const mailtoSubject = isSponsor
    ? contactInfo.sponsorFormMailtoSubject
    : contactInfo.joinFormMailtoSubject;

  const [formLoaded, setFormLoaded] = useState(false);

  useBodyScrollLock(isOpen);

  // Recomeça o estado de carregamento sempre que o painel abre ou o formulário muda
  useEffect(() => {
    setFormLoaded(false);
  }, [isOpen, embedUrl]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-form-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-terracotta/40 backdrop-blur-sm"
        aria-label="Fechar formulário"
        onClick={close}
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-lg flex-col overflow-hidden bg-cream shadow-2xl animate-panel-in">
        <div className="relative flex shrink-0 items-center justify-center border-b border-stone-200 px-14 py-4">
          <h2
            id="join-form-title"
            className="text-center font-display text-2xl font-bold text-terracotta"
          >
            {isSponsor ? 'Torna-te patrocinador!' : 'Junta-te a nós!'}
          </h2>
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-stone-200 p-2 text-terracotta hover:bg-white sm:right-4"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="shrink-0 border-b border-stone-100 px-5 py-3 text-center text-sm leading-relaxed text-stone-600">
          {isSponsor
            ? 'Manifestá o teu interesse em patrocinar a 3V e apoiar o desenvolvimento de adolescentes e jovens moçambicanas.'
            : 'Preenche o formulário para manifestares interesse em te tornares membro integral da 3V.'}
        </p>

        <div className="side-panel-scroll relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-white [-webkit-overflow-scrolling:touch]">
          {embedUrl ? (
            <>
              {!formLoaded ? (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-cream">
                  <Loader2
                    className="h-9 w-9 animate-spin text-terracotta"
                    aria-hidden
                  />
                  <p className="text-sm font-medium text-stone-500">
                    A carregar o formulário…
                  </p>
                </div>
              ) : null}
              <iframe
                title={
                  isSponsor
                    ? 'Formulário de patrocínio 3V'
                    : 'Formulário de adesão 3V'
                }
                src={embedUrl}
                scrolling="yes"
                onLoad={() => setFormLoaded(true)}
                className={`pointer-events-auto block w-full max-w-full border-0 bg-white transition-opacity duration-300 ${
                  formLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ height: FORM_IFRAME_HEIGHT }}
              />
            </>
          ) : (
            <div className="px-6 py-12 text-center text-stone-600">
              O formulário estará disponível em breve. Entretanto, podes
              escrever para{' '}
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(mailtoSubject)}`}
                className="font-medium text-terracotta underline-offset-2 hover:underline"
              >
                {contactInfo.email}
              </a>
              .
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
