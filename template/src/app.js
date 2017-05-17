// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router
  {{/router}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
