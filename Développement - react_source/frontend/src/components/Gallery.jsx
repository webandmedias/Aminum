import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { X, ZoomIn } from 'lucide-react';
import { galleryImages } from '../mock';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getCategoryLabel = (category) => {
    const categories = {
      repair: 'Dépannage',
      website: 'Sites Web', 
      equipment: 'Matériel'
    };
    return categories[category] || category;
  };

  const getCategoryColor = (category) => {
    const colors = {
      repair: 'bg-blue-100 text-blue-800',
      website: 'bg-purple-100 text-purple-800',
      equipment: 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">
            Notre Travail
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galerie de nos
            <span className="text-green-600"> réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques exemples de nos interventions et projets réalisés 
            pour nos clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(image.category)} border-0`}>
                    {getCategoryLabel(image.category)}
                  </Badge>
                </div>
                
                {/* Zoom Icon */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-gray-900"
                      onClick={() => setSelectedImage(image)}
                    >
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="relative">
                      <img 
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {image.alt}
                        </h3>
                        <Badge className={`${getCategoryColor(image.category)} border-0`}>
                          {getCategoryLabel(image.category)}
                        </Badge>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold mb-1">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Vous avez un projet similaire ? 
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="text-green-600 hover:text-green-700 font-semibold ml-1 hover:underline"
            >
              Discutons-en
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;