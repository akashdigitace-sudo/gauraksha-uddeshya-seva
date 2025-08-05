import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, AlertTriangle, Clock, MapPin } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <AlertTriangle className="h-8 w-8 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">Emergency Rescue Service</h2>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Found a cow in distress? Our 24/7 emergency rescue team is ready to respond immediately across Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Call Emergency</h3>
            <p className="text-2xl font-bold text-yellow-300 mb-2">+91 98765 43210</p>
            <p className="text-sm opacity-80">Available 24/7</p>
          </div>
          
          <div className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Response Time</h3>
            <p className="text-2xl font-bold text-yellow-300 mb-2">15-30 mins</p>
            <p className="text-sm opacity-80">Average response</p>
          </div>
          
          <div className="text-center bg-white/10 rounded-2xl p-6 backdrop-blur">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Coverage Area</h3>
            <p className="text-2xl font-bold text-yellow-300 mb-2">Delhi NCR</p>
            <p className="text-sm opacity-80">24/7 service area</p>
          </div>
        </div>

        <div className="text-center">
          <Button size="xl" className="bg-yellow-500 text-black hover:bg-yellow-400 font-bold text-lg px-12 py-4 animate-pulse">
            <Phone className="h-5 w-5 mr-2" />
            Call Now: +91 98765 43210
          </Button>
          <p className="mt-4 text-sm opacity-80">
            Free emergency service • Professional veterinary care • GPS-tracked ambulances
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;