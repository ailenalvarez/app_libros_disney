
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFilter from 'vue-filter';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;
Vue.use(VueFilter);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
