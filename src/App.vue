<template>
  <div>
    <OrientationPrompt />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import OrientationPrompt from './components/OrientationPrompt.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    OrientationPrompt
  },
};
</script>

<style></style>
