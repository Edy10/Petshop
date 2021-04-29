import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.filter('grana', (valor) => {
  if(typeof valor ==! 'number')
    return valor;
  return `R$ ${valor.toFixed(2)}`;
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
