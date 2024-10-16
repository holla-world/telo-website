<template>
  <div
    class="page-header-component "
    :style="{
      background: props.backgroundColor || `url(${props.backgroundImg})`,
      position: props.position,
      color: props.color
    }"
    :class="props.backgroundClass"
  >
    <div class="header-left" @click="back">
      <slot name="left">
        <IconArrowBlack class="header-back" v-if="showBack"></IconArrowBlack>
      </slot>
    </div>
    <div class="header-title">
      <slot name="title">
        <div class="title-text text-18px">
          {{ props.title }}
        </div>
      </slot>
    </div>
    <div class="right-icon">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = withDefaults(defineProps<{
  closeWebview?: boolean;
  title?: string;
  showBack?: boolean;
  backgroundColor?: string;
  position?: 'fixed' | 'relative';
  backgroundImg?: string;
  color?: string;
  backgroundClass?: string
}>(), {
  closeWebview: false,
  showBack: true,
  title: String,
});

function back() {
  if (!props.closeWebview && router && window.history.state.back) {
    router.back();
  } else {
    window.FlutterWebView.postMessage('close');
  }
}
</script>

<style lang="scss" scoped>
.page-header-component {
	display: flex;
	align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  color: $text-color;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 10px;
}
.header-left {
  display: flex;
}

.header-back {
  @include lang.ar {
    transform: rotate(180deg);
  }
}

.right-icon {
	position: absolute;
  right: var(--page-header-right-icon-x, 20px);
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
	@include lang.ar {
		right: auto;
		left: var(--page-header-right-icon-x, 20px);
	}
}

.header-title {
  @include bold-text;
  font-size: 18px;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title-text {
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
