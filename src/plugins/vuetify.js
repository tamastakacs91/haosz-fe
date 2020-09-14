import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#3469AF',
        secondary: '#E9E9E9',
      },
    },
  },
});
