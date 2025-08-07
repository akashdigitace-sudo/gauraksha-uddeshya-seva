import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import StatsSection from '@/components/home/StatsSection';
import MissionSection from '@/components/home/MissionSection';
import DonationCards from '@/components/home/DonationCards';
import CurrentCampaign from '@/components/home/CurrentCampaign';
import EmergencySection from '@/components/home/EmergencySection';
import CSRSection from '@/components/home/CSRSection';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import DonationForm from '@/components/home/DonationForm';
import VolunteerSection from '@/components/home/VolunteerSection';
import ImpactStories from '@/components/home/ImpactStories';
import NewsletterSection from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <HeroSlider />
            </div>
            <div className="lg:col-span-1">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>
      <StatsSection />
      <MissionSection />
      <DonationCards />
      <CurrentCampaign />
      <ImpactStories />
      <EmergencySection />
      <CSRSection />
      <VolunteerSection />
      <UpcomingEvents />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
