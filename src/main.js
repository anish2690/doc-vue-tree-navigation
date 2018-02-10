import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import VueRouter from 'vue-router';
import VueTreeNavigation from 'vue-tree-navigation';

import App from './App.vue';

import Introduction from './components/Introduction.vue';
import Installation from './components/Installation.vue';
import Usage from './components/Usage.vue';
import Examples from './components/Examples.vue';
import ExampleElements from './components/ExampleElements.vue';
import ExampleRouter from './components/ExampleRouter.vue';
import ExampleCombined from './components/ExampleCombined.vue';
import ExampleThis from './components/ExampleThis.vue';
import Notes from './components/Notes';

Vue.use(VueHighlightJS);
Vue.use(VueRouter);
Vue.use(VueTreeNavigation);

const routes = [
  { path: '/', redirect: '/introduction' },
  { path: '/introduction', component: Introduction },
  { path: '/installation', component: Installation },
  { path: '/usage', component: Usage },
  { path: '/examples', component: Examples, redirect: '/examples/elements', children: [
    { path: 'elements', component: ExampleElements },
    { path: 'router', component: ExampleRouter },
    { path: 'combined', component: ExampleCombined },
    { path: 'this', component: ExampleThis },
  ]},
  { path: '/notes', component: Notes },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // Scroll stopped working in the moment I implemented two columns
      // with two scrollbars layout when developing this website. I found
      // out that this behaviour is probably caused by setting
      // both <html> and <body> height to 100%.
      // The only workaround I found out so far is to use scrollToView()
      // which seems to work under all circumstances.
      // https://github.com/vuejs/vue-router/issues/1459
      const element = to.hash.slice(1, to.hash.length);
      document.getElementById(element).scrollIntoView();

      return { selector: to.hash };
    } else {
      return { x: 0, y: 0};
    }
  },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
