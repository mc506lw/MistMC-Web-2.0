<template>
    <div data-aos="fade-up" :data-aos-delay="Number(index) * 100" class="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out w-96 h-32"
        @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <!-- 左侧: 头像和职位 -->
        <div class="flex flex-col justify-between items-center absolute top-0 left-0 w-1/3 h-full bg-slate-200 p-4">
            <img :src="imageUrl" alt="头像" class="rounded-md w-16 h-16 mb-2 object-cover" />
            <p class="text-gray-900 font-medium">{{ position }}</p>
        </div>

        <!-- 右侧: 名字和介绍 -->
        <div class="absolute top-0 right-0 w-2/3 h-full bg-white p-2">
            <h3 class="text-lg font-semibold text-gray-900">{{ name }}</h3>
            <p class="text-gray-700 text-sm mt-2 h-8">{{ description }}</p>
            <div class="flex justify-start space-x-4 mt-3">
                <a v-if="githubUrl" :href="githubUrl" target="_blank" class="text-gray-600">
                    <i class="icon icon-github text-xl">{{ githubName }}</i>
                </a>
                <a v-if="bilibiliUrl" :href="bilibiliUrl" target="_blank" class="text-gray-600">
                    <i class="icon icon-bilibili-line text-xl">{{ bilibiliName }}</i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TeamCard",
    props: {
        index: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        githubUrl: {
            type: String,
            default: null,
        },
        bilibiliUrl: {
            type: String,
            default: null,
        },
        githubName: {
            type: String,
            default: null,
        },
        bilibiliName: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            isHovered: false,
        };
    },
};
</script>

<style scoped>
</style>