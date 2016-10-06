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
  routes: [
    { name: 'search', path: '/', component: searchView },
    { name: 'movie', path: '/movie/:id', component: movieView }
  ],
  hashbang: false,
  mode: 'history',
  root: '/',
  saveScrollPosition: true
});

// start app
new Vue({
  el: '#app',
  router,
  render: h => h(app)
});
