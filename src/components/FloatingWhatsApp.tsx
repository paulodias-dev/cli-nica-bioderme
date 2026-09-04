import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/landingData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show polite notification popup after 3.5 seconds
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none"
      id="floating-whatsapp-container"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="mb-2 bg-white text-stone-800 text-xs sm:text-sm py-2.5 px-4 rounded-2xl shadow-xl border border-stone-200 pointer-events-auto flex items-center gap-3 animate-fade-in max-w-xs">
          <div className="flex-1">
            <p className="font-bold text-[#8f245c]">Dúvidas ou agendamento?</p>
            <p className="text-stone-600 text-[11px] sm:text-xs">
              Converse agora com a equipe da Clínica Bioderme no WhatsApp!
            </p>
          </div>
          <button
            onClick={() => {
              setShowTooltip(false);
              setDismissed(true);
            }}
            className="text-stone-400 hover:text-stone-600 p-0.5 rounded-full"
            aria-label="Fechar mensagem de aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={WHATSAPP_BASE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco no WhatsApp"
        id="floating-whatsapp-btn"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none opacity-75" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white relative z-10" />

        {/* Unread dot badge */}
        <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#8f245c] border-2 border-white text-[9px] font-bold flex items-center justify-center text-white">
          1
        </span>
      </a>
    </div>
  );
};
