<template>
  <transition name="dialog-fade">
    <div class="modal-overlay" v-if="visible" @click="closeModal">
      <div class="modal-section" @click.stop>
        <slot name="default"></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
const visible = defineModel()
const closeModal = () => {
  visible.value = false
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1020;
}

.dialog-fade-enter-active {
  animation: modal-fade-in $animation-duration;
  .modal-section {
    animation: dialog-fade-in $animation-duration;
  }
}

.dialog-fade-leave-active {
  animation: modal-fade-out $animation-duration;
  .modal-section {
    animation: dialog-fade-out $animation-duration;
  }
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

@keyframes modal-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes modal-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
