import i18n, {
  useI18n,
  useIsArLang,
  loadLanguage,
} from './request';
import { LogError } from '@lib/fetch/log';
import { createApp } from 'vue';

function renderRetry() {
  import('./Retry.vue').then((module) => {
    let $retry = createApp(module.default).mount(document.createElement('div'));
    document.body.appendChild($retry.$el);
  });
}

export function setLanguage() {
  return loadLanguage().catch((fetchError: LogError) => {
    renderRetry();
  });
}

export default i18n;
export { useI18n, useIsArLang, loadLanguage };
