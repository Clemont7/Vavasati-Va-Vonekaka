import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SiteLayout() {
  return (
    <div>
      <Header />
      <main className="container" style={{ padding: '2rem 0' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
