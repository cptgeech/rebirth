<template>
  <div class="d-flex flex-column navbar">
    <div class="d-flex justify-space-between align-center bar">
      <div class="d-flex align-center">
        <v-img class="logo no-select" src="/rebirthlogo.png"></v-img>
      </div>
      <div class="center-menu" style="font-family:'Fraktion', sans-serif;">
        <p class="link no-select" @click="router.push('/home')">home</p>
        <p class="link no-select" @click="router.push('/gallery')">gallery</p>
        <p class="link no-select">events</p>
        <p class="link no-select">our team</p>
      </div>
      <v-img @click="resurface()" class="exit-logo no-select" src="/new_white_exit.png"></v-img>
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const resurface = () => {
  localStorage.removeItem('submerged');
  router.push('/');
};
</script>

<style scoped>
.navbar {
  background-color:black;
}

.logo {
  width:75px;
  height:75px;
  flex: 0 0 75px;
  opacity: 0.8;
}

.exit-logo {
  width:50px;
  height:50px;
  flex: 0 0 50px;
  cursor: pointer;
}

.center-menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width:50%;
}

.link {
  cursor: pointer;
  transition: 0.4s;
}

.link:hover {
  color:white;
}

.no-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
</style>