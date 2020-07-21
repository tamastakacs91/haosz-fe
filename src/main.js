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
  'HomePage/mobile-header',
  'HomePage/Tabs/tabs',
  'HomePage/Tabs/tab-item',
  'HomePage/Tabs/Children/event-summary',
  'HomePage/Tabs/Children/event-summary2',
  'HomePage/Tabs/Children/outro',
  'HomePage/Tabs/Children/signature',
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
