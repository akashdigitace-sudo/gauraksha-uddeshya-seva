import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Button } from '@/components/ui/button';
import { EnhancedProgress } from '@/components/ui/enhanced-progress';
import { Heart, Target, CheckCircle } from 'lucide-react';
import rescuedCowImage from '@/assets/rescued-cow.jpg';

const DonationDetail = () => {
  const { id } = useParams();
  
  const breadcrumbItems = [
    { label: 'Donations', href: '/donations' },
    { label: 'Cow Rescue Program' }
  ];

  const handleDonate = (amount: number) => {
    console.log(`Donating ₹${amount} for ${id}`);
  };

  return (
    <Layout>
      <PageBanner
        title="Emergency Cow Rescue"
        subtitle="Fund immediate rescue operations for cows in distress across Delhi NCR"
        backgroundImage={rescuedCowImage}
      />

      <div className="bg-gradient-earth py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={rescuedCowImage}
                alt="Cow Rescue Program"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-primary font-medium">Emergency Program</span>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Emergency Cow Rescue
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Fund immediate rescue operations for cows in distress across Delhi NCR. 
                Your donation directly saves lives and provides emergency medical care.
              </p>

              <div className="bg-card rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">₹2,45,000 raised</span>
                  <span className="text-muted-foreground">Goal: ₹5,00,000</span>
                </div>
                <EnhancedProgress 
                  value={49} 
                  variant="animated"
                  size="lg"
                  goalAmount={500000}
                  raisedAmount={245000}
                />
                <p className="text-sm text-muted-foreground">49% completed • 89 donors</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[500, 1500, 3000, 5000].map((amount) => (
                  <Button
                    key={amount}
                    variant="warm"
                    onClick={() => handleDonate(amount)}
                    className="h-16 flex flex-col"
                  >
                    <span className="font-bold">₹{amount}</span>
                    <span className="text-xs opacity-75">
                      {amount === 500 ? 'First Aid' : amount === 1500 ? 'Transport' : amount === 3000 ? 'Medical Care' : 'Full Rescue'}
                    </span>
                  </Button>
                ))}
              </div>

              <Button variant="donate" size="xl" className="w-full mb-4">
                Donate Custom Amount
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonationDetail;