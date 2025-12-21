import React from 'react';
import { Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

const Info: React.FC = () => {
  return (
    <section id="info" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Schedule */}
          <div>
             <div className="flex items-center gap-3 mb-6">
                <Clock className="text-neon-cyan" size={32} />
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white">HORARIOS</h2>
             </div>
             
             <div className="bg-rv2-surface p-6 rounded-xl border-l-4 border-neon-cyan space-y-4">
                <div>
                  <h4 className="text-white font-bold text-lg">Todos los días</h4>
                  <p className="text-gray-400">8:00 AM - 10:00 PM</p>
                </div>
                <div className="h-px bg-white/10"></div>
                <div>
                  <h4 className="text-neon-cyan font-bold text-lg">24 y 31 de Diciembre</h4>
                  <p className="text-gray-400">Hasta las 5:00 PM</p>
                </div>
                 <div className="h-px bg-white/10"></div>
                <div>
                  <h4 className="text-neon-cyan font-bold text-lg">25 de Dic y 1 de Enero</h4>
                  <p className="text-gray-400">Desde la 1:00 PM</p>
                </div>
             </div>
          </div>

          {/* Rules */}
          <div>
             <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-rv2-blue" size={32} />
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white">REGLAS CLAVE</h2>
             </div>
             
             <ul className="space-y-4">
                <li className="flex gap-4 items-start bg-rv2-surface p-4 rounded-lg">
                  <div className="bg-rv2-blue/20 p-2 rounded-full min-w-max">
                    <span className="font-bold text-rv2-blue">12+</span>
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Edad Mínima</h5>
                    <p className="text-gray-400 text-sm">Recomendado para mayores de 12 años.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start bg-rv2-surface p-4 rounded-lg">
                  <div className="bg-yellow-500/20 p-2 rounded-full min-w-max">
                    <AlertTriangle className="text-yellow-500" size={20} />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Tolerancia de Espera</h5>
                    <p className="text-gray-400 text-sm">Máximo 5 minutos de espera. Si no llegas, se libera el turno.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start bg-rv2-surface p-4 rounded-lg">
                  <div className="bg-green-500/20 p-2 rounded-full min-w-max">
                     <UsersIcon />
                  </div>
                  <div>
                    <h5 className="text-white font-bold">Capacidad</h5>
                    <p className="text-gray-400 text-sm">Hasta 2 personas jugando simultáneamente.</p>
                  </div>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)

export default Info;
