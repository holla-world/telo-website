<template>
  <div class="phone-main">
    <div class="header">
      <img class="icon_left" @click="jump('/')" src="../../../assets/bg_phone_title.webp" alt="" />
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
      <div class="phrase">
        <p class="title">Delete</p>
        <p class="desc">
          If you need to delete your account, please send an email to abdelhamidadel696@gmail.com and provide your user
          ID and registration information. We will process your request within one week. Thank you for your
          understanding. Note: The data generated during your use of Telo (such as avatars, post images) will not be
          deleted. This is also stated in our User Privacy Policy.
        </p>
      </div>
    </div>
    <div class="modal" v-if="isShowModal" @click="closeModal()">
      <div class="modal_content">
        <p @click.prevent="jump('/service')">Terms of Service</p>
        <p @click.prevent="jump('/policy')">Privacy Policy</p>
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
const closeModal = () => {
  isShowModal.value = false;
};
const jump = (url: string) => {
  window.location.href = url;
};
</script>
