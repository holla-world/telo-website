<template>
  <div class="scroll-tab-col" :style="{ width: clientWidth + 'px', minHeight: clientHeight + 'px' }">
    <!-- // todo 空白页 -->
    <div v-if="!show">empty</div>
    <!-- // todo 具体的页面 -->
    <slot v-else></slot>
  </div>
</template>

<script setup>
import { clientWidth, clientHeight } from './clientParameters'
import { defineProps, watchEffect, ref, watch } from 'vue'
const props = defineProps({
  loading: Boolean
})
// todo 控制显示 空白页，还是挂载
const show = ref(false)
// todo 根据 props.loading 控制挂载
const stop = watchEffect(() => {
  if (props.loading) {
    show.value = true
    setTimeout(() => {
      stop()
    })
  }
})
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>