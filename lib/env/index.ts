/*
 * @Author: yejiahao-hg
 * @Date: 2022-09-20 12:14:36
 * @Last Modified by: yejiahao-hg
 * @Last Modified time: 2024-07-19 17:32:50
 * 全局环境变量，根据ua进行设备判断
 */

export const userAgent = window.navigator.userAgent.toLocaleLowerCase();
export const isiOS = /iphone|ipad|ipod/.test(userAgent);
export const isAndroid = /android/.test(userAgent);

export const mode = import.meta.env.MODE;
export const search = window.location.href.indexOf('#')
  ? new URLSearchParams(window.location.href.replace('#', ''))
  : new URLSearchParams(window.location.search);

export const isDebug = search.get('is-debug') === 'true';
export const isMock = search.get('isMock') === 'true';

export const isWKWebView = !!window.webkit?.messageHandlers;
export const isLocal = import.meta.env.VITE_APP_ENV === 'dev';
export const isPreview = import.meta.env.VITE_APP_ENV === 'preview';
export const isTest = import.meta.env.VITE_APP_ENV === 'test';
export const isProduction = import.meta.env.VITE_APP_ENV === 'production';
export const isDevelopment = !isProduction;
const sex = search.get('gender');
const bundle = search.get('bundle-id');
export const token = search.get('token');
// ringo 停用token采用ticket验证
export const ticket = search.get('ticket');

export const nation = search.get('nation');
export const appVersion = search.get('app-version');
export const uid = search.get('uid');
export const gender = sex ? sex.toUpperCase() : '';
export const roomType = search.get('room_type');
export const deviceLevel = search.get('device-level');
export const secondModule = search.get('second_module');
export const DEFAULT_APPID = 'ringo';
export const appid = search.get('appid') || DEFAULT_APPID;

export let lang: string = search.get('lang') || '';
export let keySuffix: string = search.get('key_suffix') || '';

const dpi = window.devicePixelRatio;
let querySafeTop = search.get('safeTop');
export const safeTop: number = querySafeTop ? parseInt(querySafeTop) / dpi : 0;

let querySafeBottom = search.get('safeBottom');
export const safeBottom: number = querySafeBottom ? parseInt(querySafeBottom) / dpi : 0;
let queryNavigationBar = search.get('navigationBar');
export const navigationBar: number = queryNavigationBar ? parseInt(queryNavigationBar) / dpi : 0;

let isInAppUA: boolean = /ringo/.test(userAgent);
let isInApp: boolean = isInAppUA;

if (!isInApp) {
  if (isAndroid) {
    isInApp = bundle === 'world.ringo.android';
  } else if (isiOS) {
    isInApp = bundle === 'world.ringo.ios';
  }
}
export { isInApp, isInAppUA };

let langMap = [
  // 'de',
  // 'fr',
  // 'it',
  // 'ja',
  // 'ko',
  // 'ro',
  // 'ru',
  'ar',
  'en',
  'es',
  'hi',
  'id',
  'pt',
  'th',
  'tr',
  'ms',
  'hi',
  'vi',
  'zh_TW'
];

if (lang === 'zh') {
  lang = 'zh_TW';
}

if (langMap.indexOf(lang as string) < 0) {
  lang = 'en';
}

export let isAr: boolean = lang === 'ar';

export default {
  userAgent,
  isAr,
  isiOS,
  isAndroid,
  isWKWebView,
  isLocal,
  isPreview,
  isTest,
  isDevelopment,
  isProduction,
  isDebug,
  isMock,
  isInApp,
  mode,
  token,
  lang,
  nation,
  appVersion,
  appid,
  bundle,
  uid,
  gender,
  roomType,
  safeTop,
  safeBottom,
  deviceLevel,
  secondModule,
  ticket
};

export enum GenderEnum {
  Female = 'F',
  Male = 'M'
}

export enum RoomRoleEnum {
  Audience = 0,
  Admin = 1,
  Roomer = 2,
  Local = 3
}
