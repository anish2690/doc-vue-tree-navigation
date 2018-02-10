<template>
  <div id="app" :class="{'navOpen': navOpen}">
    <div class="container">
      
      <span id="hamburger" @click="toggleNav()">
        <i class="fas fa-2x fa-bars"></i>
      </span>
      <nav>
        <vue-tree-navigation :items="items" :defaultOpenLevel="1" />
      </nav>
      <main>
        <a id="github" href="https://github.com/MisRob/vue-tree-navigation" target="_blank">
          <i class="fab fa-2x fa-github"></i>
        </a>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
require('./assets/common/base.css');
require('./assets/common/large.css');

export default {
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
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = ! this.navOpen;
    },
    hideNav() {
      this.navOpen = false;
    },
    onWindowClick(e) {
      if (! e.target.classList.contains('hamburger') &&
          ! document.getElementById('hamburger').contains(e.target) &&
          ! e.target.classList.contains('navigation-toggle') &&
          ! e.target.classList.contains('navigation-toggle-icon')) {
        this.hideNav();
      }
    },
  },
  mounted() {
    const self = this;
    self.$nextTick(() => {
      window.addEventListener('click', self.onWindowClick);
    });
  },
  beforeDestroy: function () {
    window.removeEventListener('click', self.onWindowClick);
  },
};
</script>
