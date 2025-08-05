import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import StatsSection from '@/components/home/StatsSection';
import MissionSection from '@/components/home/MissionSection';
import DonationCards from '@/components/home/DonationCards';
import EmergencySection from '@/components/home/EmergencySection';
import CSRSection from '@/components/home/CSRSection';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <StatsSection />
      <MissionSection />
      <DonationCards />
      <EmergencySection />
      <CSRSection />
      <UpcomingEvents />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
