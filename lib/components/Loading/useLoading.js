import { createApp, reactive } from 'vue';
import Loading from '@lib/components/Loading/index.vue';

const state = reactive({
  loading: false,
  count: 0,
});

const $loading = createApp(Loading).mount(document.createElement('div'));
document.body.appendChild($loading.$el);

export const showLoading = (message) => {
  state.count++;
  if (state.loading) return;
  state.loading = true;
  $loading.show(message);
};

export const hideLoading = () => {
  if (state.count === 0) {
    return;
  }
  state.count--;
  if (state.count === 0) {
    state.loading = false;
    $loading.hide();
  }
};
export function useLoading() {
  return { showLoading, hideLoading };
}
