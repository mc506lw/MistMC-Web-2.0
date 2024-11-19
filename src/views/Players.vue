<template>
  <div class="flex">
    <div class="-top-5 fixed w-full h-full bg-slate-100/90 flex justify-center items-center">
        <h2 class="text-center text-4xl font-bold">没做完</h2>
    </div>
    <div class="flex-1 p-4">
      <h1 class="text-2xl font-bold">{{ selectedCharacter.name }}</h1>
      <p>{{ selectedCharacter.description }}</p>
      <img :src="selectedCharacter.image" alt="" class="mt-4 w-full h-auto" />
    </div>
    <div class="w-1/3 overflow-x-auto">
      <div
        class="flex space-x-2"
        :style="scrollStyle"
        ref="characterList"
      >
        <div
          v-for="(character, index) in characters"
          :key="character.id"
          class="w-24 h-48 flex-shrink-0 cursor-pointer transform transition-transform"
          :class="{'scale-110': index === selectedIndex}"
          @click="selectCharacter(index)"
        >
          <img :src="character.image" alt="" class="rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      characters: [
        { id: 1, name: '1', description: '描述1', image: 'https://www.idcd.com/tool/placeholder/900x900?text=ren' },
        { id: 2, name: '2', description: '描述2', image: 'https://www.idcd.com/tool/placeholder/900x900?text=ren' },
        { id: 3, name: '3', description: '描述3', image: 'https://www.idcd.com/tool/placeholder/900x900?text=ren' },
        // 更多角色...
      ],
      selectedIndex: 0,
    };
  },
  computed: {
    selectedCharacter() {
      return this.characters[this.selectedIndex];
    },
    scrollStyle() {
      return {
        transform: `translateX(${-(this.selectedIndex - 1) * 100}px)`,
      };
    },
  },
  methods: {
    selectCharacter(index) {
      this.selectedIndex = index;
      this.$nextTick(() => {
        this.scrollToMiddle();
      });
    },
    scrollToMiddle() {
      const list = this.$refs.characterList;
      const characterWidth = 100; // 你的角色卡片宽度
      const visibleWidth = list.clientWidth;
      const scrollLeft = this.selectedIndex * characterWidth - visibleWidth / 2 + characterWidth / 2;
      list.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    },
  },
};
</script>

<style>
/* 你的样式可以放这里 */
</style>
