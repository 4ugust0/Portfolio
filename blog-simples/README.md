# Seja bem vindo(a) ao projeto do Blog Simples

<br>

Os créditos estão no README principal!

<br>

### O que utilizei para realizar o desenvolvimento desse sistema?

1. Next JS
2. Typescript
3. API de noticias do Governo
<br>
link da api: http://servicodados.ibge.gov.br/api/v3/noticias/
4. Styled Components

<br>

### Agora que você viu o que utilizei, vamos para a famosa configuração do sistema...

<br>

Dependências:

1. Projeto com o Next js:

~~~
    yarn create next-app my-app --typescript
~~~

2. Instalei dentro da pasta my-app os tipos do react e node js:

~~~
    yarn add @types/react @types/node -D
~~~

3. Instalei o eslint e configurei: 
~~~
    // Código de instalação do eslint
    yarn add eslint -D

    // Código de configuração do eslint
    yarn eslint --init

    Selecionei as opções:

    1 - To check syntax, find problems, and enforce code style
    2 - JavaScript modules (import/export)
    3 - React
    4 - Does yout project use Typescript? YES
    5 - Browser e Node JS
    Obs: Para marcar as duas caixinhas das duas últimas opções, basta você seleciona-la e pressionar o espaço que o check ficará verdinho, certifique-se de que fique a cor verde para as duas opções e então prossiga com a configuração
    6 - Use a popular style guide
    7 - Standard: https://github.com/standard/standard
    8 - JavaScript

    Essas foram as opções de configurações para o eslint nesse projeto.
~~~

<br>

4. Instalação Styled-components
~~~
    npm install styled-components
~~~

5. Instalação dos types styled-components e typescript
~~~
    npm install @types/typescript @types/styled-components
~~~

<br>

6. Configuração typescript 


Para que o styled components funcione no SSR, realizei a configuração... 

criei um arquivo _document.tsx na pasta "pages" e colei o seguinte código: 

~~~
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
~~~

Esse código é responsável por renderizar o styled components no DOM antes que o usuário entre na página.

Ainda falta algumas configurações...

### Criei um arquivo .babelrc e colei o seguinte código: 
~~~
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
~~~

Esse código é responsável por autorizar o styled-components.

Essas foram as configurações principais do projeto.

Obrigado por ler até aqui.
