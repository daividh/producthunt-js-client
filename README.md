# product-hunt-js
This project was developed for a hiring test.

The main goal of this project is to create a very simple [ProductHunt](https://producthunt.com) client using [Vue.js](https://vuejs.org/) as a POC.

Project use  the following librairies :
* [Vue CLI 3](https://cli.vuejs.org) for project managing
* [Vuex](https://vuex.vuejs.org) for state management
* [Vue Router](https://router.vuejs.org/) for routing
* [Axios](https://github.com/axios/axios) as the http client
* [Stylus](stylus-lang.com) as the css preprocessor
* [Lodash](https://lodash.com) for small javascript utilities
* [Jest](https://jestjs.io) for unit testing
* [ESlint](https://eslint.org) for code styling

The source code include a volontary complex (but complete) architecture for a simple project like this one.

The goal is to provide a bunch of Vue.js techniques for making code more maintenable and scalable :

* Use router
* Lazy load component on route change
* Use Vuex store
* Modularize store
* Use filter
* Create custom component using v-model
* Don't overuse the store and prefer event emitting
* Use \_\_mocks\_\_ forlder for jest
* Use .env* files

TODO : E2E testing (Test café), Views testing


## Project setup
First, you must provide a valid producthunt token in your .env file

```
VUE_APP_API_TOKEN=Your producthunt API Token here
```
Then
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
