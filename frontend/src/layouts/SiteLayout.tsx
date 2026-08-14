import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EventsPanel from '@/components/layout/EventsPanel';
import JoinFormPanel from '@/components/layout/JoinFormPanel';
import { EventsPanelProvider } from '@/context/EventsPanelContext';
import { JoinFormProvider } from '@/context/JoinFormContext';

export default function SiteLayout() {
  return (
    <EventsPanelProvider>
      <JoinFormProvider>
        <div className="flex min-h-screen flex-col bg-cream">
          <Header />
          <main className="flex-1 pt-[var(--header-h)]">
            <Outlet />
          </main>
          <Footer />
          <EventsPanel />
          <JoinFormPanel />
        </div>
      </JoinFormProvider>
    </EventsPanelProvider>
  );
}
