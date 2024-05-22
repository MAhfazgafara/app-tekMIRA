import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/style.css';
import "@/plugins/vue-meta";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(far);

// Register the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
