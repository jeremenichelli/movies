<template>
  <li class="search__result" :movie="movie">
    <a v-link="{ name: 'movie',  params: { id: movie.imdbID } }" class="search__result-link">
      <h3 class="search__result-title">
        <span v-text="movie.Title"></span>
        <svg class="icon" viewBox="0 0 24 24" height="24" width="24">
          <use xlink:href="#action"></use>
        </svg>
      </h3>
      <p class="search__result-year" v-text="movie.Year"></p>
    </a>
  </li>
</template>

<script>
export default {
  props: [ 'movie' ]
}
</script>

<style lang="less">
@import '../styles/variables.less';

.search__result {
  padding: 30px 0;
}

.search__result + .search__result {
  border-width: 1px 0 0;
  border-style: solid;
  border-color: @secondary;
}

.search__result-link {
  color: inherit;
  text-decoration: none;
}

.search__result-title {
  line-height: 1.2em;
  margin: 0;
  position: relative;
  padding: 0 35px 0 0;
}

.search__result-year {
  line-height: 1.2em;
  margin: 0;
}

.search__result .icon {
  fill: @accent;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
