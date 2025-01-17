<template>
  <div class="main">
    <div class="header">
      <div class="title" @click="jump('/')">
        <img src="../../../assets/bg_title.webp" alt="" />
      </div>
      <div class="menu" @click="showDrawer()">
        <img src="../../../assets/bg_menu.webp" alt="" />
      </div>
    </div>
    <el-drawer v-model="drawer" :with-header="true">
      <div class="drawer">
        <p @click="jump('/policy')">Privacy Policy</p>
        <p @click="jump('/service')">Terms of Service</p>
      </div>
    </el-drawer>
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
  </div>
</template>
<script lang="ts" setup>
import './index.scss';
const drawer = ref(false);
const showDrawer = () => {
  drawer.value = true;
};
const jump = (url: string) => {
  window.location.href = url;
};
</script>
