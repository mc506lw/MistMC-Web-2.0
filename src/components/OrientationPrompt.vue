<template>
    <div v-if="isBelowMinWidth" class="fixed inset-0 bg-white flex items-center justify-center z-[500]">
      <div class="text-center">
        <h1 class="text-black text-2xl font-semibold">请旋转您的设备或使用电脑以更好地浏览此页面</h1>
        <p class="text-gray-500 text-xl">哎呀！目前此页面不支持竖屏模式。请您切换至横屏，或者更方便地使用电脑来畅享浏览体验</p>
        <h2 class="text-3xl font-bold">https://www.mistmc.top</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isBelowMinWidth: window.innerWidth < 550,
      };
    },
    mounted() {
      window.addEventListener('resize', this.checkWidth);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkWidth);
    },
    methods: {
      checkWidth() {
        this.isBelowMinWidth = window.innerWidth < 550;
      },
    },
  };
  </script>
  
  <style scoped>
  /* 可添加额外的样式，如动画等 */
  </style>
