<template>
  <v-container fluid class="page">
    <Navbar class="navbar-dissolve-in navbar" />
    <!-- <Navbar class="navbar" /> -->
    <div class="centered" style="font-family:'Fraktion', sans-serif;font-size:30px;">
      <p class="dissolve-in first">embrace,,</p>
      <p class="pt-3 dissolve-in second">submerge,,</p>
    </div>
  </v-container>
</template>

<script setup>
import Navbar from './Navbar.vue';

</script>

<style scoped>
.page {
  min-height: 100vh;
  min-width: 100vw;
  background: #000;
  color: #fff;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: fit-content;
  text-align: left;
  z-index: 2;
}

.dissolve-in {
  animation: dissolveIn 1s ease both;
}

.navbar-dissolve-in {
  animation: dissolveIn 2s ease both;
}

.first {
  animation-delay: 1s;
}

.second {
  animation-delay: 2.5s;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  animation-delay: 4s;
}

@keyframes dissolveIn {
  from {
    opacity: 0;
    filter: blur(12px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}
</style>