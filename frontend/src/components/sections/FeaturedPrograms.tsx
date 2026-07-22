import { Building2, Megaphone, Users } from 'lucide-react';
import { featuredPrograms } from '@/data/programs';

const icons = {
  leadership: Building2,
  mentorship: Users,
  voice: Megaphone,
};

export default function FeaturedPrograms() {
  return (
    <section className="section-screen bg-cream px-4 py-16" aria-labelledby="programas-title">
      <div className="container-max mb-12 text-center md:mb-16">
        <h2 id="programas-title" className="mb-4 font-display text-3xl font-bold text-burgundy">
          Programas de Destaque
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 bg-bronze" />
        <p className="mx-auto max-w-2xl text-stone-500">
          Desenvolvemos trilhas específicas para cada etapa da jornada profissional e pessoal da
          Mulher Resplandecente.
        </p>
      </div>

      <div className="container-max grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPrograms.map((program) => {
          const Icon = icons[program.icon];
          return (
            <article
              key={program.id}
              className="group rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cream text-terracotta transition-colors group-hover:bg-burgundy group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-burgundy">{program.title}</h3>
              <p className="text-sm text-stone-600">{program.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
