<template>
  <section>
    <h2>Examples</h2>

    <div id="buttons">
      <a class="button" href="#/examples/elements">Elements only</a>
      <a class="button" href="#/examples/router">Router only</a>
      <a class="button" href="#/examples/combined">Combined</a>
      <a class="button" href="#/examples/this">This website</a>
    </div>

    <router-view></router-view>
  </section>
</template>

<style>
@import '../assets/common/settings.css';

#buttons {
  margin:          40px 0;
  display:         flex;
  flex-wrap:       wrap;
  justify-content: center;

  a {
    border-color:     $green-vue;
    background-color: $green-vue;
    margin-right:     20px;
    margin-bottom:    20px;
    width:            250px;

    &:hover {
      border-color:     $blue-vue;
      background-color: $blue-vue;
    }
  }
}

@media only screen and (min-width: $breakpoint-large) {
  #buttons {
    justify-content: flex-start;
    margin-top:      20px;

    a {
      width: 150px;
    }
  }
}
</style>
