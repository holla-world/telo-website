import '@lib/style/public.scss';
// import './main.scss'
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n, { setLanguage } from '@lib/i18n';

const app = createApp(App);

app.use(router);
app.use(i18n);
(async function () {
  setLanguage().then(() => {
    app.mount('#app');
  })
})();
