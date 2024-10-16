<template>
  <div class="loading" v-show="loading">
    <div class="load-box position">
      <img :src="loadingImage" />
      <!--<img src="@/assets/img/loading_white.png">-->
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import loadingImage from './loading.png';

const loading = ref<boolean>(false);
const title = ref<string>('');

function show(msg: string) {
  if (msg) {
    title.value = msg;
  }
  loading.value = true;
}
function hide() {
  title.value = '';
  loading.value = false;
}
defineExpose({ show, hide });
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
	.position {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate3d(-50%, -50%, 0);
	}
  .load-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.5);
    color: #fff;
    letter-spacing: 0.8px;
    font-size: 13px;
    img {
      width: 30px;
      margin-bottom: 8px;
      -webkit-animation: rotate 0.8s linear infinite;
    }
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
