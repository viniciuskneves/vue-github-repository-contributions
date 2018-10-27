import Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(HighchartsVue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
