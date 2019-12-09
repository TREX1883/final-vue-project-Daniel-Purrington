import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import store from './store'
import { store } from './store/store';
import VueRouter from 'vue-router';
import { routes } from './routes';
// import Vuetify from 'vuetify/lib';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false;
// Vue.http.options.root = 'https://final-project-vue.firebaseio.com/data.json';
Vue.http.options.root = 'https://project-vue-65b6f.firebaseio.com/data.json';
// https://project-vue-65b6f.firebaseio.com/
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
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// });
