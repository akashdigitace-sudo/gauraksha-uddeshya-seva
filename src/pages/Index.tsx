import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import StatsSection from '@/components/home/StatsSection';
import MissionSection from '@/components/home/MissionSection';
import EmergencySection from '@/components/home/EmergencySection';
import CSRSection from '@/components/home/CSRSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <StatsSection />
      <MissionSection />
      <EmergencySection />
      <CSRSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
