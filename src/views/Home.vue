<template>
  <img id="bg-img" src="https://drive.almondcloud.cn/f/xJxXSk/%E5%A4%B4%E5%9B%BE%E5%B7%A8%E5%B0%8F.webp" class="absolute blur-[1px] -top-32 left-0 -z-10 w-full h-full object-cover" />
  <img id="bg-img" src="https://drive.almondcloud.cn/f/n592tr/%E5%A4%B4%E5%9B%BE1%E5%B0%8F.png" class="absolute -top-32 left-0 -z-[9] w-full h-full object-cover" />
  <img id="bg-img" src="https://drive.almondcloud.cn/f/4Gn4ie/%E5%A4%B4%E5%9B%BE1.png" class="absolute -top-32 left-0 -z-[8] w-full h-full object-cover" />
  <div class="absolute top-[25vh] left-8 md:left-32">
    <Helloh1 />
  </div>
  <div class="h-[60vh]"></div>
  <div>
    <Better />
    <Play-fun />
    <Team />
    <!-- <Photo /> -->
    <Gooder />
    <Joinus />
  </div>
</template>

<script>
import Helloh1 from '../components/Home/Helloh1.vue';
import Better from '../components/Home/Better.vue';
import PlayFun from '../components/Home/PlayFun.vue';
import Team from '../components/Home/Team.vue';
import Photo from '../components/Home/Photo.vue';
import Joinus from '../components/Home/Joinus.vue';
import Gooder from '../components/Home/Gooder.vue';


export default {
  components: {
    Helloh1,
    Better,
    PlayFun,
    Team,
    Photo,
    Joinus,
    Gooder,
  },
  name: 'Home'
};
</script>

<style>
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>