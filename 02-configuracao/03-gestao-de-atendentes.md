# Gestão de Atendentes

Esta seção agrupa as documentações sobre a criação de usuários, a organização deles em equipes e a configuração de filas para o direcionamento das conversas. Uma gestão adequada dos atendentes é fundamental para garantir que as conversas sejam direcionadas às pessoas corretas e que a equipe opere de forma organizada.

## Gestão de Usuários (Painel Admin)

A funcionalidade de Gestão de Usuários permite cadastrar os membros da sua equipe na plataforma e definir seus respectivos perfis de permissão. Cada usuário terá acesso às funcionalidades sesuaianto seu papel na operação.

### Perfis de Permissão

O sistema Wamei Chat possui três perfis principais de usuário:

**Atendente:** Este é o perfil básico para quem realizará os atendimentos. O atendente pode receber e responder mensagens, utilizar ferramentas de apoio como mensagens rápidas e etiquetas, e finalizar atendimentos. Não tem acesso às configurações do sistema.

**Supervisor:** Além das funcionalidades do atendente, o supervisor possui acesso aos relatórios e métricas da equipe, pode visualizar todos os atendimentos em andamento e realizar transferências entre atendentes. Este perfil é ideal para quem gerencia a operação.

**Administrador:** Tem acesso completo a todas as funcionalidades do sistema, incluindo configurações de canais, criação de usuários, gestão de equipes, configuração de filas, automações e relatórios. Este perfil é responsável pela configuração e manutenção da plataforma.

### Como Criar um Usuário

Para cadastrar um novo usuário no sistema, siga os seguintes passos:

1. Acesse o painel Admin e navegue até o menu **"Usuários"**.
2. Clique no botão **"Adicionar"** para criar um novo registro.
3. Preencha os campos obrigatórios:
   - **Nome:** Nome completo do usuário.
   - **E-mail:** Endereço de e-mail válido para login.
   - **Senha:** Senha inicial para acesso ao sistema.
   - **Perfil:** Selecione o perfil de permissão adequado.
4. Configure as opções adicionais conforme necessário:
   - **Menu Visível:** Defina quais menus o usuário poderá acessar.
   - **Horário de Atendimento:** Configure a disponibilidade do usuário.
5. Clique em **"Salvar"** para finalizar a criação.

### Editar e Gerenciar Usuários

Após criar os usuários, você pode editar suas informações a qualquer momento. Para isso, basta acessar a lista de usuários, localizar o registro desejado e clicar no botão de edição. As alterações entram em vigor imediatamente após o salvamento.

## Configuração de Filas de Atendimento

As Filas direcionam as conversas recebidas para usuários ou equipes específicas. Esta funcionalidade é essencial para garantir que cada conversa seja atendida pela pessoa ou departamento correto.

### Para que servem as Filas?

As filas permitem organizar o fluxo de atendimentos por área de atuação, como por exemplo:

- **Fila de Vendas:** Para conversas de prospecção e conversão.
- **Fila de Suporte:** Para atendimento técnico e resolução de problemas.
- **Fila de Financeiro:** Para dúvidas sobre pagamentos e cobranças.
- **Fila de WhatsApp:** Para conversas vindas especificamente do WhatsApp.
- **Fila de Instagram:** Para mensagens do Instagram Direct.

### Como Criar uma Fila

1. Acesse o painel Admin e navegue até o menu **"Filas"**.
2. Clique no botão **"Adicionar"** para criar uma nova fila.
3. Preencha os campos do formulário:
   - **Nome:** Identificação da fila (ex: "Suporte Técnico").
   - **Cor:** Cor de identificação para visualização.
   - **Atendente:** Selecione os atendentes que farão parte desta fila.
   - **Horário de Atendimento:** Defina os horários de funcionamento da fila.
   - **Mensagem de Ausência:** Configure a mensagem automática para horários fora do expediente.
4. Clique em **"Salvar"** para criar a fila.

### Configurações Avançadas de Fila

As filas possuem configurações avançadas que permitem um controle mais preciso do fluxo de atendimento:

- **Mensagem de Boas-Vindas:** Texto automático enviado quando uma conversa inicia na fila.
- **Mensagem de Ausência:** Texto enviado quando o cliente entra em contato fora do horário de atendimento.
- **Transferência Automática:** Opção para transferir automaticamente para outro atendente ou fila.
- **Limite de Atendimentos:** Número máximo de conversas simultâneas por atendente.

## Organização de Equipes

A funcionalidade de Equipes permite agrupar usuários para fins de organização e distribuição de conversas. As equipes facilitam a gestão de grandes equipes de atendimento, permitindo que cada supervisor gerencie seu próprio grupo de atendentes.

### Como Criar uma Equipe

1. Acesse o painel Admin e navegue até o menu **"Equipes"**.
2. Clique no botão **"Adicionar"** para criar uma nova equipe.
3. Preencha os campos:
   - **Nome:** Nome da equipe (ex: "Equipe de Vendas").
   - **Supervisor:** Selecione o supervisor responsável pela equipe.
   - **Atendentes:** Selecione os atendentes que farão parte da equipe.
4. Clique em **"Salvar"** para finalizar.

### Relacionamento entre Equipes e Filas

As equipes e filas podem trabalhar em conjunto para otimizar o fluxo de atendimento. Por exemplo, você pode criar filas específicas para cada equipe, garantindo que as conversas sejam direcionadas não apenas para o departamento correto, mas também para a equipe responsável por aquele tipo de atendimento.
