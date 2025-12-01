import React from 'react';
import { Button } from './ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { companyInfo, initiateCall } from '../mock';

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Besoin d'aide pour votre projet informatique ?
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Contactez-nous dès maintenant pour une consultation gratuite
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={initiateCall}
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            Appeler maintenant
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold"
          >
            Demander un devis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <p className="mt-6 text-green-100 text-sm">
          Réponse garantie sous 2h • Devis gratuit • Intervention rapide
        </p>
      </div>
    </section>
  );
};

export default CallToAction;