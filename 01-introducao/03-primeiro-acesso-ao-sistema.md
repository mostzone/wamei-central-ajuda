# Primeiro Acesso ao Sistema

Este guia orienta no primeiro acesso à plataforma Wamei Chat após a conclusão da instalação, apresentando a estrutura dos dois painéis principais que você utilizará para gerenciar sua operação de atendimento.

## 1. Realizando o Primeiro Login

Após a instalação pela equipe Wamei Chat, você receberá através do sistema de tickets os dados de acesso e credenciais da sua nova instância. Estes dados são fundamentais para iniciar a configuração do sistema e devem ser guardados em local seguro.

### Dados Recebidos Após a Instalação

Você receberá um conjunto completo de informações que inclui:

**URL Front-end e Back-end:** São os endereços de acesso à plataforma e à API, respectivamente. A URL do Front-end é utilizada para acessar o sistema através do navegador, enquanto a URL do Back-end é necessária para integrações via API.

**Login e Senha (Superadmin):** Credenciais do administrador mestre da plataforma, com acesso completo a todas as configurações do sistema.

**Login e Senha (Usuário Padrão):** Credenciais de um usuário de atendimento, criado para testes iniciais. Este usuário pode ser utilizado para explorar as funcionalidades básicas de atendimento.

**Acesso ao Portainer:** URL, usuário e senha para acessar a interface de gerenciamento dos contêineres Docker. Esta ferramenta permite visualizar o status dos serviços e realizar manutenções básicas.

**Senha (Usuário deployzdg):** Senha do usuário do sistema operacional do servidor. Necessária para acessos avançados via SSH.

**Credenciais do Banco de Dados:** Nome do banco de dados, usuário e senha de acesso. Estas informações são importantes para manutenções e integrações diretas com o banco.

**Senha do Redis:** Senha de acesso ao serviço Redis, utilizado para cache e gerenciamento de filas de mensagens.

**Status do Firewall:** Confirmação de que o firewall do servidor foi ativado com as portas necessárias liberadas para o funcionamento do sistema.

### Passos para o Primeiro Acesso

Para acessar a plataforma pela primeira vez, siga os seguintes passos:

1. Acesse a **URL do Front-end** informada no ticket de instalação através do seu navegador.
2. Utilize as credenciais do **Superadmin** para fazer o login inicial no sistema.
3. Após o login, acesse o painel **"Assinatura"** para inserir sua chave de licença e validar a assinatura.

É altamente recomendado alterar a senha do Superadmin após o primeiro acesso, seguindo as melhores práticas de segurança da informação.

## 2. Entendendo a Estrutura: Superadmin vs. Admin

A plataforma Wamei Chat possui dois níveis de administração distintos, cada um com funções específicas e complementares. Compreender esta estrutura é fundamental para utilizar o sistema de forma eficiente.

### Painel Superadmin

O Superadmin é o painel de mais alto nível, funcionando como o centro de controle do negócio. Este painel é utilizado para gerenciar a estrutura da plataforma, os clientes (tenants) e as configurações globais do sistema.

As principais funcionalidades do painel Superadmin incluem:

**Gestão da Plataforma e Clientes:** Gerenciamento de Tenants (clientes), criação de Planos de assinatura, acompanhamento de Pagamentos e validação da Assinatura (licença).

**Configuração e Customização:** Definição da identidade visual através da Customização White Label, configuração de serviço de E-mail para recuperação de senha, gerenciamento de Canais de comunicação em nível de sistema e acesso à API do Superadmin.

**Manutenção e Monitoramento:** Ferramentas para administradores de sistema manterem a saúde e performance da aplicação, incluindo Atualizar o sistema, monitorar CPU e memória, acessar o Terminal via SSH e verificar Filas e Tarefas (Redis) e Dados Internos.

### Painel Admin

O painel Admin é utilizado para configurar e gerenciar as operações de **uma conta de cliente (tenant) específica**. Cada cliente possui seu próprio Painel Admin, isolado dos demais.

As principais funções do painel Admin incluem:

**Gestão de Canais:** Conectar números de WhatsApp, contas de Instagram, e outros canais de comunicação.

**Gestão de Usuários e Equipes:** Criar atendentes, organizar as equipes de atendimento e definir permissões de acesso.

**Criação de Chatbots:** Desenvolver os fluxos de automação para otimizar o atendimento.

**Análise de Relatórios:** Visualizar os dados de atendimento daquela conta específica.

## 3. Criando um Usuário Administrador

Para começar a operar no painel Admin, você precisará criar um usuário com perfil de Administrador. Siga os seguintes passos:

1. No painel **Superadmin**, acesse o menu **"Usuários"**.
2. Clique no botão **"Adicionar"**.
3. Preencha os campos com as informações solicitadas:
   - **Tenant:** Deixe selecionada a opção padrão, que corresponde à sua própria empresa.
   - **Nome:** Insira um nome para identificar o administrador.
   - **E-mail:** Insira um e-mail que será utilizado para acessar a plataforma.
   - **Senha:** Crie uma senha segura.
   - **Perfil:** Selecione a opção **"Administrador"**.
4. Para o primeiro teste, deixe todos os menus visíveis e o horário de atendimento liberado.
5. Clique em **"Salvar"** para finalizar a criação do usuário.

## 4. Acessando o Painel Admin

Após criar o usuário Administrador, você precisará acessar o painel Admin para configurar a operação de atendimento:

1. Faça **logout** da sua conta Superadmin (canto superior direito da tela).
2. Na tela de login, utilize o **e-mail e a senha** do usuário Administrador que você acabou de criar.
3. O painel acessado será o **Painel Admin**, onde toda a operação de atendimento acontece.

Você notará que este painel possui uma interface diferente do Superadmin, com opções específicas para gestão de canais, atendentes e relatórios de atendimento.

## 5. Adicionando um Novo Canal

Com o usuário Administrador criado e logado, você pode agora adicionar o primeiro canal de comunicação. O processo detalhado de conexão de canais está descrito na documentação específica de **Canais de Comunicação** e **Conectando seu Primeiro Canal**.

Para adicionar um novo canal, siga os passos básicos:

1. No menu lateral do Painel Admin, acesse **"Canais"**.
2. Clique no botão **"Adicionar Canal"**.
3. Selecione o tipo de canal desejado (por exemplo, WhatsApp Baileys via QR Code).
4. Dê um nome para identificar a conexão.
5. Configure as opções adicionais conforme necessário.
6. Clique em **"Salvar"**.

Após salvar, será necessário ler o QR Code com o aplicativo WhatsApp do número que deseja conectar. O status do canal mudará para **"Conexão estabelecida"** quando a conexão for realizada com sucesso.
