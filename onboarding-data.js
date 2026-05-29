/* ONESecure × Alta Defensivos — Onboarding
 * Conteúdo estruturado de todas as seções (reconstruído da apresentação).
 * Voz institucional ONESecure, PT-BR. */
window.ONB = {
  client: "Alta Defensivos",

  /* Navegação lateral. id = âncora da seção. */
  nav: [
    { id: "cover",          n: "",   label: "Capa",                   sub: "Abertura" },
    { id: "boas-vindas",    n: "",   label: "Boas-vindas & Agenda",   sub: "Início da jornada" },
    { id: "time",           n: "01", label: "Time dedicado",          sub: "Quem conduz a jornada" },
    { id: "escopo",         n: "02", label: "Escopo contratado",      sub: "Módulos e capacidades" },
    { id: "criterios",      n: "03", label: "Critérios & First Value",sub: "Como medimos o sucesso" },
    { id: "jornada",        n: "04", label: "Jornada de ativação",    sub: "Fases e marcos" },
    { id: "responsabilidades", n: "05", label: "Responsabilidades",   sub: "Conduzida em conjunto" },
    { id: "acompanhamento", n: "06", label: "Acompanhamento",         sub: "Governança e cadência" },
    { id: "proximos",       n: "07", label: "Próximos passos",        sub: "Confirmação e encerramento" }
  ],

  agenda: [
    "Time e governança da jornada",
    "Escopo contratado e limites",
    "Plano de ativação e dependências",
    "First Value e acompanhamento contínuo"
  ],

  /* SEÇÃO 01 — Time */
  time: {
    lead: "Além da tecnologia contratada, a Alta Defensivos contará com acompanhamento consultivo e especializado para acelerar a ativação, interpretar os primeiros resultados e estruturar os próximos ciclos de evolução em segurança.",
    leadStrong: "tecnologia contratada",
    people: [
      {
        initials: "SB", name: "Stephanie Borges", role: "Customer Success Manager",
        primary: true,
        desc: "Responsável pela condução da jornada e pela coordenação dos marcos necessários para transformar a ativação em valor percebido pela Alta Defensivos.",
        items: [
          "Coordenar o onboarding e a transição para o kick-off técnico",
          "Organizar agendas, marcos, responsáveis e próximos passos",
          "Acompanhar o objetivo de First Value e a experiência do cliente",
          "Conduzir a governança da comunicação ao longo da jornada",
          "Articular o acompanhamento semanal dos dois primeiros meses",
          "Coordenar a reunião mensal de resultados após os primeiros 30 dias"
        ],
        foot: "Contato principal da jornada ONESecure"
      },
      {
        initials: "GS", name: "Gustavo Silva", role: "Security Advisor",
        desc: "Especialista responsável por apoiar a interpretação estratégica dos resultados e a direção dos próximos ciclos de evolução em segurança.",
        items: [
          "Orientar estrategicamente a jornada de cibersegurança",
          "Apoiar a interpretação dos resultados apresentados",
          "Contribuir para a leitura de riscos prioritários",
          "Apoiar a definição dos próximos ciclos de evolução",
          "Participar das reuniões de marcos quando aplicável",
          "Apoiar recomendações relacionadas à maturidade"
        ],
        foot: "Orientação estratégica e interpretação de resultados"
      },
      {
        initials: "ET", name: "Elen Tescaro", role: "Cyber Security Analyst",
        desc: "Especialista responsável por apoiar as validações técnicas de ativação e contribuir para a análise inicial da visibilidade disponibilizada.",
        items: [
          "Apoiar as validações técnicas aplicáveis à implantação",
          "Acompanhar ativações, sensores e integrações previstas no escopo",
          "Apoiar a validação da comunicação dos sensores com a ONESecure",
          "Contribuir para a validação inicial de visibilidade na plataforma",
          "Apoiar a análise dos primeiros dados e indicadores disponibilizados",
          "Registrar evidências técnicas e pendências para avanço da jornada"
        ],
        foot: "Apoio técnico à ativação e visibilidade inicial"
      },
      {
        initials: "SP", name: "Equipe de Suporte", role: "Atendimento Técnico",
        desc: "Canal formal para atendimento de dúvidas operacionais e solicitações ao longo da jornada.",
        items: [
          "Receber dúvidas operacionais referentes à plataforma",
          "Apoiar demandas de acesso e navegação",
          "Registrar e acompanhar chamados (tickets)",
          "Direcionar demandas que exigem atuação especializada",
          "Manter o atendimento pelos canais formais definidos"
        ],
        foot: "Atendimento conforme SLA contratual"
      }
    ],
    flow: ["Onboarding", "Kick-off técnico", "Ativação", "First Value", "Acompanhamento contínuo"]
  },

  /* SEÇÃO 02 — Escopo */
  escopo: {
    lead: "Confirmação dos módulos e capacidades contratadas, seguida de clareza sobre abrangência e limites nesta fase.",
    modules: [
      { title: "Avaliação de Riscos", tags: ["Risk PRO", "Segurança"], items: [
        "Ativos, vulnerabilidades e CVEs",
        "Priorização inicial de riscos",
        "CyberScore — métrica do módulo",
        "TPRM — incluído no Risk PRO, conforme dados disponíveis"
      ]},
      { title: "Operação", tags: ["Módulo único", "Segurança"], items: [
        "Agente / Endpoint",
        "Retenção de Logs ONESecure — até 60/90 dias",
        "Monitoramento contínuo pela plataforma",
        "150 playbooks disponíveis"
      ]},
      { title: "Capacidade Transversal", tags: [], items: [
        "Tokens IA Pro — 5.000 tokens"
      ], note: "Aplicáveis aos módulos contratados, conforme dados disponíveis." }
    ],
    incluso: [
      "Módulos efetivamente contratados",
      "Ativações e integrações aplicáveis ao escopo aprovado",
      "Sensores previstos no escopo contratado, quando aplicável",
      "Acompanhamento consultivo durante toda a jornada"
    ],
    excluso: [
      "Módulos não contratados",
      "Integrações não aprovadas nesta proposta",
      "Ativos ou ambientes fora do escopo acordado",
      "Serviços adicionais não contratados"
    ]
  },

  /* SEÇÃO 03 — Critérios */
  criterios: {
    lead: "Os critérios abaixo serão validados em conjunto para que a primeira evidência de valor seja apresentada no menor prazo possível.",
    leadStrong: "primeira evidência de valor",
    criteria: [
      "Responsáveis e escopo formalmente alinhados",
      "Dependências iniciais mapeadas e priorizadas",
      "Integrações ou ativações prioritárias encaminhadas",
      "Comunicação dos sensores com a ONESecure validada, quando aplicável ao escopo",
      "Credenciais de acesso liberadas após validação da comunicação dos sensores, quando aplicável",
      "Acesso e visibilidade inicial validados",
      "Primeira evidência de valor apresentada ao cliente",
      "Agenda de acompanhamento contínuo estabelecida"
    ],
    groups: [
      { title: "Avaliação de Riscos — Risk PRO", items: [
        "Ativos da primeira onda visíveis no Risk PRO",
        "Vulnerabilidades e CVEs disponíveis para análise inicial",
        "Priorização inicial apresentada",
        "CyberScore ou indicador equivalente disponibilizado"
      ]},
      { title: "Operação", items: [
        "Endpoints ou sensores da primeira onda comunicando com a plataforma",
        "Logs priorizados disponíveis para consulta, quando aplicável",
        "Monitoramento contínuo habilitado conforme escopo",
        "Responsáveis e próximos passos formalizados"
      ]}
    ],
    inputs: [
      { label: "O que a Alta Defensivos considera sucesso nesta primeira etapa?", key: "crit-sucesso" },
      { label: "Existe alguma prioridade crítica que deve orientar o First Value?", key: "crit-prioridade" }
    ],
    note: "Os critérios finais serão confirmados em conjunto, conforme escopo, fontes aprovadas e disponibilidade de dados."
  },

  /* SEÇÃO 04 — Jornada */
  jornada: {
    lead: "Uma condução estruturada para acelerar o First Value e garantir continuidade na evolução da segurança.",
    phases: [
      { tab: "Alinhamento", when: "Semana 1", title: "Fase 1 — Alinhamento", sub: "Reunião de hoje · definir os marcos da jornada", tone: "blue",
        steps: [
          "Boas-vindas e apresentação da reunião",
          "Registro dos responsáveis da Alta Defensivos",
          "Confirmação dos módulos e limites de escopo",
          "Definição das integrações prioritárias do primeiro ciclo",
          "Validação dos critérios de sucesso",
          "Registro das prioridades para o First Value",
          "Agendamento da cadência futura"
        ],
        out: "Responsáveis definidos, escopo confirmado, integrações prioritárias, critérios validados e agenda registrada." },
      { tab: "Preparação", when: "Semana 1–2", title: "Fase 2 — Preparação Técnica", sub: "Estruturar a execução do kick-off", tone: "blue",
        steps: [
          "Realização do Kick-off técnico",
          "Revisão técnica das integrações prioritárias a detalhar no onboarding",
          "Compartilhamento da documentação técnica aplicável",
          "Validação dos pré-requisitos necessários para ativação",
          "Planejamento operacional do primeiro ciclo de implantação",
          "Confirmação das liberações internas necessárias"
        ],
        out: "O Kick-off técnico inicia a execução da jornada acordada no onboarding, sem reduzir os limites do escopo aprovado." },
      { tab: "Ativação", when: "Conforme escopo", title: "Fase 3 — Ativação", sub: "Conectar, habilitar e validar", tone: "amber",
        steps: [
          "Instalação e/ou conexão dos sensores aplicáveis",
          "Habilitação das integrações prioritárias",
          "Início da coleta ou observação técnica",
          "Validação da comunicação dos sensores com a ONESecure",
          "Liberação das credenciais de acesso, após validação",
          "Utilização inicial de visibilidade na plataforma"
        ],
        out: "As credenciais de acesso à plataforma serão liberadas após validarmos a comunicação dos sensores com a ONESecure, quando aplicável ao escopo contratado." },
      { tab: "First Value", when: "Até 15 dias", title: "Fase 4 — First Value", sub: "Primeira evidência de valor", tone: "mint",
        steps: [
          "Primeira visualização dos dados disponíveis",
          "Análise inicial de riscos identificados ou eventos, conforme módulos contratados",
          "Priorização dos primeiros insights",
          "Apresentação da primeira evidência de valor",
          "Registro dos próximos desdobramentos"
        ],
        out: "Objetivo do Time de Value: apresentar as primeiras evidências em menos de 15 dias, considerando a evolução dos pré-requisitos atendidos." },
      { tab: "Evolução", when: "Contínuo", title: "Fase 5 — Evolução Contínua", sub: "Sustentar a maturidade", tone: "mint",
        steps: [
          "Acompanhamento semanal durante os 2 primeiros meses",
          "Tratamento de pendências e priorização de avanços",
          "Acompanhamento de objetivos e evolução visual",
          "Reunião mensal de resultados após os primeiros 30 dias",
          "Cronograma de evolução conforme dados disponíveis e maturidade conquistada",
          "Definição de novos ciclos conforme a próxima evolução"
        ],
        out: "Evolução conduzida com direção: cada ciclo sustenta a maturidade e amplia o valor entregue." }
    ]
  },

  /* SEÇÃO 05 — Responsabilidades */
  responsabilidades: {
    lead: "O sucesso da ativação depende de colaboração entre ONESecure e cliente. Cada parte tem papéis claros nesta jornada.",
    onesecure: [
      "Conduzir a jornada de onboarding e o kick-off técnico",
      "Orientar sobre dependências aplicáveis ao escopo",
      "Apoiar tecnicamente as integrações previstas",
      "Apoiar a instalação e/ou conexão dos sensores aplicáveis",
      "Validar a comunicação dos sensores, quando aplicável",
      "Liberar credenciais de acesso após a validação necessária",
      "Validar a visibilidade inicial disponibilizada",
      "Apresentar a primeira evidência de valor",
      "Manter a cadência de acompanhamento contínuo"
    ],
    cliente: [
      "Indicar pontos focais e responsáveis internos",
      "Validar o escopo confirmado",
      "Aprovar integrações e acessos necessários",
      "Viabilizar acessos e liberações aplicáveis",
      "Garantir as liberações internas necessárias",
      "Compartilhar informações por canal seguro",
      "Respeitar as agendas previstas",
      "Apoiar a validação da cobertura inicial, quando aplicável"
    ],
    note: "Agilidade na colaboração acelera a geração de valor. Cada dependência resolvida no prazo nos aproxima do objetivo de apresentar a entrega em menos de 15 dias.",
    noteStrong: "geração de valor",
    table: [
      ["Confirmação dos pontos focais", "Alta Defensivos", "Garante fluidez na comunicação"],
      ["Validação dos módulos e escopo", "Alta Defensivos + ONESecure", "Evita retrabalho e ativa o onboarding"],
      ["Aprovação das integrações e sensores aplicáveis", "Alta Defensivos", "Habilita a coleta prevista"],
      ["Liberações internas necessárias", "Alta Defensivos", "Permite executar o plano"],
      ["Comunicação dos sensores validada", "Alta Defensivos + ONESecure", "Viabiliza a liberação segura das credenciais"],
      ["Validação inicial de visibilidade", "Alta Defensivos + ONESecure", "Confirma o primeiro entregável de valor"]
    ],
    foots: [
      "As credenciais de acesso à plataforma serão liberadas após a validação da comunicação dos sensores com a ONESecure, quando aplicável ao escopo contratado.",
      "Detalhes técnicos de instalação e integração serão tratados no documento operacional, compartilhado com os módulos e integrações previstos, quando aplicável."
    ]
  },

  /* SEÇÃO 06 — Acompanhamento */
  acompanhamento: {
    lead: "A segurança evolui continuamente — e o acompanhamento também. Um modelo estruturado para os primeiros meses e além.",
    cadence: [
      { when: "Início", title: "Atuação Orientada", desc: "Agenda estruturada para validar dependências, pessoas, integrações e validações nas reuniões aplicáveis." },
      { when: "Primeiros 2 meses", title: "Acompanhamento Semanal", desc: "Reunião semanal para apoiar a ativação, acompanhar pendências, planejar avanços e manter o objetivo de valor visível ao cliente.", highlight: true },
      { when: "Após os primeiros 30 dias", title: "Reunião Mensal de Resultados", desc: "Cadência de análise mensal conforme módulos contratados, fontes e prazos disponíveis." }
    ],
    pillars: [
      { title: "Comunicação", desc: "Canal oficial conduz a jornada, com foco e alinhamento ao longo de todo o período." },
      { title: "Resultados", desc: "Acompanhamento das primeiras evidências, insights e evolução identificada conforme os módulos contratados." },
      { title: "Evolução", desc: "Acompanhamento dos próximos desdobramentos e ciclos definidos durante a evolução da jornada." }
    ],
    fields: [
      ["Canal principal", "Canal formal definido", true],
      ["Customer Success Manager", "Stephanie Borges", false],
      ["Security Advisor", "Gustavo Silva", false],
      ["Cyber Security Analyst", "Elen Tescaro", false],
      ["Ponto focal Alta Defensivos", "", true],
      ["Primeira reunião", "", true],
      ["Cadência inicial", "Semanal durante os 2 primeiros meses", false],
      ["Revisão de resultados", "Mensal, após os primeiros 30 dias", false]
    ]
  },

  /* SEÇÃO 07 — Próximos passos */
  proximos: {
    lead: "Com as definições realizadas nesta reunião, a jornada segue para a execução técnica e ativação dos componentes orientados para o First Value.",
    done: [
      "Responsáveis da Alta Defensivos registrados",
      "Módulos e escopo da jornada confirmados",
      "Integrações prioritárias do primeiro ciclo definidas",
      "Critérios de sucesso da ativação acordados",
      "Prioridades para a primeira evidência de valor registradas"
    ],
    steps: [
      { t: "Agendar o kick-off técnico", d: "Revisar a jornada acordada com os detalhes operacionais. O time organizará a agenda e os próximos passos cabíveis." },
      { t: "Compartilhar a documentação técnica aplicável", d: "Conforme as versões aplicáveis, a ONESecure compartilhará os componentes, sensores e integrações necessários." },
      { t: "Disponibilizar ou validar os pré-requisitos técnicos", d: "Conexões aplicáveis, aprovações e acessos necessários para uma ativação contínua." },
      { t: "Iniciar a ativação dos componentes prioritários", d: "Conforme cronograma técnico e integrações definidas para a primeira onda, quando aplicável." },
      { t: "Validar a comunicação dos sensores com a ONESecure", d: "Confirmar a operação da telemetria para então liberar as credenciais, quando aplicável ao escopo contratado." },
      { t: "Liberar as credenciais de acesso à plataforma", d: "A liberação ocorre após a validação dos sensores com a ONESecure, em conformidade com o escopo." },
      { t: "Validar a visibilidade inicial e apresentar o First Value", d: "O objetivo do time é apresentar a primeira evidência de valor em menos de 15 dias." }
    ],
    agenda: {
      title: "Próxima agenda — Kick-off técnico",
      checkbox: "O kick-off técnico será conduzido com responsáveis, marcos, prioridades e critérios de execução definidos no onboarding.",
      fields: [
        ["Horário sugerido", "Kick-off Técnico"],
        ["Tipo", "Execução técnica · onboarding"],
        ["Agenda", "Detalhar dados após o onboarding"],
        ["Participantes", "Stephanie Borges, Gustavo Silva, Elen Tescaro + responsáveis técnicos da Alta Defensivos"]
      ],
      registrar: [
        "Objetivo da próxima reunião",
        "Próximo envio esperado pelo cliente"
      ]
    },
    closing: "Alinhamento concluído. Próxima etapa: ativação orientada ao First Value."
  }
};
