<template>
  <div>
    <Navbar v-if="showNavbar" @animationend="animate = false" class="navbar no-select px-3" :class="{ 'navbar-dissolve-in': (route.path === '/home' && animate) }" />
    <router-view />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();

const showNavbarRoutes = ['/home', '/gallery', '/events', '/our-team'];

const showNavbar = computed(() => {
  return showNavbarRoutes.includes(route.path)
})

const animate = ref(false);

onMounted(() => {
  console.log(localStorage.getItem('submerged'));
  if(!localStorage.getItem('submerged') && localStorage.getItem('submerged') !== 'true') {
    animate.value = true;
  }
});
</script>

<style scoped>
.navbar {
  position:fixed;
  width:100%;
  height:82px;
  z-index: 3;
}

.navbar-dissolve-in {
  opacity: 0;
  animation: dissolveIn 1s ease 5s forwards;
}

.no-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
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
