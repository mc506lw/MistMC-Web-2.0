<template>
        <div class="bg-white h-auto w-full">
                <!-- 标题部分 -->
                <div class="relative top-16 left-32 text-4xl font-bold text-black">玩家的优秀作品</div>

                <!-- 图片轮播部分 -->
                <div data-aos="fade-up" class="relative overflow-hidden w-2/3 mx-auto my-24 rounded-md">
                        <div class="flex transition-all duration-500 ease-in-out transform" :style="carouselStyle">
                                <img v-for="(image, index) in images" :key="index" :src="image"
                                        class="min-w-full h-[80vh] object-cover" />
                        </div>

                        <!-- 图片切换按钮 -->
                        <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
                                <button @click="prev"
                                        class="h-full opacity-0 text-2xl text-gray-200 p-2 rounded-sm transition-all hover:opacity-100">
                                        <span class="icon icon-arrow-left"></span>
                                </button>
                                <button @click="next"
                                        class="h-full opacity-0 text-2xl text-gray-200 p-2 rounded-sm transition-all hover:opacity-100">
                                        <span class="icon icon-arrow-right"></span>
                                </button>
                        </div>

                        <!-- 图片切换指示器（小圆片） -->
                        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                <div v-for="(image, index) in images" :key="'indicator-' + index"
                                        :class="{ 'bg-blue-600': currentIndex === index, 'bg-gray-500': currentIndex !== index }"
                                        @click="goToImage(index)"
                                        class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300">
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
export default {
        data() {
                return {
                        images: [
                                "https://www.idcd.com/tool/placeholder/800x600?text=玩家1",
                                "https://www.idcd.com/tool/placeholder/800x600?text=玩家2",
                                "https://www.idcd.com/tool/placeholder/800x600?text=玩家3",
                                "https://www.idcd.com/tool/placeholder/800x600?text=玩家4",
                        ],
                        currentIndex: 0,
                        intervalId: null, // 定时器ID
                };
        },
        computed: {
                carouselStyle() {
                        return {
                                transform: `translateX(-${this.currentIndex * 100}%)`,
                        };
                },
        },
        methods: {
                next() {
                        if (this.currentIndex < this.images.length - 1) {
                                this.currentIndex++;
                        } else {
                                this.currentIndex = 0;
                        }
                },
                prev() {
                        if (this.currentIndex > 0) {
                                this.currentIndex--;
                        } else {
                                this.currentIndex = this.images.length - 1;
                        }
                },
                goToImage(index) {
                        this.currentIndex = index;
                },
                startAutoSlide() {
                        // 每5秒自动切换图片
                        this.intervalId = setInterval(() => {
                                this.next();
                        }, 5000);
                },
                stopAutoSlide() {
                        // 清除定时器
                        clearInterval(this.intervalId);
                },
        },
        mounted() {
                this.startAutoSlide();
        },
        beforeDestroy() {
                this.stopAutoSlide();
        },
};
</script>