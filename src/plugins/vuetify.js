import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const brands = {
  github: '#211F1F',
  php: '#7E57C2',
  laravel: '#E53935',
  docker: '#42A5F5',
  bootstrap: '#7E57C2',
  vue: '#009688',
  vuetify: '#81D4FA',
  mysql: '#FFA726',
  mamp: '#0277BD',
  js: '#FBC02D',
  git: '#F4511E',
  twitter: '#40C4FF',
  mdbootstrap: '#34B5E4',
  jquery: '#79CFF5'
};


export default new Vuetify({
  theme: {
    themes: {
      light: brands,
      dark: brands,
    }
  }
});
