import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import Vuetify from 'vuetify/lib';

Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// });
