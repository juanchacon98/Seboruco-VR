import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Games from './components/Games';
import Pricing from './components/Pricing';
import Info from './components/Info';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-rv2-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Games />
        <Pricing />
        <Info />
        <BookingForm />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
