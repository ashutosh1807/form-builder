import Vue from 'vue'
import App from './App.vue'
import { saveAs } from 'file-saver';
import bModal from 'bootstrap-vue/es/components/modal/modal'
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
Vue.component('b-modal', bModal);
Vue.directive('b-modal', bModalDirective);

new Vue({
  el: '#app',
  render: h => h(App)
})
