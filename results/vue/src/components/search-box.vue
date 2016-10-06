<template>
  <form action="?" class="search__form" @submit="onSearch">
    <input type="text" class="search__input" placeholder="Search" v-model="searchTitle">
    <button type="submit" class="search__button" :disabled="isSearching || !searchTitle">
      <svg class="icon" viewBox="0 0 24 24" height="24" width="24">
        <use xlink:href="#search"></use>
      </svg>
    </button>
  </form>
</template>

<script>
import search from '../services/search';

export default {
  data() {
    return {
      searchTitle: '',
      isSearching: false,
    };
  },
  methods: {
    onSearch(e) {
      e.preventDefault();

      // reset results array in parent data
      this.$parent.results = [];
      this.$parent.noResults = false;
      this.isSearching = true;
      this.$parent.loading = true;

      search(this.searchTitle)
      .then(data => {
        this.isSearching = false;
        this.$parent.loading = false;

        // reset parent data every new search
        this.$parent.searchTitle = this.searchTitle

        if (data.Search && data.Search.length) {
          this.$parent.results = data.Search;
          this.$parent.totalResults = data.totalResults;
          this.$parent.pageResults = 1;
        } else {
          this.$parent.noResults = true;
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';

.search__form {
  position: relative;
  padding: 0 45px 0 0;
}

.search__input {
  border-width: 0;
  font-style: italic;
  height: 45px;
  letter-spacing: inherit;
  opacity: .85;
  padding: 10px 20px;
  width: 100%;
  transition: opacity .15s ease;

  &:focus {
    outline: none;
    opacity: 1;
  }
}

.search__button {
  background-color: @accent;
  border-width: 0;
  color: @text-light;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 45px;
  width: 45px;
  transition: background-color .25s ease;

  &[disabled] {
    background-color: @secondary;
    cursor: default;
  }
}
</style>
