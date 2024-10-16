<template>
  <transition name="fade">
    <div v-if="isVisible" class="toast global-toast-container">
      {{ message }}
    </div>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted, defineExpose } from 'vue';
import { isFunction } from 'lodash-es';

export default {
  setup() {
    const message = ref('');
    const isVisible = ref(false);

    function show(msg, duration = 3000, callback) {
      message.value = msg;
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
        if (isFunction(callback)) {
          callback();
        }
      }, duration);
    }
		defineExpose({show})

    return {
      message,
      isVisible,
      show,
    };
  },
};
</script>

<style scoped lang="scss">
.toast {
	display: flex;
	align-items: center;
	justify-content: center;
  position: fixed;
	top: calc(50% - 100px);
	left: 50%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
	font-size: 12px;
  border-radius: 8px;
	transform: translate3d(-50%, -50%, 0);
	z-index: $toast-z-index;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
