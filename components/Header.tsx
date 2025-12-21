import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiencias', href: '#features' },
    { name: 'Juegos', href: '#games' },
    { name: 'Precios', href: '#pricing' },
    { name: 'Horarios', href: '#info' },
    { name: 'Reservar', href: '#booking', highlight: true },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-rv2-dark/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-rv2-blue p-1.5 rounded-lg group-hover:shadow-[0_0_15px_#1E6BFF] transition-all">
               <Gamepad2 className="text-white" size={24} />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wider">
              RV2<span className="text-rv2-blue">VEN</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  link.highlight 
                    ? 'bg-rv2-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-[0_0_10px_rgba(30,107,255,0.4)]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-rv2-surface border-t border-white/10 absolute w-full">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-center py-3 rounded-lg font-bold ${
                  link.highlight 
                    ? 'bg-rv2-blue text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
