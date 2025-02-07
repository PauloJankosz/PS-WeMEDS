# Informações do projeto

Para desenvolvimento do desafio proposto optei pela sua realização em Node.js (versão 9.2.0) e React (versão 19.0.0) como uma forma de aprendizado da biblioteca, me baseando em documentações do próprio React e guias do youtube e fóruns.
Buscando facilitar a estilização, personalizei um modelo básico para facilitar o desenvolvimento da parte visual do projeto. [LinkFigma](https://www.figma.com/design/ee9f8p5CB3MeBd0qbE9HtM/TODO-list?node-id=501-2&t=vkHPNY4zwMLJWKKB-0)

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

## Telas desenvolvidas
### Tela geral com tarefas criadas
![image](https://github.com/user-attachments/assets/e866f4fd-fb8f-434d-afdf-ac0b13473179)

### Responsividade em telas de celular (Testei até 320px, opção utilizada nas imagens)
![image](https://github.com/user-attachments/assets/1cbd2c20-cb06-4e9a-81b0-1671351f699b)
![image](https://github.com/user-attachments/assets/c2b3a7c4-5c1a-4d12-bf5a-483336745d59)
![image](https://github.com/user-attachments/assets/f3791470-18b7-407c-80b2-c3e1f4a858c9)





# Referências

[React](https://react.dev/)
[ReactPrimeiroAPP](https://legacy.reactjs.org/docs/create-a-new-react-app.html)
[useState](https://react.dev/reference/react/useState)
