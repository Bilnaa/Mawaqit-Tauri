import {
    createRouter,
    createWebHistory
  } from "vue-router";

  import Home from './pages/home/home-page.vue';

  export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: Home
      }
    ]
  });