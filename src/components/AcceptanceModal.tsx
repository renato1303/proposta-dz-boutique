import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { PRICING_OPTIONS } from '../data/slidesData';

interface AcceptanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'monthly' | 'onetime';
}

export const AcceptanceModal: React.FC<AcceptanceModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'onetime'
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'onetime'>(initialPlan);
  const [signatoryName, setSignatoryName] = useState('Ciro');
  const [signatoryEmail, setSignatoryEmail] = useState('');
  const [companyName, setCompanyName] = useState('Ciro Experiências');
  const [acceptedTerms, setAcceptedTerms] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plan = PRICING_OPTIONS.find((p) => p.type === selectedPlan) || PRICING_OPTIONS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signatoryName.trim()) return;
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = `PROPOSTA COMERCIAL APROVADA\nProjeto: Sense Sales × Ciro Experiências (Turismo Raiz na Argentina)\nPlano Selecionado: ${plan.label} (${plan.amount} ${plan.period})\nResponsável: ${signatoryName} (${companyName} - ${signatoryEmail})\nData de Início Previsto: 15 de Setembro de 2026\nStatus: Aprovado e pronto para kick-off`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in pointer-events-auto">
      <div className="bg-[#07080a] border border-[#c6ff4d]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-[#f6f4ec] shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#f6f4ec]/60 hover:text-[#f6f4ec] hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff4d] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold uppercase tracking-wider">
                Formalização da Parceria
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f6f4ec]">
              Aprovar Proposta Comercial
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#f6f4ec]/70 font-body leading-relaxed">
              Confirme os dados para gerarmos o termo oficial de prestação de serviços da Sense Sales para o projeto de Ciro com início em 15 de setembro.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-body">
              {/* Plan Choice */}
              <div>
                <label className="block text-xs font-semibold text-[#f6f4ec]/80 uppercase tracking-wider mb-2">
                  Plano Escolhido:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => setSelectedPlan('onetime')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedPlan === 'onetime'
                        ? 'bg-[#c6ff4d]/15 border-[#c6ff4d] text-[#f6f4ec]'
                        : 'bg-white/5 border-white/10 text-[#f6f4ec]/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">À Vista (Total)</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#c6ff4d] text-[#0a0f0a] font-bold">
                        -US$ 300
                      </span>
                    </div>
                    <div className="font-display text-xl font-bold text-[#c6ff4d] mt-1">
                      US$ 3.300
                    </div>
                    <p className="text-[11px] text-[#f6f4ec]/60 mt-0.5">Pagamento único integral</p>
                  </div>

                  <div
                    onClick={() => setSelectedPlan('monthly')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedPlan === 'monthly'
                        ? 'bg-[#c6ff4d]/15 border-[#c6ff4d] text-[#f6f4ec]'
                        : 'bg-white/5 border-white/10 text-[#f6f4ec]/70 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">Recorrente Mensal</span>
                    </div>
                    <div className="font-display text-xl font-bold text-[#f6f4ec] mt-1">
                      US$ 1.200 <span className="text-xs font-normal">/mês</span>
                    </div>
                    <p className="text-[11px] text-[#f6f4ec]/60 mt-0.5">3 parcelas de US$ 1.200</p>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#f6f4ec]/70 mb-1">
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    required
                    value={signatoryName}
                    onChange={(e) => setSignatoryName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-sm text-[#f6f4ec] focus:outline-none focus:border-[#c6ff4d] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#f6f4ec]/70 mb-1">
                    Nome do Projeto / Empresa
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-sm text-[#f6f4ec] focus:outline-none focus:border-[#c6ff4d] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#f6f4ec]/70 mb-1">
                  E-mail Corporativo para Envio do Contrato
                </label>
                <input
                  type="email"
                  required
                  placeholder="ciro@exemplo.com"
                  value={signatoryEmail}
                  onChange={(e) => setSignatoryEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-sm text-[#f6f4ec] focus:outline-none focus:border-[#c6ff4d] transition-colors"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#f6f4ec]/75">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-0.5 rounded text-[#c6ff4d] focus:ring-[#c6ff4d]"
                  />
                  <span>
                    Concordo com o escopo de 90 dias descrito na proposta e confirmo o início da Semana 1 em 15 de setembro de 2026.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!signatoryName.trim() || !acceptedTerms}
                className="w-full mt-4 py-3 rounded-xl bg-[#c6ff4d] text-[#0a0f0a] font-display font-bold text-sm hover:bg-[#c6ff4d]/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#c6ff4d]/20 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Confirmar Aceite da Proposta
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#c6ff4d]/15 border-2 border-[#c6ff4d] flex items-center justify-center text-[#c6ff4d] mx-auto mb-4 animate-bounce">
              <Check className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-[#c6ff4d] font-semibold">
              Parceria Confirmada
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f6f4ec] mt-1">
              Proposta Aprovada com Sucesso!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#f6f4ec]/75 max-w-md mx-auto font-body leading-relaxed">
              Obrigado, <strong className="text-[#f6f4ec]">{signatoryName}</strong>! A equipe da Sense Sales (Renato &amp; Allan) foi notificada e já está preparando o ambiente de onboarding para o dia 15 de setembro.
            </p>

            {/* Confirmation Certificate Card */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left font-mono text-xs text-[#f6f4ec]/80 space-y-1.5">
              <div className="flex justify-between text-[#c6ff4d]">
                <span>CERTIFICADO DE ACEITE</span>
                <span>#SS-CIRO-2026</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between">
                <span className="text-[#f6f4ec]/50">Cliente:</span>
                <span>{companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f6f4ec]/50">Plano:</span>
                <span>{plan.label} ({plan.amount})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f6f4ec]/50">Data de Kick-off:</span>
                <span>15/09/2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#f6f4ec]/50">Status:</span>
                <span className="text-[#c6ff4d] font-bold">Aguardando Kick-off</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleCopySummary}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-[#f6f4ec] transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-[#c6ff4d]" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copiado para a Área de Transferência!' : 'Copiar Resumo da Aprovação'}
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-5 rounded-xl bg-[#c6ff4d] text-[#0a0f0a] text-xs font-display font-bold hover:bg-[#c6ff4d]/90 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
