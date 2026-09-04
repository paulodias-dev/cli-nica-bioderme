/**
 * Clínica Bioderme - Landing Page Oficial de Alta Conversão
 * Especialistas em Estética Avançada e Depilação a Laser em Anápolis/GO
 * Fundada em 2015 no Adriana Parque / Jaiara
 */

import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProceduresSection } from './components/ProceduresSection';
import { ResultsSection } from './components/ResultsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans selection:bg-[#8f245c]/20 selection:text-[#8f245c]">
      {/* Header Sticky com Menu Desktop e Mobile Drawer */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Primeira Dobra) */}
        <HeroSection />

        {/* 2. Seção "A Clínica / Nosso Espaço" (#clinica) */}
        <AboutSection />

        {/* 3. Seção de Procedimentos e Especialidades (#procedimentos) */}
        <ProceduresSection />

        {/* 4. Seção de Resultados / Galeria (#resultados) */}
        <ResultsSection />

        {/* 5. Seção de Prova Social com os 9 Depoimentos Reais (#depoimentos) */}
        <TestimonialsSection />

        {/* 6. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 7. Seção de Localização, Endereço no Adriana Parque e Contato (#contato) */}
        <LocationContactSection />
      </main>

      {/* Rodapé com Navegação, Políticas de Privacidade e Direitos */}
      <Footer />

      {/* Botão Flutuante de Alta Conversão do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
