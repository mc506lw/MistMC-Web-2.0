import { createApp } from 'vue';
import App from './App.vue';
import 'aos/dist/aos.css';
import AOS from 'aos';

// 初始化 AOS
AOS.init();

// 创建 Vue 应用实例
const app = createApp(App);

// 挂载应用
app.mount('#app');
