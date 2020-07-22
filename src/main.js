import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './i18n';

const register = (Vue) => (path) => {
  const name = (path) => path.split('/')[path.split('/').length - 1];
  const component = (path) => require('@/components/' + path + '.vue').default;
  Vue.component(name(path), component(path));
};

const components = [
  'Navbar/navbar',
  'Navbar/navbar-desktop',
  'Navbar/navbar-mobile',
  'Home/mobile-header',
  'Home/Tabs/tabs',
  'Home/Tabs/tab-item',
  'Home/Tabs/Children/event-summary',
  'Home/Tabs/Children/event-summary2',
  'Home/Tabs/Children/outro',
  'Home/Tabs/Children/signature',
  'Signup/doctor',
  'Signup/exhibitor',
  'Signup/terms',
  'Signup/more-info',
];
components.forEach(register(Vue));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
