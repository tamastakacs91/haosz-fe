import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

function checkIsLoggedIn(to, from, next) {
  var isLoggedIn = false;
  if (window.sessionStorage.getItem('token')) isLoggedIn = true;
  else isLoggedIn = false;
  if (isLoggedIn) {
    next();
  } else {
    next('/site/bejelentkezes');
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/site/regisztracio/:type',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
  },
  {
    path: '/site/program',
    name: 'Programs',
    component: () => import('../views/Programs.vue'),
  },
  {
    path: '/site/bejelentkezes',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue'),
  },
  {
    path: '/site/uj-jelszo-beallitasa',
    name: 'NewPassword',
    component: () => import('../views/NewPassword.vue'),
  },
  {
    path: '/site/eloadoterem',
    name: 'PresentationRoom',
    beforeEnter: checkIsLoggedIn,
    component: () => import('../views/PresentationRoom.vue'),
  },
  {
    path: '/site/bemutatoterem',
    name: 'ExhibitorRoom',
    beforeEnter: checkIsLoggedIn,
    component: () => import('../views/ExhibitorRoom.vue'),
  },
  {
    path: '/site/jazzpresszo',
    name: 'JazzPressoMain',
    beforeEnter: checkIsLoggedIn,
    component: () => import('../views/JazzPressoMain.vue'),
  },
  {
    path: '/site/jazzpresszo/:topic',
    name: 'JazzPressoTopic',
    beforeEnter: checkIsLoggedIn,
    component: () => import('../views/JazzPressoTopic.vue'),
  },
  {
    path: '/site/elo-kiallitoterem',
    name: 'LiveExhibitorRoom',
    beforeEnter: checkIsLoggedIn,
    component: () => import('../views/LiveExhibitorRoom.vue'),
  },
  {
    path: '/site/admin',
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
