<template>
  <div id="movie-view">
    <loading-bar :visible="loading"></loading-bar>
    <div class="card movie" :class="{ 'loaded': loaded }">
      <movie-box :movie="movie"></movie-box>
    </div>
  </div>
</template>

<script>
import movie from '../services/movie';
import movieBox from '../components/movie-box.vue';
import loadingBar from '../components/loading-bar.vue';

export default {
  components: {
    movieBox,
    loadingBar
  },
  data() {
    return {
      loading: true,
      movie: {}
    };
  },
  props: {
    loaded: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  mounted() {
    this.loading = true;
    // fetch movie data
    movie(this.$route.params.id)
     .then(data => {
       this.movie = data;
       this.loaded = true;
       this.loading = false;
     });
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';

.movie {
  line-height: 1.5;
  opacity: 0;
  overflow: hidden;
  transition: all .25s ease;

  &.loaded {
    opacity: 1;
  }
}
</style>
