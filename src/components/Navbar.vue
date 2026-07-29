<template>
  <div class="d-flex flex-column navbar">
    <div class="d-flex justify-space-between align-center bar">
      <div class="d-flex align-center">
        <v-img class="logo no-select" src="/rebirthlogo.png"></v-img>
      </div>
      <div class="center-menu" style="font-family:'Fraktion', sans-serif;">
        <p class="link no-select" @click="router.push('/home')">home</p>
        <p class="link no-select" @click="router.push('/gallery')">gallery</p>
        <p class="link no-select" @click="router.push('/events')">events</p>
        <p class="link no-select" @click="router.push('/our-team')">our team</p>
      </div>
      <v-img @click="resurface()" class="exit-logo no-select" src="/new_white_exit.png"></v-img>
      <!--<v-navigation-drawer color="black" location="right" temporary v-model="drawer">
        <v-list density="compact" nav>
          <v-list-item @click="router.push('/home')"><v-list-item-title style="font-family: 'Fraktion', sans-serif;">home</v-list-item-title></v-list-item>
          <v-list-item @click="router.push('/gallery')"><v-list-item-title style="font-family: 'Fraktion', sans-serif;">gallery</v-list-item-title></v-list-item>
          <v-list-item><v-list-item-title style="font-family: 'Fraktion', sans-serif;">events</v-list-item-title></v-list-item>
          <v-list-item><v-list-item-title style="font-family: 'Fraktion', sans-serif;">our team</v-list-item-title></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <div class="d-flex justify-center align-center h-100">
        <v-btn
          color="primary"
          @click.stop="drawer = !drawer"
          @click:outside="drawer = false"
        >
          Toggle
        </v-btn>
      </div>-->
    </div>
    <v-divider></v-divider>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const drawer = ref(null)
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
  color:rgba(255, 255, 255, 0.5)
}

.link:hover {
  color:white;
}

.no-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>