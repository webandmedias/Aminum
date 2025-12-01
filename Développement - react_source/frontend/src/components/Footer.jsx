import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { companyInfo, services, initiateCall } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                  <p className="text-sm text-gray-400">{companyInfo.tagline}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                {companyInfo.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{companyInfo.address}</span>
                </div>
                <button 
                  onClick={initiateCall}
                  className="flex items-center space-x-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{companyInfo.phone}</span>
                </button>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center space-x-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    À propos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Témoignages
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Besoin d'aide ?</h4>
              <p className="text-gray-400 mb-6 text-sm">
                Contactez-nous pour discuter de votre projet informatique.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Demander un devis
                </Button>
                <Button 
                  onClick={initiateCall}
                  variant="outline"
                  className="w-full border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 mb-2">
                  🟢 Disponible maintenant
                </p>
                <p className="text-sm text-white font-medium">
                  Réponse garantie sous 2h
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>
                © {currentYear} {companyInfo.name}. Tous droits réservés.
              </p>
              <p className="mt-1">
                Réalisé avec ❤️ pour accompagner votre transformation numérique.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-xs text-gray-400 text-center">
                <p>SIRET: 123 456 789 00012</p>
                <p>TVA: FR12345678901</p>
              </div>
              
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;