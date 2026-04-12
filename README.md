# Shell Varejo

<p align="center">
  Shell Angular para orquestracao de microfrontends do dominio Varejo via Module Federation.
</p>

<p align="center">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-15.2.11-DD0031?logo=angular&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.9.4-3178C6?logo=typescript&logoColor=white">
  <img alt="Module Federation" src="https://img.shields.io/badge/Module%20Federation-@angular--architects-FF6F00">
</p>

## Objetivo

Este repositorio representa o shell da aplicacao Varejo, responsavel por:

- centralizar o roteamento principal
- carregar microfrontends remotos
- servir como ponto unico de entrada da aplicacao

## Arquitetura Atual

O projeto usa Angular 15 com estrutura baseada em modulo (`AppModule`) e roteamento em `AppRoutingModule`.

O carregamento de features de negocio e feito com `loadRemoteModule` do pacote `@angular-architects/module-federation`.

### Microfrontends conectados

- `home` -> remoto em `http://localhost:4201/remoteEntry.js`
- `carrinho` -> remoto em `http://localhost:4202/remoteEntry.js`

## Rotas

Rotas atualmente configuradas no shell:

```typescript
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
];
```

## Tecnologias

| Tecnologia | Versao |
|-----------|--------|
| Angular | 15.2.x |
| Angular CLI / DevKit | 15.2.11 |
| TypeScript | ~4.9.4 |
| RxJS | ~7.8 |
| Zone.js | ~0.12.0 |
| Module Federation | @angular-architects/module-federation ^21.2.2 |
| Karma + Jasmine | 6.4 / 4.5 |

## Scripts

| Script | Descricao |
|--------|-----------|
| `npm start` | Sobe apenas o shell (`ng serve`) |
| `npm run build` | Gera build de producao do shell |
| `npm run watch` | Build em modo observacao |
| `npm test` | Executa testes unitarios |
| `npm run run:all` | Sobe ambiente de desenvolvimento com Module Federation (`mf-dev-server`) |

## Como executar

### Pre-requisitos

- Node.js compativel com Angular 15 (recomendado usar versao LTS)
- npm

### Instalar dependencias

```bash
npm install
```

### Rodar shell

```bash
npm start
```

Acesse `http://localhost:4200`.

### Rodar com MF local

```bash
npm run run:all
```

Use este modo para integrar shell + remotos durante desenvolvimento.

## Estrutura resumida

```text
shell-varejo/
├── src/
│   ├── app/
│   │   ├── app.component.*
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   └── home/
│   ├── assets/
│   ├── main.ts
│   └── styles.scss
├── webpack.config.js
├── webpack.prod.config.js
├── angular.json
├── package.json
└── README.md
```

## Observacoes

- Este projeto atua como host/shell; as telas de negocio sao servidas pelos remotos.
- Caso um remoto nao esteja no ar, a navegacao para a rota correspondente falhara ate o remoto ficar disponivel.

---

Ultima atualizacao: Abril de 2026
