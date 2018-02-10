<template>
  <section>
    <h3>Navigation based on element IDs only</h3>

    <p>You can navigate to elements at one page by passing
       the elements IDs to the <code>element</code> field. You don't need
       to install vue-router to your project in this case.</p>

    <vue-snippet>
      <span slot="template">&lt;vue-tree-navigation :items="items" /&gt;</span>
      <span slot="script">export default {
          data() {
            return {
              items: [
                { name: 'Products', element: 'products' },        // #products
                { name: 'About', element: 'about', children: [    // #about
                  { name: 'Contact', children: [                  // category label
                    { name: 'E-mail', element: 'email' },         // #email
                    { name: 'Phone', element: 'phone' },          // #phone
                  ]},
                ]},
              ],
            };
          },
        };</span>
    </vue-snippet>
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