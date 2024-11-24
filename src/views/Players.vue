<template>
  <div class="relative w-full h-screen">
    <!-- 分类列表 -->
    <div class="absolute top-20 left-16 flex flex-col h-5/6 items-center justify-center">
      <div class="my-20">
        <div v-for="(category, index) in categories" :key="index" @click="selectCategory(index)"
          class="my-6 cursor-pointer flex items-center flex-1">
          <img :src="category.icon" alt="分类图标" class="w-16 h-16 shadow-md border-white border-2 rounded-md" />
          <span class="text-xl ml-4 text-gray-800 font-semibold">{{ category.name }}</span>
        </div>
      </div>
    </div>

    <!-- 人物展示区域 -->
    <div class="absolute right-16 top-20 w-[80%] h-5/6 flex items-center">
      <!-- 人物详细信息 -->
      <div class="relative min-w-[50%] h-full flex flex-col items-center transition-all duration-300 ease-in-out"
        :class="{ 'min-w-[70%]': selectedPlayer }">

        <Transition name="fade">
          <img v-if="selectedPlayer" :src="selectedPlayer.img" alt="人物大图"
            class="h-full w-full object-cover rounded-md shadow-lg" />
        </Transition>

        <Transition name="fade">
          <div v-if="selectedPlayer" class="absolute top-0 left-0">
            <button @click="selectedPlayer = null"
              class="mr-4 bg-white/60 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><i
                class="icon icon-arrow-left">返回</i></button>
          </div>
        </Transition>
        <Transition name="fade">
          <div v-if="selectedPlayer" class="absolute bottom-0 left-0">
            <h1 class="text-4xl font-bold text-black ml-6 mb-4">{{ selectedPlayer.name }}</h1>
            <p class="text-lg h-24 text-gray-700 ml-6 mb-4">{{ selectedPlayer.intro }}</p>
          </div>
          <div v-else class="mt-16 absolute text-center h-5/6 w-full">
            <img :src="categories[selectedCategoryIndex].dimg" alt="分类背景图"
              class="w-full h-full object-cover transition-all duration-300" />
            <h1 class="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-black">{{
              selectedCategory.name }}</h1>
            <p class="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-lg text-gray-700">{{
              selectedCategory.description }}</p>
          </div>
        </Transition>
      </div>

      <!-- 人物列表 -->
      <div class="w-auto h-5/6 flex gap-4 justify-start ml-10 overflow-clip">
        <TransitionGroup name="fade">
          <div v-for="(player, index) in reorderedPlayers" :key="index" @click="selectPlayer(player)"
            :class="{ 'border-blue-500': selectedPlayer === player }"
            class="cursor-pointer relative w-64 h-full shadow-md border-2 rounded-md overflow-hidden transition-all duration-300 hover:w-72">
            <img :src="player.slimg" alt="人物立绘" class="w-full h-full object-cover" />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "分类1",
          description: "这是分类1的介绍",
          icon: "https://www.idcd.com/tool/placeholder/900x900?text=1",
          dimg: "https://www.idcd.com/tool/placeholder/900x900?text=1",
          players: [
            {
              name: "人物名称1",
              intro: "人物介绍1",
              slimg: "https://www.idcd.com/tool/placeholder/900x900?text=a",
              img: "https://www.idcd.com/tool/placeholder/900x900?text=A",
            },
            {
              name: "人物名称2",
              intro: "人物介绍2",
              slimg: "https://www.idcd.com/tool/placeholder/900x900?text=b",
              img: "https://www.idcd.com/tool/placeholder/900x900?text=B",
            },
            {
              name: "人物名称1",
              intro: "人物介绍1",
              slimg: "https://www.idcd.com/tool/placeholder/900x900?text=c",
              img: "https://www.idcd.com/tool/placeholder/900x900?text=C",
            },
            {
              name: "人物名称2",
              intro: "人物介绍2",
              slimg: "https://www.idcd.com/tool/placeholder/900x900?text=d",
              img: "https://www.idcd.com/tool/placeholder/900x900?text=D",
            },
          ],
        },
        {
          name: "分类2",
          description: "这是分类2的介绍",
          icon: "https://www.idcd.com/tool/placeholder/900x900?text=2",
          dimg: "https://www.idcd.com/tool/placeholder/900x900?text=2",
          players: [
            {
              name: "人物名称3",
              intro: "人物介绍3",
              slimg: "https://www.idcd.com/tool/placeholder/900x900?text=e",
              img: "https://www.idcd.com/tool/placeholder/900x900?text=E",
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
    reorderedPlayers() {
      if (!this.selectedPlayer) return this.selectedCategory.players;
      const selectedIndex = this.selectedCategory.players.findIndex(player => player === this.selectedPlayer);
      return [
       ...this.selectedCategory.players.slice(selectedIndex),
       ...this.selectedCategory.players.slice(0, selectedIndex)
      ];
    }
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>