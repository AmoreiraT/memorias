## Instalação

1. Instale o [Nodejs](https://nodejs.org/en/) no seu computador.
2. Usando o terminal (cmd, bash, powershell, etc), instale o [pnpm](https://pnpm.io/installation).
3. Clone o repositório do projeto. _// TODO: adicionar instruções de como clonar_
4. Abra o terminal na pasta do projeto e execute o comando `pnpm i` para instalar as dependências do projeto.
5. Execute o comando `pnpm dev` para iniciar o projeto.

## Comandos

### `pnpm dev`

Inicia o projeto em modo de desenvolvimento.

### `pnpm storybook`

Inicia o storybook.

### `pnpm lint`

Executa o linter.

### `pnpm lint:fix`

Executa o linter e tenta corrigir os erros.

### `pnpm format`

Executa o prettier.

### `pnpm build`

Compila o projeto para produção na pasta `dist`.

## Arquitetura

_coming soon_

## Roadmap

_coming soon_

## Versionamento

Seguir as regras do [git flow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) para criação de branches e fluxo de versionamento.

1. Para criar uma nova feature:

: `git flow feature start <feature-name>`

: Ex: `git flow feature start criar-buttons`

2. Fazer e commitar alterações na nova branch. Mensagens de commits seguem o padrão:

: `feature/<feature-name>: <message>`

: Ex: `feature/criar-buttons: adiciona componente de botão`

3. Ao finalizar sua feature, commite todas as alterações e em seguida:

: `git flow feature finish <feature-name>`

: Ex: `git flow feature finish criar-buttons`

## Style guide

### Code

_coming soon_

### PR

_coming soon_

## Libs

- [styled-components](https://styled-components.com/)
  : css-in-js

- [React Hook Form](https://react-hook-form.com/)
  : gerenciamento de forms

- [React Query](https://react-query.tanstack.com/)
  : gerência de estado server side

- [React Router](https://reactrouter.com/en/main)
  : rotas

- [zod](https://github.com/colinhacks/zod)
  : schemas para forms (validação de dados)

- [zustand](https://github.com/pmndrs/zustand/tree/main/examples/demo)
  : gerência de estado client side

## Extensões recomendadas

### vscode

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  : Aplica as regras do linter no código ao salvar.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  : Aplica as regras do prettier no código ao salvar.

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
  : Mostra os erros in-line.

- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  : Extensão para melhorar a interface do git. Mostra o git blame (último commit que modificou aquela linha) in-line.

- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
  : Melhora a sintaxe do styled-components.
