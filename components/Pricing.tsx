import React from 'react';
import { PRICING_VR, PRICING_RETRO, COP_RATE } from '../constants';
import { Users, User } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-rv2-dark bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12">
          TABLA DE <span className="text-neon-purple">PRECIOS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* VR Pricing */}
          <div className="bg-rv2-surface border border-rv2-blue/30 rounded-2xl overflow-hidden shadow-lg shadow-rv2-blue/10">
            <div className="bg-rv2-blue/10 p-6 border-b border-rv2-blue/20">
              <h3 className="font-display text-2xl font-bold text-rv2-blue text-center">REALIDAD VIRTUAL</h3>
              <p className="text-center text-gray-400 text-sm mt-1">Precios en USD o COP (Tasa: {COP_RATE})</p>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-gray-400 font-medium">Tiempo</th>
                      <th className="pb-4 text-white font-bold text-center"><User size={20} className="inline mx-auto"/> 1 Persona</th>
                      <th className="pb-4 text-neon-cyan font-bold text-center"><Users size={20} className="inline mx-auto"/> 2 Personas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {PRICING_VR.map((tier, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 text-gray-300 font-bold">{tier.duration} min</td>
                        <td className="py-4 text-white text-center text-sm md:text-lg">{tier.price1}</td>
                        <td className="py-4 text-neon-cyan text-center text-sm md:text-lg font-bold">{tier.price2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Retro Pricing */}
          <div className="bg-rv2-surface border border-neon-purple/30 rounded-2xl overflow-hidden shadow-lg shadow-neon-purple/10">
            <div className="bg-neon-purple/10 p-6 border-b border-neon-purple/20">
              <h3 className="font-display text-2xl font-bold text-neon-purple text-center">JUEGOS RETRO</h3>
              <p className="text-center text-gray-400 text-sm mt-1">Precios en COP ($)</p>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-4 text-gray-400 font-medium">Tiempo</th>
                      <th className="pb-4 text-white font-bold text-center"><User size={20} className="inline mx-auto"/> 1 Persona</th>
                      <th className="pb-4 text-neon-purple font-bold text-center"><Users size={20} className="inline mx-auto"/> 2 Personas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {PRICING_RETRO.map((tier, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-4 text-gray-300 font-bold">{tier.duration} min</td>
                        <td className="py-4 text-white text-center text-lg">{tier.price1}</td>
                        <td className="py-4 text-neon-purple text-center text-lg font-bold">{tier.price2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
               <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-200 text-sm text-center">
                  💡 <strong>Nota:</strong> Puedes pagar VR en dólares o en pesos al cambio del día.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;