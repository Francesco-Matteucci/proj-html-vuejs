import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  once: true,
});
import App from './App.vue'


createApp(App).mount('#app')
