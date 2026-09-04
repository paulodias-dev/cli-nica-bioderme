import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Navigation,
  Send,
  Sparkles,
  Calendar
} from 'lucide-react';
import { PROCEDURES, createWhatsAppUrl } from '../data/landingData';

export const LocationContactSection: React.FC = () => {
  // Quick Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    procedure: 'Depilação a Laser',
    period: 'Manhã (08h às 12h)',
    notes: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formData.name || 'Paciente'} e gostaria de agendar uma avaliação na Clínica Bioderme.\n\n• Procedimento de interesse: ${formData.procedure}\n• Período de preferência: ${formData.period}${formData.notes ? `\n• Observação: ${formData.notes}` : ''}`;
    const url = createWhatsAppUrl(msg);
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f245c]/10 text-[#8f245c] text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização e Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Venha nos Visitar em Anápolis
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Estamos estrategicamente localizados no Adriana Parque (região da Jaiara), com estacionamento fácil e ambiente seguro e acolhedor.
          </p>
          <div className="w-16 h-1 bg-[#8f245c] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Quick Booking */}
          <div className="lg:col-span-6 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80 space-y-6">
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8f245c]" />
                <span>Informações Oficiais</span>
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Endereço */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#8f245c]/10 text-[#8f245c] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Endereço Completo:</h4>
                    <p className="text-stone-600 leading-relaxed">
                      Av. Patrícia, Quadra 5A, Lote 01 – Adriana Parque – Jaiara, Anápolis - GO, CEP 75135-000
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Patr%C3%ADcia,+Quadra+5A,+Lote+01,+Adriana+Parque,+An%C3%A1polis+-+GO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8f245c] hover:underline mt-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir no Google Maps / Waze</span>
                    </a>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#8f245c]/10 text-[#8f245c] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Horário de Atendimento:</h4>
                    <p className="text-stone-600">
                      Segunda a Sábado das 08:00 às 20:00
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      Atendimento com horário agendado
                    </span>
                  </div>
                </div>

                {/* Telefone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#8f245c]/10 text-[#8f245c] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Telefone e WhatsApp Oficial:</h4>
                    <p className="text-stone-800 font-bold text-lg">
                      (62) 9 9282-8274
                    </p>
                    <p className="text-xs text-stone-500">
                      Respostas ágeis pela equipe durante o expediente
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais Oficiais */}
              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                  Acompanhe Nossas Redes Oficiais:
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.instagram.com/biodermeestetica/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-[#8f245c] hover:border-[#8f245c]/30 text-sm font-medium transition-all shadow-2xs"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>@biodermeestetica</span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100086320491292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-blue-600 hover:border-blue-200 text-sm font-medium transition-all shadow-2xs"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href="https://api.whatsapp.com/send/?phone=5562992828274&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8f245c] text-white hover:bg-[#781c4c] text-sm font-medium transition-all shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Direto</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Interactive Pre-Booking Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#8f245c]" />
                <h3 className="font-bold text-stone-900 text-lg">
                  Agilização de Agendamento
                </h3>
              </div>
              <p className="text-xs text-stone-500">
                Preencha para enviar seus dados prontos diretamente no WhatsApp da clínica com 1 clique:
              </p>

              <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                <div>
                  <label htmlFor="patient-name-input" className="block text-xs font-semibold text-stone-700 mb-1">
                    Seu Nome:
                  </label>
                  <input
                    id="patient-name-input"
                    type="text"
                    required
                    placeholder="Ex: Ana Paula"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f245c]/30 focus:border-[#8f245c]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="procedure-select" className="block text-xs font-semibold text-stone-700 mb-1">
                      Procedimento Desejado:
                    </label>
                    <select
                      id="procedure-select"
                      value={formData.procedure}
                      onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f245c]/30 focus:border-[#8f245c] bg-white"
                    >
                      {PROCEDURES.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="period-select" className="block text-xs font-semibold text-stone-700 mb-1">
                      Melhor Período:
                    </label>
                    <select
                      id="period-select"
                      value={formData.period}
                      onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f245c]/30 focus:border-[#8f245c] bg-white"
                    >
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Tarde (13h às 17h)">Tarde (13h às 17h)</option>
                      <option value="Final da Tarde / Noite (17h às 20h)">Final da Tarde / Noite (17h às 20h)</option>
                      <option value="Sábado">Sábado</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  id="submit-pre-booking-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#8f245c] hover:bg-[#781c4c] text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-all duration-200 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar e Agendar no WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 h-[460px] sm:h-[560px] relative">
              {/* Google Maps Iframe */}
              <iframe
                title="Localização da Clínica Bioderme no Adriana Parque / Jaiara em Anápolis"
                src="https://maps.google.com/maps?q=Av.+Patr%C3%ADcia,+Quadra+5A,+Lote+01,+Adriana+Parque,+An%C3%A1polis+-+GO&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Card Badge */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-stone-200 max-w-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#8f245c] text-white flex items-center justify-center font-bold text-xs">
                    BD
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Clínica Bioderme</h3>
                    <p className="text-xs text-stone-600">Adriana Parque – Jaiara, Anápolis</p>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold">● Aberto Seg a Sáb</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Patr%C3%ADcia,+Quadra+5A,+Lote+01,+Adriana+Parque,+An%C3%A1polis+-+GO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#8f245c] hover:underline"
                  >
                    Como Chegar →
                  </a>
                </div>
              </div>
            </div>

            {/* Neighborhoods served highlight for Local SEO */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-stone-800">
                Regiões atendidas com facilidade:
              </span>
              <span className="text-stone-500">
                Adriana Parque • Vila Jaiara • Jardim Suíço • Setor Sul • Cidade Jardim • Todo o município de Anápolis/GO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
