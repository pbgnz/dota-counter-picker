import Vue from 'vue';
import App from './App.vue';

window.Event = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
