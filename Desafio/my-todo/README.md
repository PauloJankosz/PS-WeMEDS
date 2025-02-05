# Informações do projeto
Para desenvolvimento do desafio proposto optei pela sua realização em Node.js (versão 9.2.0) e React (versão 19.0.0) como uma forma de aprendizado da biblioteca, me baseando em documentações do próprio React e guias do youtube e fóruns.

## Comandos utilizados no projeto

#### Criação do projeto
```
npx create-react-app my-todo
```

#### No meu caso necessitei instalar o web-vital, visto que gerava erro
```
npm install --save-dev web-vitals
```

#### Para erros de vulnerabilidades que existiam após rodar o projeto, adicionei o seguinte comando no package.json
```
  "overrides": {
    "react-scripts": {
      "@svgr/webpack": "8.1.0",
      "typescript": "4.9.5",
      "postcss": "8.4.38"
    }
  }
```

#### Ao rodar o projeto tive erros causados pelo babel, então utilizei o seguinte comando:
```
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```


# Referências
[React](https://react.dev/)
[ReactPrimeiroAPP](https://legacy.reactjs.org/docs/create-a-new-react-app.html)
