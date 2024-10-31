<template>
  <div
    class="main-page"
    :style="{
      paddingTop: safeTop + 'px'
    }"
  >
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { safeTop } from '@lib/env'

</script>

<style scoped lang="scss">
</style>
