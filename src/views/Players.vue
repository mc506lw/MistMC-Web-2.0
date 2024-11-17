<template>
    <div class="mt-16 px-4">
        <div class="flex flex-wrap items-center justify-center gap-6 relative">
            <!-- 左侧玩家作品展示 -->
            <transition name="fade">
                <div v-if="selectedWork" class="w-full lg:w-1/2 h-[60vh] relative p-4 bg-gray-50 rounded-md shadow-lg">
                    <img :data-src="selectedWork.image" class="lazyload w-full h-full object-cover rounded-md"
                        alt="Selected Work Image" />
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 rounded-md">
                    </div>
                    <h1 class="absolute top-8 left-8 text-4xl font-bold text-white">
                        {{ selectedWork.title }}
                    </h1>
                    <h2 class="absolute bottom-24 left-8 text-2xl font-semibold text-white">
                        {{ selectedWork.name }}
                    </h2>
                    <p class="absolute bottom-12 left-8 text-lg text-gray-300">
                        {{ selectedWork.intro }}
                    </p>
                    <button
                        class="absolute top-8 right-8 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md"
                        @click="closeWork">
                        返回
                    </button>
                </div>
            </transition>

            <!-- 右侧卡片展示 -->
            <div v-for="(card, index) in cards" :key="index"
                class="bg-white rounded-lg shadow-md p-2 h-[60vh] w-48 hover:w-72 transition-all duration-300 ease-in-out relative cursor-pointer border border-gray-200 hover:border-blue-500 transform group-hover:translate-x-4"
                @click="showWork(index)">
                <img class="lazyload object-cover w-full h-full rounded-md" :data-src="card.image" alt="Card Image" />
                <h2
                    class="absolute bottom-4 left-4 right-4 text-center text-gray-800 font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                    {{ card.name }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 当前选中的作品
            selectedWork: null,
            // 玩家作品数据（复用卡片的 name 属性）
            cards: [
                {
                    name: 'MC506LW',
                    title: '玩家作品 1',
                    intro: '这是一个出色的作品介绍 1',
                    image: 'https://www.idcd.com/tool/placeholder/400x850?text=Player+Work+1',
                },
                {
                    name: 'DDbox',
                    title: '玩家作品 2',
                    intro: '这是一个出色的作品介绍 2',
                    image: 'https://www.idcd.com/tool/placeholder/400x850?text=Player+Work+2',
                },
                {
                    name: 'moshushi',
                    title: '玩家作品 3',
                    intro: '这是一个出色的作品介绍 3',
                    image: 'https://www.idcd.com/tool/placeholder/400x850?text=Player+Work+3',
                },
            ],
        };
    },
    methods: {
        // 显示对应作品
        showWork(index) {
            this.selectedWork = this.cards[index];
        },
        // 关闭作品展示
        closeWork() {
            this.selectedWork = null;
        },
    },
};
</script>

<style scoped>
/* 渐显效果 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
