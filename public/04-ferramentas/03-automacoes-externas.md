# Automações com Ferramentas Externas

Esta seção aborda as automações que podem ser configuradas utilizando ferramentas externas integradas ao Wamei Chat. Estas ferramentas oferecem recursos mais avançados e flexibilidade para casos de uso complexos que vão além das automações nativas da plataforma.

## Typebot: Como Conectar

O Typebot é uma plataforma de construção de chatbots que oferece uma interface visual avançada com recursos interativos sofisticados. A integração do Typebot com o Wamei Chat permite criar experiências de conversação ricas e personalizadas.

### O que é o Typebot?

O Typebot é uma ferramenta open-source que permite construir chatbots com:

- **Interface visual intuitiva:** Criação de fluxos por arrastar e soltar.
- **Componentes avançados:** Formulários, calendários, mapas, pagamentos e mais.
- **Integrações nativas:** Conexão com diversas ferramentas e serviços.
- **Personalização completa:** Controle total sobre a aparência e comportamento.
- **hospedagem própria:** Pode ser hospedado em seu próprio servidor.

### Benefícios da Integração

Conectar o Typebot ao Wamei Chat proporciona:

- **Recursos avançados:** Acessar funcionalidades não disponíveis nas automações nativas.
- **Experiência rica:** Criar interações com componentes visuais sofisticados.
- **Flexibilidade:** Personalizar cada aspecto do fluxo de conversação.
- **Escalabilidade:** Lidar com volumes maiores de interações complexas.

### Como Conectar o Typebot ao Wamei Chat

**Pré-requisitos:**

- Instalação do Typebot em seu servidor ou instância na nuvem.
-URL de acesso ao seu Typebot.
- Credenciais de API (se necessário).

**Passo a Passo:**

1. **Configurar Typebot:** Monte seu fluxo de chatbot no Typebot com todos os componentes desejados.

2. **Obter URL:** Certifique-se de ter a URL pública do seu Typebot para integração.

3. **Acessar Configurações:** No painel Admin do Wamei Chat, acesse a seção de Integrações.

4. **Configurar Typebot:**
   - Ative a integração com Typebot.
   - Insira a URL do seu Typebot.
   - Configure as opções de personalização.
   - Salve as configurações.

5. **Criar Gatilho:** Configure quando o chatbot será ativado (por exemplo, palavra-chave, horário, entrada em fila).

6. **Testar Integração:** Realize testes para verificar se o fluxo está funcionando corretamente.

### Exemplos de Uso

**Agendamento de Consultas:**

Crie um fluxo que permite ao cliente:
- Verificar disponibilidade de horários.
- Selecionar data e hora.
- Informar dados de contato.
- Confirmar agendamento.
- Receber confirmação por mensagem.

**Qualificação de Leads:**

Automatize a qualificação de leads com:
- Perguntas sobre interesse e orçamento.
- Coleta de informações de contato.
- Classificação automática baseada em respostas.
- Encaminhamento para atendente adequado.

**Pedidos e Vendas:**

Implemente um fluxo de vendas com:
- Exibição de catálogo de produtos.
- Seleção de itens e quantidades.
- Cálculo de valores e frete.
- Coleta de endereço de entrega.
- Processamento de pagamento.

## N8N: Automação de Workflows

O N8N é uma ferramenta de automação de workflows que permite criar integrações complexas entre diferentes sistemas. Com o N8N, você pode automatizar processos que envolvem múltiplas ferramentas e serviços.

### O que é o N8N?

O N8N é uma plataforma de automação de workflows que oferece:

- **Centenas de integrações:** Conexão com diversos serviços e APIs.
- **Lógica flexível:** Criação de workflows complexos com condições e loops.
- **hospedagem própria:** Total controle sobre seus dados.
- **Interface visual:** Construção de workflows por arrastar e soltar.
- **Código personalizado:** Possibilidade de adicionar scripts customizados.

### Casos de Uso Comuns

**Integração com CRM:**

- Sincronizar contatos entre o Wamei Chat e seu CRM.
- Atualizar informações automaticamente quando um ticket é fechado.
- Criar tarefas no CRM baseadas em eventos do atendimento.

**Automação de Marketing:**

- Adicionar contatos que iniciam conversa a listas de e-mail.
- Disparar campanhas baseadas em comportamento do cliente.
- Atualizar tags e segmentos conforme interações.

**Processos de Negócio:**

- Abrir chamados em sistemas de suporte externos.
- Notificar equipes via Slack ou Teams.
- Gerar relatórios e enviá-los automaticamente.

### Configuração da Integração

1. **Instale o N8N:** Configure uma instância do N8N em seu servidor.

2. **Crie Workflows:** Desenvolva os workflows de automação no N8N.

3. **Configure Webhooks:** No Wamei Chat, configure os webhooks para acionar os workflows.

4. **Teste os Fluxos:** Verifique se os workflows estão funcionando conforme esperado.

## Outras Integrações Disponíveis

Além do Typebot e N8N, o Wamei Chat pode se integrar com:

- **Zapier:** Para usuários que preferem uma solução de automação em nuvem.
- **Make (Integromat):** Plataforma de automação com interface visual.
- **Webhooks personalizados:** Para integração com qualquer sistema via HTTP.

## Melhores Práticas

Para utilizar ferramentas externas de automação:

1. **Avalie a necessidade:** Determine se as automações nativas são suficientes antes de usar ferramentas externas.

2. **Documente workflows:** Mantenha documentação dos workflows criados para facilitar manutenção.

3. **Monitore desempenho:** Acompanhe o tempo de resposta e taxa de sucesso das automações.

4. **Planeje a manutenção:** Estabeleça processos para atualizar e ajustar automações.

5. **Teste regularmente:** Verifique se as integrações continuam funcionando após atualizações.

6. **Gerencie custos:** Considere os custos de infraestrutura das ferramentas externas.
