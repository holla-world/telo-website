import { uid, isProduction, isLocal } from '@lib/env';
import { random } from 'lodash-es';
// import bridge from '@lib/bridge';
// import { initAPM } from './apm';
import '@lib/polyfill';

// 火山引擎WebPro
// let isLoadAPM = random(1, 10, false) <= 7;
// if (uid && uid[uid.length - 1] === '1' && isLoadAPM) {
//   initAPM();
// }

// let globalUserInfo: any;
// let queue = <any>[];
// let isReady: boolean = false;

type ReportConfigType = {
  dr?: boolean;
};
// (function (win: any, export_obj) {
//   win['TeaAnalyticsObject'] = export_obj;
//   if (!win[export_obj]) {
//     let _collect: any = function () {
//       _collect.q.push(arguments);
//     };
//     _collect.q = _collect.q || [];
//     win[export_obj] = _collect;
//   }
//   win[export_obj].l = +new Date();
// })(window, 'collectEvent');

// // 初始化 dr
// const drAppId = isProduction ? 259868 : 259869;
// function initDr() {
//   return import('./collect-autotrack-rangers.js').then(() => {
//     window.collectEvent('init', {
//       app_id: drAppId, //  必须替换成申请的
//       channel: 'sg', // cn 国内 sg可选
//       log: true, // 开启调试日志
//       autotrack: false, // 开启全埋点采集，默认关闭，需要热力图及圈选功能可开启
//     });
//     window.collectEvent('start');
//     window.collectEvent('config', {
//       user_unique_id: globalUserInfo ? globalUserInfo.id : null, //设置唯一用户ID
//     });
//   });
// }

// // 上报打点 dr
// export function reportDr(eventName: string, params: any) {
//   window.collectEvent(eventName, { ...params });
// }

// // dr predefine_pageview 事件
// export function predefinePageviewDr(e: any) {
//   return window.collectEvent.predefinePageView(e);
// }

// function handleReport(
//   eventName: string,
//   params: any,
//   config: ReportConfigType
// ) {
//   if (config.dr) {
//     reportDr(eventName, params);
//   }
// }

// bridge
//   .getUserInfo()
//   .then((user) => {
//     globalUserInfo = user;
//     return initDr();
//   })
//   .catch((err) => {
//     console.error(err);
//     return initDr();
//   })
//   .finally(() => {
//     isReady = true;
//     queue.forEach(
//       ({
//         eventName,
//         params,
//         config,
//       }: {
//         eventName: string;
//         params: any;
//         config: ReportConfigType;
//       }) => {
//         handleReport(eventName, params, config);
//       }
//     );
//   });

export default function report(
  eventName: string,
  params: any = {},
  config: ReportConfigType = {
    dr: true
  }
) {
  // if (isReady) {
  //   handleReport(eventName, params, config);
  // } else {
  //   queue.push({ eventName, params, config });
  // }
}
