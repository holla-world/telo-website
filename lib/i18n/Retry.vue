<template>
  <div v-if="!isClose"
    class="i18n-manual-retry">
    <div class="text">The page is lost, click Refresh to try it</div>
    <div class="retry" @click="retry">Refresh</div>
    <div class="close" @click="close">close</div>
  </div>
</template>

<script setup lang="ts">
  function retry() {
    window.location.reload();
  }

  let isClose = ref(false);
  function close() {
    isClose.value = true;
  }
</script>

<style scoped lang="scss">
  .i18n-manual-retry {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 1000;
    bottom: 0;
    background: rgba(0, 0, 0, .8);
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    padding: 240px 12px;

    .text {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
    }

    .retry {
      background-color: #3E00FF;
      border-radius: 16px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 12px auto;
      width: 80%;
      height: 48px;
      align-self: stretch;
    }

    .close {
      position: absolute;
      bottom: 48px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
    }
  }
</style>