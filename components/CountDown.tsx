import React, { useState, useEffect } from 'react';
import { EVENT_END_DATE } from '../constants';

const CountDown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(EVENT_END_DATE) - +new Date();
    let timeLeft = {
      d: 0,
      h: 0,
      m: 0,
      s: 0
    };

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-center gap-3 md:gap-6 my-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-rv2-surface border border-rv2-blue/30 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(30,107,255,0.2)]">
            <span className="font-display font-bold text-xl md:text-2xl text-white">{(value as number) < 10 ? `0${value}` : value}</span>
          </div>
          <span className="text-xs text-gray-400 mt-1 uppercase font-bold">{unit === 'd' ? 'Días' : unit === 'h' ? 'Hrs' : unit === 'm' ? 'Min' : 'Seg'}</span>
        </div>
      ))}
    </div>
  );
};

export default CountDown;