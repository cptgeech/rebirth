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
              <img v-else :src="poster.url" @click="dialog = true;selectedPoster = poster;" @load="checkScroll(carousel)">
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
      <p class="pt-5 pb-2">{{ selectedPoster.title }}</p>
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
  console.log(carousel.showLeft);
};

const carousels = ref([
  { 
    artist: 'prop',
    posters: [
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1379192076956205126/RebirthMay10edit2.png?ex=6a69b6f7&is=6a686577&hm=9df3b65ce3822f4f0ca6243958f192678a56bb36f3b148795aa25b6a7d009de6&' },
      { title: '[re]birth x trench', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1379192131834609714/RebirthMay24thedit.png?ex=6a69b704&is=6a686584&hm=19d2c3ef9c53ed5d1d4fafb70215dccfeee829fa49452e3f4b48d8c0c7826cd7&' },
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1379192186704363671/RebirthJune7thedit2.png?ex=6a69b711&is=6a686591&hm=5a09e846368127a3184ae0ddc12d504abaa207cd9efa728fd562d840345f21df&' },
      { title: '[re]birth x project vertigo', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1386103319109570611/RebirthJune21stEDIT.png?ex=6a69cf0f&is=6a687d8f&hm=c36cf847dd1b8dcfe3d90641773c696be6ec29a66c39e96f8ac6abdf61e46198&' },
      { title: '[re]birth x offline', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1389018841887281375/BirthMeOfflineBabyGrillPostjune28.png?ex=6a69de5a&is=6a688cda&hm=008692a56bb6ee5c1222e09196ad51ec44442dcebda1d68380454bd21cc7997d&' },
      { title: '[re]birth x connection', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1399968348414148698/RebirthConnectionFun.png?ex=6a6a26e0&is=6a68d560&hm=8e7d35c590c5dcf03073a8cfbcd90e848951765bb8d6a9d30d3f7428164ca068&' },
      { title: 'minti birthday (2025-07-19)', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1399968820822675596/REBIRTHJULY19.png?ex=6a6a2751&is=6a68d5d1&hm=7611394916682b794ab68c25029ddc2ae161938e6c6a9b6794438c9691ed940e&' },
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1399968861876391956/RebirthAug2edit.png?ex=6a6a275a&is=6a68d5da&hm=581c72faf2572db44a650150e05ee533428699d19b9a9e51bd4e249befa29b7a&' },
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1412859701028196616/RebirthAugust16thedit.png?ex=6a6996e2&is=6a684562&hm=4cf73ff79cbd86e2c02d9eb17d9e2b93ba104d4832bfd1c4724c559eff1f8fd6&' },
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1412859744259145749/RebirthAug30edit.png?ex=6a6996ec&is=6a68456c&hm=294fc2c955d248945364eb9771ed31670824ccbd4a074a61763fd36b179f9d50&' },
      { title: '[re]birth hip hop night (2026-09-13)', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1417255975735529552/RebirthSep13th.png?ex=6a69c33b&is=6a6871bb&hm=885357739cada184d926ff4ccb4d82d21eb84700d98119cfa0f15947471a0ed9&' },
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1427829016068620298/RebirthSep27thEdit.png?ex=6a69fea5&is=6a68ad25&hm=dd32d960d05c256016e9eb628a874dff634cb2695e544aa133a6d720ba6e194d&' },
      { title: 'dnb night (2026-10-11)', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1427829041116741642/RebirthOct11edit.png?ex=6a69feab&is=6a68ad2b&hm=d7771084c4105ee20b5ae3d6bffbd0ddee9fb6f5939c0960edcf40eb2d469fc8&' },
      { title: '[re]birth', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1443095447060090910/RebirthOct25th.png?ex=6a6a299d&is=6a68d81d&hm=a53b317653d83d6f8793333131acaed166ede8ac8902932b5fcf8ba1e1387a2a&' },
      { title: '[re]birth hip hop night (2026-01-31)', url:'https://cdn.discordapp.com/attachments/1379191138677948416/1483591942079119560/image.png?ex=6a69d4ea&is=6a68836a&hm=0619ca7624f40f23a9e3ee2da1d50cbe476091dc88906988c77520a5ea0923d2&' },
      { title: '[re]birth minti birthday (y2k night)', url:'https://cdn.discordapp.com/attachments/1327060296610742303/1531355625924198531/image.png?ex=6a699250&is=6a6840d0&hm=2cc67ad98528c7b289ca9b8a45a766069ce28800e3c518cba13359d1c69c3fa6&' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'catmelt',
    posters: [
      { title: '[re]birth grand opening', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1379191520539971704/rebirth_comm_-_raw1.png?ex=6a69b672&is=6a6864f2&hm=4431df886555dcf13908577a926aefbfcaa2bdd765d4852e260b1d82797f9ed0&' },
      { title: '[re]birth returns', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1483591674956611624/image.png?ex=6a69d4ab&is=6a68832b&hm=3cfd4b767a1ef20ff40e8e23a29a2b535421406bd2f96bdac217ae0d4e41e26e&' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'minti',
    posters: [
      { title: 'geech birthday (2025-04-26)', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1379191990683697283/rebirth_4-20.png?ex=6a69b6e2&is=6a686562&hm=cd15d3875d387c0b3276f8ac501a0de9fa5cbb26b6ce77dcd03fe06cbac33b5d&' },
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1483591984915415232/image.png?ex=6a69d4f5&is=6a688375&hm=540cd77f8baec561b1cda306d97b2e331acfa5b732f66419e171aa7ee53e1985&' },
      { title: 'dnb night (2026-02-28)', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1483592208551641138/image.png?ex=6a69d52a&is=6a6883aa&hm=875288d156795593f63d0320c94baa76a6b3c2849d4f2914d7b8d692384de193&' },
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1521678600829407424/RebirthMay9_final_test.png?ex=6a69f661&is=6a68a4e1&hm=4a7e4a53efa06405bff7511faf6fb9983fc5051165437c341fb0532af8a8abae&' },
      { title: 'pride night', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1521678998831108136/RebirthJun6.png?ex=6a69f6c0&is=6a68a540&hm=3ac787af61010c442eab5871c01d51ef895ab8bf9bec66009da1b83906d58793&' },
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1521680330296397905/RebirthJun20GN.png?ex=6a69f7fe&is=6a68a67e&hm=e84a55cab44cb7e92cc4c8129c078617709666419bf5c390acce0dbf34e8905d&' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'foxe',
    posters: [
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1521678881575276605/REBIRTH_POSTER2_ASOVERSEER_FINAL.mp4?ex=6a69f6a4&is=6a68a524&hm=bce1a8ef24d63b64286cc2037752529a2b9c4145639a793fed262b4769ca382b&' },
      { title: '[re]birth x pressure', url: 'https://cdn.discordapp.com/attachments/1327060296610742303/1522042368797446325/image.png?ex=6a69f7aa&is=6a68a62a&hm=6e660e59233bdebea3ce3f10735543708fb181184a4063d284f87754894a2ea1&' },
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'frostyx',
    posters: [
      { title: '[re]birth test run', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1379191479247048814/draft_3_alt_4.png?ex=6a69b668&is=6a6864e8&hm=ca4587fd5e2ce3b0a079b8515d5be842eeb3be489c8743025435f44d1a1ca861&' },
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1379191717424533635/MARCH1.png?ex=6a69b6a1&is=6a686521&hm=015c6a88b79586f549427bb8c7c9d3455740877af9078b3a398b3d9070770b6e&' },
      { title: 'disco night (2026-04-11)', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1499876821309591573/image.png?ex=6a69bfe4&is=6a686e64&hm=397657397ba58f4d8a160c8655272d4e11d6b73ddb7cdeff0f42171fd75a438a&' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'jestertwo',
    posters: [
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1443095890398285998/rebirth_nov_22_2025.png?ex=6a6a2a07&is=6a68d887&hm=63a48564c51d0efac592f0ac106ea413c6532fb9f1a63591d71d764cb54dde07&' },
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1483591902921232577/image.png?ex=6a69d4e1&is=6a688361&hm=6cc1f5dd26c2186e13c6e296e074a33d8919a0d135800aabfdf7687be0e21e26&' },
      { title: '[re]birth x heckatronics', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1483592249454497823/image.png?ex=6a69d534&is=6a6883b4&hm=964828d8939e3e3bc9e50dac64706a63856fce7e43381a4dd9af9da89f363738&' }
    ],
    element: null,
    showLeft: false,
    showRight: false,
  },
  {
    artist: 'geech',
    posters: [
      { title: 'minti birthday (2025-07-19)', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1399968743894945833/FINAL_MINTI_BIRTHDAY_TRAILER_60_FPS.mp4?ex=6a6a273e&is=6a68d5be&hm=a9f71281d4cefc1ac0002ad52a80440f8aecff9230382787221e5ea0ab60c1d7&' },
      { title: 'kojo birthday', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1483592040020447414/image.png?ex=6a69d502&is=6a688382&hm=92159ed18c045f757421974b7996fbeeab3248ee3ccabae36573218878e6c98c&' },
      { title: '[re]birth', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1499876770139340850/FINAL_REBIRTH_MARCH_28.png?ex=6a69bfd8&is=6a686e58&hm=c48782ef77ad279f6630598eb2426098becf1ec80d68aa7451088185488f476a&' },
      { title: 'kiwiii birthday', url: 'https://cdn.discordapp.com/attachments/1379191138677948416/1499877052722057357/kiwiii_bday_poster_FINAL.png?ex=6a69c01b&is=6a686e9b&hm=06fa887964ef073c2924b35f21209f87b9b70622b51babb8469b5a0cab6dd9fa&' }
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
  font-size: 30px;
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