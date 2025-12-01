import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Settings, Monitor, Globe, BookOpen, Smartphone, ArrowRight } from 'lucide-react';
import { services } from '../mock';

const iconMap = {
  Code: Code,
  Settings: Settings,
  Monitor: Monitor,
  Globe: Globe,
  BookOpen: BookOpen,
  Smartphone: Smartphone
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:pt-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">
            Nos Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Des solutions informatiques
            <br />
            <span className="text-green-600">sur mesure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous accompagnons votre entreprise dans sa transformation numérique 
            avec des services adaptés à vos besoins spécifiques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Vous avez un projet spécifique ? 
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="text-green-600 hover:text-green-700 font-semibold ml-1 hover:underline"
            >
              Parlons-en ensemble
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;