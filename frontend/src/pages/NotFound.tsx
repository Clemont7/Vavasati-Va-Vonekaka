import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section-screen px-4 text-center">
      <h1 className="font-display text-4xl font-bold text-burgundy">Página não encontrada</h1>
      <p className="mt-4 text-stone-600">A página solicitada não existe ou foi movida.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-burgundy px-8 py-3 font-medium text-white hover:bg-burgundy/90"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
