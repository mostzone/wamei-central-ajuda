# Notificações Aplicativo (Web Push)

Este documento detalha como ativar as notificações de novas mensagens no celular através da tecnologia Web Push no Wamei Chat. As notificações permitem que você receba alertas sobre novas mensagens mesmo quando o aplicativo não está visível na tela, garantindo respostas mais rápidas aos clientes.

## Perfil de Usuário

**Disponível para o perfil:** Administrador

A configuração inicial deve ser realizada por um usuário com perfil Administrador, mas as notificações funcionam para todos os perfis de usuário que farão os atendimentos.

## Funcionamento do Aplicativo Wamei Chat

O Wamei Chat não é um aplicativo nativo baixado em lojas (App Store ou Play Store). Ele opera como um **PWA (Progressive Web App)**, permitindo que os usuários "instalem" um atalho do site na tela inicial do celular. Este atalho se comporta como um aplicativo nativo, ocupando a tela inteira e recebendo notificações.

**Características do PWA:**

- **Instalação simples:** Não requer download de lojas de aplicativos.
- **Atualização automática:** Sempre tem a versão mais recente.
- **Menor consumo de armazenamento:** Não ocupa espaço significativo no dispositivo.
- **Funcionalidades nativas:** Suporte a notificações push e funcionamento em tela cheia.

## Como Funcionam as Notificações Web Push

As notificações são enviadas usando a tecnologia **Web Push**, que possibilita que o navegador (ou o PWA) receba alertas do Wamei Chat mesmo quando o aplicativo não está aberto na tela. A ativação requer uma configuração em três etapas que devem ser seguidas na ordem correta.

## Passo a Passo para Ativar as Notificações

### Etapa 1: Ative as Notificações no Aplicativo PWA

O primeiro passo é habilitar a recepção de notificações dentro do PWA do Wamei Chat:

1. **Acesse o Wamei Chat** através do navegador do seu celular.

2. **Instale o PWA** (se ainda não estiver instalado):
   - No iOS (Safari): Toque no botão Compartilhar e selecione "Adicionar à Tela de Início".
   - No Android (Chrome): Toque no menu de três pontos e selecione "Instalar aplicativo" ou "Adicionar à tela inicial".

3. **Abra o PWA:** Acesse o Wamei Chat através do ícone criado na tela inicial.

4. **Localize o botão de notificação:** Procure o ícone de sino ou botão de notificação no canto da interface.

5. **Ative as notificações:** Toque no botão e confirme a ativação quando solicitado pelo navegador.

**Importante:** Este botão só é visível quando o Wamei Chat é executado a partir do atalho na tela inicial (PWA). Se você acessar pelo navegador diretamente, as configurações de notificação podem não estar disponíveis.

### Etapa 2: Habilite o Web Push no Canal Desejado

O segundo passo é configurar o canal específico para enviar notificações:

1. **Acesse o painel do Wamei Chat** através de um navegador desktop ou do PWA.

2. **Navegue até Canais:** No menu lateral, clique em "Canais".

3. **Edite o canal:** Selecione o canal (WhatsApp, por exemplo) para o qual deseja receber notificações.

4. **Ative a opção Web Push:** Nas configurações do canal, localize a opção **"Habilitar WebPush"** e marque-a.

5. **Salve as alterações:** Clique em "Salvar" para aplicar a configuração.

**Repita** este processo para cada canal que desejar receber notificações.

### Etapa 3: Permita as Notificações no seu Celular

O terceiro passo é garantir que o sistema operacional do seu celular tenha permissão para exibir as notificações do Wamei Chat.

**Para Android:**

1. **Acesse Configurações:** Abra o aplicativo de Configurações do Android.

2. **Vá em Aplicativos:** Localize e selecione "Aplicativos" ou "Aplicativos e notificações".

3. **Encontre o Wamei Chat:** Procure o Wamei Chat na lista de aplicativos. Como PWA, pode aparecer como "Chrome" ou "Navegador" com o nome do site.

4. **Acesse Notificações:** Toque no aplicativo e selecione "Notificações".

5. **Habilite notificações:** Certifique-se de que as notificações estão ativadas para o aplicativo.

**Para iOS:**

1. **Acesse Configurações:** Abra o aplicativo de Configurações do iPhone.

2. **Vá em Notificações:** Toque em "Notificações".

3. **Encontre o Safari/Web Push:** Procure pela opção Safari ou pelo nome do site do Wamei Chat.

4. **Habilite notificações:** Ative o toggle de notificações.

5. **Verifique estilos:** Escolha o estilo de notificação desejado (Banner, Alerta, etc.).

## Solução de Problemas

### Não estou recebendo as notificações. O que verificar?

Se você seguiu todos os passos acima e ainda não está recebendo notificações, verifique os seguintes pontos:

**1. Confirme permissões de notificação:**

Verifique se as permissões de notificação estão concedidas para o Wamei Chat (ou para o navegador) nas configurações do seu celular. Esta é a Etapa 3 do processo de configuração.

**2. Verifique configuração no canal:**

Certifique-se de que a opção **"Habilitar WebPush"** está marcada no canal desejado dentro das configurações do Wamei Chat. Esta é a Etapa 2.

**3. Verifique modo Não Perturbe:**

Certifique-se de que o modo **"Não Perturbe"** ou **"Foco"** do seu celular não está ativo. Estes modos bloqueiam todas as notificações.

**4. Verifique conexão com internet:**

As notificações requerem conexão com a internet. Verifique se está conectado a Wi-Fi ou dados móveis.

**5. Verifique se o PWA está aberto em segundo plano:**

Em alguns dispositivos, se o navegador (mesmo o PWA) for completamente fechado, as notificações podem ser atrasadas. Mantenha o PWA minimizado ou fechado normalmente, mas evite forçar o encerramento do aplicativo.

**6. Teste enviando uma mensagem:**

Peça para alguém enviar uma mensagem para o canal configurado enquanto você aguarda alguns segundos para verificar se a notificação chega.

## Melhores Práticas

Para aproveitar ao máximo as notificações:

1. **Instale como PWA:** Use sempre o atalho na tela inicial, não o navegador diretamente.

2. **Configure múltiplos canais:** Habilite Web Push em todos os canais que deseja monitorar.

3. **Personalize sons:** Configure um som distintivo para notificações do Wamei Chat.

4. **Mantenha o celular acessível:** As notificações funcionam melhor quando o celular não está em modo de economia de energia extremo.

5. **Revise configurações periodicamente:** Após atualizações do sistema operacional, as permissões podem ser resetadas.

## Limitações e Considerações

**Compatibilidade:**

- A tecnologia Web Push é bem suportada em Chrome, Firefox e Edge.
- No Safari (iOS), o suporte é parcial e pode ter comportamento diferente.
- Alguns navegadores em modo privado podem bloquear notificações.

**Bateria:**

- Notificações push consomem bateria adicional.
- Em modo de economia extrema de bateria, notificações podem ser atrasadas.

**Dados móveis:**

- Notificações funcionam em dados móveis, mas podem consumir parte da franquia.

## Resumo do Processo

| Etapa | O que fazer | Onde |
|-------|-------------|------|
| 1 | Ativar no PWA | Botão de notificação no Wamei Chat |
| 2 | Habilitar no canal | Configurações do canal no painel Admin |
| 3 | Permitir no celular | Configurações do sistema operacional |

Seguindo estas três etapas, você estará apto a receber notificações do Wamei Chat em seu celular, garantindo atendimento ágil mesmo quando não estiver com o sistema aberto.
