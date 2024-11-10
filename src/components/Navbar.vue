<template>
    <div class="relative h-12 z-50">
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
                    <div class="font-semibold text-gray-700 mb-2">文档站</div>
                    <div
                        class="flex items-center mb-2 h-12 w-32 rounded-md hover:bg-gray-200 transition-all ease-in-out duration-300">
                        <i class="text-xl ml-1 mr-1 icon icon-shiyongwendang"></i>
                        <span>MistDocs</span>
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
            <div class="w-32 flex justify-center items-center" @mouseenter="onisHover()" @mouseleave="offisHover()">
                <h1 v-show="!isHovered" class="ml-1 text-3xl font-bold transition-opacity duration-500 opacity-100">
                    MistMC</h1>
                <i v-show="isHovered"
                    class="icon icon-shiyongwendang ml-1 text-3xl transition-opacity duration-500 opacity-100"></i>
            </div>
        </div>

        <!-- 中部时间 -->
        <TimePanel />

        <!-- 右侧菜单 -->
        <div class="fixed mt-5 right-10">
            <div
                class="h-12 w-64 bg-white/60 rounded-md shadow-xl flex items-center justify-between backdrop-blur-[2px]">
                <div
                    class="ml-2 hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-wendang"></i>
                    <span class="text-xl ml-1">文档</span>
                </div>
                <div
                    class="hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-fuwuqi1"></i>
                    <span class="text-xl ml-1">子服</span>
                </div>
                <div
                    class="mr-2 hover:bg-gray-200 p-1 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-300">
                    <i class="text-xl icon icon-guanyu"></i>
                    <span class="text-xl ml-1">关于</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TimePanel from './TimePanel.vue';
import { data } from 'autoprefixer';

export default {
    components: {
        TimePanel,
    },
    data() {
        return {
            showmorepanel: false,
            isHovered: false,
        }
    },
    methods: {
        onisHover() {
            this.isHovered = true;
            console.log(this.isHovered);
        },
        offisHover() {
            this.isHovered = false;
            console.log(this.isHovered);
        },
    },
}

</script>

<style scoped>
/* 使元素在淡入淡出时的透明度渐变 */
.transition-opacity {
    transition: opacity 0.5s ease-in-out;
}
</style>