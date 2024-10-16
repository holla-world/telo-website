import { ComponentCustomProperties } from '@vue/runtime-core';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: function; // 这里填类型
  }
}
