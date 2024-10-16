import { ref } from 'vue';
import { isSupportWebp } from '@lib/style/variables';

export function useSupportWebp() {
  let isSupport = ref(true);

  isSupportWebp().then((value) => {
    isSupport.value = value;
  });

  return isSupport;
}
