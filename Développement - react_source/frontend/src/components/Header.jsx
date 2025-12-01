import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo, initiateCall } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{companyInfo.name}</h1>
              <p className="text-xs text-gray-600 leading-none">{companyInfo.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Témoignages
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              Contact
            </button>
            <Button 
              onClick={initiateCall}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </Button>
          </nav>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden justify-between items-center h-16">
          {/* Phone on left */}
          <button 
            onClick={initiateCall}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">Appeler</span>
          </button>

          {/* Logo in center */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">{companyInfo.name}</h1>
              <p className="text-xs text-gray-600 leading-none">{companyInfo.tagline}</p>
            </div>
          </div>

          {/* Menu button on right */}
          <button
            className="p-2 text-gray-700 hover:text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">{companyInfo.name}</h1>
            </div>
          </div>

          {/* Phone and Menu */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={initiateCall}
              className="p-2 text-green-600 hover:text-green-700"
            >
              <Phone className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-green-600 py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-green-600 py-2"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-gray-700 hover:text-green-600 py-2"
              >
                Témoignages
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-green-600 py-2"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  onClick={initiateCall}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;