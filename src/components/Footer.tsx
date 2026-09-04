import React, { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';
import { BiodermeLogo } from './BiodermeLogo';
import { PrivacyModal } from './PrivacyModal';
import { WHATSAPP_BASE_URL, PROCEDURES } from '../data/landingData';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Presentation */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block" aria-label="Voltar ao início">
              <BiodermeLogo size="md" variant="white" />
            </a>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Desde 2015 proporcionando tratamentos faciais, corporais e depilação a laser de alta eficácia com atendimento humanizado e exclusivo em Anápolis/GO.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.instagram.com/biodermeestetica/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Clínica Bioderme"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#8f245c] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086320491292"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Clínica Bioderme"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#8f245c] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Clínica Bioderme"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#8f245c] text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#clinica" className="hover:text-white transition-colors">
                  A Clínica
                </a>
              </li>
              <li>
                <a href="#procedimentos" className="hover:text-white transition-colors">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato &amp; Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Procedures */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Procedimentos em Destaque
            </h3>
            <ul className="space-y-2 text-sm text-stone-400">
              {PROCEDURES.slice(0, 5).map((proc) => (
                <li key={proc.id}>
                  <a
                    href={`#procedure-${proc.id}`}
                    className="hover:text-pink-300 transition-colors"
                  >
                    {proc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
              Atendimento em Anápolis
            </h3>
            <div className="space-y-2.5 text-xs text-stone-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>Av. Patrícia, Quadra 5A, Lote 01 – Adriana Parque – Jaiara, Anápolis - GO</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Segunda a Sábado: 08:00 às 20:00</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>(62) 9 9282-8274</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8f245c] hover:bg-[#781c4c] text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            Copyright © 2026 Clínica Bioderme. Todos os Direitos Reservados.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Políticas de Privacidade
            </button>
            <span className="text-stone-700">•</span>
            <a
              href="https://fluxosistemas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-stone-500 hover:text-stone-300 transition-colors"
              aria-label="Desenvolvido por Fluxo Sistemas"
            >
              <span>Desenvolvido por Fluxo Sistemas</span>
              <Heart className="w-3 h-3 text-[#8f245c]" />
            </a>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};
