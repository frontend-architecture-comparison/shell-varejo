# Shell Varejo

<p align="center">
  Aplicacao base desenvolvida em Angular para servir como shell do projeto Varejo.
</p>

<p align="center">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-15.2.11-DD0031?logo=angular&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.9.4-3178C6?logo=typescript&logoColor=white">
  <img alt="Karma" src="https://img.shields.io/badge/Testes-Karma%20%2B%20Jasmine-3A6EA5">
</p>

# Shell Varejo

Repositorio contendo a base inicial de uma aplicacao Angular criada com arquitetura tradicional baseada em modulos.

## Objetivo

Este projeto serve como ponto de partida para uma aplicacao shell do dominio Varejo, centralizando a estrutura inicial de bootstrap, roteamento e componente raiz.

A aplicacao atualmente segue o scaffold padrao do Angular CLI e esta preparada para evoluir com novas telas, rotas e servicos conforme o dominio for sendo implementado.

## Arquitetura

O projeto segue a abordagem classica do Angular 15 com `AppModule` como modulo principal e `AppRoutingModule` para configuracao de rotas.

**Caracteristicas principais:**

- Aplicacao unica
- Bootstrap via modulo Angular
- Organizacao simples para evolucao incremental
- Estrutura inicial pronta para navegacao e componentes adicionais
- Base adequada para expansao de features futuras

### Organizacao Atual

#### **App** (`src/app/`)
Camada principal da aplicacao:
- `AppComponent` - Componente raiz da aplicacao
- `AppModule` - Modulo principal
- `AppRoutingModule` - Configuracao inicial de rotas

#### **Assets** (`src/assets/`)
Diretorio destinado a imagens, icones e arquivos estaticos.

## Estado Atual

No momento, o projeto esta em estado inicial, com a interface padrao gerada pelo Angular CLI.

Isso significa que:
- Ainda nao ha rotas de negocio implementadas
- Ainda nao ha features especificas do dominio Varejo
- A estrutura esta pronta para receber as proximas telas e fluxos

## Tecnologias Utilizadas

| Tecnologia | Versao | Proposito |
|-----------|--------|----------|
| Angular | 15.2.0 | Framework frontend |
| Angular CLI / DevKit | 15.2.11 | Build e tooling |
| TypeScript | ~4.9.4 | Linguagem de programacao |
| RxJS | ~7.8 | Programacao reativa |
| Zone.js | ~0.12.0 | Suporte ao change detection |
| Karma + Jasmine | 6.4 / 4.5 | Testes unitarios |
| npm | 9+ | Gerenciador de pacotes |

## Estrutura do Projeto

```text
shell-varejo/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   ├── main.ts
│   ├── styles.scss
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

## Como Executar o Projeto

### Pre-requisitos

- Node.js 16+ ou superior compativel com Angular 15
- npm

### Instalacao de Dependencias

```bash
npm install
```

### Servidor de Desenvolvimento

```bash
npm start
```

Acesse: `http://localhost:4200`

### Build de Producao

```bash
npm run build
```

Gera os artefatos de producao no diretorio `dist/`.

### Testes

```bash
npm test
```

Executa os testes unitarios via Karma/Jasmine.

## Scripts Disponiveis

| Script | Descricao |
|--------|-----------|
| `npm start` | Sobe o servidor de desenvolvimento |
| `npm run build` | Gera build de producao |
| `npm run watch` | Gera build em modo observacao |
| `npm test` | Executa testes unitarios |

## Fluxo de Roteamento

A aplicacao atualmente usa uma configuracao inicial de rotas vazia:

```typescript
const routes: Routes = [];
```

Isso permite evoluir o shell gradualmente, adicionando rotas conforme as features do dominio forem sendo criadas.

## Padroes Utilizados

- Estrutura classica baseada em modulos
- Separacao entre modulo principal e roteamento
- Componente raiz para bootstrap da aplicacao
- Base preparada para expansao por features

## Contexto do Projeto

Este repositorio representa a camada shell/base da aplicacao Varejo.

Ele pode ser usado como ponto de partida para:
- novas telas institucionais
- navegacao principal da aplicacao
- composicao de modulos de dominio
- evolucao futura para uma arquitetura mais segmentada

## Versao

- **Angular**: 15.2.0
- **Angular CLI**: 15.2.11
- **TypeScript**: 4.9.4
- **Node**: 16+
- **npm**: 9+

## Contribuicao

Este e um projeto de base para evolucao do shell Varejo. Ajustes de estrutura devem priorizar simplicidade e consistencia com o padrao Angular atual do projeto.

---

**Ultima atualizacao:** Abril de 2026
