import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { companyInfo } from '../mock';

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Clients satisfaits",
      description: "Entreprises qui nous font confiance"
    },
    {
      icon: Award,
      value: "5+",
      label: "Années d'expertise",
      description: "Dans le domaine informatique"
    },
    {
      icon: Clock,
      value: "24h/7j",
      label: "Support disponible",
      description: "Pour vos urgences"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Sécurisé",
      description: "Solutions fiables et sécurisées"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">
              À propos d'Aminum
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Votre partenaire de confiance en 
              <span className="text-green-600"> informatique</span>
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                <strong className="text-gray-900">{companyInfo.name}</strong> est une entreprise spécialisée 
                dans les services informatiques, basée à Garches. Nous accompagnons 
                les professionnels et particuliers dans leurs projets numériques.
              </p>
              <p className="text-lg leading-relaxed">
                Notre expertise couvre tous les aspects de l'informatique : développement 
                logiciel, maintenance, vente de matériel, création de sites web et formation. 
                Nous mettons un point d'honneur à offrir des solutions adaptées et un 
                service client exceptionnel.
              </p>
              <p className="text-lg leading-relaxed">
                Fort de plusieurs années d'expérience, notre équipe s'engage à vous fournir 
                des solutions innovantes et fiables pour optimiser votre infrastructure 
                informatique et accélérer votre transformation digitale.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
              <h3 className="font-semibold text-gray-900 mb-3">Notre engagement</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Réactivité garantie
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Solutions sur mesure
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Service de proximité
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Tarifs transparents
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;