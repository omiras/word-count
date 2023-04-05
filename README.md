# Hello World with React boilerplate

## Implementar un contador de letras en React

Queremos implementar un contador de letras. El funcionamiento debe ser _parecido_ a esta otra [app](https://omiras.github.io/word-count-tool/)

Los requisitos identificados son

1. Un usuario puede escribir una palabra en la caja de texto
2. A medida que escribe o borra la palabra, el número de letras de dicha palabra se ve reflejado en el contenedor azul
3. Cuando al menos hay una letra en la caja de texto (input), debe mostrarse el botón verde.
4. El botón verde debe añadir la palabra a una lista de palabras introducidas hasta el momento. En la versión sencilla, NO guardaremos el número de letras para cada palabra, a diferencia del ejemplo de app.

**BONUS**: Juega con los estilos en línea para que, en la lista de palabras, cuanto más grande sea el tamaño de la palabra, más verde se vea. Es decir, una palabra de 5 letras apenas se verá verde, pero una palabra de 100 letras se verá visiblemente verde.

## Boilerplate

Start coding a react application

> If you are working locally instead of using codespaces or gitpod, please follow [local installation steps](#local-installation-skip-if-you-are-working-on-codespaces-or-gitpod) and come back to this part of the readme.

## How to start coding?

- Install the packages with `$ npm install`.
- Run the webpack server with `$ npm run start`

You can update the `styles/index.css` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## Local Installation (skip if you are working on codespaces or gitpod)

Download the boilerplate using git

```
$ git clone https://github.com/4GeeksAcademy/react-hello.git
$ cd react-hello
```

## Publish your website!

This boilerplate is 100% compatible with the free [github pages](https://pages.github.com/) and [vercel](https://vercel.com/) hosting.

It takes just 2 minutes to deploy, [click here to start the process](https://github.com/4GeeksAcademy/react-hello/blob/master/docs/DEPLOY.md).

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code indentation and formatting.
- Error reporting: Use of [eslint](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-command publish of the code to github pages with `npm run deploy:github`.
- Babel 7 (really fast).

### Contributors

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school github page](https://github.com/4geeksacademy/).
