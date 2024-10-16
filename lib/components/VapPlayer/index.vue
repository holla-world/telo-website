<template>
  <div
    v-show="props.playing !== false"
    class="vap-player-component"
    ref="rootDom">
  </div>
</template>

<script setup lang="ts">
  import { isFunction } from 'lodash-es';
  import Vap from 'video-animation-player';
  import { get as getVap, formatCacheUrl } from './cache';

  const props = withDefaults(defineProps<{
    playing?: boolean;
    config: {
      src: string,
      config: Object,
      fps?: number,
      loop?: boolean,
      precache?: boolean
    };
    expand?: Record<string, any>;
    nextAnimation?: Record<string, any>[];
  }>(), {
    playing: undefined
  });
  const emits = defineEmits<{
    (e: 'end'): void,
    (e: 'canplay'): void,
    (e: 'canplaythrough'): null
  }>();
  const nextAnimationArray = Array.from(props.nextAnimation || []);
  const rootDom = ref<HTMLElement>();
  let vapInterface: any;
  let baseConfig: any;

  watch(() => props.playing, (value, old) => {
    if (value && old === false) {
      vapInterface.setTime(0);
      vapInterface.play();
    }
  });

  function setConfigSrc(config: any) {
    config.src = getVap(formatCacheUrl(config.src));
    if (config.src.startsWith('blob')) {
      config.preload = false;
    }
    return config;
  }

  function playVideo(config: any) {
    let playConfig = Object.assign({}, baseConfig, config);
    playConfig = setConfigSrc(playConfig);
    vapInterface.play(playConfig)
      .on('ended', () => {
        if (isFunction(config.end)) {
          config.end(endEvent);
        } else {
          endEvent();
        }
      });
  }

  function endEvent() {
    if (props.playing !== false) {
      emits('end');
      if (nextAnimationArray.length > 0) {
        let nextConfig = nextAnimationArray.shift();
        playVideo(nextConfig);
      }
    }
  }

  onMounted(() => {
    baseConfig = {
      ...props.config,
      ...props.expand,
      container: rootDom.value
    };
    baseConfig = setConfigSrc(baseConfig);

    vapInterface = new Vap(baseConfig);
    vapInterface.on('canplay', () => {
      emits('canplay');
    });
    vapInterface.on('canplaythrough', () => {
      emits('canplaythrough');
    });
    vapInterface.on('ended', endEvent);
    vapInterface.on('loadError', () => {
      console.error('vap player load error ' + props.config.src);
    });
  });

  onUnmounted(() => {
    if (vapInterface) {
      vapInterface.destroy();
    }
  });

  defineExpose({
    playVideo
  });
</script>

<style scoped lang="scss">
  .vap-player-component {
    :deep(canvas) {
      width: 100%;
      height: 100%;
    }
  }
</style>
