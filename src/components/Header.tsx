import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { BiodermeLogo } from './BiodermeLogo';
import { WHATSAPP_BASE_URL } from '../data/landingData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Clínica', href: '#clinica' },
    { label: 'Procedimentos', href: '#procedimentos' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300" id="header-navigation">
      {/* Top Announcement Bar - Micro Conversion & Local Authority */}
      <div className="bg-[#8f245c] text-white text-xs md:text-sm py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-pink-200" />
              <span>Adriana Parque – Jaiara, Anápolis/GO</span>
            </span>
            <span className="text-pink-300/60">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-pink-200" />
              <span>Segunda a Sábado: 08h às 20h</span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="tel:+5562992828274"
              className="flex items-center gap-1 hover:text-pink-100 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(62) 9 9282-8274</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100 py-2.5'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-stone-200/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform hover:opacity-95"
            aria-label="Ir para o início da Clínica Bioderme"
            id="header-brand-link"
          >
            <BiodermeLogo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-[#8f245c] font-medium text-[15px] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8f245c] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-button"
              className="inline-flex items-center justify-center gap-2 bg-[#8f245c] hover:bg-[#781c4c] text-white font-medium text-sm md:text-[15px] px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 group active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-pink-200 group-hover:scale-110 transition-transform" />
              <span>Agendar Agora</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#8f245c] text-white text-xs font-semibold"
            >
              Agendar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-700 hover:text-[#8f245c] hover:bg-stone-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8f245c]"
              aria-label="Alternar menu de navegação"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-drawer-overlay">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Panel */}
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between p-6 transition-transform duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <BiodermeLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-stone-800 hover:text-[#8f245c] hover:bg-stone-50 px-3 py-2.5 rounded-lg font-medium text-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-stone-100 space-y-4">
              <div className="text-xs text-stone-500 space-y-1">
                <p className="flex items-center gap-1.5 font-medium text-stone-700">
                  <MapPin className="w-4 h-4 text-[#8f245c]" />
                  <span>Adriana Parque – Jaiara, Anápolis/GO</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#8f245c]" />
                  <span>Segunda a Sábado: 08:00 às 20:00</span>
                </p>
              </div>

              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8f245c] text-white font-medium py-3 px-4 rounded-xl shadow-md active:scale-98 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
