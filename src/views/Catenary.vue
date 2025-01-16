<template>
    <div class="min-h-screen py-8">
        <div class="mx-32 px-4">
            <h1 class="text-4xl font-bold text-center mb-12">岚域特殊合成配方</h1>

            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- 工作台配方卡片 -->
                <div data-aos="fade-up" v-for="(recipe, index) in recipes" :key="index"
                    class="bg-white flex rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                    
                    <div class="bg-gray-100 rounded-lg p-4 w-64">
                        <h3 class="text-xl font-semibold">{{ recipe.name }}</h3>
                        <div class="text-sm font-medium text-gray-500 mb-3">合成配方:</div>
                            <div class="bg-white rounded-md p-2 flex flex-col items-center">
                                <img :src="recipe.recipeImage" class="w-full h-auto object-cover rounded">
                        </div>
                    </div>

                    <div class="mb-6 ml-12">
                        <img :src="recipe.resultImage"
                            class="w-full h-48 aspect-square object-cover rounded-lg mb-4">
                        <p class="text-gray-600">{{ recipe.description }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Recipe {
    name: string;
    description: string;
    resultImage: string;
    recipeImage: string;
}

const recipes = ref<Recipe[]>([
    {
        name: '彩虹玻璃板悬链',
        description: '炫酷的彩虹玻璃板悬链，可以用来制作各种装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/9NwkIq/%E5%BD%A9%E8%99%B9%E7%8E%BB%E7%92%83%E6%9D%BF%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/0Q1RhM/%E5%BD%A9%E8%99%B9%E7%8E%BB%E7%92%83%E6%9D%BF%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '灯笼悬锁链',
        description: '灯笼悬锁链可以用来制作各种装饰效果，拥有一定亮度。',
        resultImage: 'https://drive.almondcloud.cn/f/60b5Ir/%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/n5qzir/%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '电线',
        description: '电线可以用来制作各种装饰效果，并不具备导电能力。',
        resultImage: 'https://drive.almondcloud.cn/f/PJ1juV/%E7%94%B5%E7%BA%BF.png',
        recipeImage: 'https://drive.almondcloud.cn/f/OvMYTP/%E7%94%B5%E7%BA%BF%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '混合灯笼悬锁链',
        description: '混合灯笼悬锁链是由灯笼和灵魂灯笼混合的，可以用来制作各种装饰效果，拥有一定亮度。',
        resultImage: 'https://drive.almondcloud.cn/f/BX6xhB/%E6%B7%B7%E5%90%88%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/GbJGFn/%E6%B7%B7%E5%90%88%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '简单悬锁链（弯）',
        description: '简单悬锁链（弯）可以用来制作各种装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/ePqbud/%E7%AE%80%E5%8D%95%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/JwxdsR/%E7%AE%80%E5%8D%95%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '简单悬锁链（直）',
        description: '简单悬锁链（直）可以用来制作各种装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/xJ3ock/%E7%9B%B4%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/yeVMI4/%E7%9B%B4%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '灵魂灯笼悬锁链',
        description: '灵魂灯笼悬锁链可以用来制作各种装饰效果，拥有一定亮度。',
        resultImage: 'https://drive.almondcloud.cn/f/QvRJcE/%E7%81%B5%E9%AD%82%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/dQxaUZ/%E7%81%B5%E9%AD%82%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '末地烛悬链',
        description: '末地烛悬链可以用来制作各种装饰效果，拥有一定亮度。',
        resultImage: 'https://drive.almondcloud.cn/f/vY4oTQ/%E6%9C%AB%E5%9C%B0%E7%83%9B%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/gvgvfb/%E6%9C%AB%E5%9C%B0%E7%83%9B%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '砂轮悬链',
        description: '砂轮悬链可以用来制作各种装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/145bUm/%E7%A0%82%E8%BD%AE%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/M4jYf9/%E7%A0%82%E8%BD%AE%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '苔藓束悬链',
        description: '苔藓束悬链可以用来制作各种自然的装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/YJ0lue/%E8%8B%94%E8%97%93%E6%9C%AF.png',
        recipeImage: 'https://drive.almondcloud.cn/f/zy0lty/%E8%8B%94%E8%97%93%E6%9C%AF%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '直铁链',
        description: '直铁链可以用来制作各种装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/jZ1RS6/%E7%9B%B4%E9%93%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/Zw9BUo/%E7%9B%B4%E9%93%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '纸灯笼链',
        description: '纸灯笼链是由自定义头颅作为装饰，可以用来制作各种装饰效果，拥有一定亮度。',
        resultImage: 'https://drive.almondcloud.cn/f/EWQMfj/%E7%BA%B8%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/DgdZs4/%E7%BA%B8%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE%20%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '竹子链',
        description: '竹子链可以用来制作各种自然的装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/VZ2OI0/%E7%AB%B9%E5%AD%90.png',
        recipeImage: 'https://drive.almondcloud.cn/f/XxrQFD/%E7%AB%B9%E5%AD%90%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '紫水晶链',
        description: '紫水晶链可以用来制作各种装饰效果。',
        resultImage: 'https://drive.almondcloud.cn/f/NJWXU9/%E7%B4%AB%E6%B0%B4%E6%99%B6%E7%81%AF.png',
        recipeImage: 'https://drive.almondcloud.cn/f/mnZBi1/%E7%B4%AB%E6%B0%B4%E6%99%B6%E7%81%AF%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '字符锁链（命名牌）',
        description: '命名牌字符锁链可以合成后改名以创建带有独特名称的锁链。',
        resultImage: 'https://drive.almondcloud.cn/f/EWQMfj/%E7%BA%B8%E7%81%AF%E7%AC%BC%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/8n0dFr/%E5%AD%97%E7%AC%A6%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
    {
        name: '字符锁链（告示牌）',
        description: '告示牌字符锁链可以合成后改名以创建带有独特名称的锁链。',
        resultImage: 'https://drive.almondcloud.cn/f/aGJefO/%E5%AD%97%E6%AF%8D%E9%94%81%E9%93%BE.png',
        recipeImage: 'https://drive.almondcloud.cn/f/q3bZc9/%E5%AD%97%E6%AF%8D%E9%94%81%E9%93%BE%E9%85%8D%E6%96%B9.png'
    },
]);
</script>

<style scoped>
.grid {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .recipe-grid {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}
</style>