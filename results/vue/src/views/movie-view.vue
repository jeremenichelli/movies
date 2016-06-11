<template>
  <div class="card movie" :class="{ 'loaded': loaded }">
    <movie-box :movie="movie"></movie-box>
</template>

<script>
import movie from '../services/movie';
import movieBox from '../components/movie-box.vue';

export default {
  components: {
    movieBox
  },
  data() {
    return {
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
  attached() {
    this.$router.app.loading = true;
    // fetch movie data
    movie(this.$route.params.id)
     .then(data => {
       this.movie = data;
       this.loaded = true;
       this.$router.app.loading = false;
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
