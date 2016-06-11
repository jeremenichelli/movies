<template>
    <h3 class="movie__title" v-text="movie.Title"></h3>
    <dl class="movie__data">
      <dt>Released</dt>
      <dd v-text="movie.Released"></dd>
      <dt>Runtime</dt>
      <dd v-text="movie.Runtime"></dd>
      <dt v-if="movie.Director !== 'N/A'">Director</dt>
      <dd v-if="movie.Director !== 'N/A'" v-text="movie.Director"></dd>
      <dt>Cast</dt>
      <dd v-text="movie.Actors"></dd>
      <dt>IMDb Rating</dt>
      <dd v-text="movie.imdbRating"></dd>
    </dl>
    <img :src="movie.Poster" alt="" class="movie__thumb" v-if="movie.Poster !== 'N/A'">
    <p class="movie__plot">
      <span class="movie__plot__label">Plot</span>
      <span v-text="movie.Plot"></span>
    </p>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';

.movie__title {
  font-size: 1.45em;
  margin: 0 0 .67em;
}

.movie__data {
  clear: both;

  dt {
    color: @accent;
    display: inline-block;
    .label();
  }

  dd {
    display: inline;
    margin: 0;

    &:after {
      color: @secondary;
      content: '/';
      font-weight: 400;
      margin: 0 5px 0 8px;
    }

    &:last-child {

      &:after {
        display: none;
      }
    }
  }
}

.movie__plot__label {
  color: @secondary;
  .label();
}

.movie__plot {
  margin-top: -.25em;
}

.movie__thumb {
  background-color: @secondary;
  float: left;
  margin: 0 25px 10px 0;
  min-height: 100px;
  width: 100px;
}


// BIG PHONES AND TABLETS
@media (min-width: @x-medium) {
  .movie__thumb {
    width: 150px;
  }

  .movie__plot {
    font-size: .9em;
  }
}

// DESKTOP
@media (min-width: @x-desktop) {
  .movie__thumb {
    width: 200px;
  }
}
</style>
