import { Link } from 'react-router-dom';
import { navigation } from '@/data/navigation';

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0' }}>
        <div>
          <strong>3V</strong>
        </div>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end' }}>
          {navigation.slice(0, 5).map((item) => (
            <Link key={item.path} to={item.path} style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
