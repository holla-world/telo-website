import { createApp } from 'vue';
import LottiePlayer from './index.vue';
import loadingJson from './animation/loading.json';
import logoLoadingJson from './animation/logo_loading.json';

function show(dom: HTMLElement, animationData: any) {
  Object.assign(dom.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });
  let mask = document.createElement('div');
  Object.assign(mask.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
  });

  createApp(LottiePlayer, {
    animationData,
    style: {
      height: '30px',
    },
  }).mount(dom);
  document.body.appendChild(dom);
  dom.appendChild(mask);
  return dom;
}

function useLoading(loadingAnimation: any) {
  let dom: HTMLElement = document.createElement('div');
  dom.classList.add('lottie-loading-mask');

  // let loadingAnimation: any;
  // let defreed = import(path).then((data) => {
  //   loadingAnimation = data.default;
  // });

  return {
    showLoading() {
      show(dom, loadingAnimation);
      // if (loadingAnimation) {
      //   show(dom, loadingAnimation);
      // } else {
      //   defreed.then(() => {
      //     show(dom, loadingAnimation);
      //   });
      // }
    },
    hideLoading() {
      return dom.remove();
    },
  };
}

export function useLoadingLottie() {
  return useLoading(loadingJson);
}

export function useLoadingLogo() {
  return useLoading(logoLoadingJson);
}
