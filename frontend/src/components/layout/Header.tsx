import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navSectionIds, sectionNavigation } from '@/data/navigation';
import logoIcon from '@/assets/3V_brand_book/img5.jpeg';

export default function Header() {
  const [activeId, setActiveId] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navSectionIds.forEach((id) => {
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
    setOpenDropdown(null);
    setActiveId(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const isItemActive = (item: (typeof sectionNavigation)[number]) =>
    activeId === item.id ||
    (item.children?.some((child) => child.id === activeId) ?? false);

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
          <span className="font-display text-[13px] font-bold uppercase leading-tight tracking-wide text-terracotta sm:text-lg sm:tracking-widest">
            Vavasati Va Vonekaka
          </span>
        </button>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Secções principais"
        >
          {sectionNavigation.map((item) => {
            const isActive = isItemActive(item);

            if (!item.children) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`pb-1 text-sm font-medium transition-colors ${
                    isActive ? 'nav-link-active' : 'text-terracotta'
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            const open = openDropdown === item.id;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.id)}
                onMouseLeave={() =>
                  setOpenDropdown((cur) => (cur === item.id ? null : cur))
                }
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  onFocus={() => setOpenDropdown(item.id)}
                  aria-haspopup="true"
                  aria-expanded={open}
                  className={`inline-flex items-center gap-1 pb-1 text-sm font-medium transition-colors ${
                    isActive ? 'nav-link-active' : 'text-terracotta'
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </button>

                {open ? (
                  <div className="absolute left-1/2 top-full z-50 min-w-[13.5rem] -translate-x-1/2 pt-3">
                    <ul className="overflow-hidden rounded-xl border border-stone-200 bg-cream py-1 shadow-xl">
                      {item.children.map((child) => (
                        <li key={`${item.id}-${child.id}`}>
                          <button
                            type="button"
                            onClick={() => handleNavClick(child.id)}
                            className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-terracotta/10 ${
                              activeId === child.id
                                ? 'text-terracotta'
                                : 'text-terracotta/80'
                            }`}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
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
          <ul className="flex flex-col gap-2">
            {sectionNavigation.map((item) => {
              const isActive = isItemActive(item);
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

                  {item.children ? (
                    <ul className="mb-1 ml-1 space-y-1 border-l border-stone-200 pl-4">
                      {item.children.map((child) => (
                        <li key={`${item.id}-${child.id}`}>
                          <button
                            type="button"
                            onClick={() => handleNavClick(child.id)}
                            className={`w-full py-1.5 text-left text-sm ${
                              activeId === child.id
                                ? 'font-semibold text-terracotta'
                                : 'text-terracotta/75'
                            }`}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
