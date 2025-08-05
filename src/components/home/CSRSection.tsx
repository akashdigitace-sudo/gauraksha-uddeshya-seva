import React from 'react';
import { Award, Users, Handshake, Building, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CSRSection = () => {
  const csrPartners = [
    { name: "TechCorp India", contribution: "₹15,00,000", project: "Gaushala Infrastructure" },
    { name: "GreenEnergy Ltd", contribution: "₹8,50,000", project: "Solar Power Setup" },
    { name: "HealthCare Plus", contribution: "₹12,00,000", project: "Veterinary Equipment" },
  ];

  const csrOpportunities = [
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Partner with us to build modern gaushala facilities",
      impact: "House 500+ cows safely"
    },
    {
      icon: Handshake,
      title: "Employee Engagement",
      description: "Corporate volunteering programs for your team",
      impact: "Meaningful team building"
    },
    {
      icon: Globe,
      title: "Sustainability Programs",
      description: "Environmental and social impact initiatives",
      impact: "ESG compliance goals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Corporate Social Responsibility</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner with us for meaningful CSR initiatives that create lasting impact on animal welfare while 
            achieving your company's sustainability and social responsibility goals.
          </p>
        </div>

        {/* CSR Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {csrOpportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <opportunity.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{opportunity.title}</h3>
              <p className="text-muted-foreground mb-4">{opportunity.description}</p>
              <div className="bg-accent/50 rounded-lg p-3">
                <p className="text-sm font-medium text-primary">{opportunity.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Partners */}
        <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Our CSR Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {csrPartners.map((partner, index) => (
              <div key={index} className="text-center p-6 bg-accent/30 rounded-xl">
                <h4 className="font-bold text-foreground mb-2">{partner.name}</h4>
                <p className="text-primary font-semibold mb-1">{partner.contribution}</p>
                <p className="text-sm text-muted-foreground">{partner.project}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Impact */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">CSR Impact Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Corporate Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹2.5Cr</div>
              <div className="text-sm opacity-90">CSR Funding Received</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">800+</div>
              <div className="text-sm opacity-90">Employee Volunteers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">Major Projects Completed</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Make a Corporate Impact?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading companies in making a difference. Our CSR team will work with you to 
            create customized programs that align with your corporate values and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="donate" size="xl">
              Schedule CSR Meeting
            </Button>
            <Button variant="warm" size="xl">
              Download CSR Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRSection;