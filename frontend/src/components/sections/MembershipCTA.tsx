import { siteContent } from '@/data/siteContent';
import { useJoinForm } from '@/context/JoinFormContext';

export default function MembershipCTA() {
  const { open } = useJoinForm();

  return (
    <section
      id="contactos"
      className="bg-cream px-4 pb-16 pt-10 md:pb-20 md:pt-12"
      style={{ scrollMarginTop: 'var(--header-h)' }}
    >
      <div className="container-max flex flex-col items-center text-center">
        <p className="mb-10 max-w-xl text-stone-600">
          {siteContent.audience} A tua voz conta — e acreditamos que ela pode melhorar o futuro da
          juventude moçambicana.
        </p>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:gap-10">
          <div className="relative">
            <button
              type="button"
              onClick={() => open('membro')}
              className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-burgundy p-6 text-center font-display text-lg font-bold text-white shadow-2xl transition-transform hover:scale-105"
            >
              Tornar-se
              <br />
              Membro
            </button>
            <div
              className="absolute inset-0 animate-pulse-soft rounded-full bg-burgundy"
              aria-hidden
            />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => open('patrocinador')}
              className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-primary-gold p-5 text-center font-display text-base font-bold text-burgundy shadow-[0_12px_36px_rgba(212,175,55,0.4)] transition-transform hover:scale-105 hover:bg-[#e0c04a] sm:h-40 sm:w-40 sm:text-lg"
            >
              Tornar-se
              <br />
              Patrocinador
            </button>
            <div
              className="absolute inset-0 animate-pulse-soft rounded-full bg-primary-gold opacity-50"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
