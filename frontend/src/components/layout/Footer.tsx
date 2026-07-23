import { Heart } from 'lucide-react';
import logoMark from '@/assets/logo-3v.png';
import { contactInfo } from '@/data/contact';
import { siteContent } from '@/data/siteContent';

const footerSocials = contactInfo.socials.filter(
  (s) => s.id === 'instagram' || s.id === 'linkedin',
);

function SocialIcon({ id }: { id: string }) {
  if (id === 'instagram') {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-10.131c0-7.88-8.922-7.593-11.02-3.712v-2.157z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-cream px-4 pb-10 pt-20">
      <div className="container-max mx-auto flex max-w-xl flex-col items-center text-center">
        <img
          src={logoMark}
          alt="Vavasati Va Vonekaka"
          className="mb-6 h-28 w-28 object-contain drop-shadow-md"
        />

        <h3 className="font-display text-4xl font-bold text-burgundy md:text-5xl">
          {siteContent.shortName}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-stone-500">
          {siteContent.tagline}.
          <br />
          Empoderando o futuro através de conexões de alto nível.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          {footerSocials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-400 transition-colors hover:border-burgundy hover:text-burgundy"
              aria-label={social.label}
            >
              <SocialIcon id={social.id} />
            </a>
          ))}
        </div>

        <div className="mt-10 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-bronze">Contactos</p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="block text-sm font-medium text-terracotta transition-colors hover:text-burgundy"
          >
            {contactInfo.email}
          </a>
          <p className="text-sm text-stone-500">{contactInfo.location}</p>
        </div>
      </div>

      <div className="container-max mx-auto mt-14 flex max-w-3xl flex-col items-center justify-between gap-3 border-t border-stone-200/80 pt-8 text-[10px] font-medium uppercase tracking-widest text-stone-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Vavasati Va Vonekaka. Todos os direitos reservados.</p>
        <p className="inline-flex items-center gap-1.5">
          Feito com
          <Heart className="h-3 w-3 fill-terracotta text-terracotta" aria-hidden />
          para a comunidade
        </p>
      </div>
    </footer>
  );
}
