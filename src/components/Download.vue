<template>
    <div class="min-h-screen">
        <div class="container mx-auto px-4 pt-12 max-w-7xl">
            <!-- 头部标题 -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">岚域下载站</h1>
                <p class="text-lg text-gray-600">提供岚域服务器的推荐启动器，整合包，资源包的下载</p>
            </div>

            <!-- 启动器下载区域 -->
            <div class="mb-16">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">推荐启动器</h2>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div data-aos="fade-up" data-aos-delay="100"
                        class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <img src="https://drive.almondcloud.cn/f/mnvxi1/PCL2.png"></img>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold mb-1">PCL 启动器</h3>
                                <p class="text-gray-600 text-sm mb-3">专为国内玩家优化，界面美观，功能强大</p>
                            </div>
                            <button
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg !rounded-button whitespace-nowrap hover:bg-blue-700 transition-all transform hover:scale-105"
                                @click="downloadPCLQZ">
                                <i class="icon icon-xiazai mr-2"></i>必要前置
                            </button>
                            <button
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg !rounded-button whitespace-nowrap hover:bg-blue-700 transition-all transform hover:scale-105"
                                @click="downloadPCL">
                                <i class="icon icon-xiazai mr-2"></i>下载
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200"
                        class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <img src="https://drive.almondcloud.cn/f/NJwlc9/HMCL.png"></img>
                            </div>
                            <div class="flex-1">
                                <h3 class="text-xl font-semibold mb-1">HMCL 启动器</h3>
                                <p class="text-gray-600 text-sm mb-3">开源跨平台，稳定可靠，支持多种登录方式</p>
                            </div>
                            <button
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg !rounded-button whitespace-nowrap hover:bg-blue-700 transition-all transform hover:scale-105"
                                @click="downloadHMCL">
                                <i class="icon icon-xiazai mr-2"></i>下载
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 整合包下载区域 -->
            <div class="mb-16">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">推荐整合包</h2>
                <div class="grid grid-cols-2 gap-6">
                    <div data-aos="fade-up" data-aos-delay="300"
                        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        @click="downloadModpack1">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div
                                class="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <img src="https://drive.almondcloud.cn/f/q3vDc9/lwzhhb1.png" class=""></img>
                            </div>
                            <div
                                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 class="text-xl font-semibold text-white mb-1">腐竹推荐整合包</h3>
                                <p class="text-gray-200 text-sm">提供基础的生存辅助MOD与简单的优化</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-sm text-gray-500">版本: 1.20.4</span>
                                <span class="ml-4 text-sm text-gray-500">通用安装格式</span>
                                <span class="ml-4 text-sm text-gray-500">81.7MB</span>
                            </div>
                            <span class="p-2 hover:bg-gray-200 rounded-lg transition-all text-sm text-blue-600"><i
                                    class="icon icon-xiazai mr-1"></i>下载</span>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400"
                        class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                        @click="downloadModpack2">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div
                                class="w-full h-48 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                                <img src="https://drive.almondcloud.cn/f/8ndkFr/fore1.png" class=""></img>
                            </div>
                            <div
                                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 class="text-xl font-semibold text-white mb-1">Fore整合包</h3>
                                <p class="text-gray-200 text-sm">提供丰富的生存辅助MOD，适合新手和老手</p>
                            </div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="text-sm text-gray-500">版本: 1.20.4</span>
                                <span class="ml-4 text-sm text-gray-500">mrpack格式</span>
                                <span class="ml-4 text-sm text-gray-500">86.7MB</span>
                            </div>
                            <span class="p-2 hover:bg-gray-200 rounded-lg transition-all text-sm text-blue-600"><i
                                    class="icon icon-xiazai mr-1"></i>下载</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 资源包配置和下载区域 -->
            <div data-aos="fade-up" data-aos-delay="700" class="bg-white rounded-lg shadow-lg p-8">
                <h1 class="text-4xl font-bold text-gray-900 mb-12">岚域资源包</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div v-for="(pack, index) in resourcePacks" :key="index"
                        class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img :src="pack.image" :alt="pack.name"
                            class="w-full h-24 blur-[2px] object-cover object-top" />
                        <div class="p-6">
                            <div class="flex items-center mb-4">
                                <div class="flex-1 flex items-center">
                                    <h2 class="text-2xl font-semibold text-gray-900 mb-2">{{ pack.name }}</h2>
                                    <p v-for="type in pack.type" :key="type"
                                        class="text-sm bg-slate-200 rounded-sm p-2 shadow-md px-2 text-gray-500 mb-1 ml-4">{{ type }}</p>
                                </div>
                                <button @click="downloadPack(pack.name)"
                                    class="rounded whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white font-bold mb-2 py-2 px-4">
                                    下载
                                </button>
                            </div>
                            <p class="text-gray-600 mb-4">{{ pack.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center my-8">
        <span>感谢<a class="text-blue-600 hover:text-blue-800" href="https://drive.almondcloud.cn/"
                target="_blank">杏仁云盘</a>提供的免费云存储服务</span>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface ResourcePack {
    name: string;
    type: string[];
    image: string;
    description: string;
    downloadurl?: string;
}

const resourcePacks = ref<ResourcePack[]>([
    {
        name: "基础包",
        type: ["必须安装"],
        image: "https://drive.almondcloud.cn/f/60PBSr/%E5%89%8D%E9%83%A8-%E5%9F%BA%E7%A1%80.png",
        description: "这个基础包包含了服务器所需的所有基本材质和模型。它是享受完整游戏体验的必备资源包。",
        downloadurl: "https://drive.almondcloud.cn/f/ePRRUd/MistMC%E5%9F%BA%E7%A1%80%E5%8C%85.zip"
    },
    {
        name: "粘液科技附加包",
        type: ["推荐安装"],
        image: "https://drive.almondcloud.cn/f/Ov05FP/%E5%89%8D%E9%83%A8-%E7%B2%98%E6%B6%B2.png",
        description: "粘液附加包为粘液科技的部分物品和方块添加了材质，让它们看起来更加舒适。",
        downloadurl: "https://drive.almondcloud.cn/f/yed2s4/MistMC%E7%B2%98%E6%B6%B2%E6%9D%90%E8%B4%A8%E5%8C%85.zip"
    },
    {
        name: "武器附加包",
        type: ["推荐安装", "PBR材质"],
        image: "https://drive.almondcloud.cn/f/PJ9gcV/%E5%89%8D%E9%83%A8-%E6%AD%A6%E5%99%A8.png",
        description: "武器附加包为岚域的特殊武器添加了一系列精美设计的武器模型和材质，让武器更加具有视觉效果。",
        downloadurl: "https://drive.almondcloud.cn/f/JwK6FR/MistMC%E6%AD%A6%E5%99%A8%E5%8C%85.zip"
    }
]);

const downloadPack = (packName: string) => {
    const pack = resourcePacks.value.find(p => p.name === packName);
    if (pack && pack.downloadurl) {
        window.open(pack.downloadurl);
    }
};

const downloadPCLQZ = () => {
    window.open("https://drive.almondcloud.cn/f/GbR8in/PCL2%E5%BF%85%E8%A3%85%E5%89%8D%E7%BD%AE%20.NET%204.6.2.exe");
};

const downloadPCL = () => {
    window.open("https://drive.almondcloud.cn/f/BX1rSB/Plain%20Craft%20Launcher%202.exe");
};

const downloadHMCL = () => {
    window.open("https://github.com/huanghongxun/HMCL/releases/download/v3.4.1/HMCL-3.4.1.exe");
};

const downloadModpack1 = () => {
    window.open("https://drive.almondcloud.cn/f/XxOOfD/%E8%85%90%E7%AB%B9%E6%8E%A8%E8%8D%90%E6%95%B4%E5%90%88%E5%8C%85-1.20.4-1.0.0.zip");
};

const downloadModpack2 = () => {
    window.open("https://drive.almondcloud.cn/f/VZneI0/Fore%E7%9A%84%E6%95%B4%E5%90%88%E5%8C%85%201.0.0.mrpack");
};
</script>