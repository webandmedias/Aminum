import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <CallToAction />
        <Services />
        <CallToAction />
        <About />
        <CallToAction />
        <Testimonials />
        <Gallery />
        <CallToAction />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;