<template>
  <component :is="props.tag">
    <template v-for="text in textArray">
      <template v-if="isNaN(text)">
        {{ text }}
      </template>
      <slot v-else :name="text"></slot>
    </template>
  </component>
</template>

<script setup lang="ts">
  import { useI18n } from '@lib/i18n';

  const props = withDefaults(defineProps<{
    path: string,
    tag?: string
  }>(), {
    tag: 'div'
  });
  const { getMessage } = useI18n();
  const textArray = computed(() => {
    let message = getMessage(props.path);
     return message?.split(/\{(\d)\}/);
  });

  onMounted(() => {
    let instance = getCurrentInstance();
    let hostEl = instance?.vnode?.el?.getRootNode().host as HTMLElement;
    if (hostEl) {
      let children = Array.from(hostEl.children);
      for (let index = 0; index < children.length; index++) {
        const child = children[index];
        child.setAttribute('slot', index.toString());
      }
    }
  });

</script>

<style scoped lang="scss">

</style>