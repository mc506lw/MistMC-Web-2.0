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
            <div class="bg-white rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">自定义资源包</h2>
                <div class="grid grid-cols-2 gap-8">
                    <div class="space-y-6">
                        <h3 class="text-lg font-semibold mb-4">功能选择</h3>
                        <div data-aos="fade-up" data-aos-delay="0" class="feature-option"
                            :class="{ 'feature-active': features.hdTextures }" @click="toggleFeature('hdTextures')">
                            <i class="icon fa-image text-2xl"></i>
                            <div class="ml-4">
                                <h4 class="text-lg font-medium">高清材质包（64x）</h4>
                                <p class="text-sm text-gray-600">提升游戏画面品质，让方块世界更加细腻</p>
                            </div>
                            <div class="feature-checkbox">
                                <i class="icon icon-xuanze"></i>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="50" class="feature-option"
                            :class="{ 'feature-active': features.eyegood }" @click="toggleFeature('eyegood')">
                            <i class="icon fa-sparkles text-2xl"></i>
                            <div class="ml-4">
                                <h4 class="text-lg font-medium">护眼大补丸</h4>
                                <p class="text-sm text-gray-600">红石党必备，让数格子更加轻松</p>
                            </div>
                            <div class="feature-checkbox">
                                <i class="icon icon-xuanze"></i>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100" class="feature-option"
                            :class="{ 'feature-active': features.goodanimals }" @click="toggleFeature('goodanimals')">
                            <i class="icon fa-music text-2xl"></i>
                            <div class="ml-4">
                                <h4 class="text-lg font-medium">新鲜动画</h4>
                                <p class="text-sm text-gray-600">使生物更加动态，增加沉浸感</p>
                            </div>
                            <div class="feature-checkbox">
                                <i class="icon icon-xuanze"></i>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                        <h3 class="text-2xl font-bold mb-6">资源包信息</h3>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <i class="icon icon-xianshi_xuanze text-xl mr-3"></i>
                                <p>已选功能：{{ selectedFeaturesText }}</p>
                            </div>
                            <div class="flex items-center">
                                <i class="icon icon-wenjiandaxiao_huaban text-xl mr-3"></i>
                                <p>包大小：{{ packageSize }} MB</p>
                            </div>
                            <div class="flex items-center">
                                <i class="icon icon-xingneng text-xl mr-3"></i>
                                <p>性能要求：{{ pref }}</p>
                            </div>
                        </div>
                        <button data-aos="fade-up" data-aos-delay="100"
                            class="mt-8 bg-white text-blue-600 px-6 py-3 !rounded-button whitespace-nowrap hover:bg-blue-50 transition-all w-full font-semibold transform hover:scale-105 duration-300"
                            @click="downloadResourcePack">
                            <i class="icon icon-xiazai mr-2"></i>下载资源包
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center my-8">
            <span>感谢<a class="text-blue-600 hover:text-blue-800" href="https://drive.almondcloud.cn/" target="_blank">杏仁云盘</a>提供的免费云存储服务</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const features = ref({
    hdTextures: false,
    eyegood: false,
    goodanimals: false
});

const selectedFeaturesText = computed(() => {
    const selected = [];
    if (features.value.hdTextures) selected.push('高清材质包');
    if (features.value.eyegood) selected.push('护眼大补丸');
    if (features.value.goodanimals) selected.push('新鲜动画');
    return selected.length ? selected.join(' + ') : '基础包';
});

const packageSize = computed(() => {
    let size = 1.6; // 基础包大小
    if (features.value.hdTextures) size += 10.23;
    if (features.value.eyegood) size += 0.23;
    if (features.value.goodanimals) size += 0.55;
    return Math.round(size * 100) / 100; // 四舍五入到小数点后两位
});

const pref = computed(() => {
    let size = 1.5; // 基础包大小
    if (features.value.hdTextures) size += 6;
    if (features.value.eyegood) size += 1.5;
    if (features.value.goodanimals) size += 3;
    if (size > 10) return '高';
    if (size > 5) return '中';
    return '低';
});

const toggleFeature = (feature: keyof typeof features.value) => {
    features.value[feature] = !features.value[feature];
};

const downloadPCL = () => {
    window.open('https://example.com/pcl-download', '_blank');
};

const downloadHMCL = () => {
    window.open('https://example.com/hmcl-download', '_blank');
};

const downloadPCLQZ = () => {
    window.open('https://example.com/pcl-download-qz', '_blank');
};

const downloadModpack1 = () => {
    window.open('https://drive.almondcloud.cn/f/XxOOfD/%E8%85%90%E7%AB%B9%E6%8E%A8%E8%8D%90%E6%95%B4%E5%90%88%E5%8C%85-1.20.4-1.0.0.zip', '_blank');
};

const downloadModpack2 = () => {
    window.open('https://drive.almondcloud.cn/f/VZneI0/Fore%E7%9A%84%E6%95%B4%E5%90%88%E5%8C%85%201.0.0.mrpack', '_blank');
};

const downloadResourcePack = () => {
    const urls = {
        '': 'https://drive.almondcloud.cn/f/14r1Sm/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85.zip',
        '高清材质包': 'https://drive.almondcloud.cn/f/zyvbsy/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20Faithful%2064x.zip',
        '护眼大补丸': 'https://drive.almondcloud.cn/f/YJPxSe/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20%E6%8A%A4%E7%9C%BC%E5%A4%A7%E8%A1%A5%E4%B8%B8.zip',
        '新鲜动画': 'https://drive.almondcloud.cn/f/ZwWQUo/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20FreshAnimations.zip',
        '高清材质包_护眼大补丸': 'https://drive.almondcloud.cn/f/jZP9S6/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20Faithful%2064x%20+%20%E6%8A%A4%E7%9C%BC%E5%A4%A7%E8%A1%A5%E4%B8%B8.zip',
        '高清材质包_新鲜动画': 'https://drive.almondcloud.cn/f/ZwWQUo/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20FreshAnimations.zip',
        '护眼大补丸_新鲜动画': 'https://drive.almondcloud.cn/f/DgDRh4/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20%E6%8A%A4%E7%9C%BC%E5%A4%A7%E8%A1%A5%E4%B8%B8%20+%20FreshAnimations.zip',
        '高清材质包_护眼大补丸_新鲜动画': 'https://drive.almondcloud.cn/f/EWXxsj/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85%20+%20Faithful%2064x%20+%20%E6%8A%A4%E7%9C%BC%E5%A4%A7%E8%A1%A5%E4%B8%B8%20+%20FreshAnimations.zip'
    };

    let params = [];
    if (features.value.hdTextures) params.push('高清材质包');
    if (features.value.eyegood) params.push('护眼大补丸');
    if (features.value.goodanimals) params.push('新鲜动画');

    const key = params.join('_');
    const url = urls[key] || 'https://drive.almondcloud.cn/f/14r1Sm/MistMC%E6%9D%90%E8%B4%A8%E5%8C%85.zip';  // 默认链接

    window.open(url, '_blank');
};
</script>

<style scoped>
.container {
    min-height: 1024px;
}

.feature-option {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.feature-option:hover {
    border-color: #93c5fd;
    transform: translateY(-2px);
}

.feature-active {
    border-color: #2563eb;
    background-color: #eff6ff;
}

.feature-checkbox {
    margin-left: auto;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.feature-active .feature-checkbox {
    background-color: #2563eb;
    border-color: #2563eb;
    color: white;
}

.feature-checkbox i {
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s ease;
}

.feature-active .feature-checkbox i {
    opacity: 1;
    transform: scale(1);
}
</style>