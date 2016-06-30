<template>
  <div class="card hollow">
    <search-box></search-box>
  </div>
  <div class="card hollow" v-show="!results.length && noResults">
    <p><em>No results for &laquo;<span v-text="searchTitle"></span>&raquo;</em></p>
  </div>
  <div class="card hollow" v-show="results.length">
    <p><em>Search results for &laquo;<span v-text="searchTitle"></span>&raquo;</em></p>
    <ul class="search__results">
      <search-result v-for="r in results" :movie="r"></search-result>
    </ul>
  </div>
  <div class="card hollow" v-show="results.length < totalResults && results.length">
    <a href="#" class="more" @click="getMoreResults">Load more results</a>
  </div>
</template>

<script>
import search from '../services/search';
import searchBox from '../components/search-box.vue';
import searchResult from '../components/search-result.vue';

let persistData = null;

export default {
  components: {
    searchBox,
    searchResult
  },
  data () {
    return {
      searchTitle: '',
      results: [],
      totalResults: 0,
      pageResults: 0,
      noResults: false
    }
  },
  methods: {
    getMoreResults(e) {
      e.preventDefault();
      this.$router.app.loading = true;
      search(this.searchTitle, ++this.pageResults)
      .then(data => {
        this.results = this.results.concat(data.Search);
        this.$router.app.loading = false;
      });
    }
  },
  ready() {
    this.$router.app.loading = false;
  },
  route: {
    activate() {
      this.$data = persistData ? persistData : this.$data;
    },
    deactivate() {
      persistData = this.results.length ? this.$data : null;
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/variables.less';

.search__results {
  list-style: none;
  margin: 0;
  padding: 0;
}

.more {
  color: @accent;
  display: block;
  text-align: center;
  text-decoration: none;
  .label();
}
</style>
