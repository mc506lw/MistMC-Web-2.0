<template>
    <div class="min-h-screen bg-white text-black">
  
      <!-- Tabs -->
      <div class="flex bg-gray-100 mt-12 p-4 mx-6 rounded-md w-96">
        <router-link
          to="/servers/slime"
          class="px-4 py-2 mr-2 rounded-md font-medium"
          :class="isActive('/servers/slime') ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-200'"
        >
          粘液生存服
        </router-link>
        <router-link
          to="/servers/retirement"
          class="px-4 py-2 mr-2 rounded-md font-medium"
          :class="isActive('/servers/retirement') ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-200'"
        >
          养老生存服
        </router-link>
        <router-link
          to="/servers/skyblock"
          class="px-4 py-2 rounded-md font-medium"
          :class="isActive('/servers/skyblock') ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-200'"
        >
          科技空岛服
        </router-link>
      </div>
  
      <!-- Router View -->
      <div class="px-6 pt-4">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
  
      const isActive = (path) => route.path === path;
  
      return { isActive };
    },
  };
  </script>
  
  <style scoped>
  /* 样式可以根据需求调整 */
  </style>
  