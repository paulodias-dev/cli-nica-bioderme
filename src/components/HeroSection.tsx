import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Star, Sparkles, MapPin } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/landingData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#FAF8F5] via-[#FAF6F4] to-[#FAF8F5]"
    >
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#8f245c]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#c5a880]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag de Autoridade */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8f245c]/10 border border-[#8f245c]/20 text-[#8f245c] text-xs sm:text-sm font-semibold tracking-wide">
              <span>✨ Mais de 8 Anos de Experiência em Estética de Alto Nível!</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              Resplandeça com <span className="text-[#8f245c]">Confiança</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Descubra Nossos Tratamentos Únicos. Cuidando da sua saúde, beleza e bem-estar no{' '}
              <strong className="text-stone-800 font-semibold">Adriana Parque e Jaiara, Anápolis</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#8f245c] hover:bg-[#781c4c] text-white font-medium text-base sm:text-lg px-8 py-4 rounded-full shadow-lg shadow-[#8f245c]/20 hover:shadow-xl hover:shadow-[#8f245c]/30 transition-all duration-200 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current text-white" />
                <span>Agendar Agora no WhatsApp</span>
              </a>

              <a
                href="#procedimentos"
                id="hero-procedures-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 font-medium text-base sm:text-lg px-7 py-4 rounded-full border border-stone-200 shadow-xs hover:border-stone-300 transition-all duration-200"
              >
                <span>Conhecer Especialidades</span>
                <ArrowRight className="w-4 h-4 text-stone-500" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-3 sm:gap-6 text-stone-700">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-bold text-[#8f245c]">2015</span>
                <span className="text-xs sm:text-sm text-stone-500">Desde Anápolis/GO</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="text-2xl sm:text-3xl font-bold text-stone-900">5.0</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-xs sm:text-sm text-stone-500">Avaliações Reais</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-bold text-stone-900">100%</span>
                <span className="text-xs sm:text-sm text-stone-500">Personalizado</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Framing Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#8f245c]/20 to-[#c5a880]/20 transform rotate-2 scale-105 filter blur-xs" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85"
                  alt="Clínica Bioderme - Tratamentos de Estética Avançada e Bem-Estar em Anápolis"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                {/* Overlay Highlights */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/30">
                    <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                    <span>Clínica Bioderme Anápolis</span>
                  </div>
                  <p className="text-base sm:text-lg font-medium leading-snug">
                    Tecnologia em Depilação a Laser, Criolipólise e Estética Facial
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Localização */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md py-3 px-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8f245c]/10 flex items-center justify-center text-[#8f245c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">Adriana Parque / Jaiara</p>
                  <p className="text-[11px] text-stone-500">Fácil acesso e estacionamento</p>
                </div>
              </div>

              {/* Floating Badge 2: Biossegurança */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-xl border border-stone-100 hidden sm:flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-xs font-semibold text-stone-800">Protocolos Seguros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
