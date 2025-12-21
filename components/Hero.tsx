import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import CountDown from './CountDown';
import { LOCATION_TEXT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1626379953822-baec19c3accd?q=80&w=2070&auto=format&fit=crop" 
          alt="VR Gamer Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rv2-dark/80 via-rv2-dark/90 to-rv2-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-neon-cyan/50 bg-neon-cyan/10 backdrop-blur-sm">
          <span className="text-neon-cyan font-semibold text-sm tracking-widest uppercase">Hasta el 3 de Enero</span>
        </div>

        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
          VR + RETRO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rv2-blue via-neon-cyan to-neon-purple neon-text">
            EN SEBORUCO
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
          ¡Entra al juego! Vive la experiencia de realidad virtual y revive los clásicos del arcade por tiempo limitado.
        </p>

        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
           <MapPin size={18} className="text-rv2-blue" />
           <span className="text-sm md:text-base font-medium">{LOCATION_TEXT}</span>
        </div>

        <CountDown />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a 
            href="#booking" 
            className="w-full sm:w-auto px-8 py-4 bg-rv2-blue hover:bg-blue-600 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(30,107,255,0.4)] hover:shadow-[0_0_30px_rgba(30,107,255,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            RESERVAR AHORA
            <ArrowRight size={20} />
          </a>
          <div className="flex gap-4 w-full sm:w-auto">
            <a 
              href="#pricing" 
              className="flex-1 sm:flex-none px-8 py-4 bg-rv2-surface border border-white/10 hover:border-rv2-blue text-white font-bold rounded-lg transition-colors text-center"
            >
              Ver Precios
            </a>
            <a 
              href="tel:+584143357226" 
              className="flex-1 sm:flex-none px-8 py-4 bg-rv2-surface border border-white/10 hover:border-green-500 text-white font-bold rounded-lg transition-colors text-center"
            >
              Llamar
            </a>
          </div>
        </div>

      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-rv2-dark to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
