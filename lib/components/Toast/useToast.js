import { createApp, reactive } from 'vue';

import Toast from '@lib/components/Toast/index.vue';

const msg = reactive({
  message: '134234',
  duration: 3000,
});
const toastDom = document.createElement('div');
const $Toast = createApp(Toast).mount(toastDom);
document.body.appendChild($Toast.$el);

const toastComponent = {
  show(message, duration = 3000, callback) {
    $Toast.show(message, duration, callback);
  },
};
const toast = toastComponent.show;
export { toast };
