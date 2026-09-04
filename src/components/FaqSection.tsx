import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, createWhatsAppUrl } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-t border-stone-100" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c] text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Informações claras e transparentes sobre nossos tratamentos e funcionamento da clínica em Anápolis.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/90 bg-[#FAF8F5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-stone-900 text-base hover:text-[#8f245c] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#8f245c]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-200/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-bold text-stone-900 text-sm">Ficou com alguma dúvida específica?</p>
            <p className="text-xs text-stone-500">Nossa equipe em Anápolis está pronta para te atender com carinho.</p>
          </div>
          <a
            href={createWhatsAppUrl('Olá! Tenho uma dúvida sobre os procedimentos da Clínica Bioderme.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8f245c] hover:bg-[#781c4c] text-white text-xs font-semibold shrink-0 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar Dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
