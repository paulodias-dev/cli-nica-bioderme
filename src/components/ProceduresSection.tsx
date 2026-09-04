import React, { useEffect, useState } from 'react';
import { Sparkles, MessageCircle, Check, ArrowUpRight, X, Info } from 'lucide-react';
import { PROCEDURES, createWhatsAppUrl } from '../data/landingData';
import { Procedure } from '../types';

export const ProceduresSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'facial' | 'corporal' | 'laser'>('all');
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  const filteredProcedures = activeFilter === 'all'
    ? PROCEDURES
    : PROCEDURES.filter((proc) => proc.category === activeFilter);

  useEffect(() => {
    if (!selectedProcedure) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProcedure(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProcedure]);

  return (
    <section id="procedimentos" className="py-16 md:py-24 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossas Especialidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Procedimentos Avançados
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Protocolos consagrados para realçar sua beleza natural com máxima segurança, conforto e eficácia em Anápolis.
          </p>
          <div className="w-16 h-1 bg-[#8f245c] mx-auto rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Todos os Procedimentos' },
            { id: 'facial', label: 'Estética Facial' },
            { id: 'corporal', label: 'Estética Corporal' },
            { id: 'laser', label: 'Depilação a Laser' }
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#8f245c] text-white shadow-md'
                  : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 3-Column Desktop Grid / 1-Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProcedures.map((proc) => {
            const whatsappUrl = createWhatsAppUrl(proc.whatsappMessage);

            return (
              <div
                key={proc.id}
                id={`procedure-${proc.id}`}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-xl hover:border-[#8f245c]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image header */}
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={proc.imageUrl}
                      alt={`Procedimento ${proc.name} na Clínica Bioderme em Anápolis`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                    
                    {/* Badge Category */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/95 backdrop-blur-md text-[#8f245c] shadow-xs">
                        {proc.categoryLabel}
                      </span>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight drop-shadow-sm">
                        {proc.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Exact description from site */}
                    <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
                      {proc.description}
                    </p>

                    {/* Key Highlights / Benefits */}
                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                        Benefícios Principais:
                      </p>
                      <ul className="space-y-1.5">
                        {proc.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {proc.recommendedSessions && (
                      <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
                        <span className="font-semibold text-stone-700">Frequência recomendada:</span>
                        <span>{proc.recommendedSessions}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 sm:p-7 pt-0 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProcedure(proc)}
                    className="inline-flex items-center justify-center gap-2 border border-[#8f245c]/25 bg-white hover:bg-[#8f245c]/5 text-[#8f245c] font-semibold text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer"
                    aria-label={`Ver detalhes de ${proc.name}`}
                  >
                    <Info className="w-4 h-4" />
                    <span>Detalhes</span>
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#8f245c] hover:bg-[#781c4c] text-white font-medium text-sm py-3 px-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 group-hover:bg-[#8f245c] active:scale-[0.98]"
                    aria-label={`Agendar ${proc.name} pelo WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-white" />
                    <span>Agendar agora</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProcedure && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-stone-950/70 px-3 sm:px-6 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="procedure-modal-title"
          onMouseDown={() => setSelectedProcedure(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProcedure(null)}
              className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-white/95 hover:bg-stone-100 text-stone-700 shadow-md border border-stone-200 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar detalhes do procedimento"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[260px] lg:min-h-full bg-stone-100">
                <img
                  src={selectedProcedure.imageUrl}
                  alt={`Detalhes do procedimento ${selectedProcedure.name} na Clínica Bioderme`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />
                <div className="absolute left-6 right-16 bottom-6 text-white space-y-3">
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-semibold">
                    {selectedProcedure.categoryLabel}
                  </span>
                  <h3 id="procedure-modal-title" className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {selectedProcedure.name}
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    {selectedProcedure.details.headline}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-12 space-y-7">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#8f245c]">
                    Sobre o procedimento
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    {selectedProcedure.details.intro}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-stone-900">
                    {selectedProcedure.details.reasonsTitle}
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedProcedure.details.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-3 text-sm text-stone-700">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#FAF8F5] border border-stone-200 p-5 space-y-2">
                  <h4 className="font-bold text-stone-900">
                    {selectedProcedure.details.experienceTitle}
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {selectedProcedure.details.experience}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 pt-2">
                  <a
                    href={createWhatsAppUrl(selectedProcedure.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-[180px] items-center justify-center gap-2 bg-[#8f245c] hover:bg-[#781c4c] text-white font-semibold text-sm py-3.5 px-6 rounded-xl shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Agendar agora</span>
                  </a>
                  <p className="text-sm text-stone-600 leading-relaxed md:flex-1">
                    {selectedProcedure.details.closing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
