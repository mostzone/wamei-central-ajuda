# Guia Rápido de Uso

Este guia apresenta a estrutura da documentação do Wamei Chat e instruções para customização e deploy.

## Estrutura da Documentação

A documentação está organizada em 7 pastas principais, cada uma representando uma área funcional do sistema:

```
wamei-chat-docs/
├── 01-introducao/          # Primeiros passos e onboarding
├── 02-configuracao/        # Configuração inicial e estrutural
├── 03-atendimento/         # Ferramentas do atendimento
├── 04-ferramentas/         # Automação e chatbots
├── 05-integracoes/         # Ferramentas adicionais e integrações
├── 06-api/                 # Documentação da API
├── 07-politicas/           # Diretrizes e políticas
├── README.md               # Página principal
├── SUMMARY.md              # Índice do Gitbook
├── book.json               # Configurações do Gitbook
├── package.json            # Dependências NPM
└── deploy.sh               # Script de deploy
```

## Personalização

### Alterando Informações da Marca

Edite o arquivo `book.json` para personalizar:

```json
{
  "title": "Seu Nome Docs",
  "description": "Sua descrição",
  "author": "Sua Empresa",
  "pluginsConfig": {
    "github": {
      "url": "https://github.com/seu-usuario/seu-repositorio"
    },
    "donate": {
      "paypal": "seu-email@exemplo.com"
    }
  }
}
```

### Adicionando Novas Páginas

1. Crie o arquivo `.md` na pasta apropriada.
2. Adicione a entrada no `SUMMARY.md` seguindo o formato:

```markdown
- [Título da Página](pasta/arquivo.md)
```

3. O Gitbook atualizará o índice automaticamente.

### Modificando Conteúdo

Edite diretamente os arquivos `.md` usando Markdown. O Gitbook suporta:

- **Títulos:** `#`, `##`, `###`
- **Texto:** `*itálico*`, `**negrito**`
- **Links:** `[texto](url)`
- **Imagens:** `![alt](caminho)`
- **Tabelas:** Sintaxe padrão Markdown
- **Código:** \`\`\`código\`\`\`

## Deploy

### Opção 1: GitBook.com

1. Crie uma conta em gitbook.com
2. Conecte seu repositório GitHub
3. O deploy é automático a cada push

### Opção 2: GitHub Pages

1. Faça push do código para um repositório GitHub
2. O workflow `.github/workflows/deploy.yml` fará o deploy automaticamente
3. Acesse: `https://seu-usuario.github.io/seu-repositorio/`

### Opção 3: Netlify

1. Crie uma conta em netlify.com
2. Conecte seu repositório GitHub
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `_book`

### Opção 4: Deploy Local

```bash
npm install
npm run serve
```

O servidor local estará em `http://localhost:4000`

## Mantendo a Documentação

### Atualizações Regulares

1. **Revise mensalmente:** Verifique se o conteúdo está atualizado.
2. **Responda a feedback:** Incorpore sugestões dos usuários.
3. **Adicione novos recursos:** Documente novas funcionalidades.
4. **Corrija erros:** Mantenha o conteúdo preciso.

### Versionamento

Use branches para diferentes versões da documentação:

- `main`: Versão atual
- `v1.0`: Versão estável anterior
- `develop`: Em desenvolvimento

### Contribuição

Para contribuir com a documentação:

1. Fork o repositório
2. Crie uma branch: `git checkout -b minha-contribuicao`
3. Commit as mudanças: `git commit -m "Minha contribuição"`
4. Push para a branch: `git push origin minha-contribuicao`
5. Abra um Pull Request

## Suporte

Em caso de dúvidas sobre uso do Gitbook ou customização da documentação:

- [Documentação oficial do GitBook](https://docs.gitbook.com/)
- [GitHub do projeto](https://github.com/seu-usuario/wamei-chat-docs)
- [Issues do GitHub](https://github.com/seu-usuario/wamei-chat-docs/issues)

---

**Nota:** Esta documentação foi adaptada do sistema Z-PRO para a marca Wamei Chat, seguindo a estrutura white-label do sistema original.
