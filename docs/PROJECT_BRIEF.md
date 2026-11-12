# Angular Component Lab

> Curadoria técnica · 12/11/2026 · **projeto independente**, não integrado à KORA.

**Repositório atual:** https://github.com/Saiiru/AngularFrontEndMasters
**Nome anterior:** `AngularFrontEndMasters` (preservado por dependências de publicação/treinamento)
**Tecnologias observadas:** Angular 8 · TypeScript
**Estado verificado por inspeção:** Código e testes de componente/e2e identificados; build de compatibilidade executado; toolchain de 2019 permanece obsoleto.

## Problema e objetivo

Explorar componentes, rotas e organização de telas no Angular por exercícios práticos.

Este é um estudo/experimento de engenharia de software; não é declarado como serviço comercial, produto em produção ou solução universal.

## O que existe atualmente

Código e testes de componente/e2e identificados; build de compatibilidade executado; toolchain de 2019 permanece obsoleto. Os arquivos originais, licenças, histórico e eventuais instruções de instalação permanecem no repositório. Esta curadoria não executou todas as dependências nem comprovou operação funcional. Para executar, use as instruções originais do README se disponíveis; quando ausentes, a preparação do ambiente é uma tarefa pendente, não um comando inventado.

## Projeto, autoria e referências

Atividade Frontend Masters; nome real preservado por Pages legada. Créditos, fontes de tutoriais e colaboradores devem continuar associados ao trabalho original. O fato de um repositório estar nesta conta não significa que todo o conteúdo foi escrito individualmente.

## Próximo incremento verificável

**Primeiro passo:** Reproduzir build em ambiente isolado; testar atualização de uma tela sem migração total.

**Critério de conclusão:** README com setup reproduzível, pelo menos uma verificação automatizada que detecte falhas relevantes, tratamento de entradas inválidas e demonstração com dados fictícios. Só alegar testes aprovados após execução registrada.

## Como apresentar no portfólio

**Nome editorial:** Angular Component Lab
**Problema:** Explorar componentes, rotas e organização de telas no Angular por exercícios práticos.
**Evidência:** código público no branch padrão; estado e limitações declarados nesta nota.
**Ainda não é:** sistema integrado à KORA, serviço em produção ou prova de maturidade sem testes.

[Voltar ao portfólio SAIRU/BLACKSITE](https://saiiru.github.io/#projetos-independentes)


## Verificação de funcionamento — 12/11/2026

**Estado confirmado:** Angular 8 compilável em ambiente de compatibilidade

**Evidência:** Node 24 + NODE_OPTIONS=--openssl-legacy-provider; npm run build -- --output-path=/tmp/sairu-angular-legacy-build: exit 0

**Limites e bloqueios:** Angular 8, Webpack antigo, Zone.js e opções OpenSSL obsoletas; teste não elimina vulnerabilidades. Não promover a produção moderna sem migração.

Esta validação não implica integração à KORA nem certificação de produção. Não alterar histórico, licença e autoria dos tutoriais.
