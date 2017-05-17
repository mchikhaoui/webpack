import template from './home.html'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  template: template,
  name: 'hello',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      logoUrl: require('@/assets/img/logo.png'),
      msg: 'Welcome to Your Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
