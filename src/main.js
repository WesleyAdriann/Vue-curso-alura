import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from "./routes";
import './directives/Transform';
import 'bootstrap/dist/css/bootstrap.css'

import VeeValidate, { Validator } from 'vee-validate';
import pt_BR from 'vee-validate/dist/locale/pt_BR';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/'
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode : 'history'
});

Vue.use(VeeValidate);
Validator.localize('pt_BR', pt_BR);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
