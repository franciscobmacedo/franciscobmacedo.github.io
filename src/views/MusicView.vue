<script setup>
import AudioPlayer from "@/components/AudioPlayer.vue";
import { reactive, computed, ref } from "vue";

import MusicAlbum from "@/components/MusicAlbum.vue";

const WIGGLE_FACTOR = 10;

const songs = reactive([
  {
    x: "0",
    y: "0",
    id: 0,
    name: "Razões para Acordar Cedo e Ir ao Shopping",
    file: "razoes/RAZÕES PARA ACORDAR CEDO E IR AO SHOPPING.mp3",
    album: "razoes",
    pause: false,
  },
  {
    x: "0",
    y: "1/4",
    id: 1,
    name: "A Vida Continua",
    file: "razoes/A VIDA CONTINUA.mp3",
    album: "razoes",
    pause: false,
  },
  {
    x: "2/4",
    y: "1/4",
    id: 2,
    name: "O Queque tu Queres",
    file: "razoes/O QUE É QUE TU QUERES.mp3",
    album: "razoes",
    pause: false,
  },
  {
    x: "2/3",
    y: "2/4",
    id: 3,
    name: "Isto é Só P'ra Betos",
    file: "razoes/ISTO É SÓ PARA BETOS.mp3",
    album: "razoes",
    pause: false,
  },
  {
    x: "1/4",
    y: "2/4",
    id: 4,
    name: "Meias no Colombo",
    file: "razoes/MEIAS NO COLOMBO.mp3",
    album: "razoes",
    pause: false,
  },
  {
    x: "0",
    y: "0",
    id: 5,
    name: "Primeira",
    file: "calmante/Primeira.mp3",
    album: "calmante",
    pause: false,
  },
  {
    x: "0",
    y: "1/4",
    id: 6,
    name: "Segunda",
    file: "calmante/Segunda.mp3",
    album: "calmante",
    pause: false,
  },
  {
    x: "2/4",
    y: "1/4",
    id: 7,
    name: "Terceira",
    file: "calmante/Terceira.mp3",
    album: "calmante",
    pause: false,
  },
  {
    x: "2/3",
    y: "2/4",
    id: 8,
    name: "Quarta",
    file: "calmante/Quarta.mp3",
    album: "calmante",
    pause: false,
  },
  {
    x: "1/4",
    y: "2/4",
    id: 9,
    name: "Quinta",
    file: "calmante/Quinta.mp3",
    album: "calmante",
    pause: false,
  },
]);
// lg:absolute lg:left-[450px] lg:top-[280px] xl:left-[550px] xl:top-[210px] 2xl:left-[700px] 2xl:top-[200px] 2xxl:left-[10px] 3xl:left-[150px]
const songPlayingID = ref(0);

const songPlaying = computed(() => {
  const id = songPlayingID.value;
  if (id !== null) {
    return songs.find((song) => song.id === id);
  }
  return null;
});
const chooseSong = (id) => {
  console.log("chooseSong", id);
  songPlayingID.value = id;
};

const razoesAlbum = computed(() => {
  return {
    name: "RAZÕES PARA ACORDAR CEDO E IR AO SHOPPING",
    image: "razoes_cover.jpg",
    socialLinks: [
      {
        src: "https://open.spotify.com/album/3tXK6NHg84sg0ilRAw7TSv?si=1rEqHe-wQH-IyyVvXmDBSQ",
        description: "spotify",
        image: "spotify-logo.png",
      },
      {
        src: "https://music.apple.com/us/album/raz%C3%B5es-para-acordar-cedo-e-ir-ao-shopping-ep/1559101276",
        description: "apple music",
        image: "apple-logo.png",
      },
      {
        src: "https://videntemacedo.bandcamp.com/album/raz-es-para-acordar-cedo-e-ir-ao-shopping",
        description: "bandcamp",
        image: "bandcamp-logo.png",
      },
    ],
    songs: songs.filter((song) => song.album === "razoes"),
  };
});

const calmanteAlbum = computed(() => {
  return {
    name: "CALAMANTE ACÚSTICO",
    image: "calmante_cover.jpg",

    socialLinks: [
      {
        src: "https://open.spotify.com/album/36KU20tq8Sz6CdV1XkbyTB?si=pg_PIDxxSA6UoQhxjhHhZQ",
        description: "spotify",
        image: "spotify-logo.png",
      },
      {
        src: "https://music.apple.com/us/album/calmante-ac%C3%BAstico-ep/1558849770",
        description: "apple music",
        image: "apple-logo.png",
      },
      {
        src: "https://videntemacedo.bandcamp.com/album/calmante-ac-stico",
        description: "bandcamp",
        image: "bandcamp-logo.png",
      },
    ],
    songs: songs.filter((song) => song.album === "calmante"),
  };
});
</script>
<template>
  <MusicAlbum
    :name="razoesAlbum.name"
    :socialLinks="razoesAlbum.socialLinks"
    :songs="razoesAlbum.songs"
    :image="razoesAlbum.image"
    @chooseSong="chooseSong"
    :songPlayingID="songPlayingID"
  >
    <template #descriptionPT>
      <span class="text-primary-500"
        >Razões Para Acordar Cedo e Ir ao Shopping</span
      >
      é um EP composto por 5 músicas, editado pelo alter-ego Vidente Macedo.
      <span class="text-primary-500">MÚSICAS E LETRAS</span> por Vidente Macedo,
      <span class="text-primary-500">GRAVAÇÃO</span> nos estúdios Primas de Leça
      (Vasco Abreu e Vidente Macedo),
      <span class="text-primary-500">MISTURA e MASTERIZAÇÃO</span> nos estúdios
      Primas de Leça e
      <span class="text-primary-500">TODOS OS INSTRUMENTOS</span>
      (Piano, Guitarra, Gaita de Beiços, Melódica, bateria, baixo, teclado do
      portátil) tocados por Vidente Macedo.
    </template>
    <template #descriptionEN>
      <span class="text-primary-500"
        >Razões Para Acordar Cedo e Ir ao Shopping</span
      >
      is an EP composed by 5 songs, edited by alter-ego Vidente Macedo.
      <span class="text-primary-500">SONGS AND LYRICS</span> by Vidente Macedo,
      <span class="text-primary-500">RECORDING</span> in Primas de Leça studios
      (Vasco Abreu and Vidente Macedo),
      <span class="text-primary-500">MIXING and MASTERING</span> in estúdios
      Primas de Leça and
      <span class="text-primary-500">AlL the INSTRUMENTS</span>
      (Piano, Guitar, Harmonica, Melodica, drums, bass, laptop keyboard) played
      by Vidente Macedo.
    </template>
  </MusicAlbum>
  <div class="mt-44"></div>
  <MusicAlbum
    :name="calmanteAlbum.name"
    :socialLinks="calmanteAlbum.socialLinks"
    :songs="calmanteAlbum.songs"
    :image="calmanteAlbum.image"
    @chooseSong="chooseSong"
    :songPlayingID="songPlayingID"
  >
    <template #descriptionPT>
      <span class="text-primary-500">Calmante Acústico</span> é um disco de
      cinco músicas calmantes de guitarra acústica editado pelo alter-ego
      Macedo. com <span class="text-primary-500">MÚSICAS</span> por Macedo,
      <span class="text-primary-500">GRAVAÇÃO, MISTURA e MASTERIZAÇÃO</span> nos
      estúdios Primas de Leça,
      <span class="text-primary-500">PASSARINHOS</span> da Internet e
      <span class="text-primary-500">TODOS OS INSTRUMENTOS</span> (Guitarra de
      cordas de nylon) tocados por Macedo.
    </template>
    <template #descriptionEN>
      <span class="text-primary-500">Calmante Acústico</span>
      is a five song record composed by calm acoustic guitar songs edited by
      alter-ego Macedo. with <span class="text-primary-500">SONGS</span> by
      Macedo,
      <span class="text-primary-500">RECORDING, MIXING and MASTERING</span> in
      Primas de Leça studions, <span class="text-primary-500">BIRDS</span> from
      the Internet and
      <span class="text-primary-500">ALL INSTRUMENTS</span> (Guitar of nylon
      strings) played by Macedo.
    </template>
  </MusicAlbum>
  <div class="sticky bottom-0 pb-2 left-32 overflow-y-auto w-full z-0">
    <div class="">
      <span
        class="absolute bottom-0 w-full h-24 border-y-2 border-slate-200 md:h-40 bg-[#efefef] shadow-lg rounded-sm"
      ></span>
      <AudioPlayer
        v-if="songPlaying !== null"
        :speed="3"
        :wiggle="WIGGLE_FACTOR"
        :name="songPlaying.name"
        :src="`src/assets/audio/${songPlaying.file}`"
        :pause="songPlaying.pause"
        :interiorRadius="70"
      />
    </div>
  </div>
</template>
