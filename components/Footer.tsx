import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display font-bold text-lg text-white mb-2">
          RV2<span className="text-rv2-blue">VEN</span>
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Seboruco Arcade. Todos los derechos reservados.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed for Gamers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
