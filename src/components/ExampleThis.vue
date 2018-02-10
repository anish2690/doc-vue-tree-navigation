<template>
  <section>
    <h3>This website</h3>
    <p>The side navigation for this documentation was built with
       vue-tree-navigation and the following setup.</p>
    <p>You need to style the tree navigation on your own
      like I did for this website. I included only a few basic styles because I believe
      this approach makes customizing the look much easier as you don't need to override
      plenty of styles.</p>
    <vue-snippet>
      <span slot="template">&lt;vue-tree-navigation :items="items" :defaultOpenLevel="1" /&gt;</span>
      <span slot="script">export default {
          data() {
            return {
              items: [
                { name: 'Introduction', route: 'introduction', children: [
                  { name: 'Features', element: 'features' },
                  { name: 'Requirements', element: 'requirements' },
                  { name: 'Demo', element: 'demo' },
                ]},
                { name: 'Installation', route: 'installation' },
                { name: 'Usage', route: 'usage', children: [
                  { name: 'Props', element: 'props', children: [
                    { name: 'items', element: 'items' },
                    { name: 'defaultOpenLevel', element: 'default-open-level' },
                  ]},
                ]},
                { name: 'Examples', route: 'examples', children: [
                  { name: 'Elements only', route: 'elements' },
                  { name: 'Router only', route: 'router' },
                  { name: 'Combined', route: 'combined' },
                  { name: 'This website', route: 'this' },
                ]},
                { name: 'Notes', route: 'notes', children: [
                  { name: 'Scroll behaviour', element: 'scroll-behaviour' },
                  { name: 'Styling', element: 'styling' },
                ]},
              ],
            };
          },
        };</span>
    </vue-snippet>

    <span>My vue-router configuration:</span>
    <pre v-highlightjs><code class="javascript">  
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
    </code></pre>
  </section>
</template>

<script>
import VueSnippet from './VueSnippet.vue';

export default {
  components: {
    'vue-snippet': VueSnippet,
  },
};
</script>
