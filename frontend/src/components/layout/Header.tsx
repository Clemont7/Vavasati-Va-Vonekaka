import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sectionNavigation } from '@/data/navigation';
import logoIcon from '@/assets/3V_brand_book/img5.jpeg';

/** Todas as secções com âncora — Eventos também conta para o scroll-spy */
const SCROLL_SECTIONS = sectionNavigation.map((item) => item.id);

export default function Header() {
  const [activeId, setActiveId] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SCROLL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          root: null,
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function handleNavClick(id: string) {
    setMobileOpen(false);
    setActiveId(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/80 bg-cream/95 backdrop-blur-md">
      <div className="container-max flex h-[var(--header-h)] items-center justify-between gap-4 px-4">
        <button
          type="button"
          onClick={() => handleNavClick('inicio')}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src={logoIcon}
            alt=""
            className="h-11 w-11 rounded-full border border-bronze object-cover shadow-sm"
            aria-hidden
          />
          <span className="hidden font-display text-lg font-bold uppercase tracking-widest text-terracotta sm:block">
            Vavasati Va Vonekaka
          </span>
        </button>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Secções principais"
        >
          {sectionNavigation.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`pb-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'nav-link-active'
                    : 'text-terracotta hover:text-terracotta'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-terracotta md:hidden"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          className="border-t border-stone-200 bg-cream px-4 py-4 md:hidden"
          aria-label="Menu móvel"
        >
          <ul className="flex flex-col gap-3">
            {sectionNavigation.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full py-2 text-left text-base font-medium ${
                      isActive
                        ? 'text-terracotta underline underline-offset-4'
                        : 'text-terracotta'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
