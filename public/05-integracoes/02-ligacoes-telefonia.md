# Ligaões no Wamei Chat (Telefonia e Voz)

A plataforma Wamei Chat permite integrar canais de voz para que sua equipe possa realizar e receber chamadas diretamente pela interface. É importante entender que o Wamei Chat funciona como um **centralizador** destas operações, mas não é o provedor do serviço de telefonia.

Atualmente, existem duas possibilidades para integrar chamadas de voz:

1. **Ligaões via WhatsApp (Wavoip):** Para realizar e receber chamadas de voz que ocorrem dentro do ecossistema do WhatsApp.

2. **Ligaões Convencionais (Telefonia SIP):** Para integrar um sistema de telefonia VoIP e realizar chamadas telefônicas tradicionais.

Esta documentação detalha cada uma das opções, incluindo configuração, uso e considerações importantes.

## 1. Ligaões via WhatsApp (Wavoip)

Esta integração permite que seus atendentes realizem e recebam chamadas de voz do WhatsApp diretamente pela interface do Wamei Chat. É uma excelente opção para quem já utiliza o WhatsApp como canal de atendimento e deseja adicionar a opção de comunicação por voz.

### Como Funciona

A funcionalidade é viabilizada através de uma integração com o serviço **Wavoip**. Você precisa ter uma conta ativa com eles para que o Wamei Chat possa se conectar. O Wavoip é um serviço especializado que permite realizar chamadas de voz através do WhatsApp de forma estável e profissional.

**O que você precisa:**

- Uma conta ativa no Wavoip.
- Credenciais de acesso (login e senha).
- Configure o Wavoip nas configurações do canal Baileys no Wamei Chat.

### Configuração

Para configurar a integração Wavoip:

1. **Crie uma conta no Wavoip:** Acesse o site do Wavoip e faça seu cadastro.

2. **Obtenha credenciais:** Anote seu login e senha do Wavoip.

3. **Acesse o Wamei Chat:** Faça login no painel Admin.

4. **Navegue até Canais:** Acesse o menu de Canais no painel Admin.

5. **Edite o canal Baileys:** Selecione o canal WhatsApp que deseja habilitar para chamadas.

6. **Configure Wavoip:** Nas configurações do canal, insira as credenciais do Wavoip.

7. **Salve as configurações:** A integração será habilitada.

### Uso da Funcionalidade

Após a configuração, para acessar as funcionalidades de ligação:

1. Clique no ícone **Wavoip** no menu lateral do painel.

2. Faça login com suas credenciais Wavoip na tela que será exibida.

3. Após o login, você terá acesso à interface de chamadas.

4. Para realizar uma chamada, selecione o contato desejado e clique em "Ligar".

5. Para receber chamadas, mantenha a interface aberta e aguarde notificações de chamadas recebidas.

### Aviso sobre Suporte

O Wavoip é um serviço de terceiros. O suporte do Wamei Chat oferece suporte apenas para a **integração**, ou seja, para conectar as credenciais corretamente. Problemas relacionados ao funcionamento da plataforma Wavoip, qualidade da chamada ou qualquer outra questão devem ser direcionados ao **suporte do próprio Wavoip**.

## 2. Ligaões Convencionais (Telefonia SIP)

Esta integração permite conectar o Wamei Chat ao seu sistema de telefonia VoIP que utiliza o protocolo **SIP**. Com isso, seus atendentes podem usar um Webphone dentro do Wamei Chat para fazer e receber chamadas telefônicas tradicionais.

### Pré-requisitos Obrigatórios

A configuração do ambiente SIP é externa ao Wamei Chat e de responsabilidade do cliente. Para que a integração funcione, seu servidor de telefonia deve ter suporte a:

- **WebRTC:** Tecnologia necessária para chamadas pelo navegador.
- **WSS (Web Socket Secure):** Geralmente operando na porta `8089`.

Sistemas compatíveis incluem Asterisk, Issabel, e outros PABX que suportem WebRTC e WSS.

### Como Configurar

A configuração é feita individualmente para cada atendente:

1. **Acesse o Painel Admin:** Navegue até o menu de Usuários.

2. **Edite o usuário:** Selecione o usuário para o qual deseja habilitar a telefonia SIP.

3. **Habilite a opção SIP:** Ative o toggle ou opção SIP nas configurações do usuário.

4. **Preencha as credenciais do ramal:**
   - **Usuário SIP:** Identificador do ramal no sistema de telefonia.
   - **Senha SIP:** Senha de autenticação do ramal.
   - **Servidor SIP:** Endereço do servidor de telefonia.
   - **Porta WSS:** Porta do Web Socket Secure (ex: `8089`).

5. **Salve as configurações:** Após salvar, a opção do **Webphone** será habilitada na interface daquele atendente.

### Uso do Webphone

Com a configuração concluída, o atendente poderá:

1. Ver o ícone do Webphone na interface de atendimento.
2. Clicar para abrir o discador.
3. Digitar ou selecionar o número a ser discado.
4. Clicar em "Ligar" para iniciar a chamada.
5. Atender chamadas recebidas diretamente na interface.

### Aula sobre Integração SIP

Para uma demonstração prática da integração SIP, consulte o material de apoio disponível que mostra o passo a passo completo da configuração e uso.

### Aviso sobre Suporte Técnico

A **configuração do servidor SIP/PJSIP**, incluindo a habilitação de WebRTC e WSS, **não faz parte do escopo de suporte do Wamei Chat**.

A responsabilidade pela configuração, compatibilidade e estabilidade da conexão de telefonia é do seu provedor de telefonia ou do profissional de TI responsável. Caso precise de ajuda especializada, você pode solicitar indicação de parceiros homologados através de abertura de chamado no departamento "Preciso de indicação de profissional".

## Comparação entre as Opções

| Característica | Wavoip (WhatsApp) | SIP (Telefonia Tradicional) |
|----------------|-------------------|----------------------------|
| **Canal** | WhatsApp | Telefone convencional |
| **Custo** | Baseado em uso Wavoip | Baseado em plano de telefonia |
| **Setup** | Simples | Mais complexo |
| **Qualidade** | Depende da internet | Depende da linha telefônica |
| **Compatibilidade** | Apenas para números WhatsApp | Para qualquer telefone |
| **Registro** | Integrado ao ticket | Integrado ao ticket |

## Melhores Práticas

### Para Wavoip:

1. **Teste antes de colocar em produção:** Realize testes de qualidade de chamada.
2. **Treine a equipe:** Ensine os atendentes a usar a funcionalidade de voz.
3. **Estabeleça protocolos:** Defina quando usar chamada versus mensagens.
4. **Monitore qualidade:** Acompanhe reclamações sobre qualidade de áudio.

### Para SIP:

1. **Verifique compatibilidade:** Confirme que seu servidor suporta WebRTC.
2. **Configure corretamente:** Garanta que as portas estejam abertas no firewall.
3. **Teste com headsets:** Headsets oferecem melhor qualidade de áudio.
4. **Mantenha servidor atualizado:** Updates melhoram estabilidade.

## Solução de Problemas

### Problemas comuns com Wavoip:

- **Chamadas não conectam:** Verifique credenciais e status da conta Wavoip.
- **Áudio ruim:** Problemas de internet; verifique conexão.
- **Não recebe chamadas:** Verifique se está logado no Wavoip.

### Problemas comuns com SIP:

- **Registro falhando:** Verifique credenciais e conectividade com servidor.
- **Sem áudio:** Problemas de WebRTC ou firewall.
- **Eco:** Verificar configurações de áudio e uso de fones.
