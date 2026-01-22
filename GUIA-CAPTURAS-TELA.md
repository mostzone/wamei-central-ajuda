# 📸 Guia de Capturas de Tela - Central de Ajuda Wamei

Este documento lista todas as capturas de tela necessárias para a documentação da Central de Ajuda.

---

## 📂 Estrutura de Pastas para Imagens

```
public/
└── images/
    ├── 01-introducao/
    ├── 02-configuracao/
    ├── 03-atendimento/
    ├── 04-automacao/
    ├── 05-integracoes/
    └── 06-api/
```

## 📋 Nomenclatura Padrão

**Formato:** `[seção]-[funcionalidade]-[descrição].png`

**Exemplos:**
- `config-canais-lista-whatsapp.png`
- `atendimento-caixa-entrada-conversa-aberta.png`
- `automacao-chatbot-editor-fluxo.png`

---

## 1️⃣ INTRODUÇÃO (01-introducao/)

### 1.1 Primeiro Acesso
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 1 | `intro-login-tela.png` | Tela de login | Página inicial de login do sistema |
| 2 | `intro-login-preenchido.png` | Login com dados | Campos preenchidos antes de entrar |
| 3 | `intro-dashboard-inicial.png` | Dashboard vazio | Primeira visualização após login |

### 1.2 Onboarding
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 4 | `intro-onboarding-passo1.png` | Wizard de boas-vindas | Primeira tela do onboarding |
| 5 | `intro-onboarding-passo2.png` | Configuração inicial | Segunda etapa do wizard |
| 6 | `intro-onboarding-conclusao.png` | Tela de conclusão | Finalização do onboarding |

### 1.3 Conectando Primeiro Canal
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 7 | `intro-canal-menu-canais.png` | Menu de Canais | Acesso ao menu de canais na sidebar |
| 8 | `intro-canal-adicionar.png` | Botão adicionar canal | Tela com opção de adicionar canal |
| 9 | `intro-canal-tipos.png` | Tipos de canal disponíveis | Lista de canais: WhatsApp, Instagram, etc. |
| 10 | `intro-canal-qrcode.png` | QR Code do WhatsApp | Tela com QR Code para conexão |
| 11 | `intro-canal-conectado.png` | Canal conectado | Status "Conectado" com check verde |

---

## 2️⃣ CONFIGURAÇÃO ADMIN (02-configuracao/)

### 2.1 Visão Geral do Painel Admin
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 12 | `config-painel-dashboard.png` | Dashboard principal | Visão geral do painel admin |
| 13 | `config-painel-menu-lateral.png` | Menu lateral | Sidebar com todas as opções |

### 2.2 Canais de Comunicação
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 14 | `config-canais-lista.png` | Lista de canais | Todos os canais conectados |
| 15 | `config-canais-whatsapp-detalhe.png` | Detalhes do WhatsApp | Configurações do canal WhatsApp |
| 16 | `config-canais-instagram-detalhe.png` | Detalhes do Instagram | Configurações do canal Instagram |
| 17 | `config-canais-telegram-detalhe.png` | Detalhes do Telegram | Configurações do canal Telegram |
| 18 | `config-canais-status.png` | Status dos canais | Indicadores de conexão |

### 2.3 Gestão de Atendentes
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 19 | `config-atendentes-lista.png` | Lista de atendentes | Todos os usuários cadastrados |
| 20 | `config-atendentes-adicionar.png` | Formulário novo atendente | Modal de cadastro |
| 21 | `config-atendentes-perfis.png` | Tipos de perfil | Atendente, Supervisor, Admin |
| 22 | `config-atendentes-equipes.png` | Gestão de equipes | Lista de equipes criadas |
| 23 | `config-atendentes-equipe-detalhe.png` | Detalhe da equipe | Membros de uma equipe |
| 24 | `config-atendentes-filas.png` | Filas de atendimento | Lista de filas configuradas |
| 25 | `config-atendentes-fila-config.png` | Configuração da fila | Detalhes de uma fila |

### 2.4 Horários de Atendimento
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 26 | `config-horarios-lista.png` | Lista de horários | Horários configurados |
| 27 | `config-horarios-editar.png` | Edição de horário | Formulário de horário |
| 28 | `config-horarios-dias-semana.png` | Seleção de dias | Checkboxes dos dias |
| 29 | `config-horarios-feriados.png` | Feriados/exceções | Datas especiais |

### 2.5 Configurações Gerais
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 30 | `config-gerais-empresa.png` | Dados da empresa | Nome, logo, cores |
| 31 | `config-gerais-mensagens.png` | Mensagens automáticas | Boas-vindas, ausência |
| 32 | `config-gerais-integracao.png` | Opções de integração | Webhooks, APIs |

---

## 3️⃣ FERRAMENTAS DE ATENDIMENTO (03-atendimento/)

### 3.1 Caixa de Entrada
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 33 | `atend-caixa-visao-geral.png` | Caixa de entrada | Lista de conversas |
| 34 | `atend-caixa-conversa-aberta.png` | Conversa aberta | Chat com cliente |
| 35 | `atend-caixa-barra-ferramentas.png` | Barra de ferramentas | Ícones de ação |
| 36 | `atend-caixa-anexo.png` | Envio de anexo | Modal de anexo |
| 37 | `atend-caixa-audio.png` | Gravação de áudio | Botão de áudio |
| 38 | `atend-caixa-emojis.png` | Seletor de emojis | Painel de emojis |
| 39 | `atend-caixa-transferir.png` | Transferir conversa | Modal de transferência |
| 40 | `atend-caixa-finalizar.png` | Finalizar atendimento | Modal de encerramento |

### 3.2 Painel de Controle
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 41 | `atend-painel-visao-geral.png` | Painel de supervisão | Lista de todos os atendimentos |
| 42 | `atend-painel-filtros.png` | Filtros do painel | Opções de filtro |
| 43 | `atend-painel-metricas.png` | Métricas em tempo real | Cards com números |

### 3.3 Organização Interna
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 44 | `atend-chat-interno-lista.png` | Chat interno | Lista de conversas da equipe |
| 45 | `atend-chat-interno-conversa.png` | Conversa interna | Chat entre atendentes |
| 46 | `atend-tarefas-lista.png` | Lista de tarefas | Tarefas pendentes |
| 47 | `atend-tarefas-criar.png` | Criar tarefa | Formulário de tarefa |
| 48 | `atend-galeria.png` | Galeria de arquivos | Arquivos compartilhados |

### 3.4 Mensagens Rápidas e Etiquetas
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 49 | `atend-msg-rapidas-lista.png` | Mensagens rápidas | Lista de atalhos |
| 50 | `atend-msg-rapidas-usar.png` | Usando mensagem rápida | Autocomplete no chat |
| 51 | `atend-etiquetas-lista.png` | Lista de etiquetas | Etiquetas disponíveis |
| 52 | `atend-etiquetas-aplicar.png` | Aplicar etiqueta | Modal de etiquetas |
| 53 | `atend-notas-internas.png` | Notas internas | Adicionando nota |

### 3.5 Finalização e Qualidade
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 54 | `atend-finalizar-modal.png` | Modal de finalização | Opções de encerramento |
| 55 | `atend-protocolo.png` | Protocolo gerado | Número do protocolo |
| 56 | `atend-avaliacao-config.png` | Configurar avaliação | Formulário de avaliação |
| 57 | `atend-avaliacao-preview.png` | Preview da avaliação | Como cliente vê |

### 3.6 Funil de Oportunidades
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 58 | `atend-funil-visao-geral.png` | Funil completo | Todas as etapas |
| 59 | `atend-funil-arrastar.png` | Arrastando card | Card sendo movido |
| 60 | `atend-funil-detalhe-card.png` | Detalhe do card | Informações do lead |
| 61 | `atend-funil-config-etapas.png` | Configurar etapas | Editar etapas do funil |

### 3.7 Kanban de Atendimento
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 62 | `atend-kanban-visao-geral.png` | Kanban completo | Todos os quadros |
| 63 | `atend-kanban-criar-quadro.png` | Criar quadro | Modal de novo quadro |
| 64 | `atend-kanban-colunas.png` | Colunas do quadro | Configuração de colunas |

### 3.8 Relatórios
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 65 | `atend-relatorios-dashboard.png` | Dashboard de relatórios | Visão geral |
| 66 | `atend-relatorios-atendimentos.png` | Relatório de atendimentos | Gráficos de volume |
| 67 | `atend-relatorios-atendentes.png` | Performance dos atendentes | Ranking/métricas |
| 68 | `atend-relatorios-satisfacao.png` | Satisfação do cliente | NPS/CSAT |
| 69 | `atend-relatorios-tempo.png` | Tempos de atendimento | TME, TMA, etc. |
| 70 | `atend-relatorios-exportar.png` | Exportar relatório | Opções de export |

---

## 4️⃣ AUTOMAÇÃO E CHATBOTS (04-automacao/)

### 4.1 Visão Geral de Automações
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 71 | `auto-lista-bots.png` | Lista de chatbots | Bots criados |
| 72 | `auto-bot-status.png` | Status dos bots | Ativo/Inativo |

### 4.2 Automações Nativas
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 73 | `auto-nativas-lista.png` | Lista de automações | Automações disponíveis |
| 74 | `auto-nativas-boas-vindas.png` | Mensagem de boas-vindas | Configuração |
| 75 | `auto-nativas-ausencia.png` | Mensagem de ausência | Configuração |
| 76 | `auto-nativas-fora-horario.png` | Fora do horário | Configuração |

### 4.3 Editor de Fluxo (Chatbot)
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 77 | `auto-fluxo-editor.png` | Editor visual | Canvas do fluxo |
| 78 | `auto-fluxo-nos.png` | Tipos de nós | Menu de nós disponíveis |
| 79 | `auto-fluxo-conexao.png` | Conectando nós | Setas de conexão |
| 80 | `auto-fluxo-config-no.png` | Configurar nó | Modal de configuração |
| 81 | `auto-fluxo-condicional.png` | Nó condicional | If/Else |
| 82 | `auto-fluxo-mensagem.png` | Nó de mensagem | Configurar texto |
| 83 | `auto-fluxo-menu.png` | Nó de menu | Opções de menu |
| 84 | `auto-fluxo-transferir.png` | Nó transferir | Encaminhar para humano |
| 85 | `auto-fluxo-testar.png` | Testar fluxo | Simulador |

### 4.4 Inteligência Artificial
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 86 | `auto-ia-config.png` | Configurar IA | Tela de configuração |
| 87 | `auto-ia-prompts.png` | Prompts personalizados | Editor de prompts |
| 88 | `auto-ia-base-conhecimento.png` | Base de conhecimento | Upload de docs |
| 89 | `auto-ia-integracoes.png` | Integrações IA | ChatGPT, Claude, etc. |

### 4.5 Campanhas e Comunicação Ativa
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 90 | `auto-campanhas-lista.png` | Lista de campanhas | Campanhas criadas |
| 91 | `auto-campanhas-criar.png` | Criar campanha | Formulário |
| 92 | `auto-campanhas-publico.png` | Selecionar público | Filtros de contatos |
| 93 | `auto-campanhas-template.png` | Template da mensagem | Editor de mensagem |
| 94 | `auto-campanhas-agendamento.png` | Agendar envio | Data/hora |
| 95 | `auto-campanhas-relatorio.png` | Relatório da campanha | Métricas de envio |
| 96 | `auto-disparo-massa.png` | Disparo em massa | Envio imediato |
| 97 | `auto-grupos-contatos.png` | Grupos de contatos | Segmentação |

---

## 5️⃣ INTEGRAÇÕES (05-integracoes/)

### 5.1 Visão Geral
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 98 | `integ-lista.png` | Lista de integrações | Integrações disponíveis |
| 99 | `integ-ativas.png` | Integrações ativas | Status das conexões |

### 5.2 Telefonia (Wavoip)
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 100 | `integ-telefonia-config.png` | Configurar telefonia | Dados da conta |
| 101 | `integ-telefonia-discador.png` | Discador | Tela de ligações |
| 102 | `integ-telefonia-historico.png` | Histórico de chamadas | Log de ligações |

### 5.3 Notificações Web Push
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 103 | `integ-push-config.png` | Configurar push | Habilitar notificações |
| 104 | `integ-push-preview.png` | Preview da notificação | Como aparece |

---

## 6️⃣ API (06-api/)

### 6.1 Documentação da API
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 105 | `api-documentacao.png` | Página da API | Documentação Swagger/OpenAPI |
| 106 | `api-endpoints.png` | Lista de endpoints | Rotas disponíveis |
| 107 | `api-autenticacao.png` | Autenticação | Tokens, API Keys |

### 6.2 Postman
| # | Nome do Arquivo | O que capturar | Descrição |
|---|-----------------|----------------|-----------|
| 108 | `api-postman-colecao.png` | Coleção Postman | Collection importada |
| 109 | `api-postman-exemplo.png` | Exemplo de request | Requisição funcionando |

---

## 📐 Especificações Técnicas

### Dimensões Recomendadas
- **Largura máxima:** 1200px
- **Formato:** PNG (preferível) ou WebP
- **Qualidade:** Alta (sem compressão excessiva)
- **Proporção:** 16:9 ou 4:3

### Dicas de Captura
1. **Ocultar dados sensíveis** - Borre nomes reais, telefones, e-mails
2. **Usar dados fictícios** - Crie contatos de teste estilo "Maria Silva", "João Santos"
3. **Capturar em modo claro** - Preferir tema light para legibilidade
4. **Mostrar contexto** - Incluir menu lateral quando relevante
5. **Destacar elementos** - Use retângulos ou setas quando necessário

### Ferramentas Sugeridas
- **Windows:** Snipping Tool (Win + Shift + S)
- **Chrome:** Extensão "Full Page Screen Capture"
- **Edição:** Figma, Canva, ou Photopea

---

## 📊 Resumo por Categoria

| Categoria | Quantidade de Imagens |
|-----------|----------------------|
| Introdução | 11 |
| Configuração Admin | 21 |
| Ferramentas de Atendimento | 38 |
| Automação e Chatbots | 27 |
| Integrações | 7 |
| API | 5 |
| **TOTAL** | **109 imagens** |

---

## ✅ Checklist de Progresso

Marque com [x] conforme for capturando:

### Introdução
- [ ] Tela de login
- [ ] Onboarding
- [ ] Conectar canal

### Configuração
- [ ] Dashboard admin
- [ ] Canais
- [ ] Atendentes
- [ ] Horários
- [ ] Config gerais

### Atendimento
- [ ] Caixa de entrada
- [ ] Painel controle
- [ ] Chat interno
- [ ] Mensagens rápidas
- [ ] Etiquetas
- [ ] Funil
- [ ] Kanban
- [ ] Relatórios

### Automação
- [ ] Lista de bots
- [ ] Editor de fluxo
- [ ] IA
- [ ] Campanhas

### Integrações
- [ ] Telefonia
- [ ] Push

### API
- [ ] Documentação
- [ ] Postman

---

*Documento gerado em 03/01/2026 para a Central de Ajuda Wamei*
