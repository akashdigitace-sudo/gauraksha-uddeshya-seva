import React from 'react';
import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Preheader = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@gauseva.org</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>24/7 Rescue Service</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-xs">Follow us:</span>
            <div className="flex space-x-2">
              <Facebook className="h-4 w-4 hover:text-primary-glow cursor-pointer" />
              <Twitter className="h-4 w-4 hover:text-primary-glow cursor-pointer" />
              <Instagram className="h-4 w-4 hover:text-primary-glow cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preheader;