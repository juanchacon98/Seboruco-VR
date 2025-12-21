import React from 'react';
import { VR_GAMES } from '../constants';

const Games: React.FC = () => {
  return (
    <section id="games" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            JUEGOS <span className="text-neon-cyan">DESTACADOS</span> VR
          </h2>
          <p className="text-gray-400 text-sm">Varía según disponibilidad. ¡Tenemos más opciones!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {VR_GAMES.map((game, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-display font-bold text-white text-lg md:text-xl drop-shadow-md group-hover:text-neon-cyan transition-colors">
                  {game.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
