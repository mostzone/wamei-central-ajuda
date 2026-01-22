# Campanhas e Comunicação Ativa

Esta seção da documentação foca nas ferramentas de comunicação ativa do Wamei Chat, usadas para iniciar conversas e enviar mensagens em massa para múltiplos contatos de forma proativa. O objetivo é comunicar novidades, enviar lembretes ou realizar campanhas de marketing e vendas, diferente do atendimento receptivo.

A comunicação proativa é uma estratégia poderosa para manter engajamento com a base de clientes, gerar vendas, e construir relacionamentos duradouros. Com as ferramentas do Wamei Chat, você pode implementar campanhas sofisticadas e mensurar resultados.

## Funcionalidades Principais

As funcionalidades são agrupadas em três áreas principais, cada uma com objetivos e aplicações específicas:

### Gestão de Campanhas

Aprenda a criar e gerenciar "Campanhas", que funcionam como listas de contatos segmentadas. A criação de uma campanha é o primeiro passo para organizar o público que receberá o disparo em massa.

**O que é uma Campanha:**

Uma campanha no Wamei Chat é um container que agrupa:
- Lista de contatos que receberão as mensagens.
- Scheduling de envio.
- Conteúdo da mensagem.
- Métricas de desempenho.

**Como Criar uma Campanha:**

1. **Definir Objetivo:** Estabeleça o propósito da campanha (venda, informação, lembrete, etc.).

2. **Segmentar Público:** Selecione os contatos que receberão a mensagem:
   - Por etiquetas.
   - Por fonte de aquisição.
   - Por data de cadastro.
   - Por engajamento anterior.
   - Por dados customizados.

3. **Nomear e Documentar:** Dê um nome descritivo e documente o propósito.

4. **Configurar Agendamento:** Defina quando a campanha será executada.

5. **Salvar:** A campanha está pronta para receber o conteúdo.

**Melhores Práticas:**

- **Segmentação adequada:** Quanto mais específica a segmentação, melhores os resultados.
- **Tamanho da lista:** Evite listas muito grandes inicialmente para testes.
- **Documentação:** Mantenha registro de campanhas anteriores para referência.

### Disparo em Massa

Esta é a ferramenta para o envio efetivo das mensagens. A documentação detalha os diferentes métodos de disparo, incluindo opções para personalização e diferentes formatos de conteúdo.

**Métodos de Disparo:**

**Mensagem de Texto com Variáveis:**

Permite enviar mensagens personalizadas utilizando variáveis:
- {{nome}} para o nome do contato.
- {{empresa}} para dados personalizados.
- Qualquer campo do cadastro do cliente.

Exemplo de mensagem personalizada:
```
Olá, {{nome}}! Somos da {{empresa}} e temos uma oferta especial para você.
```

**Mensagem com Templates do WhatsApp:**

Utilize templates oficiais aprovados pelo WhatsApp:
- Necessário aprovação prévia do template.
- Suportado para comunicações transacionais.
- Maior chance de entrega.

**Envio de Arquivos:**

Possibilidade de enviar documentos, imagens e outros arquivos:
- Catálogos em PDF.
- Imagens promocionais.
- Vídeos curtos.
- Documentos importantes.

**Envio via SMS:**

Para contatos que não utilizam WhatsApp:
- SMS como canal complementar.
- Conteúdo mais curto e direto.
- Custo por mensagem enviado.

**Configuração do Disparo:**

1. Selecione a campanha criada anteriormente.
2. Escolha o método de envio.
3. Configure o conteúdo da mensagem.
4. Defina variáveis e personalizações.
5. Programe o horário de envio.
6. Inicie o disparo.

**Considerações sobre Volume:**

Para envios em massa, considere:

- **Rate limiting:** O WhatsApp possui limites de envio que devem ser respeitados.
- **Janelas de envio:** Evite enviar em horários inadequados.
- **Taxa de entrega:** Nem todas as mensagens serão entregues (números inexistentes, bloqueios).

### Gerenciamento de Grupos

Uma funcionalidade dedicada à gestão e automação de grupos de WhatsApp. Aprenda a manipular grupos e participantes, configurar mensagens automáticas de boas-vindas e despedida, e moderar conteúdo.

**Operações com Grupos:**

**Criar Grupos:**

- Crie grupos automaticamente baseados em segmentações.
- Defina participantes iniciais.
- Configure admnistradores do grupo.

**Adicionar Participantes:**

- Adicione contatos automaticamente a grupos.
- Crie fluxos de entrada em grupos.
- Defina regras de elegibilidade para participação.

**Remover Participantes:**

- Automação de saída após período.
- Remoção por inatividade.
- Moderação de conteúdo.

**Configurar Mensagens Automáticas:**

**Mensagem de Boas-Vindas:**

Quando um novo membro entra no grupo:
```
Bem-vindo ao grupo, {{nome}}! 🎉
Aqui você encontrará as melhores ofertas e novidades.
Jangan lupa untuk membaca as regras do grupo.
```

**Mensagem de Despedida:**

Quando um membro sai do grupo:
```
{{nome}} saiu do grupo. Obrigado por fazer parte! 
```

**Moderação de Conteúdo:**

- Palavras proibidas podem ser automaticamente removidas.
- Links podem exigir aprovação.
- Spam pode ser filtrado automaticamente.

## Planejamento de Campanhas

Para uma campanha bem-sucedida, siga estas etapas:

### 1. Definição de Objetivos

Estabeleça metas claras e mensuráveis:

- **Quantitativo:** Quantas vendas, quantos cliques, quantas respostas.
- **Qualitativo:** Brand awareness, satisfação, engajamento.
- **Prazo:** Quando os resultados devem ser alcançados.

### 2. Conhecimento do Público

Entenda sua audiência:

- Quais são suas dores e necessidades?
- Qual o melhor horário para comunicação?
- Que tom de voz ressoa melhor?
- Quais canais preferem?

### 3. Criação de Conteúdo

Desenvolva mensagens eficazes:

- **Título atrativo:** Chame atenção nos primeiros caracteres.
- **Proposta de valor:** Explique o benefício claramente.
- **Call to action:** Diga o que deve fazer em seguida.
- **Urgência:** Crie senso de urgência quando apropriado.

### 4. Testes A/B

Experimente diferentes variações:

- Diferentes títulos.
- Diferentes horários de envio.
- Diferentes calls to action.
- Diferentes formatos de conteúdo.

### 5. Análise de Resultados

Após a campanha, analise:

- Taxa de entrega.
- Taxa de abertura.
- Taxa de clique.
- Conversões realizadas.
- Taxa de opt-out (desinscrição).

## Métricas Importantes

Para medir o sucesso das campanhas, acompanhe:

| Métrica | Descrição | Meta Típica |
|---------|-----------|-------------|
| Taxa de Entrega | % de mensagens entregues | > 90% |
| Taxa de Abertura | % de mensagens lidas | > 40% |
| Taxa de Clique | % de cliques no CTA | > 5% |
| Taxa de Conversão | % que realizou a ação desejada | > 2% |
| Taxa de Opt-out | % que desinscreveu | < 2% |

## Boas Práticas e Compliance

### Consentimento

- **Nunca envie spam:** Apenas contatos que consentiram devem receber mensagens.
- **Facilite opt-out:** Ofereça opção clara de cancelamento.
- **Honre preferências:** Respeite solicitações de parada.

### Frequência

- **Não exagere:** Mantas mensagens constantes geram fadiga.
- **Respeite horários:** Evite envíos muito cedo ou muito tarde.
- **Ofereça valor:** Cada comunicação deve trazer benefício ao receptor.

### Qualidade

- **Verifique links:** Certifique-se de que funcionam corretamente.
- **Revise mensagens:** Evite erros de digitagem e gramática.
- **Teste em dispositivos:** Verifique como aparece em diferentes aparelhos.

## Dicas para Campanhas Eficazes

1. **Comece pequeno:** Teste com listas menores antes de escalar.

2. **Personalize sempre:** Use o nome e dados relevantes do contato.

3. **Seja relevante:** A mensagem deve interessar especificamente àquele contato.

4. **Tenha uma única call to action:** Evite confusão sobre o que fazer.

5. **Use imagens de qualidade:** Fotos ruins prejudicam a percepção da marca.

6. **Acompanhe em tempo real:** Monitore o desempenho durante o envío.

7. **Documente aprendizados:** Anote o que funcionou e o que não funcionou.
