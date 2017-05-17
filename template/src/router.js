import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const Layout = async resolve => import(/* webpackChunkName: "layout" */'@/views/Shared/Layout.js').then(m => resolve(m.default)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const Home = async resolve => import(/* webpackChunkName: "home" */'@/views/Home/Home.js').then(m => resolve(m.default)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
