# API Wamei Chat (Postman)

Esta documentação apresenta os conceitos e instruções para utilizar a API do Wamei Chat através da coleção oficial do Postman. A API permite a integração da plataforma com outros sistemas, como CRMs, ERPs ou plataformas de automação como n8n, possibilitando a realização de ações de forma programática.

**Disponível para o perfil:** Administrador

## Introdução e Conceitos Chave

A API do Wamei Chat é uma interface de programação que permite que outros sistemas interajam com a plataforma automaticamente. Com ela, você pode enviar mensagens, criar tickets, gerenciar contatos e muito mais, tudo através de requisições HTTP.

### Entendendo os Métodos (GET vs. POST)

A maioria dos endpoints utiliza o método **POST** para criar, atualizar, listar ou deletar informações. Esta escolha de design facilita o envio de dados complexos no corpo da requisição.

A principal exceção é o endpoint `SendMessageParams`, que utiliza **GET** para recuperar parâmetros necessários para envio de mensagens. É crucial verificar se o método correto está selecionado no Postman antes de executar a requisição.

### Importante

Sempre verifique a documentação de cada endpoint para confirmar o método HTTP correto a ser utilizado. Utilizar o método errado resultará em erro de requisição.

## Ferramenta Principal: Coleção Postman

A forma mais recomendada para explorar e testar a API do Wamei Chat é através da coleção oficial no Postman. Esta coleção contém todas as rotas, parâmetros e exemplos necessários para utilizar a API de forma eficiente.

**Link para a Coleção Oficial do Wamei Chat no Postman:**

A coleção está disponível no workspace público da comunidade e pode ser acessada através do link fornecido na documentação ou no painel Admin. Ela contém exemplos prontos para todas as operações disponíveis.

### Benefícios da Coleção Postman

A coleção oficial oferece diversas vantagens para desenvolvedores:

- **Documentação inline:** Cada endpoint possui descrição e exemplos.
- **Variáveis configuráveis:** Facilitam testes com diferentes ambientes.
- **Testes automatizados:** Validação automática de respostas.
- **Atualizações regulares:** A coleção é mantida atualizada com novas features.

## Como Usar a Coleção: Fazendo um "Fork"

Fazer um "fork" de uma coleção no Postman significa criar uma cópia pessoal e vinculada da coleção pública do Wamei Chat. Esta cópia permite que você a use, teste e modifique em seu próprio workspace sem afetar o original.

### Principais Vantagens de Fazer um Fork

**Independência:**

Possibilidade de alterar e personalizar a coleção, inserindo suas próprias chaves de autenticação e salvando requisições próprias. Você pode criar novas requisições baseadas nas existentes e organizá-las conforme sua preferência.

**Sincronização:**

A cópia permanece vinculada à coleção original, permitindo receber notificações sobre atualizações. Você pode usar a função "pull" para sincronizar as novidades da versão original sem perder suas customizações.

**Segurança:**

Suas chaves de API e testes salvos ficam apenas no seu ambiente privado, não sendo compartilhados com outros usuários.

### Passo a Passo para Fazer o Fork

1. **Acesse a coleção pública** através do link fornecido.

2. **Clique na opção "Fork"** (geralmente representada por um ícone de ramificação ou bifurcação).

3. **Dê um nome para a cópia** (label) que identifique sua versão.

4. **Escolha o workspace** onde deseja salvar a cópia.

5. **Confirme a criação** do fork.

## Como Navegar em um Endpoint no Postman

Ao clicar em uma requisição (endpoint) na sua cópia da coleção, você verá várias abas que permitem configurar e executar a requisição:

### Aba Overview

Apresenta a documentação principal com a descrição da rota, incluindo:

- **Descrição do endpoint:** O que a rota faz.
- **Requisitos:** O que é necessário para utilizá-la.
- **Exemplo de uso:** Caso de uso comum.
- **Notas adicionais:** Informações importantes.

### Aba Params

Utilizada em requisições GET para filtrar resultados. Aqui você pode adicionar:

- **Parâmetros de consulta:** Variáveis enviadas na URL.
- **Filtros:** Condições para os dados retornados.
- **Paginação:** Controle de resultados por página.

### Aba Authorization

Onde a autenticação `Bearer Token` é configurada. Configure:

- **Tipo de autorização:** Bearer Token.
- **Token:** Sua chave de API gerada no painel Admin.

### Aba Headers

Os cabeçalhos da requisição. Normalmente já vêm pré-configurados, mas você pode adicionar:

- **Cabeçalhos customizados:** Para casos específicos.
- **Content-Type:** Tipo de conteúdo enviado.
- **Accept:** Tipo de resposta esperada.

### Aba Body

A "carga" de dados enviada em requisições POST. Aqui você define:

- **Formato:** JSON (mais comum).
- **Dados:** Os parâmetros específicos do endpoint.
- **Exemplos:** Modelos de payload prontos.

## Autenticação e Primeiros Passos

Todas as requisições à API do Wamei Chat exigem a inclusão de um token de autenticação válido. Sem ele, as requisições serão rejeitadas com erro 401 (não autorizado).

### Como Gerar seu Token (API Key)

1. **Acesse o painel Admin** do Wamei Chat.

2. **Navegue até o menu "API".**

3. **Crie uma nova API** seguindo as instruções da documentação de API (Admin).

4. **Copie o token gerado** e guarde em local seguro.

### Como Usar o Token

O token deve ser incluído no cabeçalho `Authorization` no formato `Bearer`:

**Exemplo:**
```
Authorization: Bearer SEU_TOKEN_AQUI
```

No Postman, basta configurar na aba Authorization selecionando "Bearer Token" e inserindo o token no campo "Token".

### URL Base

Todas as rotas da API devem ser chamadas a partir da URL de back-end da sua instância:

**Exemplo:**
```
https://api.seudominio.com.br/
```

A URL base está disponível nas configurações da sua API no painel Admin.

## Referência de Endpoints

Abaixo está a lista dos principais endpoints disponíveis e suas funções. Para detalhes completos, consulte a coleção oficial do Postman.

### Mensagens

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| SendMessageParams | GET | Recupera os parâmetros básicos para enviar uma mensagem |
| SendMessageAPIText | POST | Envia uma mensagem de texto simples pelo WhatsApp |
| SendMessageAPIFile | POST | Envia uma mensagem com arquivo (imagem, PDF, etc.) |
| SendMessageAPIFileURL | POST | Envia uma mensagem com arquivo, pegando o arquivo de um link |
| SendMessageAPIVoice | POST | Envia uma mensagem de voz no WhatsApp |
| SendMessageAPITextBase64 | POST | Envia um arquivo 'dentro' da mensagem, em formato codificado |
| SendGroupMessageAPIText | POST | Envia mensagem de texto para um grupo de WhatsApp |
| SendGroupMessageAPIFile | POST | Envia arquivo em grupo de WhatsApp |
| SendMessageAPIFileURLGroup | POST | Envia arquivo via link para um grupo de WhatsApp |
| SendTemplateWaba | POST | Envia uma mensagem template oficial aprovada pelo WhatsApp |

### Gerenciamento de Contatos e Oportunidades

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| CreateContact | POST | Cria um novo contato (cliente) na base do sistema |
| CreateOpportunity | POST | Cria uma oportunidade de venda |
| DeleteOpportunity | POST | Apaga uma oportunidade de venda |
| UpdateOpportunity | POST | Atualiza os dados de uma oportunidade existente |
| ShowContact | POST | Mostra as informações de um contato específico |
| UpdateContact | POST | Atualiza os dados de um contato |

### Notas e Tickets (Chamados)

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| CreateNotes | POST | Cria uma nota interna no atendimento |
| CreateTicket | POST | Cria um chamado de atendimento novo |
| CreateTicketFile | POST | Cria um chamado anexando um arquivo junto |
| SetQueue | POST | Move um chamado para uma fila de atendimento diferente |

## Exemplo de Aplicação: Automação com n8n

Em demonstrações práticas, foi apresentado um caso de uso conectando o Wamei Chat ao n8n para automatizar o agendamento de uma consulta. O fluxo utilizou os seguintes endpoints em sequência:

1. **Enviar Mensagem:** Para interagir com o cliente durante o agendamento.
2. **Criar Oportunidade:** Para registrar o agendamento no CRM interno.
3. **Definir Etiqueta:** Para organizar o ticket com a tag "Consulta Agendada".
4. **Atualizar Ticket:** Para atribuir o atendimento a um atendente humano e desativar a automação.

Esta abordagem demonstra como a API pode ser utilizada para criar fluxos de trabalho complexos que integram múltiplas funcionalidades do Wamei Chat.

## Boas Práticas de Uso da API

### Tratamento de Erros

Implemente tratamento adequado de erros em suas integrações:

- Verifique sempre o código de status HTTP da resposta.
- Trate erros 4xx (cliente) e 5xx (servidor) de formas diferentes.
- Implemente lógica de retry para erros temporários.
- Logue erros para análise posterior.

### Rate Limiting

Respeite os limites de uso da API:

- Implemente delays entre requisições quando necessário.
- Monitore uso para evitar bloqueios por excesso de chamadas.
- Considere uso de filas para controlar ritmo de envios.

### Segurança

Mantenha suas integrações seguras:

- Nunca exponha tokens em código público.
- Use variáveis de ambiente para armazenar credenciais.
- Renove tokens periodicamente.
- Limite permissões ao mínimo necessário.

### Performance

Otimize suas integrações:

- Reutilize conexões quando possível.
- Faça cache de dados que não mudam frequentemente.
- Use webhooks ao invés de polling quando adequado.
- Considere impacto em performance do servidor.
