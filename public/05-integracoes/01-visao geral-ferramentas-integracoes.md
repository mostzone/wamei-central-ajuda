# Visão Geral - Ferramentas Adicionais e Integrações

Esta seção agrupa um conjunto de ferramentas e funcionalidades que expandem as capacidades do Wamei Chat para além do atendimento convencional por texto. Aqui você encontrará canais de comunicação alternativos como a telefonia e recursos para desenvolvedores, como a API, que permite conectar o Wamei Chat a outros sistemas.

O objetivo destas ferramentas adicionais é proporcionar uma experiência de comunicação mais completa e integrada, atendendo às diversas formas de contato que seus clientes podem preferir utilizar.

## Descrição Geral

As ferramentas e integrações disponíveis permitem:

- **Expansão dos canais de comunicação:** Adicionar telefonia e outros métodos de contato.
- **Integração com sistemas externos:** Conectar o Wamei Chat com CRMs, ERPs e outras plataformas.
- **Automação avançada:** Criar fluxos de trabalho que cruzam diferentes sistemas.
- **Notificações proativas:** Manter atendentes informados sobre eventos importantes.

## Ferramentas e Integrações Detalhadas

### Telefonia (Wavoip)

A integração Wavoip permite visualizar o histórico de todas as chamadas de voz feitas ou recebidas através do seu número, conectando uma conta Wavoip à plataforma Wamei Chat.

**Funcionalidades:**

- **Recebimento de chamadas:** Atender ligações do WhatsApp diretamente na plataforma.
- **Realização de chamadas:** Ligar para clientes através do WhatsApp.
- **Histórico de chamadas:** Visualizar registro de todas as ligações.
- **Registro no ticket:** As chamadas são registradas no atendimento do cliente.
- **Gravação de chamadas:** Possibilidade de gravação para qualidade e compliance.

**Benefícios:**

- Comunicação por voz sem sair da plataforma de atendimento.
- Histórico unificado de todas as interações com o cliente.
- Melhor experiência para clientes que preferem falar.
- Integração com o fluxo de atendimento existente.

**Configuração:**

A configuração é feita através da conexão de credenciais Wavoip nas configurações do canal Baileys dentro do Wamei Chat. Para detalhes completos, consulte a documentação de [Ligaões no Wamei Chat (Telefonia e Voz)](./ligacoes-no-wamei-chat-telefonia-e-voz).

### Notificações do Aplicativo (Web Push)

Este recurso permite ativar e gerenciar as notificações push para o aplicativo Wamei Chat. As notificações enviam alertas diretamente para o navegador ou dispositivo do atendente, informando sobre novas mensagens e outras atividades.

**Funcionalidades:**

- **Notificações de novas mensagens:** Alertas imediatos sobre mensagens recebidas.
- **Notificações de transferência:** Alertas quando um atendimento é transferido.
- **Notificações de menções:** Alertas quando mencionado em notas ou chat interno.
- **Notificações de tarefas:** Alertas sobre tarefas atribuídas.
- **Configuração de som:** Possibilidade de personalizar alertas sonoros.

**Benefícios:**

- Atendimento mais rápido com alertas em tempo real.
- Possibilidade de atender remotamente com notificações no celular.
- Redução de tempo de resposta.
- Melhoria na experiência do cliente.

**Configuração:**

A configuração envolve três etapas:
1. Ativar as notificações no aplicativo PWA.
2. Habilitar o Web Push no canal desejado.
3. Permitir as notificações no dispositivo.

Para detalhes completos, consulte a documentação de [Notificações Aplicativo (Web Push)](./notificacoes-aplicativo-web-push).

### API (Nível de Tenant)

A API do Wamei Chat permite integrar a plataforma a sistemas externos, possibilitando ações como enviar mensagens ou buscar informações de atendimentos de forma programática.

**Funcionalidades:**

- **Envio de mensagens:** Enviar mensagens de texto, arquivos, imagens e mais.
- **Gerenciamento de contatos:** Criar, atualizar e consultar contatos.
- **Gerenciamento de tickets:** Abrir, atualizar e fechar tickets.
- **Automação:** Criar fluxos automatizados baseados em eventos.
- **Relatórios:** Extrair dados para análise externa.

**Benefícios:**

- Integração com CRMs e ERPs existentes.
- Automação de processos de negócio.
- Criação de aplicações customizadas.
- Extensão das funcionalidades da plataforma.

**Documentação:**

Para detalhes sobre endpoints, autenticação e exemplos de uso, consulte a documentação completa de [API (Admin)](./api-admin) e [API Wamei Chat (Postman)](./api-wamei-chat-postman).

## Conteúdo Relacionado

Para aprofundamento nas funcionalidades descritas, consulte:

- [Ligaões no Wamei Chat (Telefonia e Voz)](./ligacoes-no-wamei-chat-telefonia-e-voz)
- [Notificações Aplicativo (Web Push)](./notificacoes-aplicativo-web-push)
- [API (Admin)](./api-admin)
- [API Wamei Chat (Postman)](./api-wamei-chat-postman)

## Quando Usar Cada Ferramenta

### Telefonia (Wavoip)

**Use quando:**
- Seus clientes preferem comunicação por voz.
- Existem casos de uso que são mais eficientes por telefone.
- Você precisa de um canal adicional de comunicação.
- O contexto do atendimento requer explicação verbal.

### Notificações Web Push

**Use quando:**
- Atendentes trabalham remotamente ou em múltiplos dispositivos.
- É necessário resposta rápida a novas mensagens.
- Você quer reduzir o tempo de primeira resposta.
- Atendentes não estão sempre com o sistema aberto.

### API

**Use quando:**
- Precisa integrar com sistemas existentes (CRM, ERP).
- Deseja criar automações complexas.
- Quer extrair dados para análise externa.
- Precisa criar funcionalidades customizadas.

## Próximos Passos

Para implementar estas ferramentas em sua operação:

1. **Avalie necessidades:** Identifique quais ferramentas agregam mais valor à sua operação.

2. **Planeje implementação:** Crie um plano de adoção gradual.

3. **Capacite a equipe:** Treine atendentes e administradores nas novas funcionalidades.

4. **Teste em ambiente controlado:** Valide o funcionamento antes de escalar.

5. **Monitore resultados:** Acompanhe métricas de adoção e melhoria.
