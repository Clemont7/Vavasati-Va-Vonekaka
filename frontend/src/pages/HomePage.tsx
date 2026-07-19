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
  );
}
