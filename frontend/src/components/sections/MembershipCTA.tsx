import { contactInfo } from '@/data/contact';
import { siteContent } from '@/data/siteContent';

export default function MembershipCTA() {
  const mailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(contactInfo.joinFormMailtoSubject)}&body=${encodeURIComponent(
    'Olá 3V,\n\nGostaria de manifestar interesse em tornar-me membro.\n\nNome:\nIdade:\nCidade/País:\nÁrea de interesse:\n\nObrigada!',
  )}`;

  return (
    <section id="contactos" className="section-screen bg-cream px-4 py-20">
      <div className="container-max flex flex-col items-center text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-bronze">
          Junta-te a nós
        </p>
        <h2 className="mb-4 max-w-2xl font-display text-3xl font-bold text-burgundy md:text-4xl">
          Tornar-se Membro
        </h2>
        <p className="mb-10 max-w-xl text-stone-600">
          {siteContent.audience} A tua voz conta — e acreditamos que ela pode melhorar o futuro da
          juventude moçambicana.
        </p>

        <div className="relative">
          <a
            href={mailto}
            className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-burgundy p-6 text-center font-display text-lg font-bold text-white shadow-2xl transition-transform hover:scale-105"
          >
            Tornar-se
            <br />
            Membro
          </a>
          <div className="absolute inset-0 animate-pulse-soft rounded-full bg-burgundy" aria-hidden />
        </div>
      </div>
    </section>
  );
}
