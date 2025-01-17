<template>
  <div class="phone-main">
    <div class="header">
      <img class="icon_left" src="../../../assets/bg_phone_title.webp" alt="" />
      <img class="icon_right" v-show="!isShowModal" @click="showModal()" src="../../../assets/icon_phone.webp" alt="" />
      <img
        class="icon_right"
        v-show="isShowModal"
        @click="closeModal()"
        src="../../../assets/phone_icon_close.webp"
        alt=""
      />
    </div>
    <div class="content">
      <div class="phone"></div>
      <div class="desc"></div>
    </div>
    <div class="modal" v-if="isShowModal" @click="closeModal()">
      <div class="modal_content">
        <p @click="jump('/policy')">Privacy Policy</p>
        <p @click="jump('/service')">Terms of Service</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import './index.scss';
const isShowModal = ref(false);
const showModal = () => {
  isShowModal.value = true;
};
const jump = (url: string) => {
  window.location.href = url;
};
const closeModal = () => {
  isShowModal.value = false;
};
</script>
