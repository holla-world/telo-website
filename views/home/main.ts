import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import './main.scss';

let maskDom: HTMLElement;

function ready() {
  let mobileMenuDom = document.body.querySelector('.mobile-header-right');

  if (mobileMenuDom) {
    mobileMenuDom.addEventListener('click', () => {
      let rightDom = mobileMenuDom.previousElementSibling as (HTMLElement | null);
      if (rightDom) {
        if (rightDom.style.display) {
          rightDom.style.display = '';
          maskDom && maskDom.remove();
        } else {
          rightDom.style.display = 'block';
          maskDom = document.createElement('div');
          maskDom.classList.add('mask');
          document.body.appendChild(maskDom);
        }
      }
    });
  }

  let url = new URL(window.location.href);
  let safeTopStr = url.searchParams.get('safeTop');
  if (safeTopStr) {
    let safeTop = parseInt(safeTopStr);
    safeTop = Math.floor(safeTop / window.devicePixelRatio);
    let header = document.body.querySelector<HTMLElement>('.header');
    if (header) {
      header.style.paddingTop = (safeTop + 36) + 'px';
    }
  }
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  ready();
} else {
  document.addEventListener('DOMContentLoaded', ready);
}