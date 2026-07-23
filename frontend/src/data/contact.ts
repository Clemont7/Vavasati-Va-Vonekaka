/** Contactos e redes — editar aqui para atualizar o site */
export const contactInfo = {
  email: 'vavasativavonekaka@gmail.com',
  /**
   * WhatsApp da gestora de redes (com código do país).
   * Ex.: '+258840000000' — deixar vazio até ter o número definitivo.
   */
  whatsapp: '',
  location: 'Maputo, Moçambique',
  socials: [
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/vavasati_va_vonekaka/',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vavasati-va-vonekaka-13a02941a/',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://facebook.com/vavasativavonekaka',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://youtube.com/@vavasativavonekaka',
    },
  ],
  joinFormMailtoSubject: 'Manifestação de interesse — Torna-te Membro 3V',
  /** Google Forms — adesão (nome e contacto) */
  joinFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfUOaUh_dx8id3ENUSP5eZyqGtYN4YVfXU-E0iIJCrZiBIksw/viewform',
  sponsorFormMailtoSubject: 'Manifestação de interesse — Torna-te Patrocinador 3V',
  /** Google Forms — patrocínio (deixar vazio até existir formulário) */
  sponsorFormUrl: '',
};

/** Link wa.me com mensagem pronta; null se o número ainda não estiver definido */
export function getWhatsAppUrl(message: string): string | null {
  const digits = contactInfo.whatsapp.replace(/\D/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
