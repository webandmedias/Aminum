// Mock data for Aminum website

export const companyInfo = {
  name: "Aminum",
  tagline: "Mon ami numérique",
  description: "Votre partenaire de confiance pour tous vos besoins informatiques",
  phone: "+33681784356",
  address: "62 Rue du Colonel de Rochebrune 82380 Garches",
  email: "contact@aminum.fr"
};

export const services = [
  {
    id: 1,
    title: "Édition de Logiciels",
    description: "Développement de solutions logicielles sur mesure pour votre entreprise",
    icon: "Code",
    features: ["Applications web", "Logiciels métier", "Applications mobiles"]
  },
  {
    id: 2,
    title: "Conseil & Maintenance",
    description: "Services de conseil et maintenance informatique pour optimiser votre infrastructure",
    icon: "Settings",
    features: ["Audit informatique", "Maintenance préventive", "Support technique"]
  },
  {
    id: 3,
    title: "Vente de Matériel",
    description: "Fourniture et vente de matériel informatique et consommables",
    icon: "Monitor",
    features: ["Ordinateurs", "Serveurs", "Périphériques", "Consommables"]
  },
  {
    id: 4,
    title: "Services Internet",
    description: "Création de sites web et services d'hébergement professionnel",
    icon: "Globe",
    features: ["Sites web", "E-commerce", "Hébergement", "Nom de domaine"]
  },
  {
    id: 5,
    title: "Formation Informatique",
    description: "Formations personnalisées pour maîtriser les outils informatiques",
    icon: "BookOpen",
    features: ["Formations bureautique", "Sécurité informatique", "Outils métier"]
  },
  {
    id: 6,
    title: "Téléphonie Mobile",
    description: "Vente, réparation et formation pour vos appareils mobiles",
    icon: "Smartphone",
    features: ["Vente de smartphones", "Réparation mobile", "Formation utilisation", "Accessoires"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Client entreprise",
    company: "Garches",
    rating: 5,
    text: "Service rapide et professionnel pour la maintenance de notre parc informatique."
  },
  {
    id: 2,
    name: "Particulier",
    company: "Rueil-Malmaison", 
    rating: 5,
    text: "Dépannage urgent résolu rapidement. Très satisfait du service."
  },
  {
    id: 3,
    name: "PME locale",
    company: "Saint-Cloud",
    rating: 5,
    text: "Accompagnement de qualité pour notre site web. Recommandé."
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1604754742629-3e5728249d73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpcnxlbnwwfHx8fDE3NTk3NTcyNTR8MA&ixlib=rb-4.1.0&q=85",
    alt: "Dépannage informatique professionnel",
    category: "repair"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzU5NzU3NDQwfDA&ixlib=rb-4.1.0&q=85",
    alt: "Développement de site web",
    category: "website"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzU5NzU3NDQwfDA&ixlib=rb-4.1.0&q=85",
    alt: "Matériel informatique professionnel",
    category: "equipment"
  }
];

// Mock form submission function
export const submitContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted:', formData);
      resolve({ success: true, message: "Votre message a été envoyé avec succès !" });
    }, 1000);
  });
};

// Mock phone call function
export const initiateCall = () => {
  console.log('Initiating call to:', companyInfo.phone);
  // In real implementation, this would trigger a call
  window.open(`tel:${companyInfo.phone}`);
};