import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/style/tailwind.css';
import './assets/style/global.css';

import { registerGlobalComponent } from './utils/import';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App);
    registerGlobalComponent(app);
    app.use(createPinia());
    app.use(router);
    app.mount('#app');
  }
});
