import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs" id="privacy-policy-modal">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative border border-stone-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Fechar Política de Privacidade"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#8f245c]/10 text-[#8f245c] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-stone-900">
              Política de Privacidade e Proteção de Dados
            </h3>
            <p className="text-xs text-stone-500">
              Clínica Bioderme • Conforme LGPD (Lei Nº 13.709/2018)
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
          <section>
            <h4 className="font-semibold text-stone-900 mb-1">1. Compromisso com a Privacidade</h4>
            <p>
              A Clínica Bioderme, estabelecida em Anápolis/GO, valoriza a confidencialidade e segurança das informações de seus pacientes e visitantes. Este documento esclarece como tratamos dados coletados neste website e canais de atendimento.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-stone-900 mb-1">2. Coleta e Finalidade dos Dados</h4>
            <p>
              Coletamos dados fornecidos voluntariamente pelo usuário (como nome, telefone e preferências de procedimento) exclusivamente para fins de agendamento de avaliações, esclarecimento de dúvidas e prestação de serviços estéticos personalizados.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-stone-900 mb-1">3. Não Compartilhamento</h4>
            <p>
              A Clínica Bioderme jamais vende, aluga ou cede dados pessoais a terceiros. As conversas mantidas via WhatsApp são sigilosas e restritas ao corpo de atendimento clínico.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-stone-900 mb-1">4. Direitos do Titular</h4>
            <p>
              A qualquer momento o titular pode solicitar a confirmação da existência de tratamento, atualização ou eliminação de seus dados através do nosso canal oficial de WhatsApp ou no endereço físico no Adriana Parque, Anápolis/GO.
            </p>
          </section>

          <section>
            <h4 className="font-semibold text-stone-900 mb-1">5. Contato do Encarregado</h4>
            <p>
              Dúvidas adicionais sobre o tratamento de dados podem ser encaminhadas diretamente ao telefone (62) 9 9282-8274.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#8f245c] text-white text-sm font-medium rounded-xl hover:bg-[#781c4c] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
