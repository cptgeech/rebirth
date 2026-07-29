<template>
  <div class="page pt-3">
    <div class="main-wrapper">
      <div class="card">
        <video
          class="video-background px-3"
          :class="{ 'second-dissolve-in': animate }"
          autoplay
          muted
          loop
          playsinline
          disablePictureInPicture
        >
          <source src="https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/site.mp4" type="video/mp4" />
        </video>

        <div class="video-overlay"></div>
      
        <div class="text-content no-select">
          <p style="animation-delay: 1s;" class="text-dissolve-in">
            embrace,,
          </p>
          <p style="animation-delay: 3s;" class="pt-3 text-dissolve-in">
            submerge,,
          </p>
        </div>
      </div>
      <!--<div class="card">
        <div class="text-background second-dissolve-in"></div>
        <div class="text-content no-select">
          <p style="animation-delay:1s;" class="text-dissolve-in">embrace,,</p>
          <p style="animation-delay:3s;" class="pt-3 text-dissolve-in">submerge,,</p>
        </div>
      </div>-->
      <div class="px-3 py-3" :class="{ 'second-dissolve-in': animate }">
        <v-divider></v-divider>
      </div>
      <div class="join-card px-3" :class="{ 'second-dissolve-in': animate }">
        <div class="text-background" :class="{ 'second-dissolve-in': animate }"></div>
        <p style="z-index: 4;" class="pt-3 no-select">join the cause,,</p>
        <div class="d-flex ga-2 no-select">
          <a class="mt-5 icon" style="width:35px;height:35px;" href="https://discord.gg/V3bmdXs2fk" target="_blank"><v-img style="width:35px;height:35px;" src="/Discord-Symbol-White.png"></v-img></a>
          <a class="mt-5 icon" style="width:35px;height:35px;" href="https://bsky.app/profile/minti.zip" target="_blank"><v-img style="width:35px;height:35px;" src="/bluesky-white-icon.png"></v-img></a>
          <a class="mt-5 icon" style="width:35px;height:35px;" href="https://vrc.group/REBRTH.2629" target="_blank"><v-img style="width:35px;height:35px;" src="/vrc_icon.png"></v-img></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const animate = ref(false);

onMounted(() => {
  if(!localStorage.getItem('submerged') && localStorage.getItem('submerged') !== 'true') {
    animate.value = true;
    localStorage.setItem('submerged', 'true');
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

/* could make the cards 30% if 33% makes location of embrace,, submerge,, too low */
.card {
  position:relative;
  font-family: 'Fraktion', sans-serif;
  font-size: 30px;
  height:85%;
  width:100%;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.join-card {
  position:relative;
  font-family: 'Fraktion', sans-serif;
  font-size: 30px;
  height:33%;
  width:100%;
  display: flex;
  flex-direction:column;
  color:rgba(255, 255, 255, 0.8);
}

.icon {
  opacity: 0.8;
}

.main-wrapper {
  width:100%;
  height:100vh;
}

.video-background {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  z-index: 0;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  pointer-events: none;
}

.text-background {
  position: absolute;
  inset: 0;

  background-image: url('/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  background-position: center 400px;

  z-index: 0;
}

.repeating-rebirth-background {
  position: absolute;
  inset: 0;

  background: url('/blackest_pattern.png') center / cover no-repeat;
  background-attachment: fixed;

  opacity: 0.1;

  z-index: 0;
}

.text-content {
  position: relative;
  z-index: 1;
  color:rgba(255, 255, 255, 0.8);
}

.text-dissolve-in {
  animation: dissolveIn 1s ease both;
}

.second-dissolve-in {
  opacity: 0;
  animation: dissolveIn 1s ease 5s forwards;
}

.no-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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