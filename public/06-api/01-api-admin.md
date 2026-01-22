# API (Admin)

A API (Admin) é uma ferramenta para facilitar os processos de integração da plataforma Wamei Chat com sistemas externos. Através dela, você pode conectar o Wamei Chat com CRMs, ERPs, plataformas de automação e outros sistemas, possibilitando ações programáticas como envio de mensagens, consulta de informações e gerenciamento de tickets.

**Disponível para o perfil:** Administrador

## Como Acessar

Para acessar a seção de API, clique no ícone **"API"** no menu lateral do painel Admin. A interface apresentará as APIs configuradas e opções para adicionar novas integrações.

## Adicionar API

Para adicionar uma nova API e gerar credenciais de integração, siga os passos:

1. Clique em **"Adicionar"** no canto superior da tela.
2. Um pop-up se abrirá para preenchimento das informações necessárias.

### Campos de Preenchimento

**Nome da API:**

Define como a API será identificada. Este nome é visível apenas para Administradores e serve para facilitar o gerenciamento de múltiplas integrações. Escolha um nome descritivo que identifique claramente o propósito da integração.

**Enviar por:**

Escolhe qual canal ou conexão será responsável pelo envio das mensagens. Esta opção permite definir qual instância do WhatsApp ou outro canal será utilizada para comunicações via API.

**Token de Autenticação:**

O token será enviado como autorização no header das requisições. Se houver um prefixo específico (ex: "Bearer", "Token"), deverá ser informado aqui. O token é uma credencial de segurança que identifica e autentica suas requisições.

### Salvamento

Após preencher todos os campos, clique em **"Salvar"** para finalizar a criação da API. O sistema gerará o token de autenticação que será utilizado nas chamadas à API.

## Gerenciar as APIs

Na parte inferior do painel "API", é possível visualizar e gerenciar as APIs cadastradas. Para cada API, as seguintes informações são exibidas:

### Informações Disponíveis

- **Nome da API:** Identificação da integração.
- **URL da API:** Endereço base para as requisições.
- **URL do Token:** Endpoint para obtenção ou renovação de tokens.
- **URL do WebHook (Status WhatsApp):** Endpoint para receber status das mensagens WhatsApp.
- **URL do WebHook (Status Mensagem):** Endpoint para receber status das mensagens.
- **Token de Autenticação:** Credencial de acesso (parcialmente visível por segurança).

### Ações Disponíveis

No canto superior direito de cada registro, as seguintes ações estão disponíveis:

**Copiar o Token:**

Permite copiar o token de autenticação para uso em integrações. O token completo será exibido para cópia.

**Editar as Informações:**

Abre o pop-up de criação permitindo modificar as configurações da API. Atualize as informações conforme necessário e salve.

**Gerar um Novo Token:**

Gera um novo token de autenticação, invalidando o anterior. Use esta opção quando houver comprometimento ou suspeita de vazamento do token anterior.

**Deletar as Configurações:**

Remove completamente a integração. Esta ação é irreversível, portanto, confirme antes de prosseguir.

## Postman Collection

Para facilitar os testes e desenvolvimento de integrações, é possível fazer o download da **Collection do Postman** com todas as rotas disponíveis da API Wamei Chat.

### O que é o Postman?

Postman é uma ferramenta popular para desenvolvimento e teste de APIs. Com ela, você pode:

- Executar requisições HTTP de forma simples.
- Organizar e documentar endpoints.
- Criar ambientes de teste com variáveis.
- Compartilhar coleções com sua equipe.

### Como Obter a Collection

A collection oficial do Wamei Chat para Postman contém exemplos prontos de todas as operações disponíveis na API. Para acessá-la, consulte o link fornecido na interface ou na documentação complementar.

A collection inclui:

- Exemplos de requisições para cada endpoint.
- Variáveis pré-configuradas para facilitar o uso.
- Documentação inline de cada operação.
- Testes automatizados para validação de respostas.

## Autenticação

Todas as requisições à API do Wamei Chat devem incluir autenticação adequada. O método de autenticação utilizado é Bearer Token.

### Como usar o Token

O token deve ser incluído no cabeçalho `Authorization` das requisições HTTP:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

### Segurança

Para manter a segurança da sua integração:

- **Nunca exponha tokens** em código público ou repositórios.
- **Use variáveis de ambiente** para armazenar tokens.
- **Gere tokens específicos** para cada integração.
- **Renove tokens periodicamente** ou imediatamente em caso de suspeita de vazamento.
- **Limite acessos** ao painel Admin apenas a pessoas necessárias.

## Endpoints Comuns

### Envio de Mensagens

A API permite enviar diversos tipos de mensagens:

- **Mensagens de texto simples.**
- **Mensagens com arquivos** (imagens, documentos, áudios).
- **Mensagens com links** e prévias de conteúdo (og:tags).
- **Mensagens de_TEMPLATE** para comunicações estruturadas.

### Gerenciamento de Contatos

Operações com a base de contatos:

- **Criar contatos:** Adicionar novos clientes à base.
- **Atualizar contatos:** Modificar informações existentes.
- **Buscar contatos:** Consultar informações de clientes específicos.
- **Listar contatos:** Obter listas filtradas de contatos.

### Gerenciamento de Tickets

Operações de atendimento:

- **Abrir tickets:** Iniciar novos atendimentos.
- **Atualizar tickets:** Modificar status e informações.
- **Encerrar tickets:** Finalizar atendimentos.
- **Transferir tickets:** Encaminhar para outros atendentes ou filas.

## Webhooks

Os Webhooks permitem receber notificações automáticas quando eventos ocorrem no sistema:

### Configuração de Webhooks

Para cada webhook configurado, você define:

- **URL de destino:** Endpoint que receberá as notificações.
- **Eventos a monitorar:** Quais eventos devem triggers notificações.
- **Formato dos dados:** Estrutura do payload enviado.

### Eventos Disponíveis

Os webhooks podem ser configurados para notificar sobre:

- **Status de mensagem:** Entrega, leitura, falha.
- **Novas mensagens:** Recebimento de mensagens dos clientes.
- **Mudança de ticket:** Alterações de status ou responsável.
- **Eventos customizados:** Conforme configuração avançada.

## Tratamento de Erros

A API utiliza códigos HTTP padrão para indicar resultados:

### Códigos de Status

- **200:** Sucesso na operação.
- **201:** Recurso criado com sucesso.
- **400:** Erro nos dados enviados (validação).
- **401:** Falha de autenticação.
- **403:** Acesso negado (permissão insuficiente).
- **404:** Recurso não encontrado.
- **500:** Erro interno do servidor.

### Tratamento Recomendado

Implemente tratamento de erros em sua integração:

1. **Valide entradas** antes de enviar requisições.
2. **Verifique código de status** em cada resposta.
3. **Implemente retry** para erros temporários (5xx).
4. **Logue erros** para análise e debugging.
5. **Notifique** em caso de falhas persistentes.

## Limites e Rate Limiting

A API possui limites de uso para garantir estabilidade do serviço:

- **Limite de requisições por minuto.**
- **Limite de mensagens por hora.**
- **Limite de conexões simultâneas.**

Consulte a documentação específica para detalhes sobre limites aplicáveis ao seu plano.

## Suporte

Em caso de dúvidas ou problemas com a API:

1. **Consulte a documentação completa** disponível na collection Postman.
2. **Verifique exemplos** de implementação na documentação.
3. **Teste no ambiente de desenvolvimento** antes de produção.
4. **Contate o suporte** para questões específicas.
