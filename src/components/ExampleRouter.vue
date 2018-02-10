<template>
  <section>
    <h3>Router navigation only</h3>

    <p>Routes are joined to reflect the tree structure.</p>

    <vue-snippet>
      <span slot="template">&lt;vue-tree-navigation :items="items" /&gt;</span>
      <span slot="script">export default {
          data() {
            return {
              items: [
                { name: 'Products', route: 'products' },              // #/products
                { name: 'About', route: 'about', children: [          // #/about
                  { name: 'Contact', route: 'contact', children: [    // #/about/contact
                    { name: 'E-mail', route: 'email' },               // #/about/contact/email
                    { name: 'Phone', route: 'phone' },                // #/about/contact/phone
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
