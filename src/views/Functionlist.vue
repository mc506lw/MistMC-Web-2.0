<template>
    <div>
        <nav class="bg-white shadow-md flex px-16 pt-8 pb-4 w-full">
            <div class="min-w-48">
                <button @click="toggleLayout"
                    class="rounded whitespace-nowrap px-4 py-2 bg-blue-500 hover:bg-blue-400 transition duration-300">
                    <i :class="['fas', isCardLayout ? 'fa-list' : 'fa-th']"></i>
                    {{ isCardLayout ? '切换列表视图' : '切换卡片视图' }}
                </button>
            </div>

            <!-- 分类标签 -->
            <div class="flex flex-wrap justify-center gap-4 w-full">
                <button v-for="category in categories" :key="category" @click="selectCategory(category)"
                    :class="['rounded whitespace-nowrap px-4 py-2 transition duration-300',
                        selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
                    {{ category }}
                </button>
            </div>

            <!-- 搜索栏 -->
            <div class="min-w-48">
                <input v-model="searchQuery" type="text" placeholder="搜索功能或指令..."
                    class="px-4 py-2 border-none rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
        </nav>

        <!-- 主要内容区 -->
        <main class="container mx-auto px-6 py-8">

            <!-- 功能展示区 -->
            <transition-group :name="isCardLayout ? 'layout-card' : 'layout-list'" tag="div" :class="[
                'grid gap-6',
                isCardLayout ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
            ]">
                <div v-for="feature in filteredFeatures" :key="feature.id" :class="[
                    'bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300',
                    isCardLayout ? 'transform hover:scale-105' : 'flex items-center'
                ]">
                    <div :class="['p-6', isCardLayout ? '' : 'flex-grow']">
                        <h2 class="text-xl font-semibold mb-2">{{ feature.name }}</h2>
                        <p class="text-gray-600 mb-4">{{ feature.description }}</p>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-blue-500 font-medium">{{ feature.command }}</span>
                            <button v-if="feature.more" @click="showCommandModal(feature)"
                                class="rounded whitespace-nowrap px-3 py-1 bg-blue-500 text-white hover:bg-blue-400 transition duration-300">
                                更多内容
                            </button>
                        </div>
                    </div>
                </div>
            </transition-group>
        </main>

        <!-- 指令模态框 -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-8 max-w-md w-full">
                <h2 class="text-2xl font-bold mb-4">{{ selectedFeature.name }} 更多内容</h2>
                <p class="mb-4">{{ selectedFeature.moreText }}</p>
                <button @click="showModal = false"
                    class="!rounded-button whitespace-nowrap px-4 py-2 bg-blue-500 text-white hover:bg-blue-400 transition duration-300">
                    关闭
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isCardLayout = ref(true);
const showSearch = ref(false);
const searchQuery = ref('');
const selectedCategory = ref('全部');
const showModal = ref(false);
const selectedFeature = ref({});

const categories = ['全部', '游戏玩法', '经济系统', '社交功能', '方便工具'];

const features = [
    {
        id: 1,
        name: '玩家传送',
        description: '快速传送到其他玩家的位置。',
        category: '游戏玩法',
        command: '/tpa <玩家名>',
        more: true,
        moreText: '这需要对方使用/tpaccept命令同意，随后还需要原地等待3秒。'
    },
    {
        id: 2,
        name: '转账',
        description: '向其他玩家发送岚币。',
        category: '经济系统',
        command: '/pay <玩家名> <金额>',
        more: false,
        moreText: ''
    },
    {
        id: 3,
        name: '名字',
        description: '描述',
        category: '经济系统', // 分类标签，包括"经济系统"，"社交功能"，"方便工具"，"游戏玩法"
        command: '/top',
        more: true, // 有more就有更多内容
        moreText: '更多内容的描述。'
    },
];

const filteredFeatures = computed(() => {
    return features.filter(feature => {
        const categoryMatch = selectedCategory.value === '全部' || feature.category === selectedCategory.value;
        const searchMatch = feature.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            feature.description.toLowerCase().includes(searchQuery.value.toLowerCase()) || feature.command.toLowerCase().includes(searchQuery.value.toLowerCase()) || feature.moreText.toLowerCase().includes(searchQuery.value);
        return categoryMatch && searchMatch;
    });
});

const toggleLayout = () => {
    isCardLayout.value = !isCardLayout.value;
};

const selectCategory = (category) => {
    selectedCategory.value = category;
};

const showCommandModal = (feature) => {
    selectedFeature.value = feature;
    showModal.value = true;
};
</script>

<style scoped>
.layout-card-move,
.layout-list-move {
    transition: all 0.5s ease;
}

.layout-card-enter-active,
.layout-card-leave-active,
.layout-list-enter-active,
.layout-list-leave-active {
    transition: all 0.5s ease;
}

.layout-card-enter-from,
.layout-card-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.layout-list-enter-from,
.layout-list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

.layout-card-leave-active,
.layout-list-leave-active {
    position: absolute;
}
</style>