import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/regisztracio/:type',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/program',
    name: 'Programs',
    component: () => import('../views/Programs.vue'),
  },
  {
    path: '/bejelentkezes',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '/jazzpresszo',
    name: 'JazzPressoPage',
    component: () => import('../views/JazzPressoPage.vue'),
  },
  {
    path: '/jazzpresszo/:topic',
    name: 'JazzPresso',
    component: () => import('../views/JazzPresso.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
