import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-rv2-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <HelpCircle className="inline-block text-gray-500 mb-2" size={32} />
          <h2 className="font-display font-bold text-3xl text-white">PREGUNTAS <span className="text-gray-500">FRECUENTES</span></h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-rv2-surface border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-rv2-blue" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              <div 
                className={`px-5 text-gray-400 text-sm transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
