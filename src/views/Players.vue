<template>
  <div class="relative w-full h-screen">

    <!-- 分类列表 -->
    <div class="absolute top-20 left-16 flex flex-col h-5/6 items-center justify-center">
      <div class="my-20">
        <div v-for="(category, index) in categories" :key="index" @click="selectCategory(index)"
          class="my-6 cursor-pointer flex items-center flex-1">
          <img :src="category.icon" alt="分类图标" class="w-16 h-16 shadow-md border-white border-2 rounded-md" />
          <span class="text-xl text-gray-800 font-semibold">{{ category.name }}</span>
        </div>
      </div>
    </div>

    <!-- 人物展示区域 -->
    <div class="absolute right-16 top-20 w-2/3 h-5/6 flex items-center">
      <!-- 人物详细信息 -->
      <div class="w-1/3 flex flex-col items-center">
        <img v-if="selectedPlayer" :src="selectedPlayer.img" alt="人物头像" class="h-64 w-64 rounded-full shadow-lg" />
        <div v-if="selectedPlayer" class="text-center mt-5">
          <h1 class="text-4xl font-bold text-black mb-4">{{ selectedPlayer.name }}</h1>
          <p class="text-lg text-gray-700">{{ selectedPlayer.intro }}</p>
        </div>
        <div v-else class="text-center">
          <img :src="selectedPlayer?.dimg || defaultBackground" alt="背景图"
            class="mt-24 object-cover transition-all duration-300" />

          <h1 class="text-4xl font-bold text-black my-4">{{ selectedCategory.name }}</h1>
          <p class="text-lg text-gray-700">{{ selectedCategory.description }}</p>
        </div>
      </div>

      <!-- 人物列表 -->
      <div class="w-2/3 h-5/6 flex gap-4 justify-start ml-10">
        <div v-for="(player, index) in selectedCategory.players" :key="index" @click="selectPlayer(player)"
          :class="{ 'border-blue-500': selectedPlayer === player }"
          class="cursor-pointer relative w-64 h-full shadow-md border-2 rounded-md overflow-hidden transition-all duration-300 hover:w-72">
          <img :src="player.slimg" alt="人物立绘" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultBackground: {
      type: String,
      default: "https://www.idcd.com/tool/placeholder/900x900?text=分类默认背景",
    },
  },
  data() {
    return {
      categories: [
        {
          name: "分类1",
          description: "这是分类1的介绍",
          icon: "https://www.idcd.com/tool/placeholder/100x100?text=分类1",
          players: [
            {
              name: "人物名称1",
              intro: "人物介绍1",
              slimg: "https://www.idcd.com/tool/placeholder/100x100?text=人物1",
              img: "https://www.idcd.com/tool/placeholder/300x300?text=人物1大图",
              dimg: "https://www.idcd.com/tool/placeholder/600x400?text=人物1背景",
            },
            {
              name: "人物名称2",
              intro: "人物介绍2",
              slimg: "https://www.idcd.com/tool/placeholder/100x100?text=人物2",
              img: "https://www.idcd.com/tool/placeholder/300x300?text=人物2大图",
              dimg: "https://www.idcd.com/tool/placeholder/600x400?text=人物2背景",
            },
          ],
        },
        {
          name: "分类2",
          description: "这是分类2的介绍",
          icon: "https://www.idcd.com/tool/placeholder/100x100?text=分类2",
          players: [
            {
              name: "人物名称3",
              intro: "人物介绍3",
              slimg: "https://www.idcd.com/tool/placeholder/100x100?text=人物3",
              img: "https://www.idcd.com/tool/placeholder/300x300?text=人物3大图",
              dimg: "https://www.idcd.com/tool/placeholder/600x400?text=人物3背景",
            },
          ],
        },
      ],
      selectedCategoryIndex: 0,
      selectedPlayer: null,
    };
  },
  computed: {
    selectedCategory() {
      return this.categories[this.selectedCategoryIndex];
    },
  },
  methods: {
    selectCategory(index) {
      this.selectedCategoryIndex = index;
      this.selectedPlayer = null; // 切换分类时重置选中的人物
    },
    selectPlayer(player) {
      this.selectedPlayer = player;
    },
  },
};
</script>

<style scoped>
/* 添加一些动画效果和样式优化 */
</style>
