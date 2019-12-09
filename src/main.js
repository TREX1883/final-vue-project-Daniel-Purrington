import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import store from './store'
import { store } from './store/store';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false;
Vue.http.options.root = 'https://project-vue-65b6f.firebaseio.com/data.json';
// Vue.http.interceptors.push((request, next) => {
//     if (request.method == 'POST') {
//       request.method = 'PUT';
//     }
//     next(response => {
//       response.json = () => { return {messages: response.body}}
//     });
// });

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

new Vue({
  vuetify,
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')


// https://console.firebase.google.com/u/0/project/project-vue-65b6f/database/project-vue-65b6f/data