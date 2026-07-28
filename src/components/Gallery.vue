<template>
  <div class="page">
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './Navbar.vue';

const router = useRouter();
const animate = ref(false);

onMounted(() => {
  console.log(localStorage.getItem('submerged'));
  if(!localStorage.getItem('submerged') && localStorage.getItem('submerged') !== 'true') {
    router.push('/');
  }
});

</script>

<style scoped>
.page {
  height: 100vh;
  min-width: 100%;
  overflow-y: auto;
  background: #000;
}

.navbar {
  position:fixed;
  width:100%;
  height:82px;
  z-index: 3;
}
</style>