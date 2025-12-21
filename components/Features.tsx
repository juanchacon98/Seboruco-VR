import React from 'react';
import { Glasses, Gamepad } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-rv2-dark relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white text-center mb-12">
          ¿QUÉ VAS A <span className="text-rv2-blue">JUGAR</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* VR Card */}
          <div className="group relative bg-rv2-surface p-8 rounded-2xl border border-white/5 hover:border-rv2-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Glasses size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-rv2-blue/20 rounded-lg flex items-center justify-center mb-6">
                <Glasses className="text-rv2-blue" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-rv2-blue transition-colors">Realidad Virtual</h3>
              <p className="text-gray-400 leading-relaxed">
                Sumérgete en mundos digitales con nuestros visores de alta gama. Corta cubos al ritmo de la música, trabaja en oficinas locas o lucha contra el tiempo. Una experiencia inmersiva total para 1 o 2 personas.
              </p>
            </div>
          </div>

          {/* Retro Card */}
          <div className="group relative bg-rv2-surface p-8 rounded-2xl border border-white/5 hover:border-neon-purple/50 transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gamepad size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-neon-purple/20 rounded-lg flex items-center justify-center mb-6">
                <Gamepad className="text-neon-purple" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">Juegos Retro</h3>
              <p className="text-gray-400 leading-relaxed">
                Vuelve a la época dorada de los videojuegos. Disfruta de consolas clásicas y títulos legendarios que marcaron historia. Acción rápida, nostalgia pura y diversión instantánea.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
