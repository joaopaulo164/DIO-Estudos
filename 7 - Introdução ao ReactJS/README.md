## Instalar React ReactDom e ReactScripts

- Instalação:

```bash
## no bash
npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1 
```

- Iniciando o projeto:
```bash
## no bash
npm start 
```

## Renderização

- Renderização de Elementros é feita pela React DOM, toda a renderização são feitas em Nós Raíz;
- Renderização de elementos são as partes menores;
- React não trabalha com o DOM real e sim com o DOM virtual;

## Componentes e Props

- O componente pode ser uma Função ou Classe;
- Props;
- Composição de Componentes;
- Extração de Componentes
- Tudo do componente pode ser acessado com children e também é preciso para renderizar o componente

## Estado e Ciclo de Vida

São 4 estados:

- Inicialização;
- Montagem;
- Atualização;
- Desmontagem;

Nenhum componente pai ou filho devem saber se outro componente possui estado, pois o estado é apenas local do componente e o envio de atribuito é realizado por meio da props

## Ecossistema React

React funciona em conjunto com outras bibliotecas:
- React Router (Gerenciamento de estado);
- Redux (Gerenciamento de estado);
- Material UI (Criação de interface);
- Ant-Design (Criação de interface);
- Storybook (Criação de componentes visuais);
- Gatsby (Teste);
- Jest (Teste);
- React i18n Next (internacionalização);

