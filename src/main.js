import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import store from './store'
import { store } from './store/store';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vuelidate from 'vuelidate'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueApollo)

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

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
  apolloProvider,
  render: h => h(App)
}).$mount('#app')


// https://console.firebase.google.com/u/0/project/project-vue-65b6f/database/project-vue-65b6f/data