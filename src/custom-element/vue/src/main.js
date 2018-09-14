import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import VueDataTable from './components/index.vue'

Vue.use(vueCustomElement)
Vue.customElement('vue-data-table', VueDataTable)
