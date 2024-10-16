import { safeTop, safeBottom, navigationBar, isiOS, isAndroid } from '@lib/env';
import { reactive } from 'vue';

export let globalStyleVariables: {
  isSupportWebp: boolean;
} = reactive({
  isSupportWebp: true,
});

document.documentElement.style.setProperty('--safe-top', safeTop + 'px');
document.documentElement.style.setProperty(
  '--safe-bottom',
  (safeBottom || 35) + 'px'
);
document.documentElement.style.setProperty(
  '--navigationBar',
  navigationBar + 'px'
);

if (isiOS) {
  document.documentElement.classList.add('ios-device');
}
if (isAndroid) {
  document.documentElement.classList.add('android-device');
}

export async function isSupportWebp(): Promise<boolean> {
  return new Promise((resolve) => {
    var image = new Image();
    image.onerror = () => {
      resolve(false);
    };
    image.onload = () => {
      resolve(true);
    };
    image.src =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  });
}

isSupportWebp().then((support) => {
  if (support) {
    document.documentElement.classList.add('webp');
  } else {
    document.documentElement.classList.add('no-webp');
  }
  globalStyleVariables.isSupportWebp = support;
});

export function pxToVW(w: number) {
  return ((w / 375) * 100).toFixed(2) + 'vw';
}
