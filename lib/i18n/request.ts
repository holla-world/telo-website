// 不要在这里import 任何 vue component
import { createI18n } from 'vue-i18n';
import { lang, isLocal, appid, DEFAULT_APPID } from '@lib/env';
import { LogError, log } from '@lib/fetch/log';
import { floor } from 'lodash-es';

enum I18nNamespaceEnum {
  Web = 'web'
}

const DEFAULT_LOCALSTORAGE_EXPIRE_TIME = 1000 * 60 * 20;
const i18n = createI18n({
  locale: lang,
  legacy: false,
  globalInjection: true,
});

function getLocalStorageSize() {
  function formatSizeStr(v: number) {
    if (v > 1024 * 1024) {
      return floor(v / 1024 / 1024, 2) + 'MB';
    } else {
      return floor(v / 1024, 2) + 'KB';
    }
  }

  let result: { [key: string]: any } = {};
  let total = 0;
  for (var key in window.localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let size = new Blob([window.localStorage[key]]).size;
      let sizeStr = '';
      total += size;
      sizeStr = formatSizeStr(size);
      result[key] = sizeStr;
    }
  }
  result._total = formatSizeStr(total);
  return result;
}

export class LanguageData {
  format(key: string, params: any[] = []) {
    if (Array.isArray(params)) {
      return i18n.global.t(key, params);
    } else {
      return i18n.global.t(key, Array.from(arguments).slice(1));
    }
  }
}

let languageData: LanguageData;
let hasShowI18nMessage = false;

function useI18n() {
  return languageData;
}

function fetchI18nMessage(
  scriptUrl: string,
  cacheKey?: string,
  expireTime: number = DEFAULT_LOCALSTORAGE_EXPIRE_TIME
) {
  let defreed: Promise<any>;

  // 需要兼容不支持 import 动态加载的 webview
  // try {
  //   import.meta.url;
  //   defreed = import(scriptUrl);
  // } catch (e) {
  defreed = fetch(scriptUrl)
    .then((res) => {
      if (res.ok) {
        return res.text();
      } else {
        throw new LogError(
          `fetch i18n message error: ${res.status} ${res.statusText}`,
          {
            params: {
              status: res.status,
              statusText: res.statusText,
            },
          }
        );
      }
    })
    .then((resText) => {
      let messages = {};
      if (resText) {
        let jsonText = resText?.replace('export default', 'return');
        messages = Function(jsonText)();
      }
      return {
        default: messages,
      };
    });
  // }
  return defreed
    .then(({ default: messages }) => {
      setVueI18nMessages(messages, lang);
      if (cacheKey) {
        try {
          window.localStorage.setItem(
            cacheKey,
            JSON.stringify({
              expire: new Date().valueOf() + expireTime,
              messages,
            })
          );
        } catch (error) {
          let sizeInfo = getLocalStorageSize();
          log(error, {
            name: 'I18nError',
            source: 'I18nCache',
            params: {
              sizeInfo: JSON.stringify(sizeInfo),
            },
          });
          window.localStorage.clear();
        }
      }
    })
    .catch((error) => {
      let extraParams = {};
      if (error && error.params) {
        extraParams = error.params;
      }
      let fetchError = new LogError(error, {
        name: 'I18nError',
        source: 'PullI18nMessageError',
        params: {
          scriptUrl,
          ...extraParams,
        },
      });
      log(fetchError);
      throw fetchError;
    });
}

async function setVueI18nMessages(messages: any, language: string) {
  if (isLocal && hasShowI18nMessage === false) {
    console.group('%c----- i18n message ------', 'color: forestgreen');
    console.log(messages);
    console.groupEnd();
    hasShowI18nMessage = true;
  }

  i18n.global.locale.value = language;
  i18n.global.setLocaleMessage(language, messages);
  languageData = new LanguageData();
  console.log('languageData: ', languageData);
  

  if (language === 'ar') {
    await import('./ar');
  }
}

function loadCDNMessages(lang: string, namespace: I18nNamespaceEnum) {
  const cacheKey = `cdnnetworks_i18n_cache_${namespace}_${lang}`;
  const expireTime = DEFAULT_LOCALSTORAGE_EXPIRE_TIME;

  let cacheContent = window.localStorage.getItem(cacheKey);
  if (cacheContent) {
    let cacheObject = JSON.parse(cacheContent);
    if (
      cacheObject.messages &&
      cacheObject.expire &&
      cacheObject.expire >= new Date().valueOf()
    ) {
      setVueI18nMessages(cacheObject.messages, lang);
      return cacheObject.messages;
    }
  }

  let scriptUrl: string = '';
  if (namespace === I18nNamespaceEnum.Web) {
    scriptUrl = `https://assets.ringo.cool/web/i18n/ringo_${lang}_message.js`;
  }
  if (scriptUrl) {
    return fetchI18nMessage(scriptUrl, cacheKey, expireTime)
      .catch((fetchError: LogError) => {
        let backupScript = scriptUrl + `?r=${Date.now()}`;
        return fetchI18nMessage(backupScript, cacheKey, expireTime).then(() => {
          log('load i18nMessage success by random r', {
            name: 'I18nError',
            source: 'PullI18nMessageSuccessRandomR',
            params: {
              backupScript,
            },
          });
        });
      })
      .catch((fetchError: LogError) => {
        const backupMessageUrl = new URL('./backup.js', import.meta.url);
        return fetchI18nMessage(backupMessageUrl.href).then(() => {
          log('load i18nMessage success by backup', {
            name: 'I18nError',
            source: 'PullI18nMessageSuccessBackup',
            params: {
              backupMessageUrl: backupMessageUrl.href,
            },
          });
        });
      });
  } else {
    return Promise.reject('no i18n scriptUrl');
  }
}

function useIsArLang() {
  return i18n.global.locale.value === 'ar';
}

async function loadLanguage(language = lang) {
  return loadCDNMessages(language, I18nNamespaceEnum.Web);
}

export default i18n;
export { useI18n, useIsArLang, loadLanguage };
