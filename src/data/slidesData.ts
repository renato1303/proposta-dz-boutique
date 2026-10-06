import { SlideData, TeamMember, PhaseInfo, DeliverableItem, PricingOption } from '../types';

export const SLIDES_CONFIG: SlideData[] = [
  {
    id: 'cover',
    number: '01',
    title: 'Proposta Comercial',
    kicker: 'Sense Sales × Dz Boutique Imobiliária',
    theme: 'black',
    speakerNotes: [
      'Abertura formal da reunião com Dz Boutique Imobiliária.',
      'Destacar o objetivo: transformar a autoridade imobiliária em captação contínua de clientes de alto padrão.',
      'Reforçar o início previsto para 15 de setembro de 2026.'
    ]
  },
  {
    id: 'team',
    number: '02',
    title: 'Condução executiva e técnica',
    kicker: 'Quem conduz o projeto',
    theme: 'black',
    brandbar: '02 · Squad Dedicado',
    speakerNotes: [
      'Apresentar Renato como ponto de contato direto e sênior.',
      'Renato: Automação, Growth & Estratégia, especialista em arquitetura de infraestrutura digital e resolução de alta complexidade.'
    ]
  },
  {
    id: 'portfolio-1',
    number: '03',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 01',
    theme: 'white',
    brandbar: '03 · Portfólio 01',
    speakerNotes: [
      'Apresentar o primeiro painel de marcas atendidas pelo nosso squad.',
      'Destaque para empresas de tecnologia, sustentabilidade e serviços B2B.',
      'Metodologia comprovada de aquisição e autoridade de marca.'
    ]
  },
  {
    id: 'portfolio-2',
    number: '04',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 02',
    theme: 'white',
    brandbar: '04 · Portfólio 02',
    speakerNotes: [
      'Apresentar o segundo painel de marcas aceleradas.',
      'Casos de sucesso em tráfego qualificado, retenção e posicionamento comercial.',
      'Validação de modelos em diferentes mercados e verticais.'
    ]
  },
  {
    id: 'portfolio-3',
    number: '05',
    title: 'Empresas e marcas que aceleramos',
    kicker: 'Portfólio · Painel 03',
    theme: 'white',
    brandbar: '05 · Portfólio 03',
    speakerNotes: [
      'Apresentar o terceiro painel de marcas de grande porte e autoridade consolidada.',
      'Experiência em operações de alta escala e complexidade de mercado.',
      'Reforçar como essa mesma maturidade estratégica será aplicada.'
    ]
  },
  {
    id: 'context',
    number: '06',
    title: 'Leads qualificados, sem depender apenas de portais.',
    kicker: 'Contexto & Oportunidade',
    theme: 'green-deep',
    brandbar: '06 · Contexto',
    speakerNotes: [
      'Hoje a Dz Boutique já investe em tráfego pago mas sem um direcionamento e uma estratégia bem alinhado.',
      'Com uma estratégia definida e um comercial alinhado, a imobiliária passa a ter um fluxo previsível de leads chegando do funil.',
      'Destacar o resultado: leads qualificados direto no WhatsApp dos corretores.'
    ]
  },
  {
    id: 'macro-methodology',
    number: '07',
    title: 'Três fases, do Start à Escala',
    kicker: 'Como trabalhamos',
    theme: 'white',
    brandbar: '07 · Metodologia',
    speakerNotes: [
      'Visão macro do projeto ao longo das fases.',
      'Fase 1 (Mês 1): Estruturação da página de conversão, formulário, campanhas e tracking.',
      'Fase 2 (Meses 2 e 3): Tração e comparação entre canais de captação.',
      'Fase 3 (Meses 4 e 5): Escala com verba concentrada nos melhores canais de conversão.'
    ]
  },
  {
    id: 'week1-discovery',
    number: '08',
    title: 'Semana 1 — Discovery & Posicionamento',
    kicker: 'Semana 1 · Início 15 de setembro',
    theme: 'black',
    brandbar: '08 · Fase 1 — Estruturação',
    speakerNotes: [
      'Na Semana 1, mapeamos o comprador ideal de alto padrão (perfis, desejos e critérios).',
      'Análise de mercado, diferencial competitivo e o posicionamento da Dz Boutique.',
      'Diagnóstico e posicionamento do Instagram (bio, destaques e portfólio de imóveis).'
    ]
  },
  {
    id: 'weeks2-3-tactical',
    number: '09',
    title: 'Semanas 2 e 3 — Infraestrutura',
    kicker: 'Semanas 2 e 3 · Tático',
    theme: 'green-deep',
    brandbar: '09 · Fase 1 — Estruturação',
    speakerNotes: [
      'Frente de Mídia & Conteúdo: orientações para Instagram, roteiros de vídeos de empreendimentos e divisão de orçamento.',
      'Frente Técnica: Rastreamento (Meta CAPI + GA4) e formulário de pré-qualificação.'
    ]
  },
  {
    id: 'week4-warmup',
    number: '10',
    title: 'Semana 4 — De pé para a tração',
    kicker: 'Semana 4',
    theme: 'black',
    brandbar: '10 · Fase 1 — Estruturação',
    speakerNotes: [
      'Start das Campanhas: primeiros anúncios imobiliários no ar pra validar ganchos e calibrar pixel.',
      'Reunião de Sprint 01: relatório de infraestrutura, primeiros números e aprovação do plano do Mês 2.'
    ]
  },
  {
    id: 'month2-warmup',
    number: '11',
    title: 'Meses 2 e 3 — Tração',
    kicker: 'Meses 2 e 3 · Tração',
    theme: 'white',
    brandbar: '11 · Fase 2 — Tração',
    speakerNotes: [
      'Escala de Captação: Aumento controlado do investimento diário, de olho no custo por lead qualificado.',
      'Conteúdo que Sustenta o Interesse: Orientação semanal para criação de anúncios para nutrir a campanha e não deixar cair em saturação.',
      'Otimização Cirúrgica: otimizações de campanha e público diariamente, testes de criativos em vídeo e estáticos.'
    ]
  },
  {
    id: 'month3-launch',
    number: '12',
    title: 'Meses 4 e 5 — Escala',
    kicker: 'Meses 4 e 5 · Escala',
    theme: 'black',
    brandbar: '12 · Fase 3 — Escala',
    speakerNotes: [
      'Foco no que Funciona: Mais verba nos criativos e públicos imobiliários vencedores.',
      'Remarketing + Follow Up: Reimpacto de quem entrou no funil nos últimos 30, 60 e 90 dias e follow up dos corretores.',
      'Fechamos o ciclo com dados e plano de continuidade.'
    ]
  },
  {
    id: 'parallel-track',
    number: '13',
    title: 'Dashboard de Acompanhamento ao Vivo',
    kicker: 'Dashboard ao Vivo',
    theme: 'black',
    brandbar: '13 · Dashboard ao Vivo',
    speakerNotes: [
      'Acompanhamento simultâneo das campanhas de anúncios em tempo real.',
      'Visão consolidada do Meta Ads e Google Ads.',
      'Transparência total de investimentos, leads e custos.'
    ]
  },
  {
    id: 'deliverables',
    number: '14',
    title: 'Entregáveis da proposta',
    kicker: 'O que está incluso',
    theme: 'white',
    brandbar: '14 · Escopo',
    speakerNotes: [
      'Clareza total do escopo contratual sem letras miúdas.',
      'Cobrimos todas as frentes: Estratégia, Técnico, Mídia, Conversão, Dashboard e Acompanhamento Comercial.',
      'Garantia de alinhamentos semanais de sprint para prestação de contas contínua.'
    ]
  },
  {
    id: 'investment',
    number: '15',
    title: 'Todos com o mesmo objetivo: Gerar faturamento',
    kicker: 'Investimento & Condições',
    theme: 'lime',
    brandbar: '15 · Investimento',
    speakerNotes: [
      'Apresentar a modalidade de investimento recorrente.',
      'Previsibilidade e fluxo de caixa mensal.',
      'Apoio integral de Renato & equipe por todo o período.'
    ]
  },
  {
    id: 'investment-onetime',
    number: '16',
    title: 'Condição Especial · Pagamento à Vista',
    kicker: 'Investimento & Condições',
    theme: 'black',
    brandbar: '16 · Pagamento À Vista',
    speakerNotes: [
      'Apresentar a modalidade de pagamento integral à vista.',
      'Destacar a economia imediata.',
      'Garantia de prioridade e kick-off imediato.'
    ]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 'portfolio-1',
    slideNumber: '03',
    brandbar: '03 · Portfólio 01',
    kicker: 'Portfólio · Painel 01',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Histórico comprovado de impacto: operações que confiaram na nossa estratégia, tráfego e tecnologia para escalar resultados.',
    image: '/1.jpeg',
    tag: 'Painel 01 · Institucional & Tecnologia'
  },
  {
    id: 'portfolio-2',
    slideNumber: '04',
    brandbar: '04 · Portfólio 02',
    kicker: 'Portfólio · Painel 02',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Marcas aceleradas com funis de alta conversão, posicionamento estratégico de mercado e geração contínua de leads qualificados.',
    image: '/2.jpeg',
    tag: 'Painel 02 · Escala & Crescimento'
  },
  {
    id: 'portfolio-3',
    slideNumber: '05',
    brandbar: '05 · Portfólio 03',
    kicker: 'Portfólio · Painel 03',
    title: 'Empresas e marcas que aceleramos',
    subtitle: 'Grandes marcas e players de mercado atendidos com esteiras completas de automação, mídia de performance e autoridade de marca.',
    image: '/3.jpeg',
    tag: 'Painel 03 · Marcas Consolidadas'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Renato',
    initial: 'R',
    role: 'Automação & Growth',
    photo: '/link%20ceo.jpg',
    focus: 'Especialista em Arquitetura de infraestrutura digital, entregando otimizações diárias e resoluções de demandas de alta complexidade sistêmica'
  }
];

export const PHASES_DATA: PhaseInfo[] = [
  {
    id: 'fase1',
    number: '01',
    month: 'Mês 1',
    title: 'Estruturação',
    objective: 'Formulário com 4 perguntas chave + botão whatsapp, Configuração de campanhas e instalação e configuração do pixel e API de Conversões, Configuração do Google Analytics e Tag Manager.',
    highlights: [
      'Formulário + Botão de whatsapp',
      'Configuração de campanhas de captação',
      'Configuração do pixel e API de conversões',
      'Configuração do Analytics e Tag manager'
    ],
    kpis: 'Página no ar, caminhos configurados, campanhas ativas.'
  },
  {
    id: 'fase2',
    number: '02',
    month: 'Meses 2 e 3',
    title: 'Tração',
    objective: 'Comparação de canais e criativos para identificar quais geram mais leads qualificados por real investido.',
    highlights: [
      'Monitoramento contínuo de conversões imobiliárias',
      'Comparação de performance entre públicos',
      'Otimização de custo por lead qualificado'
    ],
    kpis: 'Dados consolidados por canal e otimização de custo.'
  },
  {
    id: 'fase3',
    number: '03',
    month: 'Meses 4 e 5',
    title: 'Escala',
    objective: 'Verba concentrada nos criativos e canais de maior conversão de vendas de alto padrão.',
    highlights: [
      'Concentração de verba na rota mais eficiente',
      'Campanhas avançadas de remarketing',
      'Escala de leads qualificados com previsibilidade'
    ],
    kpis: 'Crescimento constante de leads e ROI maximizado.'
  }
];

export const DELIVERABLES_LIST: DeliverableItem[] = [
  {
    id: 'd1',
    title: 'Pesquisa do Comprador Ideal de Alto Padrão',
    category: 'Estratégia',
    detail: 'Mapeamento de perfis, desejos, critérios e posicionamento.',
    timeline: 'Semana 1'
  },
  {
    id: 'd2',
    title: 'Briefing e Roteiros para construção de anúncios',
    category: 'Estratégia',
    detail: 'Roteiros estruturados para captação de clientes.',
    timeline: 'Semana 1-2'
  },
  {
    id: 'd3',
    title: 'Construção de formulários e páginas de pré-qualificação de leads',
    category: 'Tracking & Tech',
    detail: 'Página rápida e formulário com perguntas-chave para alta conversão.',
    timeline: 'Semana 2'
  },
  {
    id: 'd4',
    title: 'Campanhas de Tráfego Pago (Meta & Google para Imóveis)',
    category: 'Mídia & Anúncios',
    detail: 'Configuração de anúncios para captação de clientes qualificados.',
    timeline: 'Meses 2 e 3'
  },
  {
    id: 'd5',
    title: 'Rastreamento Avançado (Meta CAPI + GA4)',
    category: 'Tracking & Tech',
    detail: 'Setup server-side para atribuição sem perda de dados.',
    timeline: 'Semana 2-3'
  },
  {
    id: 'd6',
    title: 'Desenvolvimento de automatizações para facilitar leitura de dados e a jornada do time comercial',
    category: 'Conversão',
    detail: 'Fluxos automatizados e integração para agilizar o trabalho dos corretores.',
    timeline: 'Semana 3'
  },
  {
    id: 'd8',
    title: 'Dashboard de Acompanhamento ao Vivo',
    category: 'Dashboard ao Vivo',
    detail: 'Acompanhamento simultâneo de campanhas, acessos e resultados.',
    timeline: 'Contínuo'
  },
  {
    id: 'd9',
    title: 'Acompanhamento Comercial com Time de Corretores',
    category: 'Estratégia',
    detail: 'Alinhamento de follow-up, qualificação e conversão de leads.',
    timeline: 'Contínuo'
  },
  {
    id: 'd10',
    title: 'Reuniões semanais de Sprint e Dashboard Comercial',
    category: 'Estratégia',
    detail: 'Acompanhamento de leads e alinhamento estratégico.',
    timeline: 'Recorrente'
  }
];

export const PRICING_OPTIONS: PricingOption[] = [
  {
    type: 'monthly',
    label: 'Plano Recorrente',
    amount: 'R$ 4.500',
    period: '/mês',
    description: 'Cobrança mensal previsível sobre o contrato de 6 meses.',
    benefits: [
      'Acompanhamento completo e contínuo',
      'Todas as frentes inclusas (Tráfego, Dashboard, Estrutura)',
      'Sprints semanais e canal direto com Renato & equipe'
    ],
    isHighlighted: false
  },
  {
    type: 'onetime',
    label: 'Pagamento À Vista',
    amount: 'R$ 25.000',
    period: 'total',
    description: 'Pagamento único e integral referente á prestação de serviço durante os 6 meses.',
    benefits: [],
    isHighlighted: true
  }
];
