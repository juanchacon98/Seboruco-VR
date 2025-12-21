import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const defaultText = encodeURIComponent("Hola, tengo una duda sobre RV2 Seboruco.");
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultText}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1fa851] text-white p-4 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};

export default FloatingWhatsApp;
