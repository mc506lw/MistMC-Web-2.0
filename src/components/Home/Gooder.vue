<template>
    <div class="mx-auto px-12 my-12">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">优秀作品展示</h2>
            <p class="text-gray-600">来自玩家的精彩创作</p>
        </div>
        <div class="grid md:grid-cols-4 gap-8">
            <div v-for="(work, index) in works" :key="index" class="group relative overflow-hidden rounded-lg" data-aos="fade-up" :data-aos-delay="index * 100">
                <img :src="work.image" :alt="work.title"
                    class="w-full h-[300px] object-cover object-top transition-transform group-hover:scale-105">
                <div
                    class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 class="text-xl font-bold mb-2">{{ work.title }}</h3>
                        <p class="text-sm">建造者：{{ work.author }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'

    export default {
        name: 'Gooder',
        setup() {
            const works = ref([
                {
                    title: '樱花基地',
                    author: 'Glowon & 111',
                    image: 'https://acbox.app/f/280yU8/%E5%BB%BA%E7%AD%912.png'
                },
                {
                    title: '计算器',
                    author: 'Lucas',
                    image: 'https://acbox.app/f/0Q3VIM/%E5%BB%BA%E7%AD%911.png'
                },
                {
                    title: '8核刷铁机',
                    author: 'RongLong',
                    image: 'https://acbox.app/f/3q9wfy/%E5%BB%BA%E7%AD%914.png'
                },
                {
                    title: '沙漠之家',
                    author: 'Dongfeng',
                    image: 'https://acbox.app/f/rJvmHd/%E5%BB%BA%E7%AD%913.png'
                },
            ])
            return {
                works
            }
        }
    }
</script>