<template>
    <div class="h-auto bg-gradient-to-b from-white to-blue-50 mt-24">
      <main class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <!-- 3D 预览组件 -->
          <div class="relative">
            <CCD />
          </div>
          <!-- 配置信息 -->
          <div class="text-gray-800">
            <h2 class="text-3xl font-bold mb-4">服务器硬件配置</h2>
            <ul class="space-y-4">
              <li class="text-lg">
                <span class="font-medium">CPU：</span>Intel core i3-12300T
              </li>
              <li class="text-lg">
                <span class="font-medium">内存：</span>KINGBANK DDR4 3600Mhz 32G x2
              </li>
              <li class="text-lg">
                <span class="font-medium">硬盘：</span>Western Digital 500GB 硬盘
              </li>
              <li class="text-lg">
                <span class="font-medium">显卡：</span>NVIDIA RTX 4090 老万特挑版
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
    <div class="my-12 text-center text-4xl font-bold">有点抽象</div>
  </template>
  
  <script>
  import CCD from "../components/ComputerConfigDisplay.vue";
  
  export default {
    components: {
      CCD,
    },
  };
  </script>
  
  <style>
  /* 可添加自定义样式 */
  </style>
  