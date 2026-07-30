<template>
  <div class="page">
    <div class="main-wrapper px-3">
      <div v-if="loading" class="w-100 h-100 d-flex align-center justify-center">
        <span class="loader"></span>
      </div>

      <div v-else-if="event">
        <div class="recent-event pt-5">
          <div class="text-center">
            <img class="recent-event-poster" src="https://api.clubrebirth.net/event-poster.jpg">
          </div>
          <div class="event-info">
            <p class="pb-2" style="font-size:25px;">{{ event.name }}</p>
            <p style="font-size:20px;" class="pb-1">{{ new Date(event.start * 1000).toLocaleDateString() }}</p>
            <p v-if="event.description" class="pb-5" style="font-size:15px;color:rgba(255, 255, 255, 0.5);">{{ event.description }}</p>
            <div class="performer-wrapper">
              <div>
                <p v-for="dj in event.performers" :key="dj.id">{{ dj.name }} <span style="color:rgba(255, 255, 255, 0.5);">- {{ new Date(dj.start * 1000).toLocaleTimeString()  }}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <v-divider></v-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const loading = ref(false);
const event = ref(null);
const performers = ref([]);


onMounted(() => {
  loading.value = true;
  axios.get('https://api.clubrebirth.net/event.json').then((res) => {
    loading.value = false;
    event.value = res.data;
  });
})

</script>

<style scoped>
.page {
  overflow-y: auto;
  background: black;
  background-image: url('/blackest_pattern.png');
  background-size:25%;
  background-repeat: repeat;
}

.main-wrapper {
  width:100%;
  height:100vh;
  padding-top: 82px;
  font-family: 'Fraktion', sans-serif;
}

.recent-event {
  display:flex;
  gap: 70px;
  justify-content: center;
}

.event-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.recent-event-poster {
  max-width: 300px;
}

.old-event-wrapper {
  display:flex;
  flex-direction: column;
  align-items: center;
}

.old-event-poster {
  max-height: 300px;
}

.other-events {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.loader {
  --color-1: #fff;
  --color-2: #ffb6f2;
  --size: 1px;

  width: calc(48 * var(--size));
  height: calc(48 * var(--size));
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
}
.loader::before,
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: calc(5 * var(--size)) solid var(--color-1);
  animation: prixClipFix 2s linear infinite;
}
.loader::after {
  border-color: var(--color-2);
  animation:
    prixClipFix 2s linear infinite,
    rotate 0.5s linear infinite reverse;
  inset: calc(6 * var(--size));
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}

@media (max-width: 768px) {
  .recent-event {
    flex-direction:column;
    align-items:center;
    gap:10px;
  }

  .event-info {
    align-items: center;
  }

  .performer-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>