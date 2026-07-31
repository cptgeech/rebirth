<template>
  <v-container class="video-wrapper">
    <!-- need video hosting service that isnt discord, one that supports files above 100mb -->
    <video
      ref="video"
      src="https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/compressed%20landing.mp4"
      class="fullscreen"
      muted
      autoplay
      playsinline
      @timeupdate="checkVideoTime"
      @ended="goHome"
    ></video>
  </v-container>
  <v-img width="100" class="rebirth-logo" :class="{ logodissolve: isDissolving }" src="/rebirthlogo.png"></v-img>
  <div v-if="showTitle" @click="enter" @animationend="showTitle = false" class="centered" :class="{ dissolve: isDissolving }">
    <p style="font-family:'Neuropolitical', sans-serif;color:rgba(255, 255, 255, 0.9);font-size:30px;" class="title w-full">take the plunge,,</p>
    <p class="pt-2" style="font-family:'Fraktion', sans-serif;color:rgba(255, 255, 255, 0.7)">there is no second crossing,,</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const video = ref(null);
const isDissolving = ref(false);
const showTitle = ref(true);
const hasEntered = ref(false);
const router = useRouter();

onMounted(() => {
  if(localStorage.getItem('submerged') === 'true') {
    router.push('/home');
  }
})

const checkVideoTime = () => {
  if (!hasEntered.value && video.value.currentTime >= 55) {
    video.value.currentTime = 0
    video.value.play()
  }
}

const enter = () => {
  isDissolving.value = true;
  hasEntered.value = true

  video.value.currentTime = 59
  video.value.playbackRate = 1.25
  video.value.play()
}

const goHome = () => {
  router.push('/home');
}
</script>

<style scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 101vw;
  height: 100vh;
  object-fit: cover;
  object-position: center 60%;
}
.video-wrapper::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle,
    transparent,
    rgba(0, 0, 0, 1) 100%
  );
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

.centered:hover {
  cursor: pointer;
}
.title {
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 1);
}

.dissolve {
  animation: dissolve 1s ease forwards;
}

.logodissolve {
  animation: logodissolve 1s ease forwards;
}

.rebirth-logo {
  position:absolute;
  top:20px;
  left:20px;
  color:black;
  opacity: 0.3;
}

@keyframes dissolve {
  from {
    opacity: 1;
    filter: blur(0);
  }

  to {
    opacity: 0;
    filter: blur(12px);
  }
}

@keyframes logodissolve {
  from {
    opacity: 0.3;
    filter: blur(0);
  }

  to {
    opacity: 0;
    filter: blur(12px);
  }
}
</style>