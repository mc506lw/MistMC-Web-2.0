<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex flex-col items-center justify-center h-[80vh]">
        <h1 class="text-8xl font-bold text-gray-900 mt-8">404</h1>
        <p class="mt-4 text-xl text-gray-600">抱歉，您访问的页面似乎已经迷失在了方块世界中</p>

        <RouterLink
            to="/"
            class="rounded-md mt-8 px-8 py-3 bg-blue-600 text-white !rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap">
            返回首页
        </RouterLink>
    </div>
</template>