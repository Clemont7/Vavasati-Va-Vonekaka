import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedPrograms from '@/components/sections/FeaturedPrograms';
import OportunizaPreview from '@/components/sections/OportunizaPreview';
import EventsSection from '@/components/sections/EventsSection';
import FounderQuoteSection from '@/components/sections/FounderQuoteSection';
import MembershipCTA from '@/components/sections/MembershipCTA';

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedPrograms />
      <OportunizaPreview />
      <EventsSection />
      <FounderQuoteSection />
      <MembershipCTA />
    </>
  );
}
