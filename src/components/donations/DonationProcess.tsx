import React from 'react';
import { CheckCircle, CreditCard, Heart, Smartphone, Shield, Users } from 'lucide-react';

const DonationProcess = () => {
  const steps = [
    {
      step: 1,
      title: 'Choose Amount',
      description: 'Select a preset amount or enter custom donation',
      icon: Heart,
      features: ['Quick preset amounts', 'Custom amount option', 'Impact calculator']
    },
    {
      step: 2,
      title: 'Payment Method',
      description: 'Secure payment via multiple options',
      icon: CreditCard,
      features: ['Credit/Debit Cards', 'UPI & Net Banking', 'Digital Wallets']
    },
    {
      step: 3,
      title: 'Get Updates',
      description: 'Receive real-time updates on your impact',
      icon: Smartphone,
      features: ['SMS confirmations', 'Email receipts', 'Impact reports']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Bank-grade encryption & SSL security'
    },
    {
      icon: CheckCircle,
      title: '80G Tax Benefits',
      description: 'Get tax exemption certificates instantly'
    },
    {
      icon: Users,
      title: 'Join 2,500+ Donors',
      description: 'Part of a growing community of supporters'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simple & Secure Donation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Making a difference is just 3 clicks away. Our secure platform ensures your donation reaches the cows safely.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/30 z-0" 
                       style={{ width: 'calc(100% - 2rem)', left: '2rem' }} />
                )}
                
                <div className="relative z-10 bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300 border border-border/10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 relative">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-earth rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Why Donors Trust Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationProcess;