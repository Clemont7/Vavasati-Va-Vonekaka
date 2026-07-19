import HeroSection from '@/components/sections/HeroSection';
import InternationalFlags from '@/components/sections/InternationalFlags';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedPrograms from '@/components/sections/FeaturedPrograms';
import OportunizaPreview from '@/components/sections/OportunizaPreview';
import EventsSection from '@/components/sections/EventsSection';
import PastEventsGallerySection from '@/components/sections/PastEventsGallerySection';
import FounderQuoteSection from '@/components/sections/FounderQuoteSection';
import MembershipCTA from '@/components/sections/MembershipCTA';
import SectionDivider from '@/components/sections/SectionDivider';

export default function HomePage() {
  return (
<<<<<<< HEAD
    <section>
      <h1 style={{ marginTop: 0 }}>Página Inicial</h1>
      <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
        Espaço de apresentação institucional, chamada para ação e acesso rápido às principais secções.
      </p>
    </section>
=======
    <>
      <HeroSection />
      <SectionDivider />

      <InternationalFlags />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <FeaturedPrograms />
      <SectionDivider />

      <OportunizaPreview />
      <SectionDivider />

      <EventsSection />
      <SectionDivider />

      <PastEventsGallerySection />
      <SectionDivider />

      <FounderQuoteSection />
      <SectionDivider />

      <MembershipCTA />
    </>
>>>>>>> ca21de225499e579bca4a6549564801cee8dcc3e
  );
}
