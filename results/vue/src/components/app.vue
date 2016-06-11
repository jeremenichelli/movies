<template>
  <!-- SVG ICONS -->
  <svg style="display:none">
    <defs>
      <g id="action">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </g>
      <g id="back">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </g>
    </defs>
  </svg>

  <!-- APP -->
  <div id="app">
    <loading-bar :visible="loading"></loading-bar>
    <header>
      <h1>Movies</h1>

      <h2 v-show="$route.name === 'search'">Look up fast information about your favorite titles</h2>

      <h2 v-show="$route.name === 'movie'">
        <a v-link="{ path: '/' }" class="back">
          <svg class="icon" viewBox="0 0 24 24" height="24" width="24">
            <use xlink:href="#back"></use>
          </svg>
          <span>Back to Search</span>
        </a>
      </h2>

    </header>
    <main class="view">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import loadingBar from './loading-bar.vue';

export default {
  data() {
    return {
      loading: true
    }
  },
  components: {
    loadingBar
  }
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
