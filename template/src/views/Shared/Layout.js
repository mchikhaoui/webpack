import template from './layout.html'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import /* webpackChunkName: "layout" */'@/assets/css/layout.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  template: template{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
