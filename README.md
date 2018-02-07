## Welcome to charlotte the queen city

Pagina de pesquisa de hotéis com base em preço máximo e mínimo e rating construída utilizando React, Styled components para o css redux para o controle do fluxo de dados moment js para format de datas react loadable para para customizar o carregamento inteligente de componentes. Na construção no do componente de calendário utilizei o componente React day picker pois achei mais fácil de customizar ao invés do React dates do AirBnb que eu precisaria de mais tempo para entender e aplicar. Na construção do filtro de preço mínimo e máximo utilizei o componente Rheostat do AirBnb. Na construção do filtro por rating utilizei o componente React rating por ser um componente muito simples e rápido de aplicar o componente para o histórico de proçes e tooltip construi html e css puro pois nesse momento o componente de gráfico é muito simples e por isso não achei necessário nesse momento colocar mais um plugin para construir esse o gráfico de colunas. Todos os componentes foram construídos utilzando o storybook. Apliquei testes de snapshot em praticamente todos os componentes utilizando jest, react renderer e enzyme realizei alguns testes mais básico com teste de integração utilizando o nightmare.

- App link: *https://charlotteapp.herokuapp.com/*
- Storybook link: *https://charlotteapp-api.herokuapp.com/storybook*
- Google Lighthouse report: *https://charlotteapp-api.herokuapp.com/lighthouse*

Construi também uma API em nodejs que está neste [repositório](https://github.com/rafamaxber/charlotte-api) seguindo MVC, realizei testes utilizando jest e para facilitar o entendimento achei interessante criar um swagger com este endpoint.

- Swagger: *https://charlotteapp-api.herokuapp.com/api-docs/*

# Get started

É necessário clonar o app e a api:


__API__ 

```
git clone git@github.com:rafamaxber/charlotte-api.git
cd charlotte-api && yarn
yarn start
```


__App__

```
git clone git@github.com:rafamaxber/charlotte.git
cd charlotte && yarn
yarn start
```

__Storybook__

```
yarn storybook
```
```
yarn build:storybook
```

__Testes__

```
yarn test
```
```
yarn test:coverage
```


