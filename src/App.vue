<template>
  <Navbar />
  <img src="./assets/3.png" class="absolute -top-32 right-0 -z-10 w-full">
  <div class="absolute top-[25vh] left-32">
    <Helloh1 />
  </div>
  <div class="h-[60vh]"></div>
  <div>
    <Better />
  </div>
  <div>
    <Play-fun />
  </div>
  <div>
    <Team />
  </div>
  <div>
    <Photo />
  </div>
  <div>
    <Joinus />
  </div>
  <Footer />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Helloh1 from './components/Helloh1.vue';
import Better from './components/Better.vue';
import PlayFun from './components/PlayFun.vue';
import Team from './components/Team.vue';
import Photo from './components/Photo.vue';
import Joinus from './components/Joinus.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Helloh1,
    Better,
    PlayFun,
    Team,
    Photo,
    Joinus,
    Footer,
  },
};
</script>

<style></style>
