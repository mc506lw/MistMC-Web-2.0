<template>
    <div class="relative hidden lg:block">
        <!-- 中部时间区域 -->
        <div @click="togglePanel" :class="{
            'transition-all duration-500 ease-in-out': true,
            'bg-white rounded-xl shadow-xl': true,
            'h-12 w-44': !isPanelOpen,
            'h-12 w-1/3': isPanelOpen
        }"
            class="fixed top-0 left-1/2 transform -translate-x-1/2 -ml-4 mt-5 flex justify-center items-center text-xl font-bold cursor-pointer bg-white/60  backdrop-blur-sm hover:scale-105">
            <div name="fade" class="transition-all duration-500 ease-in-out"
                :class="{ 'absolute left-1/2 -translate-x-1/2': !isPanelOpen, 'absolute left-3': isPanelOpen }">
                <span>{{ currentTime }}</span>
            </div>
            <div class="absolute left-28 transition-all ease-in-out whitespace-nowrap flex w-5/6"
                :class="{ 'opacity-0 duration-75 delay-0': !isPanelOpen, 'opacity-1 duration-700 delay-200': isPanelOpen }">
                <div class="flex-1 w-48 items-center">
                    <i class="icon icon-a-clockbadgecheckmark-1 text-xl"></i>
                    <span class="inline-block">运营 {{ runningTime }}天</span>
                </div>
                <div class="flex-1 w-48 items-center hidden mr-0 xl:mr-8 2xl:mr-0 xl:block">
                    <i class="icon icon-icon-test text-xl"></i>
                    <span class="inline-block">服务 124玩家</span>
                </div>
                <div class="flex-1 w-48 items-center hidden 2xl:block">
                    <i class="icon icon-qian1 text-xl"></i>
                    <span class="inline-block">耗资 2千余元</span>
                </div>
                <!-- <span class="inline-block ml-2">Create by MistMC team</span> -->
                <!-- <div class="wave-bar absolute w-full h-full bg-blue-500 animate-wave"></div> -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: this.formatTime(new Date()),
            isPanelOpen: false,
            runningTime: this.calculateRunningTime('2024-02-02') // 从2024-02-02开始计算天数
        };
    },
    created() {
        // 每秒更新时间
        setInterval(() => {
            this.currentTime = this.formatTime(new Date());
        }, 1000);
    },
    methods: {
        formatTime(date) {
            // 格式化时间为 hh:mm:ss
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        },
        togglePanel() {
            this.isPanelOpen = !this.isPanelOpen;
        },
        calculateRunningTime(startDate) {
            const start = new Date(startDate);  // 设定开始日期
            const now = new Date();  // 当前时间
            const diffTime = now - start;  // 计算毫秒差
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));  // 转换成天数
            return diffDays;
        }
    }
};
</script>

<style scoped>
@keyframes wave {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}

.wave-bar {
    animation: wave 3s ease-in-out infinite;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 25%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 75%);
    background-size: 200% 100%;
    position: absolute;
    top: 0;
    left: -100%;
}
</style>