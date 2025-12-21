import React, { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { BookingState, GameType, Duration } from '../types';
import { WHATSAPP_NUMBER, LOCATION_TEXT, COP_RATE } from '../constants';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingState>({
    name: '',
    date: '',
    time: '',
    type: 'VR',
    players: 1,
    duration: 5,
  });

  const [price, setPrice] = useState<string>('');

  // Calculate price dynamically
  useEffect(() => {
    let calculated = '';
    const { type, players, duration } = formData;

    if (type === 'VR') {
      let usd = 0;
      if (players === 1) {
        if (duration === 5) usd = 3;
        else if (duration === 10) usd = 5;
        else if (duration === 25) usd = 10;
      } else { // 2 players
        if (duration === 5) usd = 5;
        else if (duration === 10) usd = 10;
        else if (duration === 25) usd = 17;
      }
      const cop = (usd * COP_RATE).toLocaleString('es-CO');
      calculated = `$${usd} USD / ${cop} COP`;
    } else { // RETRO
      if (players === 1) calculated = '$3.000 COP';
      else calculated = '$5.000 COP';
    }
    setPrice(calculated);
  }, [formData]);

  const handleChange = (field: keyof BookingState, value: any) => {
    // If switching to Retro, force duration to 5
    if (field === 'type' && value === 'RETRO') {
      setFormData(prev => ({ ...prev, [field]: value, duration: 5 }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleWhatsAppClick = () => {
    const { name, date, time, type, players, duration } = formData;
    
    // Construct message exactly as requested
    let message = `¡Hola! Me gustaría reservar los lentes para el día ${date} a las ${time}.\n`;
    message += `Tipo: ${type}\n`;
    message += `Personas: ${players}\n`;
    message += `Duración: ${duration} min\n`;
    message += `Plan: ${players === 1 ? 'Individual' : '2 personas simultáneas'}\n`;
    if (name) message += `Nombre: ${name}\n`;
    message += `Ubicación: ${LOCATION_TEXT}\n`;
    message += `Nota: entiendo que hay 5 min de tolerancia de espera.\n`;
    message += `Precio estimado: ${price}\n`;
    message += `Gracias.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const isFormValid = formData.date && formData.time;

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-rv2-dark to-black">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto bg-rv2-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5 h-full">
            
            {/* Form Side */}
            <div className="md:col-span-3 p-8">
              <h2 className="font-display font-bold text-3xl text-white mb-6">
                RESERVA TU <span className="text-rv2-blue">TURNO</span>
              </h2>
              
              <div className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Tu Nombre (Opcional)</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-rv2-blue focus:ring-1 focus:ring-rv2-blue outline-none transition-all"
                    placeholder="Ej: Alejandro"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Fecha *</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-rv2-blue outline-none"
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Hora *</label>
                    <div className="relative">
                      <input 
                        type="time" 
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-rv2-blue outline-none"
                        value={formData.time}
                        onChange={(e) => handleChange('time', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Type Selection */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Experiencia</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleChange('type', 'VR')}
                      className={`p-3 rounded-lg border font-bold transition-all ${formData.type === 'VR' ? 'bg-rv2-blue border-rv2-blue text-white' : 'bg-transparent border-white/20 text-gray-400 hover:border-white/40'}`}
                    >
                      VR (USD/COP)
                    </button>
                    <button 
                      onClick={() => handleChange('type', 'RETRO')}
                      className={`p-3 rounded-lg border font-bold transition-all ${formData.type === 'RETRO' ? 'bg-neon-purple border-neon-purple text-white' : 'bg-transparent border-white/20 text-gray-400 hover:border-white/40'}`}
                    >
                      RETRO (COP)
                    </button>
                  </div>
                </div>

                {/* Players */}
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Jugadores</label>
                  <div className="flex bg-black/50 rounded-lg p-1 border border-white/10">
                    <button 
                      onClick={() => handleChange('players', 1)}
                      className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${formData.players === 1 ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                    >
                      1 Persona
                    </button>
                    <button 
                      onClick={() => handleChange('players', 2)}
                      className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${formData.players === 2 ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                    >
                      2 Personas
                    </button>
                  </div>
                </div>

                {/* Duration - Only for VR */}
                {formData.type === 'VR' && (
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Duración</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[5, 10, 25].map((min) => (
                        <button 
                          key={min}
                          onClick={() => handleChange('duration', min)}
                          className={`py-2 px-1 rounded-lg border text-sm font-bold transition-all ${formData.duration === min ? 'bg-white text-black border-white' : 'bg-transparent border-white/20 text-gray-400 hover:border-white'}`}
                        >
                          {min} Min
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
              </div>
            </div>

            {/* Summary Side */}
            <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-black p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle className="text-neon-cyan" size={20} />
                  Tu Reserva
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Juego</span>
                    <span className={`font-bold ${formData.type === 'VR' ? 'text-rv2-blue' : 'text-neon-purple'}`}>{formData.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400">Fecha</span>
                     <span className="text-white font-medium">{formData.date || '--/--'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400">Hora</span>
                     <span className="text-white font-medium">{formData.time || '--:--'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400">Duración</span>
                     <span className="text-white font-medium">{formData.duration} Min</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400">Personas</span>
                     <span className="text-white font-medium">{formData.players}</span>
                  </div>
                </div>

                <div className="mt-8">
                  <span className="block text-gray-400 text-sm text-right">Total Estimado</span>
                  <div className="text-3xl font-display font-bold text-white text-right mt-1 neon-text break-words leading-tight">
                    {price}
                  </div>
                </div>
              </div>

              <button
                disabled={!isFormValid}
                onClick={handleWhatsAppClick}
                className={`w-full mt-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${
                  isFormValid 
                    ? 'bg-[#25D366] hover:bg-[#1fa851] text-white cursor-pointer hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]' 
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                <MessageCircle size={24} fill={isFormValid ? "white" : "gray"} />
                {isFormValid ? 'ENVIAR POR WHATSAPP' : 'COMPLETA DATOS'}
              </button>
            </div>

          </div>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto">
          Al hacer clic, se abrirá WhatsApp con los detalles de tu reserva pre-cargados. Por favor envía el mensaje para confirmar con nuestro equipo.
        </p>

      </div>
    </section>
  );
};

export default BookingForm;