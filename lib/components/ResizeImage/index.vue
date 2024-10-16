<template>
  <div ref="rootEl" class="resize-image-content leading-1"
    :class="[
      isInheritSize ? 'inherit-size' : ''
    ]">
    <template v-if="resizeSrc">
			<!-- crossorigin="anonymous" -->
      <img v-if="isLazyLoad"
        class="resize-image"
        v-lazy="resizeSrc"
        v-bind="commonAttr"
        @load="emits('loaded')" />
      <img v-else
        class="resize-image"
        :src="resizeSrc"
        v-bind="commonAttr"
        @load="emits('loaded')" />
    </template>
    <!-- 兜底图 src为‘’的情况 -->
    <!-- <img
      v-else-if="!resizeSrc && isLazyLoad"
      class="resize-image"
      v-lazy="imageMap.notImage"
    />
    <img
      v-else-if="!resizeSrc"
      class="resize-image"
      :src="imageMap.notImage"
    /> -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, toRef, watch, getCurrentInstance } from 'vue';
import vueLazyload from 'vue-lazyload';
import { formatS3Image } from '@lib/utils/common';
import { getResource } from '@lib/fetch';
import { preload } from '@lib/components/VapPlayer/cache';

const app = getCurrentInstance();
if (!app?.appContext.directives.lazy) {
  app?.appContext.app.use(vueLazyload);
}

const props = withDefaults(defineProps<{
  src: string;
  isLazyLoad?: boolean;
  isInheritSize?: boolean;
  crossorigin?: "" | "anonymous" | "use-credentials";
  blob?: boolean;
}>(), {
  isLazyLoad: false,
  isInheritSize: true
});
const emits = defineEmits<{
  (e: 'loaded'): void
}>();

const src = toRef(props, 'src');
const rootEl = ref();
const commonAttr = computed<{
}>(() => {
  let result: {
    crossorigin?: "" | "anonymous" | "use-credentials";
  } = {};
  if (props.crossorigin) {
    result.crossorigin = props.crossorigin;
  }
  return result;
})

function findElementCssSize(el: HTMLElement): { width: number, height: number } {
  let style = window.getComputedStyle(el);
  let widthValue = style.width?.toLocaleLowerCase();
  let heightValue = style.height?.toLocaleLowerCase();
  if ((widthValue.includes('px') && widthValue !== '0px')
    && (heightValue.includes('px') && heightValue !== '0px')) {
    return {
      width: parseInt(widthValue),
      height: parseInt(heightValue)
    }
  } else {
    if (el.parentElement) {
      return findElementCssSize(el.parentElement)
    } else {
      return {
        width: 0,
        height: 0
      }
    }
  }
}

function findElSize() {
  let dom = rootEl.value;
  let width = dom.clientWidth;
  let height = dom.clientHeight;

  if (width === 0 || height === 0) {
    let cssSize = findElementCssSize(dom);
    width = cssSize.width;
    height = cssSize.height;
  }

  return { width, height };
}

let resizeSrc = ref();

watch(() => props.src, () => {
  setResizeSrc();
});

function setResizeSrc() {
  let { width, height } = findElSize();
  let url = formatS3Image(src.value, width, height);
  if (url && props.blob) {
    preload(url).then((src) => {
      resizeSrc.value = src;
    });
  } else {
    resizeSrc.value = url;
  }
}

onMounted(() => {
  setResizeSrc();
});
</script>

<style scoped lang="scss">
.resize-image {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: inherit;
}
.inherit-size {
  .resize-image {
    width: inherit;
    height: inherit;
  }
}
</style>
