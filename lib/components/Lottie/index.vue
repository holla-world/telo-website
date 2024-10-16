<template>
  <div class="lottie-component" ref="el"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

const props = withDefaults(defineProps<{
  animationData: Object;
  loop?: boolean,
  renderer?: 'svg' | 'canvas' | 'html'
}>(), {
  loop: true,
  renderer: 'svg'
});
const emits = defineEmits<{
  (e: 'complete'): void,
  (e: 'start'): void
}>();
const el = ref();

let animation: any

async function showAnimation(animationData: any) {
  animation = lottie.loadAnimation({
    container: el.value,
    renderer: props.renderer,
    loop: props.loop,
    autoplay: true,
    animationData,
  });
  emits('start');
  animation.onComplete = () => {
    emits('complete');
  };
}

onMounted(() => {
  showAnimation(props.animationData);
});

onUnmounted(() => {
  animation
  && animation.destroy
  && animation.destroy();
})
</script>

<style scoped></style>
