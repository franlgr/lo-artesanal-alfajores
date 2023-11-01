import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/app.css'; 
import 'add-to-homescreen';// 
import "@fortawesome/fontawesome-free/css/all.min.css";
const savedHistory = localStorage.getItem("history");
if (savedHistory) {
  store.commit("SET_HISTORY", JSON.parse(savedHistory));
}

// Vue.config.productionTip = false;

createApp(App).use(store).use(router).mount('#app')
