<template>
  <div>
    <component :is="currentView"></component>
  </div>
</template>

<script lang="ts" setup>
import MobileView from './phone/index.vue';
import DesktopView from './desktop/index.vue';
import { onMounted, ref } from 'vue';
const currentView = ref();
const setCurrentView = () => {
  // 设置屏幕宽度的阈值，比如 768px
  currentView.value = window.innerWidth <= 768 ? MobileView : DesktopView;
};
onMounted(() => {
  setCurrentView();
  window.addEventListener('resize', setCurrentView);
});
</script>
