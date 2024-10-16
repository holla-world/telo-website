import { isProduction, uid, isLocal } from '@lib/env';
import browserClient from '@apmplus/web'; // 配置参数

export function initAPM() {
  browserClient('init', {
    aid: 520302, // 应用唯一标识，必填参数
    token: 'd83fee26ec8d4d27bb8e860146a589a1', // 应用 token,必填参数
    env: isProduction ? 'prod' : isLocal ? 'local' : 'test',
    userId: uid ? uid : '',
    plugins: {
      jsError: {
        dedupe: true,
        onerror: false,
        onunhandledrejection: false,
      },
    },
  });
  // 开启上报
  browserClient('start');
  return browserClient;
}
