# Horários de Atendimento

A configuração de Horários de Atendimento no Wamei Chat permite definir a disponibilidade da empresa para atendimento e configurar quais mensagens automáticas são enviadas fora desses horários. O sistema oferece um controle granular, com horários distintos que podem ser definidos em três níveis: por Fila, por Usuário e por Tenant (Global).

Esta funcionalidade é fundamental para garantir que os clientes recebam informações adequadas sobre a disponibilidade da empresa e que as conversas sejam direcionadas corretamente conforme a programação definida.

## A Lógica de Hierarquia

O sistema verifica os horários de atendimento em uma ordem de prioridade específica para determinar a disponibilidade e enviar mensagens de ausência corretamente. A ordem de verificação é:

### Nível 1: Horário por Fila

O sistema primeiro verifica se a **Fila** para onde o ticket está ou será direcionado possui um horário de atendimento próprio e ativo. **Se sim:** O Wamei Chat utiliza este horário e a mensagem de ausência desta fila, ignorando os outros dois níveis.

Esta configuração é ideal para empresas com diferentes setores que possuem horários de funcionamento distintos. Por exemplo, o departamento de Vendas pode funcionar das 8h às 18h, enquanto o Suporte pode funcionar das 9h às 17h.

### Nível 2: Horário por Usuário

**Se a Fila não tiver** um horário configurado ou se o ticket estiver sendo direcionado a um usuário específico, o sistema verifica se o **Usuário** (atendente) possui um horário de atendimento ativo. **Se sim:** O Wamei Chat utiliza o horário deste usuário.

Esta configuração permite configurar jornadas de trabalho específicas para atendentes, funcionando como uma forma de gerenciar "plantões" ou turnos individuais. É ideal para atendentes com jornadas de trabalho específicas, como meio período, turnos diferentes ou folgas alternadas.

### Nível 3: Horário por Tenant (Global)

**Se nem a Fila nem o Usuário** tiverem um horário configurado, o sistema utiliza o horário de atendimento **Global (Tenant)** como regra padrão. Esta é a configuração mais abrangente e serve como fallback para toda a plataforma.

## Como Configurar os Horários

### 1. Horário por Fila

A configuração de horário por fila é ideal para empresas com diferentes setores que possuem horários de funcionamento distintos.

**Onde configurar:** Acesse `Admin > Filas > (Editar uma Fila) > Aba "Horário de Atendimento"`.

**Como funciona:** Ativação dos dias da semana desejados, definição dos horários de início e fim, e escrita de uma "Mensagem de Ausência" específica para esta fila.

### 2. Horário por Usuário

A configuração de horário por usuário permite gerenciar a disponibilidade individual de cada atendente.

**Onde configurar:** Acesse `Admin > Usuários > (Editar um Usuário) > Aba "Horário de Atendimento"`.

**Como funciona:** Ativação dos dias e horários em que o usuário específico está disponível. Se um ticket for direcionado a ele fora deste horário, o sistema o tratará como ausente.

### 3. Horário por Tenant (Global)

A configuração global é o horário de funcionamento padrão de toda a plataforma.

**Onde acessar:** Clique no ícone de Horário de Atendimento no menu lateral do painel.

## Configurar Horário de Funcionamento Diário

A tela de configuração de horário é intuitiva e permite definir a disponibilidade para cada dia da semana separadamente com as seguintes opções:

**Aberto:** Informa ao cliente que a empresa está aberta durante todo o dia. Útil para empresas com suporte 24 horas ou que não possuem restrições de horário.

**Fechado:** Informa ao cliente que a empresa não abre neste dia. Nesta opção, a mensagem de ausência será enviada automaticamente para qualquer conversa iniciada.

**Horário:** Desbloqueia campos para definir um intervalo de horário específico. Esta opção permite incluir pausas para almoço ou intervalos durante o dia. Por exemplo, uma empresa pode funcionar das 9h às 12h e das 14h às 18h.

**Ação:** Após realizar as configurações desejadas, é necessário clicar em **"Salvar"** para que as alterações entrem em vigor.

## Mensagem de Ausência

É possível desenvolver uma mensagem personalizada que será enviada automaticamente nos dias e horários em que o estabelecimento estiver fechado. A mensagem pode incluir emojis para humanizar a comunicação.

**Exemplo de mensagem de ausência:**

```
Olá! Obrigado pelo contato. 😃
Nosso horário de atendimento é de segunda a sexta, das 9h às 18h.
Em breve, nossa equipe retornará sua mensagem!
```

**Ação:** Após configurar a mensagem desejada, é necessário clicar em **"Salvar"** para que ela seja ativada.

## Feriados

Os feriados são considerados dias em que o estabelecimento não está aberto e, portanto, serão tratados como dias fechados pelo sistema. Você pode configurar os feriados específicos do seu país ou região nas configurações do sistema.

Durante os feriados, a mensagem de ausência configurada será enviada automaticamente para qualquer nova conversa iniciada, informando ao cliente que a empresa não está operando naquele dia.

## Dicas para Configuração

Para uma configuração eficiente dos horários de atendimento, considere as seguintes dicas:

1. **Comece pela configuração global:** Defina primeiro o horário padrão que se aplica a maioria da operação.

2. **Configure exceções por fila:** Para departamentos com horários específicos, configure o horário diretamente na fila.

3. **Gerencie plantões individuais:** Para atendentes com turnos diferentes, utilize a configuração por usuário.

4. **Teste as mensagens de ausência:** Verifique se as mensagens automáticas estão sendo enviadas corretamente em horários fora do expediente.

5. **Revise periodicamente:** Feriados e mudanças de horário devem ser atualizados regularmente para evitar problemas de comunicação.
