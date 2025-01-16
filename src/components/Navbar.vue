<template>
    <div class="relative h-12 z-50 w-full">
        <!-- 左侧LOGO+更多按钮 -->
        <div
            class="fixed mt-5 ml-5 w-44 p-2 h-12 bg-white/60 backdrop-blur-sm rounded-md shadow-xl cursor-pointer flex items-center bg-blend-normal">
            <div @mouseenter="showmorepanel = true" @mouseleave="showmorepanel = false"
                class="ml-1 hover:bg-gray-200 rounded-md w-8 h-8 flex justify-center items-center transition-all ease-in-out duration-300 delay-75">
                <i class="text-2xl icon icon-gengduo transition-all ease-in-out duration-300 hover:scale-105"></i>
            </div>
            <div @mouseenter="showmorepanel = true" @mouseleave="showmorepanel = false"
                class="fixed transition-all ease-in-out"
                :class="{ '-top-10 -left-24 opacity-0 scale-0 delay-200': !showmorepanel, 'top-16 left-0 opacity-1 scale-100': showmorepanel }">
                <div class="p-4 bg-white/90 rounded-lg backdrop-blur-md max-w-sm shadow-md">
                    <div class="font-semibold text-gray-700 mb-2">更多页面</div>
                    <div class="flex items-center space-x-4 mb-2">
                        <RouterLink to="/CCD"
                            class="flex items-center mb-2 h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                            <i class="text-xl ml-1 mr-1 icon icon-yingjianxinxi"></i>
                            <span>硬件展示</span>
                        </RouterLink>
                        <RouterLink to="/players"
                            class="flex items-center mb-2 h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                            <i
                                class="text-xl ml-1 mr-1 icon icon-a-Minecraft-Icons_-Logos_-Symbols--Free-Download-PN"></i>
                            <span>优秀玩家</span>
                        </RouterLink>
                    </div>
                    <div class="flex items-center space-x-4 mb-2">
                        <RouterLink to="/function"
                            class="flex items-center mb-2 h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                            <i class="text-xl ml-1 mr-1 icon icon-liebiao"></i>
                            <span>功能列表</span>
                        </RouterLink>
                        <RouterLink to="/catenary"
                            class="flex items-center mb-2 h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                            <i class="text-xl ml-1 mr-1 icon icon-peifangzu"></i>
                            <span>更多配方</span>
                        </RouterLink>
                    </div>
                    <div class="font-semibold text-gray-700 mb-2">相关链接</div>
                    <div class="flex items-center space-x-4 mb-2">
                        <div
                            class="flex items-center h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                            <i class="text-xl ml-1 mr-1 icon icon-bilibili-line"></i>
                            <span>一只老万</span>
                        </div>
                        <div
                            class="flex items-center h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                            <i class="text-xl ml-1 mr-1 icon icon-bilibili-line"></i>
                            <span>岚域官方</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                        <i class="text-xl ml-1 mr-1 icon icon-qq"></i>
                        <span>玩家交流群</span>
                    </div>
                </div>
            </div>
            <RouterLink to="/" class="w-32 flex justify-center items-center">
                <h1 class="ml-1 text-3xl font-bold transition-opacity duration-500 opacity-100">
                    MistMC</h1>
            </RouterLink>
        </div>

        <!-- 中部时间 -->
            <TimePanel />

        <!-- 右侧菜单 -->
        <div class="fixed mt-5 right-10 flex">
            <div
                class="h-12 w-auto bg-white/60 rounded-md shadow-xl flex items-center justify-between backdrop-blur-[2px] mr-2">
                <a href="https://docs.mistmc.top" target="_blank"
                    class="mx-2 hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-wendang"></i>
                    <span class="text-xl ml-1">文档</span>
                    <i class="ml-2 my-auto text-xl icon icon-iconzhengli_tiaozhuan font-bold"></i>
                </a>
            </div>
            <div
                class="h-12 w-64 bg-white/60 rounded-md shadow-xl flex items-center justify-between backdrop-blur-[2px]">
                <RouterLink to="/"
                    class="ml-2 hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-home"></i>
                    <span class="text-xl ml-1">首页</span>
                </RouterLink>
                <RouterLink to="/download"
                    class="hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-xiazai"></i>
                    <span class="text-xl ml-1">下载</span>
                </RouterLink>
                <!-- <RouterLink to="/servers/slime"
                    class="hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-fuwuqi1"></i>
                    <span class="text-xl ml-1">子服</span>
                </RouterLink> -->
                <!-- <RouterLink to="/players"
                    class="hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-a-Minecraft-Icons_-Logos_-Symbols--Free-Download-PN"></i>
                    <span class="text-xl ml-1">玩家</span>
                </RouterLink> -->
                <RouterLink to="/history"
                    class="mr-2 hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-lishi"></i>
                    <span class="text-xl ml-1">历史</span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import TimePanel from './TimePanel.vue';
import { data } from 'autoprefixer';
import { RouterView } from 'vue-router';

export default {
    components: {
        TimePanel,
    },
    data() {
        return {
            showmorepanel: false,
        }
    },
}

</script>

<style scoped></style>