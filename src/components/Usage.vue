<template>
  <section>
    <h2>Usage</h2>

    <vue-snippet>
      <span slot="template">&lt;vue-tree-navigation :items="items" :defaultOpenLevel="1" /&gt;</span>
      <span slot="script">export default {
          data() {
            return {
              items: [
                { name: 'Products', children: [                       // category label
                  { name: 'Shoes', route: 'shoes' }                   // #/shoes
                ]},
                { name: 'About', route: 'about', children: [          // #/about
                  { name: 'Contact', route: 'contact', children: [    // #/about/contact       
                    { name: 'E-mail', element: 'email' },             // #/about/contact#email
                    { name: 'Phone', element: 'phone' }               // #/about/contact#phone
                  ]},
                ]},
              ],
            };
          },
        };</span>
    </vue-snippet>

    <div id="props">
      <h3>Props</h3>

      <div id="items">
        <h4><code>items</code></h4>
        <p>An array containing tree navigation items.</p>
        <p><code>name</code> Item label</p>
        <p><code>route</code> Router link URL</p>
        <p>
          <code>element</code> Element ID 
          <span class="additional">(this field replaces v1 <code>href</code> field)</span>
        </p>
        <p>You need to install and configure vue-router if you decide to use
          <code>route</code>field at least once. You don't need to specify <code>route</code>
          or <code>element</code> field. An item will be rendered as text instead of a hyperlink
          in this case so you can use it as a category label.</p>
      </div>

      <div id="default-open-level">
        <h4><code>defaultOpenLevel</code></h4>
        <p>Optional. Default value is <code>0</code> (everything is closed).</p>
      </div>
    </div>
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

<style>
#props {
  margin-top: 40px;

  div {
    margin-bottom: 40px;
  }
}
</style>
