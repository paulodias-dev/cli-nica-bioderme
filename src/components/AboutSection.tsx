import React from 'react';
import { Sparkles, MapPin, ShieldCheck, CheckCircle2, Heart, Award } from 'lucide-react';
import { DIFFERENTIALS, CLINIC_HIGHLIGHTS } from '../data/landingData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#8f245c]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#8f245c]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#8f245c]" />;
      default:
        return <Heart className="w-6 h-6 text-[#8f245c]" />;
    }
  };

  return (
    <section id="clinica" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nosso Espaço e Filosofia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            A Clínica Bioderme
          </h2>
          <div className="w-16 h-1 bg-[#8f245c] mx-auto rounded-full" />
        </div>

        {/* Institutional Text Box - Styled as an authentic clinic manifesto */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#FAF8F5] border border-stone-200/80 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8f245c]/5 rounded-bl-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-stone-200 text-[#8f245c]">
              <Award className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="space-y-3 text-center md:text-left">
              <blockquote className="text-lg sm:text-xl text-stone-700 italic font-normal leading-relaxed">
                “A Clínica de estética Bioderme oferece a seus pacientes atendimento personalisando, visando a sua saúde beleza e bem estar. Disponibilizamos tratamentos facial, corporal e Depilação a laser. Através de técnicas e protocolos montados de acordo com sua necessidade, estamos desde 2015 trazendo sempre o melhor pra você, Cliente Bioderme.”
              </blockquote>
              <p className="text-sm font-semibold text-[#8f245c] uppercase tracking-wider">
                — Equipe Clínica Bioderme • Anápolis/GO
              </p>
            </div>
          </div>
        </div>

        {/* Visual Differentials Cards (Atendimento Personalizado, Localização Privilegiada, Protocolos Exclusivos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DIFFERENTIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-stone-200/90 hover:border-[#8f245c]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#8f245c]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-semibold text-[#8f245c] tracking-wider uppercase block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-[#8f245c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Padrão de Excelência Bioderme</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Numbers Banner */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
            {CLINIC_HIGHLIGHTS.map((stat, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i !== 0 ? 'lg:pl-6' : ''}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-200 mb-1">
                  {stat.number}
                </p>
                <p className="text-base font-semibold text-white">
                  {stat.label}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
