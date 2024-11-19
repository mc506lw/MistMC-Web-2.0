<template>
    <div>
        <h1 data-aos="fade-up" class="text-5xl font-bold text-white">MistMC</h1>
        <p data-aos="fade-up" data-aos-delay="200" class="text-lg text-white max-w-96 mt-2">MistMC，汇聚了一群充满热情、志同道合的腐竹与玩家，不断创新、探索新的游戏玩法，为每一位玩家带来无与伦比的新鲜刺激体验。</p>
        <div class="flex mt-4">
            <div 
                data-aos="fade-up" 
                data-aos-delay="400"
                class="bg-white w-32 text-2xl text-black flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg h-12 transition-colors ease-in-out duration-300"
                @click="scrollToBottom"
            >
                加入我们
            </div>
            <a href="https://docs.mistmc.top/" target="_blank" data-aos="fade-up" data-aos-delay="600"
                class="ml-4 backdrop-blur-sm w-32 text-2xl text-white flex justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg h-12 transition-colors ease-in-out duration-300 border-4 border-white hover:text-gray-600">
                查阅文档
            </a>
            <a href="https://qm.qq.com/q/wcCmysj7Ow" target="_blank" data-aos="fade-up" data-aos-delay="800"
                class="ml-4 bg-blue-500/80 backdrop-blur-sm w-32 text-2xl text-white flex justify-center items-center cursor-pointer hover:bg-blue-500 rounded-lg h-12 transition-colors ease-in-out duration-300 border-4 border-white">
                QQ群
            </a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToBottom() {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'  // 修改为平滑滚动
            });
        }
    }
}
</script>

