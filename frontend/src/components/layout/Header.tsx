import { Link } from 'react-router-dom';
import { headerNavigation } from '@/data/navigation';
import logoIcon from '@/assets/3V_brand_book/img5.jpeg';

export default function Header() {
  return (
    <header className="border-b border-sand bg-ivory">
      <div className="container-max flex flex-wrap items-center justify-between gap-4 px-gutter py-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logoIcon}
            alt=""
            className="h-11 w-11 rounded-full object-cover"
            aria-hidden="true"
          />
          <span className="font-display text-sm font-semibold uppercase tracking-wide text-primary-dark-brown md:text-base">
            Vavasati Va Vonekaka
          </span>
        </Link>

        <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2">
          {headerNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-body text-sm text-primary-dark-brown transition-colors hover:text-primary-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
