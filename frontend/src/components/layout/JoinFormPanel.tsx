import { useEffect } from 'react';
import { X } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { useJoinForm } from '@/context/JoinFormContext';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';

/** Altura generosa para o embed do Google Forms caber sem scroll interno no iframe */
const FORM_IFRAME_HEIGHT = 2840;

function toEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('google.com') && parsed.pathname.includes('/viewform')) {
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

  useBodyScrollLock(isOpen);

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
        className="absolute inset-0 bg-burgundy/40 backdrop-blur-sm"
        aria-label="Fechar formulário"
        onClick={close}
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-lg flex-col overflow-hidden bg-cream shadow-2xl animate-panel-in">
        <div className="relative flex shrink-0 items-center justify-center border-b border-stone-200 px-14 py-4">
          <h2
            id="join-form-title"
            className="text-center font-display text-2xl font-bold text-burgundy"
          >
            {isSponsor ? 'Torna-te patrocinador!' : 'Junta-te a nós!'}
          </h2>
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-stone-200 p-2 text-burgundy hover:bg-white sm:right-4"
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

        <div className="side-panel-scroll min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain bg-white [-webkit-overflow-scrolling:touch]">
          {embedUrl ? (
            <iframe
              title={isSponsor ? 'Formulário de patrocínio 3V' : 'Formulário de adesão 3V'}
              src={"https://docs.google.com/forms/d/e/1FAIpQLSdsFHa8Cyfdrx74JeMT6oGUcA2OzVM8uOVguEZFRgn-2lK3Uw/viewform?embedded=true"}
              scrolling="yes"
              className="pointer-events-auto block w-full max-w-full border-0 bg-white"
              style={{ height: FORM_IFRAME_HEIGHT }}
            />
          ) : (
            <div className="px-6 py-12 text-center text-stone-600">
              O formulário estará disponível em breve. Entretanto, podes escrever para{' '}
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(mailtoSubject)}`}
                className="font-medium text-burgundy underline-offset-2 hover:underline"
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
