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
      <img class="phone phone_pos" src="../../../assets/bg_phone.webp" alt="" />
      <div class="desc">
        <img class="font font_pos" src="../../../assets/bg_font.webp" alt="" />
        <img class="logo logo_pos" src="../../../assets/bg_logo.webp" alt="" />
      </div>
      <div class="loan">
        <p>Telo Tell what You Love</p>
        <p>Find Trends <strong>&</strong></p>
        <p>People In Community</p>
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
