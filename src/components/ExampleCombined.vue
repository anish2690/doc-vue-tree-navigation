<template>
  <section>
    <h3>Router links combined with element IDs</h3>
    <p>Routes are joined to reflect the tree structure.
       Elements are appended to their parent route.<br>
       <span class="additional">Feel free to experiment with various
       parent-child combinations (like element parent - route child),
       there are no restrictions.</span></p>
    
    <vue-snippet>
      <span slot="template">&lt;vue-tree-navigation :items="items" /&gt;</span>
      <span slot="script">export default {
          data() {
            return {
              items: [
                { name: 'Products', route: 'products' },              // #/products
                { name: 'About', route: 'about', children: [          // #/about
                  { name: 'Contact', route: 'contact', children: [    // #/about/contact       
                    { name: 'E-mail', element: 'email' },             // #/about/contact#email
                    { name: 'Phone', element: 'phone', children: [    // #/about/contact#phone
                      { name: 'Office', element: 'phone-office' },    // #/about/contact#phone-office
                    ]},             
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
