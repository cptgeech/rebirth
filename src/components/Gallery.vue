<template>
  <div class="page">
    <div class="main-wrapper">
      <div v-for="carousel in carousels" class="card px-3">
        <p>{{ carousel.artist }}</p>
        <div class="carousel-wrapper mt-5">
          <Transition name="fade">
            <v-btn v-show="carousel.showLeft" @click="scrollCarousel(carousel.element, -1)" class="carousel-button left-button" icon><v-icon>mdi-chevron-left</v-icon></v-btn>
          </Transition>
          <div :ref="el => carousel.element = el" class="carousel ga-3" @scroll="checkScroll(carousel)">
            <div v-for="poster in carousel.posters" :key="poster">
              <video
                v-if="/\.(mp4|webm|ogg|mov)/i.test(poster.url)"
                @click="dialog = true;selectedPoster = poster;"
                autoplay
                muted
                loop
                playsinline
                disablePictureInPicture
              >
                <source :src="poster.url" type="video/mp4" />
              </video>
              <img v-else :src="poster.compressed_url" @click="dialog = true;selectedPoster = poster;" @load="checkScroll(carousel)">
            </div>
          </div>
          <Transition name="fade">
            <v-btn v-show="carousel.showRight" @click="scrollCarousel(carousel.element, 1)" class="carousel-button right-button" icon><v-icon>mdi-chevron-right</v-icon></v-btn>
          </Transition>
        </div>
        <div class="pb-5 pt-8">
          <v-divider></v-divider>
        </div>
      </div>
    </div>
  </div>
  <v-dialog width="auto" v-model="dialog">
    <v-card class="dialog-card">
      <video
        v-if="/\.(mp4|webm|ogg|mov)/i.test(selectedPoster.url)"
        controls
        autoplay
        muted
        loop
        disablePictureInPicture
      >
        <source :src="selectedPoster.url" type="video/mp4" />
      </video>
      <img v-else :src="selectedPoster.url">
      <p class="pt-5 pb-2 poster-title">{{ selectedPoster.title }}</p>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './Navbar.vue';

const router = useRouter();

const animate = ref(false);
const propCarousel = ref(null);
const showLeft = ref(false);
const showRight = ref(true);

const dialog = ref(false);
const selectedPoster = ref(null);

const resizeHandler = () => carousels.value.forEach(checkScroll);

const scrollCarousel = (carousel, direction) => {
  carousel?.scrollBy({
    left: direction * 400,
    behavior: 'smooth',
  });
};

const checkScroll = (carousel) => {
  carousel.showLeft = carousel.element.scrollLeft > 0;
  carousel.showRight = carousel.element.scrollLeft + carousel.element.clientWidth < carousel.element.scrollWidth;
};

const carousels = ref([
  { 
    artist: 'prop',
    posters: [
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthMay10edit2.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthMay10edit2.png' },
      { title: '[re]birth x trench', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthMay24thedit.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthMay24thedit.png' },
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthJune7thedit2.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthJune7thedit2.png' },
      { title: '[re]birth x project vertigo', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthJune21stEDIT.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthJune21stEDIT.png' },
      { title: '[re]birth x offline', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/BirthMeOfflineBabyGrillPostjune28.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/BirthMeOfflineBabyGrillPostjune28.png' },
      { title: '[re]birth x connection', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthConnectionFun.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthConnectionFun.png' },
      { title: 'minti birthday (2025-07-19)', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/REBIRTHJULY19.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/REBIRTHJULY19.png' },
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthAug2edit.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthAug2edit.png' },
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthAugust16thedit.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthAugust16thedit.png' },
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthAug30edit.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthAug30edit.png' },
      { title: '[re]birth hip hop night (2026-09-13)', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1417255975735529552/RebirthSep13th.png?ex=6a69c33b&is=6a6871bb&hm=885357739cada184d926ff4ccb4d82d21eb84700d98119cfa0f15947471a0ed9&', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthSep13th.png' },
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthSep13th.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthSep27thEdit.png' },
      { title: 'dnb night (2026-10-11)', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthOct11edit.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthOct11edit.png' },
      { title: '[re]birth', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/RebirthOct25th.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/RebirthOct25th.png' },
      { title: '[re]birth hip hop night (2026-01-31)', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/image.png' },
      { title: '[re]birth minti birthday (y2k night)', url:'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/y2k%20night.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/prop/compressed/y2k%20night.png' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'catmelt',
    posters: [
      { title: '[re]birth grand opening', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/catmelt/rebirth_comm_-_raw1.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/catmelt/compressed/rebirth_comm_-_raw1.png' },
      { title: '[re]birth returns', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/catmelt/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/catmelt/compressed/image.png' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'minti',
    posters: [
      { title: 'geech birthday (2025-04-26)', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/rebirth_4-20.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/compressed/rebirth_4-20.png' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/compressed/image.png' },
      { title: 'dnb night (2026-02-28)', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/image1.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/compressed/image1.png' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/RebirthMay9_final_test.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/compressed/RebirthMay9_final_test.png' },
      { title: 'pride night', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/RebirthJun6.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/compressed/RebirthJun6.png' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/RebirthJun20GN.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/minti/compressed/RebirthJun20GN.png' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'foxe',
    posters: [
      { title: 'geech birthday (2026-04-25)', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/foxe/REBIRTH_POSTER_ASOVERSEER_FINAL.mp4' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/foxe/REBIRTH_POSTER2_ASOVERSEER_FINAL.mp4' },
      { title: '[re]birth x pressure', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/foxe/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/foxe/compressed/image.png' },
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'leucis',
    posters: [
      { title: '[re]birth grand opening', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/leu/Rebirth%202K.mp4' },
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'frostyx',
    posters: [
      { title: '[re]birth test run', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/frostyx/draft_3_alt_4.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/frostyx/compressed/draft_3_alt_4.png' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/frostyx/MARCH1.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/frostyx/compressed/MARCH1.png' },
      { title: 'disco night (2026-04-11)', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/frostyx/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/frostyx/compressed/image.png' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'jestertwo',
    posters: [
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/jestertwo/rebirth_nov_22_2025.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/jestertwo/rebirth_nov_22_2025.png' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/jestertwo/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/jestertwo/image.png' },
      { title: '[re]birth x heckatronics', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/jestertwo/heck.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/jestertwo/heck.png' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'geech',
    posters: [
      { title: 'minti birthday (2025-07-19)', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/Final%20Minti%20Birthday%20Trailer%2060%20Fps.mp4' },
      { title: 'kojo birthday', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/image.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/compressed/image.png' },
      { title: '[re]birth', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/FINAL_REBIRTH_MARCH_28.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/compressed/FINAL_REBIRTH_MARCH_28.png' },
      { title: 'kiwiii birthday', url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/kiwiii_bday_poster_FINAL.png', compressed_url: 'https://file.garden/amoCY1tpJgzbXnOF/%5Bre%5Dbirth%20site/geech/compressed/kiwiii_bday_poster_FINAL.png' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
]);

onMounted(() => {
  if(!localStorage.getItem('submerged') && localStorage.getItem('submerged') !== 'true') {
    router.push('/');
  }

  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<style scoped>
.page {
  overflow-y: auto;
  background: #000;
}

.main-wrapper {
  width:100%;
  height:100vh;
  padding-top: 82px;
}

.navbar {
  position:fixed;
  width:100%;
  height:82px;
  z-index: 3;
}

.card {
  font-family: 'Fraktion', sans-serif;
  font-size: 30px;
}

.carousel-wrapper {
  position: relative;
  height: 300px;
}

.carousel {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.carousel > div {
  height: 100%;
  flex-shrink: 0;
}

.carousel img,
.carousel video {
  display: block;
  height: 100%;
  width: auto;
  object-fit: contain;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.left-button {
  left: 10px;
}

.right-button {
  right: 10px;
}

.dialog-card {
  background: rgba(0, 0, 0, 0.8);
  max-width:600px;
  padding: 16px;
  text-align: center;
  font-family: 'Fraktion', sans-serif;
  font-size: 25px;
}

.poster-title {
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>