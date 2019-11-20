import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import Vuetify from 'vuetify/lib';

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.http.options.root = 'https://final-project-vue.firebaseio.com/data.json';
// Vue.http.interceptors.push((request, next) => {
//     if (request.method == 'POST') {
//       request.method = 'PUT';
//     }
//     next(response => {
//       response.json = () => { return {messages: response.body}}
//     });
// });

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// });
