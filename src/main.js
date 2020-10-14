import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const register = (Vue) => (path) => {
  const name = (path) => path.split('/')[path.split('/').length - 1];
  const component = (path) => require('@/components/' + path + '.vue').default;
  Vue.component(name(path), component(path));
};

const components = [
  'Navbar/navbar',
  'Navbar/navbar-desktop',
  'Navbar/navbar-extension-desktop',
  'Navbar/navbar-mobile',
  'Home/mobile-header',
  'Home/main-greeting',
  'Home/Tabs/tabs',
  'Home/Tabs/tab-item',
  'Home/Tabs/Children/event-summary',
  'Home/Tabs/Children/event-summary2',
  'Home/Tabs/Children/outro',
  'Home/Tabs/Children/signature',
  'Registration/doctor',
  'Registration/exhibitor',
  'Registration/terms',
  'Registration/more-info',
  'Registration/doctor-payables',
  'Registration/sponsor-payables',
  'Registration/error-snackbar',
  'Programs/title-bar',
  'Programs/presentation-room',
  'Programs/jazzpresso-topics',
  'JazzPresso/audio-player',
  'JazzPresso/jazz-modal',
  'PresentationRoom/presentation-player',
  'ExhibitorRoom/exhibitor-player',
];
components.forEach(register(Vue));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
