import React, { useState } from 'react';
import { Star, MessageCircle, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, createWhatsAppUrl } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#FAF8F5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c] text-xs font-semibold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-[#8f245c]" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            O Que Dizem os Nossos Pacientes
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Mais de 8 anos transformando vidas, devolvendo autoestima e cuidando com carinho de quem passa pela Clínica Bioderme.
          </p>

          {/* Social Proof Stats Badge */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-stone-200/80 shadow-xs mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-800">5.0 de Avaliação Média</span>
            <span className="text-stone-300">|</span>
            <span className="text-xs text-stone-500 font-medium">Pacientes Verificados</span>
          </div>
        </div>

        {/* View Toggle on Larger Screens */}
        <div className="flex justify-end mb-6 hidden sm:flex">
          <div className="inline-flex rounded-lg border border-stone-200 bg-white p-1 text-xs">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                viewMode === 'grid' ? 'bg-[#8f245c] text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Ver Todos ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                viewMode === 'carousel' ? 'bg-[#8f245c] text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Modo Destaque
            </button>
          </div>
        </div>

        {/* Carousel Mode */}
        {viewMode === 'carousel' ? (
          <div className="max-w-3xl mx-auto relative bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-lg">
            <Quote className="w-12 h-12 text-[#8f245c]/20 mb-4" />
            <div className="flex text-amber-400 mb-4">
              {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal mb-8 italic">
              "{TESTIMONIALS[currentIndex].text}"
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#8f245c]/15 text-[#8f245c] font-bold flex items-center justify-center text-base">
                  {TESTIMONIALS[currentIndex].initials}
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">
                    {TESTIMONIALS[currentIndex].author}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {TESTIMONIALS[currentIndex].treatment || 'Paciente Verificado'} • {TESTIMONIALS[currentIndex].location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full border border-stone-200 hover:bg-stone-100 text-stone-700 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Grid Mode - 3 Columns with all 9 exact testimonials */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-[#8f245c]/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#8f245c]/25" />
                  </div>

                  <p className="text-stone-700 text-sm sm:text-[15px] leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8f245c]/10 text-[#8f245c] font-bold flex items-center justify-center text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold text-stone-900 text-sm">
                        {t.author}
                      </h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <p className="text-xs text-stone-500">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Proof CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 text-sm mb-4">
            Junte-se a centenas de pacientes com resultados comprovados em Anápolis.
          </p>
          <a
            href={createWhatsAppUrl('Olá! Li os depoimentos e quero agendar minha avaliação na Clínica Bioderme.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8f245c] hover:bg-[#781c4c] text-white font-medium text-sm sm:text-base px-7 py-3 rounded-full shadow-md transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com a Equipe no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
