# mchikhaoui/webpack

In addition to the [basic template](http://vuejs-templates.github.io/webpack), this fork allows to work with 
separate multi files componenets (html, js, css), it's include :
- `vue-html-loader` to load external html template
- external CSS files injected in js componenets files are minified

 
## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init mchikhaoui/webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

