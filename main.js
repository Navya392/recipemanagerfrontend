import { createApp } from 'vue';
import App from './App.vue';
//import router from './router';
import router from './index.js'; // Import your router setup

const app = createApp(App);
app.use(router); // Attach the router to the app
app.mount('#app');
