import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { companyInfo, services, submitContactForm, initiateCall } from '../mock';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      toast.success("Message envoyé !", {
        description: result.message,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error("Erreur", {
        description: "Une erreur s'est produite. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: companyInfo.address,
      action: () => window.open(`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`, '_blank')
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: companyInfo.phone,
      action: initiateCall
    },
    {
      icon: Mail,
      title: "Email",
      content: companyInfo.email,
      action: () => window.open(`mailto:${companyInfo.email}`)
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 9h-18h\nSam: 9h-12h",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parlons de votre
            <span className="text-green-600"> projet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que ce soit pour un dépannage urgent, un projet de développement ou 
            simplement pour obtenir des conseils, nous sommes là pour vous aider.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Demande de devis gratuit
              </CardTitle>
              <p className="text-gray-600">
                Remplissez ce formulaire et nous vous recontacterons rapidement.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="border-gray-300 focus:border-green-600 focus:ring-green-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="border-gray-300 focus:border-green-600 focus:ring-green-600"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-gray-300 focus:border-green-600 focus:ring-green-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service souhaité</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-green-600 focus:ring-green-600">
                        <SelectValue placeholder="Choisir un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Décrivez votre projet ou votre problème..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={4}
                    className="border-gray-300 focus:border-green-600 focus:ring-green-600 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  * Champs obligatoires. Réponse garantie sous 2h en jour ouvré.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h3>
              <p className="text-gray-600 mb-8">
                Préférez-vous nous contacter directement ? Voici nos coordonnées :
              </p>
            </div>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index}
                    className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                      info.action ? 'cursor-pointer hover:bg-gray-50' : ''
                    }`}
                    onClick={info.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Emergency CTA */}
            <Card className="border-0 shadow-lg bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-gray-900 mb-2">
                  Urgence informatique ?
                </h4>
                <p className="text-gray-600 mb-4">
                  Pour les interventions urgentes, appelez-nous directement.
                </p>
                <Button 
                  onClick={initiateCall}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;