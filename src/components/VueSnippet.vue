<template>
  <div class="vue-snippet">
    <pre v-highlightjs><code class="javascript">
      <strong class="tag">&lt;template&gt;</strong>
        <slot name="template"></slot>
      <strong class="tag">&lt;/template&gt;</strong>

      <strong class="tag">&lt;script&gt;</strong>
        <slot name="script"></slot>
      <strong class="tag">&lt;/script&gt;</strong>
    </code></pre>
  </div>
</template>
