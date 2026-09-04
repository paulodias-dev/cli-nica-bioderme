import React, { useState } from 'react';
import { Sparkles, MessageCircle, CheckCircle, Eye } from 'lucide-react';
import { RESULTS, createWhatsAppUrl } from '../data/landingData';

export const ResultsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'corporal' | 'laser' | 'facial'>('all');

  const filteredResults = activeCategory === 'all'
    ? RESULTS
    : RESULTS.filter((res) => res.category === activeCategory);

  return (
    <section id="resultados" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformações Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Confira alguns resultados
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
            Estamos comprometidos em ajudar você a realçar a sua beleza natural e alcançar uma aparência radiante e saudável.
          </p>
          <div className="w-16 h-1 bg-[#8f245c] mx-auto rounded-full" />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todos os Casos' },
            { id: 'corporal', label: 'Corporal & Medidas' },
            { id: 'facial', label: 'Pele & Facial' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#8f245c] text-white shadow-xs'
                  : 'bg-stone-50 text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Images Container (Before & After Side by Side) */}
              <div className="relative grid grid-cols-2 gap-1 bg-stone-200 p-2">
                {/* Before Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-stone-100">
                  <img
                    src={item.beforeImg}
                    alt={`${item.title} - Antes`}
                    className="w-full h-full object-cover grayscale-30 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
                    Antes
                  </div>
                </div>

                {/* After Image */}
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-stone-100">
                  <img
                    src={item.afterImg}
                    alt={`${item.title} - Depois`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-[#8f245c] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Depois ✨
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-stone-800 shadow-sm border border-stone-200">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Details & Description */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c]">
                      {item.sessions}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Protocolo Realizado na Bioderme</span>
                  </div>

                  <a
                    href={createWhatsAppUrl(`Olá! Vi os resultados de ${item.title} e gostaria de agendar uma avaliação.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8f245c] hover:text-[#731a49] transition-colors"
                  >
                    <span>Quero um resultado assim</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Call to Action Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#8f245c] to-[#6d1844] text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Pronta para Conquistar a Sua Melhor Versão?
            </h3>
            <p className="text-pink-100 text-sm sm:text-base">
              Agende hoje mesmo uma consulta de avaliação personalizada com a nossa equipe em Anápolis e inicie seu protocolo sob medida.
            </p>
            <div className="pt-2">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de agendar uma avaliação de resultados na Clínica Bioderme.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-[#8f245c] font-bold text-base px-8 py-3.5 rounded-full shadow-lg transition-transform duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar Avaliação no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
