import Vue from 'vue'
import VueRouter from 'vue-router';

// components
import app from './components/app.vue'

// views
import searchView from './views/search-view.vue';
import movieView from './views/movie-view.vue';

// create router instance and define routes
Vue.use(VueRouter);

let router = new VueRouter({
  hashbang: false,
  history: true,
  root: '/',
  saveScrollPosition: true
});

router.map({
  '/': {
    component: searchView,
    name: 'search'
  },
  '/movie/:id': {
    component: movieView,
    name: 'movie'
  }
});

// start app
router.start(app, 'app');
