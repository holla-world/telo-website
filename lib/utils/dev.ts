import { isDebug } from '@lib/env';

if (isDebug) {
  // jenkins 的nodejs版本不支持 top await
  (async function () {
    let VConsole = (await import('vconsole')).default;
    new VConsole();
    console.log(`now url is ${window.location.href}`);
  })();
}
