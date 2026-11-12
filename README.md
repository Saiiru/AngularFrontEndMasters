# Angular Component Lab

**Objetivo:** Explorar componentes, rotas e organização de telas no Angular por exercícios práticos.

**Estado:** Código e testes de componente/e2e identificados; build de compatibilidade validado; dependências legadas sem atualização.

**Documentação técnica, origem e próximos passos:** [docs/PROJECT_BRIEF.md](docs/PROJECT_BRIEF.md)

---

## Material original preservado

# AngularFrontEndMasters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Verificação do código em 12/11/2026

Node 24 + NODE_OPTIONS=--openssl-legacy-provider; npm run build -- --output-path=/tmp/sairu-angular-legacy-build: exit 0

**Limitações:** Angular 8, Webpack antigo, Zone.js e opções OpenSSL obsoletas; teste não elimina vulnerabilidades. Não promover a produção moderna sem migração.


## Laboratório Angular funcional (12/11/2026)

Este projeto ainda usa **Angular 8** e bibliotecas antigas; não é uma migração nem um modelo de produção. Foi preservado para estudar componentes, rotas, RxJS, Angular Material, chamadas HTTP e formulário.

**O que funciona agora:** a navegação abre sem autenticação fictícia, o catálogo de jogos permite criar/editar/excluir dados apenas no armazenamento local do navegador (sem servidor `localhost:3000`) e o módulo SWAPI recupera todas as páginas de planetas e naves, com estados de falha. Em navegador real a API retornou 60 planetas e 36 naves.

### Reproduzir a versão do GitHub Pages

Requisitos testados: Node 24, npm e Chromium + Playwright Python para o teste de navegador. O script aplica a compatibilidade OpenSSL somente ao subprocesso Angular; nenhuma configuração global do PC é modificada.

1. Execute `npm ci` no checkout.
2. Compile com `npm run build:pages`. Saída: `dist/AngularFrontEndMasters/`.
3. Sirva `dist/` por HTTP (não abra `index.html` como arquivo). Exemplo: `python -m http.server 4554 --directory dist`.
4. Navegue para `http://127.0.0.1:4554/AngularFrontEndMasters/#/games` e teste o formulário. Recarregue; o registro deve continuar no **mesmo navegador**. Apague e recarregue novamente.
5. Para verificar a SWAPI, abra `#/starwars/planets`; espere a listagem de planetas e pressione **Carregar naves**.
6. Instale `playwright` e o Chromium se necessário, e execute `python scripts/smoke_browser.py` enquanto o servidor estiver ativo. Esse script usa Chromium do Arch em `/usr/bin/chromium`.

**Limites:** não existe autenticação real, API própria, sincronização entre dispositivos nem serviço persistente. Dados fictícios podem ser apagados pelo navegador. O código legado de demonstração de login foi retirado da navegação pública, mas está mantido para estudo histórico. Angular 8, Karma/Protractor e webpack antigo ainda precisam de modernização em etapa separada. Não use essas dependências em serviço que processe dados reais.
