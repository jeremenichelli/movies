<template>
  <div id="app">
    <header>
      <h1>Movies</h1>
      <h2 v-show="$route.name === 'search'">Look up fast information about your favorite titles</h2>
      <h2 v-show="$route.name === 'movie'">
        <router-link :to="{ path: '/' }" class="back">
          <svg class="icon" viewBox="0 0 24 24" height="24" width="24">
            <use xlink:href="#back"></use>
          </svg>
          <span>Back to Search</span>
        </router-link>
      </h2>

    </header>
    <main class="view">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less">
@import '../styles/normalize.less';
@import '../styles/variables.less';

// GENERAL STYLES
body {
  background-color: @background-medium;
  color: @text-dark;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  letter-spacing: .015em;

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;

  &:before, &:after {
    box-sizing: inherit;
  }
}

img {
  max-width: 100%;
}

#app {
  padding: 0 1em 2em;
}

header {
  margin: 0 0 45px;
}

h1 {
  font-weight: 100;
  line-height: 1.1;
  margin-bottom: 0;
}

h2 {
  font-size: 1em;
  font-weight: 800;
  height: 25px;
  line-height: 25px;
}

h2 span {
  vertical-align: middle;
}

.back {
  color: inherit;
  text-decoration: none;
}

// BIG PHONES AND TABLETS
@media (min-width: @x-medium) {
  body {
    font-size: 16px;
  }

  #app {
    padding-left: 2em;
    padding-right: 2em;
  }
}

.card {
  margin: auto;
  max-width: 640px;
  padding: 10px;
}

.card:not(.hollow) {
  background-color: @background-light;
}

.icon {
  vertical-align: middle;
  fill: currentColor;
}

// DESKTOP
@media (min-width: @x-desktop) {
  body {
    font-size: 18px;
  }

  header {
    margin-bottom: 60px;
  }

  h1 {
    font-size: 3em;
  }

  .card {
    padding: 35px;
  }
}
</style>
