# Conectando seu Primeiro Canal

Este guia apresenta o primeiro passo prático para começar a usar o Wamei Chat: conectar um canal de WhatsApp. Para isso, vamos criar um usuário administrador e conectar um número de telefone a ele. Este processo é fundamental para que você possa receber e enviar mensagens através da plataforma.

## Passo 1: Crie um Usuário Administrador

Acesse o painel Superadmin utilizando as credenciais recebidas após a instalação e siga os passos abaixo para criar um usuário com perfil Administrador:

1. No painel **Superadmin**, acesse o menu **"Usuários"** no menu lateral.
2. Clique no botão **"Adicionar"** para iniciar a criação de um novo usuário.
3. Preencha os campos do formulário com as informações solicitadas:
   - **Tenant:** Deixe selecionada a opção padrão, que corresponde à sua própria empresa ou ao tenant que já criou.
   - **Nome:** Insira um nome para identificar o administrador (por exemplo: "Admin Principal").
   - **E-mail:** Insira um e-mail válido que será utilizado para acessar a plataforma.
   - **Senha:** Crie uma senha segura para acesso ao sistema.
   - **Perfil:** Selecione a opção **"Administrador"** no campo de seleção de perfil.
4. Para os testes iniciais, deixe todos os menus visíveis e o horário de atendimento liberado.
5. Clique em **"Salvar"** para finalizar a criação do usuário.

Para consultar a documentação completa sobre criação de usuários no painel do Superadmin, acesse o artigo dedicado sobre [Gestão de Usuários](/configuracao-superadmin/gestao-de-clientes-e-usuarios/gestao-de-usuarios).

## Passo 2: Faça Login com o Usuário Admin

Agora você acessará o painel de gerenciamento do atendimento utilizando o usuário Administrador que acabou de criar:

1. Faça **logout** da sua conta Superadmin, clicando no canto superior direito da tela.
2. Na mesma tela de login, utilize o **e-mail e a senha** do usuário Administrador que você criou no passo anterior.

Você notará que o painel é diferente do Superadmin. Este é o **Painel Admin**, onde toda a operação de atendimento acontece. Neste painel, você terá acesso às opções de configuração de canais, gestão de atendentes, criação de chatbots e visualização de relatórios.

## Passo 3: Adicione um Novo Canal

Com o usuário Administrador logado no painel correto, você pode agora adicionar o primeiro canal de comunicação:

1. No menu lateral do Painel Admin, acesse **"Canais"**.
2. Clique no botão **"Adicionar Canal"** localizado no canto superior da tela.
3. Preencha as informações do novo canal:
   - **Tipo:** Selecione uma das opções disponíveis. Neste tutorial, utilizaremos o WhatsApp Baileys (QR Code), que é uma das opções mais simples para começar.
   - **Nome do Canal:** Dê um nome descritivo para identificar a conexão (por exemplo: "WhatsApp Principal" ou "Atendimento Cliente").
   - **Demais informações:** Configure o canal com as funcionalidades desejadas conforme sua necessidade.
4. Clique em **"Salvar"** para criar o canal.

## Passo 4: Leia o QR Code para Conectar

Após salvar, a plataforma criará um novo canal na tela. Agora você precisará conectar o número de WhatsApp ao sistema:

1. Clique no botão **"Novo QR Code"** que apareceu na tela do canal criado.
2. Pegue o celular com o número de WhatsApp que deseja conectar à plataforma.
3. No aplicativo WhatsApp, acesse **Configurações > Aparelhos Conectados > Conectar um Aparelho**.
4. Aponte a câmera do celular para o QR Code exibido na tela do Wamei Chat.
5. Aguarde a confirmação da conexão. O status do canal na tela mudará para **"Conexão estabelecida"**.

É importante que o WhatsApp do número utilizado esteja atualizado e que o celular tenha conexão com a internet durante o processo de conexão.

## Passo 5: Teste a Conexão

Com o canal conectado, você já pode receber e发送 mensagens. Realize o teste para confirmar que tudo está funcionando corretamente:

1. No menu lateral, clique em **"Atendimentos"**. Esta é a sua caixa de entrada unificada onde aparecerão todas as mensagens recebidas.
2. Pegue um telefone diferente e envie uma mensagem de WhatsApp para o número que você acabou de conectar.
3. A mensagem deverá aparecer em poucos segundos na tela de "Atendimentos".
4. Clique na mensagem para abrir a conversa e teste o envio de mensagens de resposta.

Pronto! Seu primeiro canal está configurado e funcional. A partir deste momento, você pode começar a receber e enviar mensagens através do Wamei Chat.

## Próximos Passos

Com o primeiro canal conectado, você pode:

- Configurar horários de atendimento para definir a disponibilidade da empresa.
- Adicionar mais atendentes à equipe.
- Criar fluxos de automação (chatbots) para otimizar o atendimento.
- Configurar filas de atendimento para direcionar conversas.
- Conectar outros canais de comunicação além do WhatsApp.

Para consultar a documentação completa sobre conectar canais, acesse o artigo dedicado sobre [Canais de Comunicação](/configuracao-inicial-e-estrutural-admin/canais-de-comunicacao/conectando-um-canal).
